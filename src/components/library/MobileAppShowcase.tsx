import { cn } from "@/lib/utils";

export interface MobileAppShowcaseProps {
  title: string;
  description: string;
  appScreenshots: string[];
  className?: string;
}

/**
 * MobileAppShowcase Component
 * 
 * Displays mobile app screenshots with description
 */
export default function MobileAppShowcase({
  title,
  description,
  appScreenshots,
  className,
}: MobileAppShowcaseProps) {
  return (
    <div className={cn("grid md:grid-cols-2 gap-12 items-center", className)}>
      <div className="space-y-6">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground">{title}</h2>
        <p className="text-lg text-muted-foreground">{description}</p>
      </div>
      <div className="flex justify-center gap-4">
        {appScreenshots.map((screenshot, index) => (
          <div key={index} className="w-64 rounded-3xl overflow-hidden shadow-2xl">
            <img src={screenshot} alt={`App screen ${index + 1}`} className="w-full h-auto" />
          </div>
        ))}
      </div>
    </div>
  );
}
