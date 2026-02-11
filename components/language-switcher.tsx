'use client';

import { useLanguage } from '@/lib/language-context';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

export function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <Globe className="h-4 w-4 text-muted-foreground" />
      <Button
        variant={language === 'en' ? 'default' : 'outline'}
        size="sm"
        onClick={() => setLanguage('en')}
        className="h-8 px-3 text-xs"
      >
        EN
      </Button>
      <Button
        variant={language === 'hi' ? 'default' : 'outline'}
        size="sm"
        onClick={() => setLanguage('hi')}
        className="h-8 px-3 text-xs"
      >
        हि
      </Button>
    </div>
  );
}
