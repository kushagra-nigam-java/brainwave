"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/lib/language-context";
import { HelpCircle, Clock, ArrowRight } from "lucide-react";
import type { Lesson } from "@/lib/types";

interface QuizSelectorProps {
  lessons: Lesson[];
  onSelect: (lessonId: string) => void;
}

const subjectColors: Record<string, string> = {
  Mathematics: "bg-chart-1/10 text-chart-1",
  Science: "bg-chart-2/10 text-chart-2",
  English: "bg-chart-3/10 text-chart-3",
  "Social Studies": "bg-chart-4/10 text-chart-4",
};

export function QuizSelector({ lessons, onSelect }: QuizSelectorProps) {
  const { t } = useLanguage();

  return (
    <main className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
          <HelpCircle className="h-7 w-7 text-primary" />
        </div>
        <h1 className="mb-2 text-3xl font-bold text-foreground md:text-4xl">
          {t("selectQuiz")}
        </h1>
        <p className="text-muted-foreground">
          {t("quizDescription")}
        </p>
      </div>

      {/* Lessons Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {lessons.map((lesson) => (
          <Card
            key={lesson.id}
            className="group cursor-pointer border-border bg-card transition-all hover:border-primary/30 hover:shadow-lg"
            onClick={() => onSelect(lesson.id)}
          >
            <CardContent className="p-6">
              <div className="mb-3 flex items-center justify-between">
                <Badge
                  variant="secondary"
                  className={subjectColors[lesson.subject] || ""}
                >
                  {lesson.subject}
                </Badge>
                <Badge variant="outline" className="text-muted-foreground">
                  3 {t("questions")}
                </Badge>
              </div>

              <h3 className="mb-2 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                {lesson.title}
              </h3>

              <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>{lesson.grade}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-primary">{t("startQuiz")}</span>
                <ArrowRight className="h-4 w-4 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
