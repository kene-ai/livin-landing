import { cn } from "@/lib/utils";

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface ProcessTimelineProps {
  steps: ProcessStep[];
  className?: string;
}

/**
 * ProcessTimeline Component
 * 
 * Displays a numbered timeline of process steps
 */
export default function ProcessTimeline({
  steps,
  className,
}: ProcessTimelineProps) {
  return (
    <div className={cn("space-y-8", className)}>
      {steps.map((step, index) => (
        <div key={index} className="flex gap-6 items-start">
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">
            {step.number}
          </div>
          <div className="space-y-2 flex-1">
            <h3 className="text-2xl font-bold text-foreground">{step.title}</h3>
            <p className="text-muted-foreground">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
