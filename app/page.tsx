"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Navigation } from "@/components/navigation";
import { SplashScreen } from "@/components/splash-screen";
import { useLanguage } from "@/lib/language-context";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Wifi,
  WifiOff,
  BookOpen,
  Trophy,
  Clock,
  Smartphone,
  Zap,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const features = [
  {
    icon: WifiOff,
    title: "Works Offline",
    description:
      "Download lessons once and study anywhere - even without internet connection.",
  },
  {
    icon: BookOpen,
    title: "NCERT Aligned",
    description:
      "Content follows the NCERT syllabus for Classes 6-10, ensuring relevant learning.",
  },
  {
    icon: Trophy,
    title: "Track Progress",
    description:
      "Take quizzes and monitor your scores to see how much you've improved.",
  },
  {
    icon: Clock,
    title: "Learn Anytime",
    description:
      "Short, focused lessons that fit into your schedule - study at your own pace.",
  },
  {
    icon: Smartphone,
    title: "Mobile Friendly",
    description:
      "Optimized for all devices - learn on your phone, tablet, or computer.",
  },
  {
    icon: Zap,
    title: "Interactive Quizzes",
    description:
      "Test your understanding with multiple-choice questions after each lesson.",
  },
];

const benefits = [
  "No internet required after first load",
  "Free access to quality education",
  "Covers Mathematics, Science, English, and Social Studies",
  "Instant feedback on quiz performance",
  "Progress saved automatically on your device",
];

export default function HomePage() {
  const [showSplash, setShowSplash] = useState(true);
  const { t } = useLanguage();

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  const features = [
    {
      icon: WifiOff,
      title: t("workOffline") || "Works Offline",
      description: t("workOfflineDesc") || "Download lessons once and study anywhere - even without internet connection.",
    },
    {
      icon: BookOpen,
      title: t("ncertAligned") || "NCERT Aligned",
      description: t("ncertAlignedDesc") || "Content follows the NCERT syllabus for Classes 6-10, ensuring relevant learning.",
    },
    {
      icon: Trophy,
      title: t("trackProgress") || "Track Progress",
      description: t("trackProgressDesc") || "Take quizzes and monitor your scores to see how much you've improved.",
    },
    {
      icon: Clock,
      title: t("learnAnytime") || "Learn Anytime",
      description: t("learnAnytimeDesc") || "Short, focused lessons that fit into your schedule - study at your own pace.",
    },
    {
      icon: Smartphone,
      title: t("mobileFriendly") || "Mobile Friendly",
      description: t("mobileFriendlyDesc") || "Optimized for all devices - learn on your phone, tablet, or computer.",
    },
    {
      icon: Zap,
      title: t("interactiveQuizzes") || "Interactive Quizzes",
      description: t("interactiveQuizzesDesc") || "Test your understanding with multiple-choice questions after each lesson.",
    },
  ];

  const benefits = [
    t("benefit1") || "No internet required after first load",
    t("benefit2") || "Free access to quality education",
    t("benefit3") || "Covers Mathematics, Science, English, and Social Studies",
    t("benefit4") || "Instant feedback on quiz performance",
    t("benefit5") || "Progress saved automatically on your device",
  ];
  return (
    <>
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      <div className="min-h-screen bg-background pb-20 md:pb-0">
        <Navigation />

        {/* Hero Image Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4 py-8 md:py-12">
            <div className="relative h-64 sm:h-80 md:h-96 w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/hero-students.jpg"
                alt="Students learning together in nature"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
          <div className="container relative mx-auto px-4 py-16 md:py-24">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-primary">
                <WifiOff className="h-4 w-4" />
                <span>{t("firstOfflineLearning")}</span>
              </div>

              <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl text-balance">
                {t("qualityEducation")}
                <span className="text-primary"> {t("everyIndianStudent")}</span>
              </h1>

              <p className="mb-8 text-lg text-muted-foreground md:text-xl leading-relaxed text-pretty">
                {t("brainwaveDesc")}
              </p>

              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button asChild size="lg" className="text-base">
                  <Link href="/lessons">
                    {t("startLearning")}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="text-base bg-transparent"
                >
                  <Link href="/quiz">{t("takeQuiz")}</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Offline Learning Section */}
        <section className="border-t border-border bg-card/50 py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                {t("whyOfflineMatters")}
              </h2>
              <p className="mb-8 text-muted-foreground md:text-lg">
                {t("connectivityChallenge")}
                BrainWave ensures education continues regardless of internet
                access.
              </p>
            </div>

            <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2">
              <Card className="border-border bg-card">
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-destructive/10">
                    <Wifi className="h-6 w-6 text-destructive" />
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-foreground">
                      The Challenge
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Only 43% of rural India has internet access. Load shedding,
                      data costs, and weak signals disrupt online learning for
                      millions.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <WifiOff className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-foreground">
                      Our Solution
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      BrainWave caches all content locally after first load. Study
                      during power cuts, on bus rides, or in areas with no
                      network.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-12 text-3xl font-bold text-foreground md:text-4xl">
                {t("features")}
              </h2>
              <p className="mb-12 text-muted-foreground md:text-lg">
                Designed specifically for Indian students with features that make
                learning accessible and effective.
              </p>
            </div>

            <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <Card
                    key={feature.title}
                    className="neon-border bg-card"
                  >
                    <CardContent className="p-6">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="mb-2 font-semibold text-foreground">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="border-t border-border bg-card/50 py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-2">
              <div>
                <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                  Start Your Learning Journey Today
                </h2>
                <p className="mb-8 text-muted-foreground md:text-lg">
                  Join thousands of students across India who are using BrainWave
                  to excel in their studies.
                </p>

                <ul className="space-y-4">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                      <span className="text-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-border bg-card p-8">
                <div className="mb-6 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Zap className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    Ready to Begin?
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    No sign-up required. Start learning immediately.
                  </p>
                </div>

                <div className="space-y-3">
                  <Button asChild className="w-full" size="lg">
                    <Link href="/lessons">
                      <BookOpen className="mr-2 h-4 w-4" />
                      Browse Lessons
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full bg-transparent"
                    size="lg"
                  >
                    <Link href="/quiz">
                      <Trophy className="mr-2 h-4 w-4" />
                      Take a Quiz
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border py-8">
          <div className="container mx-auto px-4 text-center">
            <div className="text-sm text-muted-foreground space-y-1">
              <p>BrainWave - Bringing education to every corner of India</p>
              <p>Created for a bright future</p>
              <p>By Kushagra and Divya</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
