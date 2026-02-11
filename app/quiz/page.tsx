"use client";

import { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Navigation } from "@/components/navigation";
import { QuizSelector } from "@/components/quiz-selector";
import { QuizQuestion } from "@/components/quiz-question";
import { QuizResults } from "@/components/quiz-results";
import { useLocalStorage } from "@/hooks/use-local-storage";
import { useLanguage } from "@/lib/language-context";
import type { Question } from "@/lib/types";

function QuizContent() {
  const searchParams = useSearchParams();
  const lessonIdFromUrl = searchParams.get("lesson");
  const { t } = useLanguage();

  const { data, questions, saveQuizResult, isLoaded } = useLocalStorage();
  const [selectedLessonId, setSelectedLessonId] = useState<string | null>(
    lessonIdFromUrl
  );
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [showResults, setShowResults] = useState(false);

  const selectedLesson = useMemo(
    () => data.lessons.find((l) => l.id === selectedLessonId),
    [data.lessons, selectedLessonId]
  );

  const lessonQuestions = useMemo(
    () => questions.filter((q) => q.lessonId === selectedLessonId),
    [questions, selectedLessonId]
  );

  const currentQuestion: Question | undefined =
    lessonQuestions[currentQuestionIndex];

  const handleSelectLesson = (lessonId: string) => {
    setSelectedLessonId(lessonId);
    setCurrentQuestionIndex(0);
    setAnswers({});
    setShowResults(false);
  };

  const handleAnswer = (questionId: string, answerIndex: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answerIndex }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < lessonQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      // Calculate and save results
      const score = lessonQuestions.reduce((acc, q) => {
        return acc + (answers[q.id] === q.correctAnswer ? 1 : 0);
      }, 0);

      if (selectedLesson) {
        saveQuizResult({
          lessonId: selectedLesson.id,
          lessonTitle: selectedLesson.title,
          score,
          totalQuestions: lessonQuestions.length,
          percentage: Math.round((score / lessonQuestions.length) * 100),
        });
      }

      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const handleRetry = () => {
    setCurrentQuestionIndex(0);
    setAnswers({});
    setShowResults(false);
  };

  const handleNewQuiz = () => {
    setSelectedLessonId(null);
    setCurrentQuestionIndex(0);
    setAnswers({});
    setShowResults(false);
  };

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-12">
          <div className="flex items-center justify-center">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
          </div>
        </div>
      </div>
    );
  }

  // Quiz Selector
  if (!selectedLessonId) {
    return (
      <div className="min-h-screen bg-background pb-20 md:pb-0">
        <Navigation />
        <QuizSelector lessons={data.lessons} onSelect={handleSelectLesson} />
      </div>
    );
  }

  // Quiz Results
  if (showResults && selectedLesson) {
    const score = lessonQuestions.reduce((acc, q) => {
      return acc + (answers[q.id] === q.correctAnswer ? 1 : 0);
    }, 0);

    return (
      <div className="min-h-screen bg-background pb-20 md:pb-0">
        <Navigation />
        <QuizResults
          lessonTitle={selectedLesson.title}
          score={score}
          totalQuestions={lessonQuestions.length}
          questions={lessonQuestions}
          answers={answers}
          onRetry={handleRetry}
          onNewQuiz={handleNewQuiz}
        />
      </div>
    );
  }

  // Quiz Questions
  if (!currentQuestion || !selectedLesson) {
    return (
      <div className="min-h-screen bg-background pb-20 md:pb-0">
        <Navigation />
        <div className="container mx-auto px-4 py-12 text-center">
          <p className="text-muted-foreground">
            {t("noQuestionsAvailable")}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Navigation />
      <QuizQuestion
        lessonTitle={selectedLesson.title}
        question={currentQuestion}
        questionNumber={currentQuestionIndex + 1}
        totalQuestions={lessonQuestions.length}
        selectedAnswer={answers[currentQuestion.id]}
        onAnswer={(answerIndex) =>
          handleAnswer(currentQuestion.id, answerIndex)
        }
        onNext={handleNext}
        onPrevious={handlePrevious}
        canGoBack={currentQuestionIndex > 0}
        isLastQuestion={currentQuestionIndex === lessonQuestions.length - 1}
      />
    </div>
  );
}

export default function QuizPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-background">
          <Navigation />
          <div className="container mx-auto px-4 py-12">
            <div className="flex items-center justify-center">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
            </div>
          </div>
        </div>
      }
    >
      <QuizContent />
    </Suspense>
  );
}
