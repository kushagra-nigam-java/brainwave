"use client";

import { Navigation } from "@/components/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { useLanguage } from "@/lib/language-context";
import { BookOpen } from "lucide-react";

interface SyllabusItem {
  class: string;
  subject: string;
  chapter: string;
  topic: string;
  subtopics: string[];
}

const ncertSyllabus: SyllabusItem[] = [
  // Class 6
  {
    class: "6",
    subject: "Mathematics",
    chapter: "Chapter 1",
    topic: "Knowing Our Numbers",
    subtopics: ["Number system", "Place value", "Comparing numbers", "Estimation"],
  },
  {
    class: "6",
    subject: "Mathematics",
    chapter: "Chapter 2",
    topic: "Whole Numbers",
    subtopics: ["Natural numbers", "Whole numbers", "Operations", "Properties"],
  },
  {
    class: "6",
    subject: "Science",
    chapter: "Chapter 1",
    topic: "Components of Food",
    subtopics: ["Carbohydrates", "Proteins", "Fats", "Vitamins", "Minerals"],
  },
  {
    class: "6",
    subject: "Science",
    chapter: "Chapter 14",
    topic: "Water: A Precious Resource",
    subtopics: ["Water cycle", "Evaporation", "Condensation", "Precipitation", "Collection"],
  },
  {
    class: "6",
    subject: "Social Studies",
    chapter: "Chapter 6",
    topic: "Ancient Empires - The Mauryas",
    subtopics: ["Chandragupta Maurya", "Bindusara", "Ashoka", "Administration", "Ashoka's edicts"],
  },
  {
    class: "6",
    subject: "English",
    chapter: "Unit 1",
    topic: "Communication",
    subtopics: ["Forms of communication", "Verbal communication", "Non-verbal communication"],
  },

  // Class 7
  {
    class: "7",
    subject: "Mathematics",
    chapter: "Chapter 5",
    topic: "Basic Geometric Shapes",
    subtopics: ["Triangles", "Quadrilaterals", "Circles", "Perimeter", "Area"],
  },
  {
    class: "7",
    subject: "Mathematics",
    chapter: "Chapter 6",
    topic: "Algebraic Expressions",
    subtopics: ["Variables", "Expressions", "Terms", "Like and unlike terms"],
  },
  {
    class: "7",
    subject: "Science",
    chapter: "Chapter 10",
    topic: "Respiration in Organisms",
    subtopics: ["Breathing", "Aerobic respiration", "Anaerobic respiration", "Diaphragm"],
  },
  {
    class: "7",
    subject: "Science",
    chapter: "Chapter 12",
    topic: "Reproduction in Plants",
    subtopics: ["Vegetative reproduction", "Asexual reproduction", "Sexual reproduction", "Pollination"],
  },
  {
    class: "7",
    subject: "English",
    chapter: "Unit 2",
    topic: "Grammar - Parts of Speech",
    subtopics: ["Nouns", "Verbs", "Adjectives", "Adverbs", "Pronouns", "Prepositions"],
  },
  {
    class: "7",
    subject: "Social Studies",
    chapter: "Chapter 4",
    topic: "Medieval Period - Delhi Sultanate",
    subtopics: ["Political structure", "Rulers", "Administration", "Culture", "Economy"],
  },

  // Class 8
  {
    class: "8",
    subject: "Mathematics",
    chapter: "Chapter 2",
    topic: "Linear Equations in One Variable",
    subtopics: ["Variables and constants", "Linear equations", "Solving equations", "Applications"],
  },
  {
    class: "8",
    subject: "Mathematics",
    chapter: "Chapter 6",
    topic: "Squares and Square Roots",
    subtopics: ["Perfect squares", "Square roots", "Methods to find square roots", "Applications"],
  },
  {
    class: "8",
    subject: "Science",
    chapter: "Chapter 8",
    topic: "Force and Pressure",
    subtopics: ["Force", "Types of forces", "Pressure", "Effects of pressure", "Density"],
  },
  {
    class: "8",
    subject: "Science",
    chapter: "Chapter 16",
    topic: "Light",
    subtopics: ["Reflection of light", "Laws of reflection", "Mirrors", "Images formed", "Refraction"],
  },
  {
    class: "8",
    subject: "English",
    chapter: "Unit 3",
    topic: "Writing Skills",
    subtopics: ["Paragraph writing", "Essay writing", "Letter writing", "Report writing"],
  },
  {
    class: "8",
    subject: "Social Studies",
    chapter: "Chapter 3",
    topic: "Mughal Empire",
    subtopics: ["Rise of Mughals", "Akbar's administration", "Architecture", "Art and culture", "Decline"],
  },
];

const subjects = ["All", "Mathematics", "Science", "English", "Social Studies"];
const classes = ["All", "6", "7", "8"];

function SyllabusPage() {
  const { t } = useLanguage();
  const [selectedClass, setSelectedClass] = useState("All");
  const [selectedSubject, setSelectedSubject] = useState("All");

  const filteredSyllabus = ncertSyllabus.filter((item) => {
    const classMatch = selectedClass === "All" || item.class === selectedClass;
    const subjectMatch = selectedSubject === "All" || item.subject === selectedSubject;
    return classMatch && subjectMatch;
  });

  const classColor: Record<string, string> = {
    "6": "bg-chart-1/10 text-chart-1",
    "7": "bg-chart-2/10 text-chart-2",
    "8": "bg-chart-3/10 text-chart-3",
  };

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <BookOpen className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground md:text-4xl">
                {t("ncertSyllabus")}
              </h1>
              <p className="text-muted-foreground">
                {t("curriculum")}
              </p>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="mb-8 space-y-4">
          <div>
            <h3 className="mb-3 font-semibold text-foreground">{t("filterByClass")}</h3>
            <div className="flex flex-wrap gap-2">
              {classes.map((cls) => (
                <button
                  key={cls}
                  onClick={() => setSelectedClass(cls)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                    selectedClass === cls
                      ? "bg-primary text-primary-foreground"
                      : "border border-border bg-card text-foreground hover:border-primary"
                  }`}
                >
                  {cls === "All" ? "All Classes" : `Class ${cls}`}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-3 font-semibold text-foreground">{t("filterBySubject")}</h3>
            <div className="flex flex-wrap gap-2">
              {subjects.map((subject) => (
                <button
                  key={subject}
                  onClick={() => setSelectedSubject(subject)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                    selectedSubject === subject
                      ? "bg-primary text-primary-foreground"
                      : "border border-border bg-card text-foreground hover:border-primary"
                  }`}
                >
                  {subject}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Syllabus Items */}
        <div className="space-y-4">
          {filteredSyllabus.length > 0 ? (
            filteredSyllabus.map((item, index) => (
              <Card
                key={index}
                className="border-border bg-card hover:border-primary/30 transition-all"
              >
                <CardHeader className="pb-3">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex items-center gap-3">
                      <Badge className={classColor[item.class]}>
                        Class {item.class}
                      </Badge>
                      <Badge variant="secondary">{item.subject}</Badge>
                    </div>
                    <span className="text-sm font-medium text-muted-foreground">
                      {item.chapter}
                    </span>
                  </div>
                  <CardTitle className="mt-3 text-xl">{item.topic}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div>
                    <p className="mb-2 text-sm font-semibold text-muted-foreground">
                      Subtopics:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.subtopics.map((subtopic, idx) => (
                        <Badge key={idx} variant="outline">
                          {subtopic}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <Card className="border-border bg-card">
              <CardContent className="py-12 text-center">
                <p className="text-muted-foreground">
                  No syllabus items found for the selected filters.
                </p>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Summary Stats */}
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <Card className="border-primary/30 bg-primary/5">
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">
                  {new Set(filteredSyllabus.map((s) => s.class)).size > 0
                    ? new Set(filteredSyllabus.map((s) => s.class)).size
                    : 3}
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Classes Covered
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-accent/30 bg-accent/5">
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">
                  {new Set(filteredSyllabus.map((s) => s.subject)).size > 0
                    ? new Set(filteredSyllabus.map((s) => s.subject)).size
                    : 4}
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Subjects Included
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-success/30 bg-success/5">
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-success">
                  {filteredSyllabus.length}
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Topics Available
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

export default SyllabusPage;
