'use client';

import { useEffect, useState } from 'react';

export function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Auto-hide splash screen with fallback timer (adjust based on video length)
    const timer = setTimeout(() => {
      setIsVisible(false);
      onComplete();
    }, 6000); // Adjust if your video is longer or shorter

    return () => clearTimeout(timer);
  }, [onComplete]);

  const handleVideoEnd = () => {
    setIsVisible(false);
    onComplete();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="w-full h-full flex items-center justify-center bg-black">
        <video
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnd}
          className="w-full h-full object-cover"
        >
          <source src="/splash-animation.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
