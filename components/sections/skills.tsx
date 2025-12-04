"use client";

import { Section } from "@/components/section";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const skillCategories = [
  {
    category: "FRONTEND",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Animations"],
  },
  {
    category: "BACKEND",
    skills: ["Node.js", "NestJS", "Prisma", "PostgreSQL", "Python"],
  },
  {
    category: "CLOUD & DEVOPS",
    skills: ["AWS (iAWS)", "GitLab CI/CD", "Docker", "IAM", "API Security"],
  },
  {
    category: "AI & OTHER",
    skills: ["OpenAI API", "RAG Systems", "Agile/Scrum", "Project Leadership", "C#/Java"],
  },
];

export function SkillsSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <Section id="skills" background="default" fullHeight={false}>
      <div className="container mx-auto px-6 lg:px-8 py-24 lg:py-32">
        <div className="space-y-16">
          {/* Header */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-primary" />
              <p className="text-xs tracking-[0.3em] text-primary uppercase font-medium">
                Expertise
              </p>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight accent-line inline-block">
              SKILLS & TECH
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mt-8">
              Technologies and tools used to build exceptional experiences
            </p>
          </div>

          {/* Skills Grid */}
          <div
            ref={ref as React.RefObject<HTMLDivElement>}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="space-y-4"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  transition: `opacity 0.6s ease-out ${index * 0.08}s, transform 0.6s ease-out ${index * 0.08}s`,
                }}
              >
                <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-primary border-b border-primary/30 pb-2">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm font-medium bg-secondary text-foreground border border-border/50 hover:border-primary/50 hover:bg-secondary/80 transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
