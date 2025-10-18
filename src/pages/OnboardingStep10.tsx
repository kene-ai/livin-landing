import { useState } from "react";
import { useNavigate } from "react-router-dom";
import OnboardingProgress from "@/components/library/OnboardingProgress";
import OnboardingOption from "@/components/library/OnboardingOption";
import livinLogo from "@/assets/livin-logo.webp";

/**
 * Onboarding Step 10
 * 
 * Meal challenge selection
 */
export default function OnboardingStep10() {
  const navigate = useNavigate();
  const [selectedChallenge, setSelectedChallenge] = useState<string>("");

  const challenges = [
    { value: "picky-eaters", label: "Picky eaters won't try new things" },
    { value: "boring-meals", label: "Same boring meals on repeat" },
    { value: "dont-know-healthy", label: "Don't know what's healthy" },
    { value: "takes-too-long", label: "Takes too long to plan" },
    { value: "dietary-restrictions", label: "Dietary restrictions limit options" },
    { value: "everyone-different", label: "Everyone wants something different" },
  ];

  const handleSelect = (value: string) => {
    setSelectedChallenge(value);
    // Navigate to next step after a brief delay
    setTimeout(() => {
      navigate("/onboarding/step-11", { state: { selectedChallenge: value } });
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
          <h1 className="text-lg md:text-xl lg:text-2xl font-serif font-bold text-foreground mb-8 md:mb-10 leading-tight">
            What's your biggest challenge choosing meals for your family?
          </h1>

          {/* Options */}
          <div className="space-y-4">
            {challenges.map((challenge) => (
              <OnboardingOption
                key={challenge.value}
                value={challenge.value}
                label={challenge.label}
                selected={selectedChallenge === challenge.value}
                onClick={() => handleSelect(challenge.value)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
