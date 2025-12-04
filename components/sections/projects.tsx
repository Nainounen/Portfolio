"use client";

import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import Image from "next/image";

const projects = [
  {
    title: "NEXTRACK",
    description: "AI-based learning and competence-tracking app for Swisscom apprentices. Features OpenAI integration, RAG system, and smart skill recommendations.",
    tags: ["NEXT.JS", "OPENAI", "PRISMA", "AWS"],
    github: "#",
    live: "#",
    image: "/nextrack.jpg",
    year: "2024",
  },
  {
    title: "PROJECTHUB",
    description: "Platform displaying all Swisscom apprentice projects with dynamic filters, search, and interactive map view. Central hub for innovation showcase.",
    tags: ["REACT", "NODE.JS", "MAPS API", "GITLAB CI/CD"],
    github: "#",
    live: "#",
    image: "/projecthub.jpg",
    year: "2024",
  },
  {
    title: "A-TEAM",
    description: "Workflow automation platform for Swisscom's Automation Team. Streamlines process automation, task management, and team collaboration.",
    tags: ["NEXT.JS", "AUTOMATION", "WORKFLOWS", "API"],
    github: "#",
    live: "#",
    image: "/ateam.jpg",
    year: "2024",
  },
  {
    title: "CREATIVE STUDIO",
    description: "Internal CMS and order platform for creative services at Swisscom. Streamlines design requests and project management.",
    tags: ["NEXT.JS", "NESTJS", "POSTGRESQL", "IAM"],
    github: "#",
    live: "#",
    image: "/creative-studio.jpg",
    year: "2023-2024",
  },
  {
    title: "SITELAB",
    description: "Swisscom's apprentice-driven web development studio. Leading team building professional applications for internal and external use.",
    tags: ["REACT", "NEXT.JS", "TAILWIND", "AGILE"],
    github: "#",
    live: "#",
    image: "/sitelab.jpg",
    year: "2023-NOW",
  },
];

export function ProjectsSection() {
  return (
    <Section id="projects" background="default" fullHeight={false}>
      <div className="container mx-auto px-6 lg:px-8 py-24 lg:py-32">
        <div className="space-y-16">
          {/* Header */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-primary" />
              <p className="text-xs tracking-[0.3em] text-primary uppercase font-medium">
                Portfolio
              </p>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight accent-line inline-block">
              FEATURED WORK
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mt-8">
              Selected projects that showcase expertise across the full stack
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <article
      ref={ref as React.RefObject<HTMLElement>}
      className={`group relative gpu-accelerate ${
        isVisible ? "animate-fade-in-up" : "opacity-0"
      }`}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-muted mb-6 border border-border/50">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover image-zoom"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60" />
        
        {/* Year Badge */}
        <div className="absolute top-6 right-6 px-4 py-2 glass border border-border/50 text-xs font-medium tracking-widest uppercase z-10">
          {project.year}
        </div>
      </div>

      {/* Content */}
      <div className="space-y-4">
        <h3 className="text-2xl md:text-3xl font-bold tracking-tight group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        
        <p className="text-muted-foreground leading-relaxed">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1.5 text-[10px] font-medium tracking-wider bg-secondary text-foreground border border-border/50 uppercase"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 pt-4">
          <Button
            variant="outline"
            size="sm"
            className="uppercase tracking-wider text-xs border-primary/50 hover:bg-primary hover:text-primary-foreground"
            asChild
          >
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-2" />
              Code
            </a>
          </Button>
          <Button
            size="sm"
            className="uppercase tracking-wider text-xs bg-primary hover:bg-primary/90"
            asChild
          >
            <a href={project.live} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-2" />
              View Live
            </a>
          </Button>
        </div>
      </div>
    </article>
  );
}
