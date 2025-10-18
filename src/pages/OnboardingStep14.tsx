import { useState } from "react";
import { useNavigate } from "react-router-dom";
import OnboardingProgress from "@/components/library/OnboardingProgress";
import OnboardingOption from "@/components/library/OnboardingOption";
import livinLogo from "@/assets/livin-logo.webp";

/**
 * Onboarding Step 14
 * 
 * Scheduling preference
 */
export default function OnboardingStep14() {
  const navigate = useNavigate();
  const [selectedTiming, setSelectedTiming] = useState<string>("");

  const timingOptions = [
    { value: "this-week", label: "This week" },
    { value: "next-week", label: "Next week" },
    { value: "this-month", label: "This month" },
    { value: "not-sure", label: "Not sure yet" },
  ];

  const handleSelect = (value: string) => {
    setSelectedTiming(value);
    // Navigate to next step after a brief delay
    setTimeout(() => {
      navigate("/onboarding/step-15", { state: { selectedTiming: value } });
    }, 300);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Progress Bar */}
      <OnboardingProgress currentStep={5} totalSteps={5} />

      {/* Main Content */}
      <div className="pt-8 pb-12 px-6 md:px-8">
        <div className="max-w-2xl mx-auto">
          {/* Logo */}
          <div className="mb-8 md:mb-12">
            <img 
              src={livinLogo} 
              alt="Livin" 
              className="h-8 md:h-10"
            />
          </div>

          {/* Header */}
          <h1 className="text-base md:text-lg lg:text-xl font-serif font-bold text-foreground mb-8 md:mb-10 leading-tight">
            When are you hoping to schedule your first Livin service?
          </h1>

          {/* Options */}
          <div className="space-y-4">
            {timingOptions.map((option) => (
              <OnboardingOption
                key={option.value}
                value={option.value}
                label={option.label}
                selected={selectedTiming === option.value}
                onClick={() => handleSelect(option.value)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
