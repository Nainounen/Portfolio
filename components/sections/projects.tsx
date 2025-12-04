import { Section } from "@/components/section";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Project One",
    description: "A full-stack web application with modern technologies",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    github: "#",
    live: "#",
  },
  {
    title: "Project Two",
    description: "Mobile-first responsive design with amazing UX",
    tags: ["React Native", "Expo", "Firebase"],
    github: "#",
    live: "#",
  },
  {
    title: "Project Three",
    description: "Real-time collaboration tool for distributed teams",
    tags: ["WebSocket", "Redis", "Node.js"],
    github: "#",
    live: "#",
  },
  {
    title: "Project Four",
    description: "E-commerce platform with advanced features",
    tags: ["Next.js", "Stripe", "Tailwind"],
    github: "#",
    live: "#",
  },
];

export function ProjectsSection() {
  return (
    <Section id="projects" background="default" fullHeight={false}>
      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A selection of recent work showcasing my skills and experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium bg-muted rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
