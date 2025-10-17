import { cn } from "@/lib/utils";

export interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

/**
 * SectionHeading Component
 * 
 * Reusable section heading with optional subtitle
 */
export default function SectionHeading({
  title,
  subtitle,
  centered = false,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("space-y-4", centered && "text-center", className)}>
      <h2 className="text-4xl md:text-5xl font-bold text-foreground">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
