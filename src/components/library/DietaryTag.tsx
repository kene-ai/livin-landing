import { cn } from "@/lib/utils";

export interface DietaryTagProps {
  label: string;
  variant?: "default" | "accent";
  className?: string;
}

/**
 * DietaryTag Component
 * 
 * Small badge for dietary information (Vegan, Gluten-Free, etc.)
 */
export default function DietaryTag({
  label,
  variant = "default",
  className,
}: DietaryTagProps) {
  return (
    <span className={cn(
      "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium",
      variant === "accent" ? "bg-accent text-accent-foreground" : "bg-secondary text-secondary-foreground",
      className
    )}>
      {label}
    </span>
  );
}
