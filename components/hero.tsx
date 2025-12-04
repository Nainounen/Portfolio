"use client";

import { ChevronDown } from "lucide-react";

export function Hero() {
  const scrollToNext = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center px-4">
      {/* Vertical Text */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 hidden lg:block">
        <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase [writing-mode:vertical-lr] rotate-180">
          Portfolio 2025
        </p>
      </div>

      {/* Main Content */}
      <div className="text-center space-y-6 animate-fade-in">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
          Your Name
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-light tracking-wide">
          Full Stack Developer
        </p>
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
          Building digital experiences with modern web technologies
        </p>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        aria-label="Scroll to next section"
      >
        <ChevronDown className="h-8 w-8 text-muted-foreground" />
      </button>
    </div>
  );
}
