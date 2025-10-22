import { useState } from "react";
import { useNavigate } from "react-router-dom";
import OnboardingProgress from "@/components/library/OnboardingProgress";
import OnboardingCheckbox from "@/components/library/OnboardingCheckbox";
import Button from "@/components/library/Button";
import livinLogo from "@/assets/livin-logo.webp";

/**
 * Onboarding Step 7
 * 
 * Meal challenge selection
 */
export default function OnboardingStep7() {
  const navigate = useNavigate();
  const [selectedChallenges, setSelectedChallenges] = useState<string[]>([]);

  const challenges = [
    { value: "picky-eaters", label: "Picky eaters won't try new things" },
    { value: "boring-meals", label: "Same boring meals on repeat" },
    { value: "dont-know-healthy", label: "Don't know what's healthy" },
    { value: "takes-too-long", label: "Takes too long to plan" },
    { value: "dietary-restrictions", label: "Dietary restrictions limit options" },
    { value: "everyone-different", label: "Everyone wants something different" },
  ];

  const handleToggle = (value: string) => {
    setSelectedChallenges(prev => 
      prev.includes(value)
        ? prev.filter(v => v !== value)
        : [...prev, value]
    );
  };

  const handleNext = () => {
    navigate("/onboarding/step-8", { state: { selectedChallenges } });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Progress Bar */}
      <OnboardingProgress currentStep={7} totalSteps={15} />

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
            What are your biggest challenges choosing meals for your family?
          </h1>

          {/* Options */}
          <div className="space-y-4">
            {challenges.map((challenge) => (
              <OnboardingCheckbox
                key={challenge.value}
                value={challenge.value}
                label={challenge.label}
                selected={selectedChallenges.includes(challenge.value)}
                onClick={() => handleToggle(challenge.value)}
              />
            ))}
          </div>

          {/* Next Button */}
          <div className="flex justify-end mt-10">
            <Button 
              variant="primary" 
              size="lg"
              onClick={handleNext}
              disabled={selectedChallenges.length === 0}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
