"use client";

import React from "react"

import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Clock, HelpCircle } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { lessonContentTranslations } from "@/lib/content-translations";
import type { Lesson } from "@/lib/types";

interface LessonViewerProps {
  lesson: Lesson;
  onBack: () => void;
}

export function LessonViewer({ lesson, onBack }: LessonViewerProps) {
  const { language } = useLanguage();

  // Get translated content
  const getContent = () => {
    const translations = lessonContentTranslations[lesson.id];
    if (translations) {
      return language === 'hi' ? translations.hi : translations.en;
    }
    return lesson.content;
  };

  // Parse markdown-like content for better display
  const formatContent = (content: string) => {
    const lines = content.split("\n");
    const elements: React.ReactNode[] = [];

    lines.forEach((line, index) => {
      if (line.startsWith("**") && line.endsWith("**")) {
        // Bold heading
        elements.push(
          <h3 key={index} className="mt-6 mb-3 text-lg font-bold text-foreground">
            {line.replace(/\*\*/g, "")}
          </h3>
        );
      } else if (line.match(/^\d+\.\s\*\*/)) {
        // Numbered list with bold start
        const text = line.replace(/\*\*/g, "");
        elements.push(
          <p key={index} className="mb-2 text-foreground leading-relaxed pl-4">
            {text}
          </p>
        );
      } else if (line.startsWith("- ")) {
        // Bullet point
        elements.push(
          <p key={index} className="mb-1 text-foreground leading-relaxed pl-6">
            • {line.substring(2)}
          </p>
        );
      } else if (line.trim() === "") {
        elements.push(<div key={index} className="h-2" />);
      } else {
        // Regular paragraph
        const formattedLine = line.replace(/\*([^*]+)\*/g, '<em>$1</em>');
        elements.push(
          <p
            key={index}
            className="mb-2 text-foreground leading-relaxed"
            dangerouslySetInnerHTML={{ __html: formattedLine }}
          />
        );
      }
    });

    return elements;
  };

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Navigation />

      <main className="container mx-auto max-w-3xl px-4 py-8">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={onBack}
          className="mb-6 -ml-2 text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Lessons
        </Button>

        {/* Lesson Header */}
        <div className="mb-8">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">{lesson.subject}</Badge>
            <Badge variant="outline">{lesson.grade}</Badge>
            <span className="flex items-center gap-1 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              {lesson.duration}
            </span>
          </div>
          <h1 className="text-3xl font-bold text-foreground md:text-4xl">
            {lesson.title}
          </h1>
          
          {/* NCERT Information */}
          <div className="mt-4 space-y-2 text-sm text-muted-foreground">
            <div>
              <span className="font-semibold text-foreground">NCERT Topic:</span> {lesson.ncertTopic}
            </div>
            <div>
              <span className="font-semibold text-foreground">{lesson.chapter}</span>
            </div>
            {lesson.syllabus && (
              <div>
                <span className="font-semibold text-foreground">Syllabus Coverage:</span> {lesson.syllabus}
              </div>
            )}
          </div>
        </div>

        {/* Lesson Content */}
        <Card className="mb-8 border-border bg-card">
          <CardContent className="p-6 md:p-8">
            <div className="prose prose-invert max-w-none">
              {formatContent(getContent())}
            </div>
          </CardContent>
        </Card>

        {/* Quiz CTA */}
        <Card className="border-primary/30 bg-primary/5">
          <CardContent className="flex flex-col items-center gap-4 p-6 text-center sm:flex-row sm:text-left">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
              <HelpCircle className="h-6 w-6 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-foreground">
                Test Your Understanding
              </h3>
              <p className="text-sm text-muted-foreground">
                Take a quiz on this lesson to check what you've learned.
              </p>
            </div>
            <Button asChild>
              <Link href={`/quiz?lesson=${lesson.id}`}>Take Quiz</Link>
            </Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
