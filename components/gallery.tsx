"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface GalleryItem {
  id: string;
  title: string;
  subtitle?: string;
  image: string;
  category?: string;
}

interface GalleryProps {
  items: GalleryItem[];
  columns?: 2 | 3 | 4;
  title?: string;
  description?: string;
}

export function Gallery({
  items,
  columns = 3,
  title,
  description,
}: GalleryProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const gridCols = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 px-6 lg:px-8"
    >
      <div className="container mx-auto">
        {/* Header */}
        {(title || description) && (
          <div
            className={`mb-16 text-center ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            {title && (
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 accent-line inline-block">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-8">
                {description}
              </p>
            )}
          </div>
        )}

        {/* Gallery Grid */}
        <div className={`grid ${gridCols[columns]} gap-6 md:gap-8`}>
          {items.map((item, index) => (
            <GalleryCard
              key={item.id}
              item={item}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface GalleryCardProps {
  item: GalleryItem;
  index: number;
  isVisible: boolean;
}

function GalleryCard({ item, index, isVisible }: GalleryCardProps) {
  return (
    <div
      className={`group relative overflow-hidden rounded-lg bg-card border border-border/50 transition-all duration-300 hover:border-primary/50 ${
        isVisible ? "animate-scale-in" : "opacity-0"
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover image-zoom"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Category badge */}
        {item.category && (
          <div className="absolute top-4 left-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium tracking-wider uppercase rounded">
            {item.category}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 space-y-2">
        <h3 className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors">
          {item.title}
        </h3>
        {item.subtitle && (
          <p className="text-sm text-muted-foreground tracking-wide">
            {item.subtitle}
          </p>
        )}
      </div>

      {/* Hover accent line */}
      <div className="absolute bottom-0 left-0 w-0 h-1 bg-primary transition-all duration-300 group-hover:w-full" />
    </div>
  );
}
