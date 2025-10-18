import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

export interface OnboardingCheckboxProps {
  value: string;
  label: string;
  selected: boolean;
  onClick: () => void;
  className?: string;
}

/**
 * OnboardingCheckbox Component
 * 
 * A large, tappable card with checkbox for multi-selection in onboarding
 */
export default function OnboardingCheckbox({
  value,
  label,
  selected,
  onClick,
  className,
}: OnboardingCheckboxProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "w-full p-5 md:p-6 rounded-2xl border-2 transition-all duration-200",
        "text-left hover:shadow-md",
        selected
          ? "border-primary bg-primary/5"
          : "border-muted bg-background hover:border-muted-foreground/30",
        className
      )}
    >
      <div className="flex items-center gap-4">
        <div className={cn(
          "w-6 h-6 rounded border-2 flex items-center justify-center flex-shrink-0",
          selected ? "border-primary bg-primary" : "border-muted-foreground"
        )}>
          {selected && (
            <Check className="w-4 h-4 text-primary-foreground" strokeWidth={3} />
          )}
        </div>
        <span className="text-base md:text-lg text-foreground font-medium">
          {label}
        </span>
      </div>
    </button>
  );
}
