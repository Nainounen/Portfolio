"use client";

import { Section } from "@/components/section";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import Image from "next/image";

export function AboutSection() {
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation({ threshold: 0.3 });
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <Section id="about" background="muted">
      <div className="container mx-auto px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Image/Visual */}
          <div
            ref={imageRef as React.RefObject<HTMLDivElement>}
            className={`relative gpu-accelerate ${imageVisible ? "animate-slide-in-left" : "opacity-0"}`}
          >
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden border border-border/50">
              <Image
                src="/nino-meier.jpg"
                alt="Nino Meier"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
            
            {/* Decorative accent */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-4 border-primary/30 rounded-lg -z-10" />
          </div>

          {/* Right: Content */}
          <div
            ref={contentRef as React.RefObject<HTMLDivElement>}
            className={`space-y-8 gpu-accelerate ${contentVisible ? "animate-slide-in-right" : "opacity-0"}`}
          >
            {/* Header */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-12 bg-primary" />
                <p className="text-xs tracking-[0.3em] text-primary uppercase font-medium">
                  Biography
                </p>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight accent-line inline-block">
                ABOUT ME
              </h2>
            </div>

            {/* Bio */}
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                <span className="text-foreground font-medium">Application Developer Apprentice</span> at Swisscom, part of the Next Generation program and SiteLab team lead.
              </p>
              <p>
                I work primarily with React, Next.js, Node.js, NestJS, and modern cloud infrastructure. As team lead of SiteLab—Swisscom&apos;s apprentice-driven web development team—I help design and build internal and external applications that support innovation and learning.
              </p>
              <p>
                My focus areas include fullstack engineering, AI integration, cloud architecture, and leading apprentice-driven projects like ProjectHub, Creative Studio, and NEXtrack.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="space-y-1">
                <p className="text-3xl font-bold text-primary">2nd</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Year Apprentice</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-bold text-primary">10+</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Projects</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-bold text-primary">17</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Years Old</p>
              </div>
            </div>

            {/* Timeline/Highlights */}
            <div className="space-y-6 pt-6 border-t border-border/50">
              <h3 className="text-xl font-bold tracking-wider uppercase">Journey</h3>
              <div className="space-y-6">
                <div className="flex gap-6 group">
                  <div className="text-sm font-bold text-primary w-16 flex-shrink-0 uppercase tracking-wider">
                    2024
                  </div>
                  <div className="space-y-1 flex-1">
                    <p className="font-semibold text-foreground">SiteLab Team Lead</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Leading Swisscom&apos;s apprentice web development team
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 group">
                  <div className="text-sm font-bold text-primary w-16 flex-shrink-0 uppercase tracking-wider">
                    2023
                  </div>
                  <div className="space-y-1 flex-1">
                    <p className="font-semibold text-foreground">Started at Swisscom</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Began 4-year Application Developer apprenticeship
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 group">
                  <div className="text-sm font-bold text-primary w-16 flex-shrink-0 uppercase tracking-wider">
                    2008
                  </div>
                  <div className="space-y-1 flex-1">
                    <p className="font-semibold text-foreground">Born in Switzerland</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Native German speaker, fluent in English
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
