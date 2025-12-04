"use client";

import { Section } from "@/components/section";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

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
            className={`relative ${imageVisible ? "animate-slide-in-left" : "opacity-0"}`}
          >
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden border border-border/50">
              {/* Placeholder - replace with actual image */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary via-muted to-secondary/50 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-32 h-32 rounded-full bg-primary/20 mx-auto flex items-center justify-center">
                    <span className="text-4xl font-bold text-primary">YN</span>
                  </div>
                  <span className="text-sm text-muted-foreground uppercase tracking-wider">Your Photo Here</span>
                </div>
              </div>
              {/*
              <Image
                src="/your-photo.jpg"
                alt="Your Name"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              */}
            </div>
            
            {/* Decorative accent */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-4 border-primary/30 rounded-lg -z-10" />
          </div>

          {/* Right: Content */}
          <div
            ref={contentRef as React.RefObject<HTMLDivElement>}
            className={`space-y-8 ${contentVisible ? "animate-slide-in-right" : "opacity-0"}`}
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
                <span className="text-foreground font-medium">Redefining limits</span>, building exceptional digital experiences, and bringing innovation to every project.
              </p>
              <p>
                With expertise in modern web technologies, I create scalable and user-friendly applications that push boundaries. My passion lies in transforming complex problems into elegant solutions.
              </p>
              <p>
                When I&apos;m not coding, you&apos;ll find me exploring cutting-edge technologies, contributing to open source, or sharing knowledge with the developer community.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="space-y-1">
                <p className="text-3xl font-bold text-primary">5+</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Years Exp</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-bold text-primary">50+</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Projects</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-bold text-primary">20+</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Clients</p>
              </div>
            </div>

            {/* Timeline/Highlights */}
            <div className="space-y-6 pt-6 border-t border-border/50">
              <h3 className="text-xl font-bold tracking-wider uppercase">Career Journey</h3>
              <div className="space-y-6">
                <div className="flex gap-6 group">
                  <div className="text-sm font-bold text-primary w-16 flex-shrink-0 uppercase tracking-wider">
                    2024
                  </div>
                  <div className="space-y-1 flex-1">
                    <p className="font-semibold text-foreground">Senior Developer</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Leading projects and mentoring team members
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 group">
                  <div className="text-sm font-bold text-primary w-16 flex-shrink-0 uppercase tracking-wider">
                    2022
                  </div>
                  <div className="space-y-1 flex-1">
                    <p className="font-semibold text-foreground">Full Stack Developer</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Built multiple production applications
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 group">
                  <div className="text-sm font-bold text-primary w-16 flex-shrink-0 uppercase tracking-wider">
                    2020
                  </div>
                  <div className="space-y-1 flex-1">
                    <p className="font-semibold text-foreground">Started Journey</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Began professional development career
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
