import { useState } from "react";
import { useNavigate } from "react-router-dom";
import OnboardingProgress from "@/components/library/OnboardingProgress";
import OnboardingOption from "@/components/library/OnboardingOption";
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
  const [selectedReason, setSelectedReason] = useState<string>("");

  const reasons = [
    { value: "save-time", label: "Save time (no shopping, cooking, or cleanup)" },
    { value: "healthier-meals", label: "Feed my family healthier meals" },
    { value: "stop-wasting-money", label: "Stop wasting money on delivery/takeout" },
    { value: "try-new-recipes", label: "Try new recipes and cuisines" },
    { value: "manage-diet", label: "Help me manage my specific diet" },
  ];

  const handleSelect = (value: string) => {
    setSelectedReason(value);
    // Navigate to next step after a brief delay
    setTimeout(() => {
      navigate("/onboarding/step-2", { state: { selectedReason: value } });
    }, 300);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Progress Bar */}
      <OnboardingProgress currentStep={1} totalSteps={5} />

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
            What is your top reason for hiring a personal chef?
          </h1>

          {/* Options */}
          <div className="space-y-4">
            {reasons.map((reason) => (
              <OnboardingOption
                key={reason.value}
                value={reason.value}
                label={reason.label}
                selected={selectedReason === reason.value}
                onClick={() => handleSelect(reason.value)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
