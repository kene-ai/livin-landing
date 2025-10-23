import { useState } from "react";
import { useNavigate } from "react-router-dom";
import OnboardingProgress from "@/components/library/OnboardingProgress";
import OnboardingCheckbox from "@/components/library/OnboardingCheckbox";
import Button from "@/components/library/Button";
import livinLogo from "@/assets/livin-logo.webp";

/**
 * Onboarding Page
 * 
 * Multi-step onboarding flow for new users
 * Step 1: Top reason for hiring a personal chef
 */
export default function Onboarding() {
  const navigate = useNavigate();
  const [selectedReasons, setSelectedReasons] = useState<string[]>([]);

  const reasons = [
    { value: "save-time", label: "Save time (no shopping, cooking, or cleanup)" },
    { value: "healthier-meals", label: "Feed my family healthier meals" },
    { value: "stop-wasting-money", label: "Stop wasting money on delivery/takeout" },
    { value: "try-new-recipes", label: "Try new recipes and cuisines" },
    { value: "manage-diet", label: "Help me manage my specific diet" },
  ];

  const handleToggle = (value: string) => {
    setSelectedReasons(prev => 
      prev.includes(value)
        ? prev.filter(v => v !== value)
        : [...prev, value]
    );
  };

  const handleNext = () => {
    navigate("/onboarding/step-2", { state: { selectedReasons } });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Progress Bar */}
      <OnboardingProgress currentStep={1} totalSteps={14} />

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
          <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-foreground mb-8 md:mb-10">
            What are your top reasons for hiring a personal chef?
          </h1>

          {/* Options */}
          <div className="space-y-4">
            {reasons.map((reason) => (
              <OnboardingCheckbox
                key={reason.value}
                value={reason.value}
                label={reason.label}
                selected={selectedReasons.includes(reason.value)}
                onClick={() => handleToggle(reason.value)}
              />
            ))}
          </div>

          {/* Next Button */}
          <div className="flex justify-end mt-10">
            <Button 
              variant="primary" 
              size="lg"
              onClick={handleNext}
              disabled={selectedReasons.length === 0}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
