import { Section } from "@/components/section";

export function AboutSection() {
  return (
    <Section id="about" background="muted">
      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Image/Visual */}
          <div className="relative aspect-square lg:aspect-[4/5] rounded-lg overflow-hidden bg-zinc-800">
            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
              {/* Replace with actual image */}
              <span className="text-sm">Your Photo Here</span>
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                About Me
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate developer focused on creating exceptional
                digital experiences. With expertise in modern web technologies,
                I build scalable and user-friendly applications.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open source, or sharing knowledge with the
                developer community.
              </p>
            </div>

            {/* Timeline/Highlights */}
            <div className="space-y-6 pt-6 border-t border-border">
              <h3 className="text-2xl font-semibold">Career Highlights</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="text-sm font-medium text-muted-foreground w-24 flex-shrink-0">
                    2024
                  </div>
                  <div>
                    <p className="font-medium">Senior Developer</p>
                    <p className="text-sm text-muted-foreground">
                      Leading projects and mentoring team members
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-sm font-medium text-muted-foreground w-24 flex-shrink-0">
                    2022
                  </div>
                  <div>
                    <p className="font-medium">Full Stack Developer</p>
                    <p className="text-sm text-muted-foreground">
                      Built multiple production applications
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-sm font-medium text-muted-foreground w-24 flex-shrink-0">
                    2020
                  </div>
                  <div>
                    <p className="font-medium">Started Journey</p>
                    <p className="text-sm text-muted-foreground">
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
