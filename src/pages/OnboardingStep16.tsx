import { useNavigate } from "react-router-dom";
import OnboardingProgress from "@/components/library/OnboardingProgress";
import Button from "@/components/library/Button";
import livinLogo from "@/assets/livin-logo.webp";
import { Check } from "lucide-react";

/**
 * Onboarding Step 16
 * 
 * Educational screen about how Livin subscription works
 */
export default function OnboardingStep16() {
  const navigate = useNavigate();

  const benefits = [
    "Weekly or monthly chef visits to your home",
    "Fresh, customized meals prepared in your kitchen",
    "All groceries included in your plan",
    "Chef handles shopping, cooking, and cleanup",
    "Meals stored in your fridge, ready when you are",
    "Flexible plans that fit your lifestyle",
    "Cancel or pause anytime—no long-term commitment",
  ];

  const handleNext = () => {
    navigate("/onboarding/step-17");
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Progress Bar */}
      <OnboardingProgress currentStep={5} totalSteps={6} />

      {/* Main Content */}
      <div className="pt-8 px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-12">
            <img 
              src={livinLogo} 
              alt="Livin" 
              className="h-8 md:h-10"
            />
          </div>

          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              How Livin Works
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Your personal chef service made simple, transparent, and flexible
            </p>
          </div>

          {/* Benefits List */}
          <div className="mb-12 space-y-6 max-w-2xl mx-auto">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-4 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <p className="text-base md:text-lg text-foreground">
                  {benefit}
                </p>
              </div>
            ))}
          </div>

          {/* Pricing Transparency */}
          <div className="mb-12 p-8 rounded-3xl bg-primary/5 border-2 border-primary/20 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-4 text-center">
              Simple, Transparent Pricing
            </h2>
            <p className="text-base md:text-lg text-muted-foreground text-center mb-6">
              Your subscription includes everything: the chef's time, all groceries, containers, and cleanup. No hidden fees, no surprises.
            </p>
            <p className="text-base md:text-lg text-foreground text-center font-semibold">
              What you see is what you pay—every time.
            </p>
          </div>

          {/* CTA */}
          <div className="flex justify-center">
            <Button
              variant="primary"
              size="lg"
              onClick={handleNext}
              className="px-12"
            >
              See Pricing Plans
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
