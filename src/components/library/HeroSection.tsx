import { cn } from "@/lib/utils";
import Button from "./Button";

export interface HeroSectionProps {
  headline: string;
  subheadline?: string;
  ctaLabel?: string;
  onCtaClick?: () => void;
  imageSrc?: string;
  className?: string;
}

/**
 * HeroSection Component
 * 
 * A prominent hero section with headline, subheadline, CTA, and optional image
 */
export default function HeroSection({
  headline,
  subheadline,
  ctaLabel = "Get Started",
  onCtaClick,
  imageSrc,
  className,
}: HeroSectionProps) {
  return (
    <section className={cn("py-20 px-4", className)}>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
            {headline}
          </h1>
          {subheadline && (
            <p className="text-xl text-muted-foreground">
              {subheadline}
            </p>
          )}
          {ctaLabel && (
            <Button onClick={onCtaClick} size="lg">
              {ctaLabel}
            </Button>
          )}
        </div>
        {imageSrc && (
          <div className="rounded-3xl overflow-hidden">
            <img src={imageSrc} alt="Hero" className="w-full h-auto" />
          </div>
        )}
      </div>
    </section>
  );
}
