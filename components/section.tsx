import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  fullHeight?: boolean;
  background?: "default" | "muted" | "dark";
}

export function Section({
  id,
  children,
  className,
  fullHeight = true,
  background = "default",
}: SectionProps) {
  const bgClasses = {
    default: "bg-background",
    muted: "bg-muted/30",
    dark: "bg-zinc-950 dark:bg-zinc-900",
  };

  return (
    <section
      id={id}
      className={cn(
        "relative w-full",
        fullHeight && "min-h-screen",
        bgClasses[background],
        className
      )}
    >
      {children}
    </section>
  );
}
