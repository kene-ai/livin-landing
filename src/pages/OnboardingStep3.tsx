import { useState } from "react";
import { useNavigate } from "react-router-dom";
import OnboardingProgress from "@/components/library/OnboardingProgress";
import OnboardingCheckbox from "@/components/library/OnboardingCheckbox";
import Button from "@/components/library/Button";
import livinLogo from "@/assets/livin-logo.webp";

/**
 * Onboarding Step 3
 * 
 * Multi-select occasions for using a personal chef
 */
export default function OnboardingStep3() {
  const navigate = useNavigate();
  const [selectedOccasions, setSelectedOccasions] = useState<string[]>([]);

  const occasions = [
    { value: "weekly-meal-prep", label: "Weekly meal prep" },
    { value: "life-gets-crazy", label: "When life gets crazy (school events, work deadlines, recovery)" },
    { value: "hosting-guests", label: "Hosting guests or dinner parties" },
    { value: "date-nights", label: "Date nights at home" },
  ];

  const handleToggle = (value: string) => {
    setSelectedOccasions(prev => 
      prev.includes(value)
        ? prev.filter(v => v !== value)
        : [...prev, value]
    );
  };

  const handleNext = () => {
    navigate("/onboarding/step-4", { state: { selectedOccasions } });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Progress Bar */}
      <OnboardingProgress currentStep={3} totalSteps={5} />

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

          {/* Header - Serif Font */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-foreground mb-8 md:mb-10 leading-tight">
            What occasions would a personal chef help you and your family?
          </h1>

          {/* Checkbox Options */}
          <div className="space-y-4 mb-10">
            {occasions.map((occasion) => (
              <OnboardingCheckbox
                key={occasion.value}
                value={occasion.value}
                label={occasion.label}
                selected={selectedOccasions.includes(occasion.value)}
                onClick={() => handleToggle(occasion.value)}
              />
            ))}
          </div>

          {/* Next Button */}
          <div className="flex justify-end">
            <Button 
              variant="primary" 
              size="lg"
              onClick={handleNext}
              disabled={selectedOccasions.length === 0}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
