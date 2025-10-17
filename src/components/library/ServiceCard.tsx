import { cn } from "@/lib/utils";
import Button from "./Button";

export interface ServiceCardProps {
  title: string;
  price: string;
  features: string[];
  ctaLabel?: string;
  onCtaClick?: () => void;
  highlighted?: boolean;
  className?: string;
}

/**
 * ServiceCard Component
 * 
 * Pricing/service card with features list and CTA
 */
export default function ServiceCard({
  title,
  price,
  features,
  ctaLabel = "Choose Plan",
  onCtaClick,
  highlighted = false,
  className,
}: ServiceCardProps) {
  return (
    <div className={cn(
      "rounded-3xl p-8 space-y-6",
      highlighted ? "bg-primary text-primary-foreground border-2 border-primary" : "bg-card border border-border",
      className
    )}>
      <div className="space-y-2">
        <h3 className={cn("text-2xl font-bold", highlighted ? "text-primary-foreground" : "text-foreground")}>
          {title}
        </h3>
        <div className={cn("text-4xl font-bold", highlighted ? "text-primary-foreground" : "text-primary")}>
          {price}
        </div>
      </div>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className={cn("flex items-start gap-2", highlighted ? "text-primary-foreground" : "text-foreground")}>
            <span className="text-xl">✓</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button 
        onClick={onCtaClick} 
        variant={highlighted ? "secondary" : "primary"}
        className="w-full"
      >
        {ctaLabel}
      </Button>
    </div>
  );
}
