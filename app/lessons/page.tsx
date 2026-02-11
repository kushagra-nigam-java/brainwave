"use client";

import { useState } from "react";
import { Navigation } from "@/components/navigation";
import { LessonCard } from "@/components/lesson-card";
import { LessonViewer } from "@/components/lesson-viewer";
import { useLocalStorage } from "@/hooks/use-local-storage";
import { useLanguage } from "@/lib/language-context";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Lesson } from "@/lib/types";

export default function LessonsPage() {
  const { data, isLoaded } = useLocalStorage();
  const { t } = useLanguage();
  const [selectedSubject, setSelectedSubject] = useState("All");
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);

  const subjects = [
    t("all"),
    t("mathematics"),
    t("science"),
    "English",
    t("socialStudies"),
  ];

  const filteredLessons =
    selectedSubject === "All"
      ? data.lessons
      : data.lessons.filter((lesson) => lesson.subject === selectedSubject);

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

  if (selectedLesson) {
    return (
      <LessonViewer
        lesson={selectedLesson}
        onBack={() => setSelectedLesson(null)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="mb-2 text-3xl font-bold text-foreground md:text-4xl">
            Lessons
          </h1>
          <p className="text-muted-foreground">
            NCERT-aligned content for Classes 6-10. All lessons work offline!
          </p>
        </div>

        {/* Subject Filter */}
        <div className="mb-8 flex flex-wrap gap-2">
          {subjects.map((subject) => (
            <Button
              key={subject}
              variant={selectedSubject === subject ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedSubject(subject)}
              className="rounded-full"
            >
              {subject}
            </Button>
          ))}
        </div>

        {/* Lessons Count */}
        <div className="mb-6 flex items-center gap-2">
          <Badge variant="secondary" className="text-sm">
            {filteredLessons.length} lesson{filteredLessons.length !== 1 ? "s" : ""}
          </Badge>
          <span className="text-sm text-muted-foreground">available offline</span>
        </div>

        {/* Lessons Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredLessons.map((lesson) => (
            <LessonCard
              key={lesson.id}
              lesson={lesson}
              onClick={() => setSelectedLesson(lesson)}
            />
          ))}
        </div>

        {filteredLessons.length === 0 && (
          <div className="rounded-lg border border-border bg-card p-12 text-center">
            <p className="text-muted-foreground">
              No lessons found for this subject.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
