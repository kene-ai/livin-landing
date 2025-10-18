import { useNavigate } from "react-router-dom";
import OnboardingProgress from "@/components/library/OnboardingProgress";
import Button from "@/components/library/Button";
import livinLogo from "@/assets/livin-logo.webp";
import { Rocket, Calendar } from "lucide-react";

/**
 * Onboarding Step 15
 * 
 * Availability confirmation screen
 */
export default function OnboardingStep15() {
  const navigate = useNavigate();

  const benefits = [
    {
      icon: Rocket,
      text: "Book with as little as 48 hours notice"
    },
    {
      icon: Calendar,
      text: "You'll pick your exact date & time after signup"
    }
  ];

  const handleNext = () => {
    navigate("/onboarding/step-16");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Progress Bar */}
      <OnboardingProgress currentStep={5} totalSteps={5} />

      {/* Main Content */}
      <div className="pt-8 pb-12 px-6 md:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Logo */}
          <div className="mb-8 md:mb-12">
            <img 
              src={livinLogo} 
              alt="Livin" 
              className="h-8 md:h-10"
            />
          </div>

          {/* Header */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-12 md:mb-16 leading-tight">
            Great news! We have chefs available this week in Atlanta
          </h1>

          {/* Benefits with Icons */}
          <div className="space-y-8 mb-12">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-xl md:text-2xl text-foreground font-medium pt-2">
                    {benefit.text}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Next Button */}
          <div className="flex justify-end">
            <Button 
              variant="primary" 
              size="lg"
              onClick={handleNext}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
