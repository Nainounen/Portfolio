"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

export function Hero() {
  const [isLocked, setIsLocked] = useState(false);

  const scrollToNext = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleLock = () => {
    setIsLocked(!isLocked);
  };

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center px-4 overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20 pointer-events-none" />
      
      {/* Left Vertical Text */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden lg:block z-10">
        <p className="text-[10px] font-medium tracking-[0.3em] text-muted-foreground uppercase [writing-mode:vertical-lr] rotate-180">
          Portfolio 2025
        </p>
      </div>

      {/* Right Vertical Text */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden lg:block z-10">
        <p className="text-[10px] font-medium tracking-[0.3em] text-muted-foreground uppercase [writing-mode:vertical-lr] rotate-180">
          Full Stack Developer
        </p>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center space-y-8 animate-fade-in-up">
        {/* Small label */}
        <div className="flex items-center justify-center gap-3">
          <div className="h-px w-12 bg-primary" />
          <p className="text-xs tracking-[0.3em] text-primary uppercase font-medium">
            Developer
          </p>
          <div className="h-px w-12 bg-primary" />
        </div>

        {/* Main heading */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none">
          YOUR NAME
        </h1>
        
        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-light tracking-wide max-w-3xl mx-auto">
          Redefining limits, building exceptional digital experiences,
          <br className="hidden sm:block" />
          bringing it all in every project.
        </p>

        {/* CTA or Additional Info */}
        <div className="pt-4">
          <p className="text-sm tracking-widest text-muted-foreground uppercase">
            Based in Your Location
          </p>
        </div>
      </div>

      {/* Scroll Lock Indicator */}
      <button
        onClick={toggleLock}
        className="absolute bottom-32 left-1/2 -translate-x-1/2 text-xs tracking-widest text-muted-foreground uppercase hover:text-primary transition-colors z-10"
      >
        {isLocked ? "Tap to unlock" : "Tap to lock"}
      </button>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <p className="text-[10px] tracking-widest text-muted-foreground uppercase">
          Scroll
        </p>
        <button
          onClick={scrollToNext}
          className="animate-bounce"
          aria-label="Scroll to next section"
        >
          <ChevronDown className="h-6 w-6 text-primary" />
        </button>
      </div>

      {/* Decorative corner elements */}
      <div className="absolute top-6 left-6 w-12 h-12 border-t-2 border-l-2 border-primary/30" />
      <div className="absolute top-6 right-6 w-12 h-12 border-t-2 border-r-2 border-primary/30" />
      <div className="absolute bottom-6 left-6 w-12 h-12 border-b-2 border-l-2 border-primary/30" />
      <div className="absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-primary/30" />
    </div>
  );
}
