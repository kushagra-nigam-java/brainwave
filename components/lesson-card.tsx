"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, BookOpen, ArrowRight } from "lucide-react";
import type { Lesson } from "@/lib/types";

interface LessonCardProps {
  lesson: Lesson;
  onClick: () => void;
}

const subjectColors: Record<string, string> = {
  Mathematics: "bg-chart-1/10 text-chart-1",
  Science: "bg-chart-2/10 text-chart-2",
  English: "bg-chart-3/10 text-chart-3",
  "Social Studies": "bg-chart-4/10 text-chart-4",
};

export function LessonCard({ lesson, onClick }: LessonCardProps) {
  return (
    <Card
      className="group cursor-pointer border-border bg-card transition-all hover:border-primary/30 hover:shadow-lg"
      onClick={onClick}
    >
      <CardContent className="p-6">
        <div className="mb-4 flex items-start justify-between">
          <Badge
            variant="secondary"
            className={subjectColors[lesson.subject] || ""}
          >
            {lesson.subject}
          </Badge>
          <Badge variant="outline" className="text-muted-foreground">
            {lesson.grade}
          </Badge>
        </div>

        <h3 className="mb-2 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
          {lesson.title}
        </h3>

        <div className="mb-3 space-y-1 text-sm text-muted-foreground">
          <div>
            <span className="font-medium">Topic:</span> {lesson.ncertTopic}
          </div>
          <div>
            <span className="font-medium">{lesson.chapter}</span>
          </div>
        </div>

        <div className="mb-4 flex items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {lesson.duration}
          </span>
          <span className="flex items-center gap-1">
            <BookOpen className="h-4 w-4" />
            Lesson
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-primary">Read lesson</span>
          <ArrowRight className="h-4 w-4 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
        </div>
      </CardContent>
    </Card>
  );
}
