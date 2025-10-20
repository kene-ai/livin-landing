import { useState } from "react";
import { useNavigate } from "react-router-dom";
import OnboardingProgress from "@/components/library/OnboardingProgress";
import OnboardingCheckbox from "@/components/library/OnboardingCheckbox";
import Button from "@/components/library/Button";
import livinLogo from "@/assets/livin-logo.webp";

/**
 * Onboarding Step 11
 * 
 * Chef preferences selection
 */
export default function OnboardingStep11() {
  const navigate = useNavigate();
  const [selectedPreferences, setSelectedPreferences] = useState<string[]>([]);

  const preferences = [
    { value: "tons-of-experience", label: "Tons of experience" },
    { value: "great-with-kids", label: "Great with kids" },
    { value: "friendly-chatty", label: "Friendly & chatty" },
    { value: "calm-low-key", label: "Calm & low key" },
    { value: "creative-with-menus", label: "Creative with menus" },
    { value: "nutrition-focused", label: "Nutrition focused" },
  ];

  const handleToggle = (value: string) => {
    setSelectedPreferences(prev => 
      prev.includes(value)
        ? prev.filter(v => v !== value)
        : [...prev, value]
    );
  };

  const handleNext = () => {
    navigate("/onboarding/step-12", { state: { selectedPreferences } });
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
          <h1 className="text-lg md:text-xl lg:text-2xl font-serif font-bold text-foreground mb-8 md:mb-10 leading-tight">
            What do you look for in a personal chef to come cook in your home?
          </h1>

          {/* Checkbox Options */}
          <div className="space-y-4 mb-10">
            {preferences.map((preference) => (
              <OnboardingCheckbox
                key={preference.value}
                value={preference.value}
                label={preference.label}
                selected={selectedPreferences.includes(preference.value)}
                onClick={() => handleToggle(preference.value)}
              />
            ))}
          </div>

          {/* Next Button */}
          <div className="flex justify-end">
            <Button 
              variant="primary" 
              size="lg"
              onClick={handleNext}
              disabled={selectedPreferences.length === 0}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
