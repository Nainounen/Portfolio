import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const socialLinks = [
  { name: "GitHub", icon: Github, href: "https://github.com" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
];

export function FooterSection() {
  return (
    <Section id="contact" background="default" fullHeight={false}>
      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Let's Work Together
            </h2>
            <p className="text-lg text-muted-foreground">
              I'm always interested in hearing about new projects and
              opportunities.
            </p>
            <Button size="lg" asChild>
              <a href="mailto:your.email@example.com">
                <Mail className="h-5 w-5 mr-2" />
                Get In Touch
              </a>
            </Button>
          </div>

          <Separator />

          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              {socialLinks.map((link) => (
                <Button
                  key={link.name}
                  variant="ghost"
                  size="icon"
                  asChild
                >
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                  >
                    <link.icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Your Name. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
