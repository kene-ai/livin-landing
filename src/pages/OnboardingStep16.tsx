import { useNavigate } from "react-router-dom";
import OnboardingProgress from "@/components/library/OnboardingProgress";
import Button from "@/components/library/Button";
import livinLogo from "@/assets/livin-logo.webp";
import { Calendar, Utensils, ShoppingBasket } from "lucide-react";

/**
 * Onboarding Step 16
 * 
 * Subscription customization overview
 */
export default function OnboardingStep16() {
  const navigate = useNavigate();

  const customizationOptions = [
    {
      icon: Calendar,
      title: "Weekly or monthly service",
      description: "Livin chefs can come to your house once a week or once a month"
    },
    {
      icon: Utensils,
      title: "Custom number of servings",
      description: "We'll recommend the right amount based on your family size."
    },
    {
      icon: ShoppingBasket,
      title: "Standard or organic groceries",
      description: "The cost of groceries is included in your plan"
    }
  ];

  const handleNext = () => {
    navigate("/onboarding/step-17");
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
          <div className="mb-10 md:mb-12">
            <h1 className="text-lg md:text-xl lg:text-2xl font-serif font-bold text-foreground mb-4 leading-tight">
              How Livin subscriptions work
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Livin subscriptions start at $150 per month. Here's how you can customize them.
            </p>
          </div>

          {/* Customization Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {customizationOptions.map((option, index) => {
              const IconComponent = option.icon;
              return (
                <div key={index} className="bg-card border border-border rounded-3xl p-6 md:p-8 space-y-4">
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">
                      {option.title}
                    </h3>
                  </div>
                  <div className="space-y-2 text-center">
                    <p className="text-sm md:text-base text-muted-foreground">
                      {option.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Note */}
          <div className="bg-accent/30 rounded-3xl p-6 md:p-8 mb-8">
            <p className="text-base md:text-lg text-foreground text-center">
              You'll always be able to choose your menu and chef each time you book a Livin service.
            </p>
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
