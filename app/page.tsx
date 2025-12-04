import { Section } from "@/components/section";
import { Hero } from "@/components/hero";
import { AboutSection } from "@/components/sections/about";
import { ProjectsSection } from "@/components/sections/projects";
import { SkillsSection } from "@/components/sections/skills";
import { FooterSection } from "@/components/sections/footer";

export default function Home() {
  return (
    <main>
      <Section id="home" fullHeight>
        <Hero />
      </Section>
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <FooterSection />
    </main>
  );
}
