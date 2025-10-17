import { cn } from "@/lib/utils";

export interface TLDRSectionProps {
  title?: string;
  points: string[];
  className?: string;
}

/**
 * TLDRSection Component
 * 
 * A quick summary section with bullet points
 */
export default function TLDRSection({
  title = "TL;DR",
  points,
  className,
}: TLDRSectionProps) {
  return (
    <div className={cn("rounded-3xl bg-accent p-8 space-y-4", className)}>
      <h3 className="text-2xl font-bold text-foreground">{title}</h3>
      <ul className="space-y-3">
        {points.map((point, index) => (
          <li key={index} className="flex items-start gap-3 text-foreground">
            <span className="text-primary text-xl font-bold">•</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
