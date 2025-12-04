"use client";

import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const socialLinks = [
  { name: "GITHUB", icon: Github, href: "https://github.com" },
  { name: "LINKEDIN", icon: Linkedin, href: "https://linkedin.com" },
  { name: "TWITTER", icon: Twitter, href: "https://twitter.com" },
];

export function FooterSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <Section id="contact" background="muted" fullHeight={false}>
      <div className="container mx-auto px-6 lg:px-8 py-24 lg:py-32">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`max-w-4xl mx-auto space-y-16 gpu-accelerate ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          {/* Main CTA */}
          <div className="text-center space-y-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-primary" />
              <p className="text-xs tracking-[0.3em] text-primary uppercase font-medium">
                Contact
              </p>
              <div className="h-px w-12 bg-primary" />
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              LET&apos;S WORK<br />TOGETHER
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Open to collaboration, innovation projects, and new opportunities in software development.
            </p>
            <div className="pt-4">
              <Button
                size="lg"
                className="uppercase tracking-wider text-xs bg-primary hover:bg-primary/90 px-8 py-6"
                asChild
              >
                <a href="mailto:nino.meier@swisscom.com">
                  <Mail className="h-4 w-4 mr-2" />
                  Get In Touch
                </a>
              </Button>
            </div>
          </div>

          <Separator className="bg-border/50" />

          {/* Footer */}
          <div className="space-y-8">
            {/* Social Links */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              {socialLinks.map((link) => (
                <Button
                  key={link.name}
                  variant="outline"
                  size="sm"
                  className="uppercase tracking-wider text-[10px] border-border/50 hover:border-primary/50 hover:text-primary"
                  asChild
                >
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                  >
                    <link.icon className="h-4 w-4 mr-2" />
                    {link.name}
                  </a>
                </Button>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-center space-y-2">
              <p className="text-xs tracking-widest text-muted-foreground uppercase">
                © {new Date().getFullYear()} Nino Meier. All rights reserved.
              </p>
              <p className="text-[10px] text-muted-foreground">
                Built with Next.js 16 · Tailwind CSS v4 · TypeScript · Swisscom SiteLab
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
