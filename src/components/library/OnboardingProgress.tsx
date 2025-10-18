import { cn } from "@/lib/utils";

export interface OnboardingProgressProps {
  currentStep: number;
  totalSteps: number;
  className?: string;
}

/**
 * OnboardingProgress Component
 * 
 * Fixed progress bar at the top of onboarding screens
 * Shows visual progress without text or numbers
 */
export default function OnboardingProgress({ 
  currentStep, 
  totalSteps, 
  className 
}: OnboardingProgressProps) {
  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <div className={cn("fixed top-0 left-0 right-0 z-50 bg-background", className)}>
      <div className="h-1 bg-muted">
        <div 
          className="h-full bg-primary transition-all duration-500 ease-out"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
    </div>
  );
}
