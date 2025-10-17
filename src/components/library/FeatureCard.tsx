import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

export interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

/**
 * FeatureCard Component
 * 
 * Card displaying a feature with icon, title, and description
 */
export default function FeatureCard({
  icon: Icon,
  title,
  description,
  className,
}: FeatureCardProps) {
  return (
    <div className={cn("p-8 rounded-3xl bg-card border border-border space-y-4", className)}>
      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
        <Icon className="w-7 h-7 text-primary" />
      </div>
      <h3 className="text-2xl font-bold text-foreground">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}
