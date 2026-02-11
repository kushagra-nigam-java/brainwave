"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useLanguage } from "@/lib/language-context";
import { quizAnswerTranslations } from "@/lib/content-translations";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import type { Question } from "@/lib/types";

interface QuizQuestionProps {
  lessonTitle: string;
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  selectedAnswer?: number;
  onAnswer: (answerIndex: number) => void;
  onNext: () => void;
  onPrevious: () => void;
  canGoBack: boolean;
  isLastQuestion: boolean;
}

export function QuizQuestion({
  lessonTitle,
  question,
  questionNumber,
  totalQuestions,
  selectedAnswer,
  onAnswer,
  onNext,
  onPrevious,
  canGoBack,
  isLastQuestion,
}: QuizQuestionProps) {
  const { language } = useLanguage();
  const progress = (questionNumber / totalQuestions) * 100;

  // Get translated options
  const getOptions = () => {
    const translations = quizAnswerTranslations[question.id];
    if (translations) {
      return language === 'hi' ? translations.hi : translations.en;
    }
    return question.options;
  };

  return (
    <main className="container mx-auto max-w-2xl px-4 py-8">
      {/* Progress Header */}
      <div className="mb-8">
        <div className="mb-2 flex items-center justify-between text-sm">
          <span className="text-muted-foreground">{lessonTitle}</span>
          <span className="font-medium text-foreground">
            {questionNumber} of {totalQuestions}
          </span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      {/* Question Card */}
      <Card className="mb-8 border-border bg-card">
        <CardContent className="p-6 md:p-8">
          <h2 className="mb-6 text-xl font-semibold text-foreground md:text-2xl leading-relaxed">
            {question.question}
          </h2>

          <div className="space-y-3">
            {getOptions().map((option, index) => (
              <button
                key={index}
                onClick={() => onAnswer(index)}
                className={cn(
                  "w-full rounded-lg border p-4 text-left transition-all",
                  selectedAnswer === index
                    ? "border-primary bg-primary/10 text-foreground"
                    : "border-border bg-secondary/30 text-foreground hover:border-primary/50 hover:bg-secondary/50"
                )}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={cn(
                      "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 text-sm font-medium",
                      selectedAnswer === index
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-muted-foreground/30 text-muted-foreground"
                    )}
                  >
                    {selectedAnswer === index ? (
                      <CheckCircle className="h-4 w-4" />
                    ) : (
                      String.fromCharCode(65 + index)
                    )}
                  </div>
                  <span className="leading-relaxed">{option}</span>
                </div>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between gap-4">
        <Button
          variant="outline"
          onClick={onPrevious}
          disabled={!canGoBack}
          className="min-w-[120px] bg-transparent"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Previous
        </Button>

        <Button
          onClick={onNext}
          disabled={selectedAnswer === undefined}
          className="min-w-[120px]"
        >
          {isLastQuestion ? "Finish" : "Next"}
          {!isLastQuestion && <ArrowRight className="ml-2 h-4 w-4" />}
        </Button>
      </div>
    </main>
  );
}
