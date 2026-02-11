"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Trophy, RefreshCcw, ArrowRight, CheckCircle, XCircle } from "lucide-react";
import type { Question } from "@/lib/types";

interface QuizResultsProps {
  lessonTitle: string;
  score: number;
  totalQuestions: number;
  questions: Question[];
  answers: Record<string, number>;
  onRetry: () => void;
  onNewQuiz: () => void;
}

export function QuizResults({
  lessonTitle,
  score,
  totalQuestions,
  questions,
  answers,
  onRetry,
  onNewQuiz,
}: QuizResultsProps) {
  const percentage = Math.round((score / totalQuestions) * 100);

  const getMessage = () => {
    if (percentage === 100) return "Perfect Score! Outstanding work! 🎉";
    if (percentage >= 80) return "Excellent! You've mastered this topic! 🌟";
    if (percentage >= 60) return "Good job! Keep practicing! 👍";
    if (percentage >= 40) return "Nice effort! Review the lesson and try again. 📚";
    return "Keep learning! You'll improve with practice. 💪";
  };

  const getScoreColor = () => {
    if (percentage >= 80) return "text-success";
    if (percentage >= 60) return "text-accent";
    if (percentage >= 40) return "text-chart-4";
    return "text-destructive";
  };

  return (
    <main className="container mx-auto max-w-2xl px-4 py-8">
      {/* Results Header */}
      <Card className="mb-8 border-border bg-card text-center">
        <CardContent className="p-8">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
            <Trophy className="h-10 w-10 text-primary" />
          </div>

          <h1 className="mb-2 text-2xl font-bold text-foreground md:text-3xl">
            Quiz Complete!
          </h1>
          <p className="mb-6 text-muted-foreground">{lessonTitle}</p>

          <div className="mb-4">
            <span className={cn("text-6xl font-bold", getScoreColor())}>
              {percentage}%
            </span>
          </div>

          <p className="mb-2 text-lg text-foreground">
            You scored{" "}
            <span className="font-semibold text-primary">
              {score} out of {totalQuestions}
            </span>
          </p>
          <p className="text-muted-foreground">{getMessage()}</p>
        </CardContent>
      </Card>

      {/* Answer Review */}
      <div className="mb-8">
        <h2 className="mb-4 text-lg font-semibold text-foreground">
          Answer Review
        </h2>
        <div className="space-y-4">
          {questions.map((question, index) => {
            const userAnswer = answers[question.id];
            const isCorrect = userAnswer === question.correctAnswer;

            return (
              <Card
                key={question.id}
                className={cn(
                  "border-l-4",
                  isCorrect ? "border-l-success" : "border-l-destructive"
                )}
              >
                <CardContent className="p-4">
                  <div className="mb-2 flex items-start gap-3">
                    {isCorrect ? (
                      <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-success" />
                    ) : (
                      <XCircle className="mt-1 h-5 w-5 shrink-0 text-destructive" />
                    )}
                    <div className="flex-1">
                      <p className="mb-2 font-medium text-foreground">
                        {index + 1}. {question.question}
                      </p>

                      {!isCorrect && (
                        <p className="mb-1 text-sm">
                          <span className="text-destructive">Your answer:</span>{" "}
                          <span className="text-muted-foreground">
                            {question.options[userAnswer]}
                          </span>
                        </p>
                      )}

                      <p className="text-sm">
                        <span className="text-success">Correct answer:</span>{" "}
                        <span className="text-foreground">
                          {question.options[question.correctAnswer]}
                        </span>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col gap-3 sm:flex-row">
        <Button
          variant="outline"
          onClick={onRetry}
          className="flex-1 bg-transparent"
        >
          <RefreshCcw className="mr-2 h-4 w-4" />
          Retry Quiz
        </Button>
        <Button
          variant="outline"
          onClick={onNewQuiz}
          className="flex-1 bg-transparent"
        >
          Choose Another Quiz
        </Button>
        <Button asChild className="flex-1">
          <Link href="/progress">
            View Progress
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </main>
  );
}
