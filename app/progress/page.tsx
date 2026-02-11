"use client";

import { useState } from "react";
import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLocalStorage } from "@/hooks/use-local-storage";
import { useLanguage } from "@/lib/language-context";
import { cn } from "@/lib/utils";
import {
  BarChart3,
  Trophy,
  Target,
  Clock,
  Cloud,
  CloudOff,
  Check,
  Loader2,
  Trash2,
} from "lucide-react";

export default function ProgressPage() {
  const { data, syncProgress, clearProgress, isLoaded } = useLocalStorage();
  const { t } = useLanguage();
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncSuccess, setSyncSuccess] = useState(false);

  const handleSync = async () => {
    setIsSyncing(true);
    setSyncSuccess(false);
    try {
      await syncProgress();
      setSyncSuccess(true);
      setTimeout(() => setSyncSuccess(false), 3000);
    } finally {
      setIsSyncing(false);
    }
  };

  const handleClear = () => {
    if (confirm(t("confirmClear"))) {
      clearProgress();
    }
  };

  // Calculate stats
  const totalQuizzes = data.quizResults.length;
  const averageScore =
    totalQuizzes > 0
      ? Math.round(
          data.quizResults.reduce((acc, r) => acc + r.percentage, 0) /
            totalQuizzes
        )
      : 0;
  const perfectScores = data.quizResults.filter((r) => r.percentage === 100).length;
  const recentResults = [...data.quizResults]
    .sort((a, b) => new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime())
    .slice(0, 10);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getScoreColor = (percentage: number) => {
    if (percentage >= 80) return "text-success";
    if (percentage >= 60) return "text-accent";
    if (percentage >= 40) return "text-chart-4";
    return "text-destructive";
  };

  const getScoreBadge = (percentage: number) => {
    if (percentage >= 80) return { label: t("excellent"), className: "bg-success/10 text-success" };
    if (percentage >= 60) return { label: t("good"), className: "bg-accent/10 text-accent" };
    if (percentage >= 40) return { label: t("fair"), className: "bg-chart-4/10 text-chart-4" };
    return { label: t("needsWork"), className: "bg-destructive/10 text-destructive" };
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

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
              <BarChart3 className="h-7 w-7 text-primary" />
            </div>
            <h1 className="mb-2 text-3xl font-bold text-foreground md:text-4xl">
              {t("progressTitle")}
            </h1>
            <p className="text-muted-foreground">
              {t("stats")}
            </p>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row">
            <Button
              variant="outline"
              onClick={handleSync}
              disabled={isSyncing}
              className="min-w-[160px] bg-transparent"
            >
              {isSyncing ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Syncing...
                </>
              ) : syncSuccess ? (
                <>
                  <Check className="mr-2 h-4 w-4 text-success" />
                  {t("sync")}
                </>
              ) : (
                <>
                  <Cloud className="mr-2 h-4 w-4" />
                  {t("syncProgress")}
                </>
              )}
            </Button>
            {totalQuizzes > 0 && (
              <Button variant="outline" onClick={handleClear} className="text-destructive hover:text-destructive bg-transparent">
                <Trash2 className="mr-2 h-4 w-4" />
                {t("clearProgress")}
              </Button>
            )}
          </div>
        </div>

        {/* Sync Status */}
        {data.lastSynced && (
          <div className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
            <CloudOff className="h-4 w-4" />
            <span>Last synced: {formatDate(data.lastSynced)}</span>
          </div>
        )}

        {/* Stats Cards */}
        <div className="mb-8 grid gap-4 md:grid-cols-3">
          <Card className="border-border bg-card">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Quizzes Taken
              </CardTitle>
              <Target className="h-5 w-5 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground">
                {totalQuizzes}
              </div>
              <p className="text-sm text-muted-foreground">
                Total attempts
              </p>
            </CardContent>
          </Card>

          <Card className="border-border bg-card">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Average Score
              </CardTitle>
              <BarChart3 className="h-5 w-5 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className={cn("text-3xl font-bold", getScoreColor(averageScore))}>
                {averageScore}%
              </div>
              <p className="text-sm text-muted-foreground">
                Across all quizzes
              </p>
            </CardContent>
          </Card>

          <Card className="border-border bg-card">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Perfect Scores
              </CardTitle>
              <Trophy className="h-5 w-5 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">
                {perfectScores}
              </div>
              <p className="text-sm text-muted-foreground">
                100% achievements
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Results */}
        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <Clock className="h-5 w-5" />
              Recent Quiz Results
            </CardTitle>
          </CardHeader>
          <CardContent>
            {recentResults.length === 0 ? (
              <div className="py-12 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                  <Trophy className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  No quizzes taken yet
                </h3>
                <p className="text-muted-foreground">
                  Complete a quiz to see your progress here
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {recentResults.map((result) => {
                  const scoreBadge = getScoreBadge(result.percentage);
                  return (
                    <div
                      key={result.id}
                      className="flex flex-col gap-3 rounded-lg border border-border bg-secondary/30 p-4 sm:flex-row sm:items-center sm:justify-between"
                    >
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground">
                          {result.lessonTitle}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {formatDate(result.completedAt)}
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-muted-foreground">
                          {result.score}/{result.totalQuestions} correct
                        </span>
                        <Badge className={cn("min-w-[80px] justify-center", scoreBadge.className)}>
                          {result.percentage}%
                        </Badge>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
