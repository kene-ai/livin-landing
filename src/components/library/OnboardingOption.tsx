import { cn } from "@/lib/utils";

export interface OnboardingOptionProps {
  value: string;
  label: string;
  selected: boolean;
  onClick: () => void;
  className?: string;
}

/**
 * OnboardingOption Component
 * 
 * Large, easy-to-tap card with radio button for onboarding selections
 */
export default function OnboardingOption({ 
  value, 
  label, 
  selected, 
  onClick,
  className 
}: OnboardingOptionProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "w-full text-left px-6 py-5 rounded-2xl border-2 transition-all duration-200",
        "hover:border-primary/60 hover:bg-primary/5",
        selected 
          ? "border-primary bg-primary/10" 
          : "border-border bg-card",
        className
      )}
    >
      <span className="text-base md:text-lg text-foreground font-medium">
        {label}
      </span>
    </button>
  );
}
