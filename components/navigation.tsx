"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Home, BookOpen, HelpCircle, BarChart3, BookMarked } from "lucide-react";
import { LanguageSwitcher } from "@/components/language-switcher";
import { useLanguage } from "@/lib/language-context";
import { fallbackT } from "@/lib/fallback-translations"; // Declare the fallbackT variable

const navItems = [
  { href: "/", label: "home", icon: Home },
  { href: "/lessons", label: "lessons", icon: BookOpen },
  { href: "/quiz", label: "quiz", icon: HelpCircle },
  { href: "/progress", label: "progress", icon: BarChart3 },
  { href: "/syllabus", label: "syllabus", icon: BookMarked },
];

export function Navigation() {
  const pathname = usePathname();
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg overflow-hidden">
              <Image
                src="/brainwave-icon.png"
                alt="BrainWave Logo"
                width={36}
                height={36}
                className="h-9 w-9 object-cover"
              />
            </div>
            <span className="text-xl font-bold text-foreground">{t('brainwave')}</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  <span>{t(item.label)}</span>
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-4">
            <LanguageSwitcher />
          </div>

          {/* Mobile Navigation */}
          <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background px-4 py-2 md:hidden">
            <div className="flex justify-around">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex flex-col items-center gap-1 rounded-lg px-3 py-2 text-xs font-medium transition-colors",
                      isActive
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    <Icon className={cn("h-5 w-5", isActive && "text-primary")} />
                    {t(item.label)}
                  </Link>
                );
              })}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
