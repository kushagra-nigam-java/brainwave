"use client";

import { useState, useEffect, useCallback } from "react";
import type { AppData, QuizResult } from "@/lib/types";
import { defaultLessons, defaultQuestions } from "@/lib/data";

const STORAGE_KEY = "brainwave-data";

const getInitialData = (): AppData => ({
  lessons: defaultLessons,
  quizResults: [],
  lastSynced: null,
});

export function useLocalStorage() {
  const [data, setData] = useState<AppData>(getInitialData());
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as AppData;
        // Ensure lessons are always present
        if (!parsed.lessons || parsed.lessons.length === 0) {
          parsed.lessons = defaultLessons;
        }
        setData(parsed);
      } else {
        // Initialize with default data
        const initial = getInitialData();
        localStorage.setItem(STORAGE_KEY, JSON.stringify(initial));
        setData(initial);
      }
    } catch {
      const initial = getInitialData();
      localStorage.setItem(STORAGE_KEY, JSON.stringify(initial));
      setData(initial);
    }
    setIsLoaded(true);
  }, []);

  const saveQuizResult = useCallback((result: Omit<QuizResult, "id" | "completedAt">) => {
    setData((prev) => {
      const newResult: QuizResult = {
        ...result,
        id: crypto.randomUUID(),
        completedAt: new Date().toISOString(),
      };
      const newData = {
        ...prev,
        quizResults: [...prev.quizResults, newResult],
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
      return newData;
    });
  }, []);

  const syncProgress = useCallback((): Promise<boolean> => {
    return new Promise((resolve) => {
      // Mock cloud sync - simulates network delay
      setTimeout(() => {
        setData((prev) => {
          const newData = {
            ...prev,
            lastSynced: new Date().toISOString(),
          };
          localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
          return newData;
        });
        resolve(true);
      }, 1500);
    });
  }, []);

  const clearProgress = useCallback(() => {
    const newData = {
      ...getInitialData(),
      lastSynced: null,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
    setData(newData);
  }, []);

  return {
    data,
    isLoaded,
    saveQuizResult,
    syncProgress,
    clearProgress,
    questions: defaultQuestions,
  };
}
