import { useState } from "react";
import { useNavigate } from "react-router-dom";
import OnboardingProgress from "@/components/library/OnboardingProgress";
import OnboardingCheckbox from "@/components/library/OnboardingCheckbox";
import Button from "@/components/library/Button";
import livinLogo from "@/assets/livin-logo.webp";

/**
 * Onboarding Step 5
 * 
 * Multi-select meal services used in the last month
 */
export default function OnboardingStep5() {
  const navigate = useNavigate();
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const services = [
    { value: "delivery-apps", label: "Delivery apps (DoorDash, Uber Eats, etc.)" },
    { value: "dining-out", label: "Dining out at restaurants" },
    { value: "fast-food", label: "Fast food / quick service" },
    { value: "meal-kits", label: "Meal kits (HelloFresh, Blue Apron, etc.)" },
    { value: "grocery-cooking", label: "Grocery shopping + cooking myself" },
  ];

  const handleToggle = (value: string) => {
    setSelectedServices(prev => 
      prev.includes(value)
        ? prev.filter(v => v !== value)
        : [...prev, value]
    );
  };

  const handleNext = () => {
    navigate("/onboarding/step-6", { state: { selectedServices } });
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

          {/* Header - Serif Font */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-8 md:mb-10 leading-tight">
            Which meal services have you used in the last month?
          </h1>

          {/* Checkbox Options */}
          <div className="space-y-4 mb-10">
            {services.map((service) => (
              <OnboardingCheckbox
                key={service.value}
                value={service.value}
                label={service.label}
                selected={selectedServices.includes(service.value)}
                onClick={() => handleToggle(service.value)}
              />
            ))}
          </div>

          {/* Next Button */}
          <div className="flex justify-end">
            <Button 
              variant="primary" 
              size="lg"
              onClick={handleNext}
              disabled={selectedServices.length === 0}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
