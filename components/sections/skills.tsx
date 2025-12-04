import { Section } from "@/components/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skillCategories = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "React Native"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Redis"],
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "Docker", "AWS", "Vercel", "Firebase"],
  },
  {
    category: "Other",
    skills: ["REST APIs", "GraphQL", "CI/CD", "Agile", "Testing"],
  },
];

export function SkillsSection() {
  return (
    <Section id="skills" background="dark" fullHeight={false}>
      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
              Skills & Technologies
            </h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              Tools and technologies I work with to bring ideas to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className="bg-zinc-900 border-zinc-800">
                <CardHeader>
                  <CardTitle className="text-white">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-sm font-medium bg-zinc-800 text-zinc-300 rounded-md hover:bg-zinc-700 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
