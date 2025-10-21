import { useNavigate, useLocation } from "react-router-dom";
import OnboardingProgress from "@/components/library/OnboardingProgress";
import Button from "@/components/library/Button";
import livinLogo from "@/assets/livin-logo.webp";
import { Check } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

/**
 * Onboarding Step 2
 * 
 * Reinforcement/value proposition based on the user's selected reason
 */
export default function OnboardingStep2() {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedReason = location.state?.selectedReason || "save-time";

  // Dynamic content based on selected reason
  const contentMap: Record<string, {
    headline: string;
    benefits: string[];
    outcome: string;
  }> = {
    "save-time": {
      headline: "Livin saves you time and keeps you healthy",
      benefits: [
        "Meal planning & recipes",
        "All grocery shopping",
        "Cooking multiple meals in one session",
        "Complete cleanup"
      ],
      outcome: "You get: 10+ hours back every week + healthy meals ready when you need them"
    },
    "healthier-meals": {
      headline: "Livin helps you feed your family healthier meals",
      benefits: [
        "Customized nutrition plans",
        "Fresh, whole ingredients",
        "Balanced, family-friendly recipes",
        "Portion control & variety"
      ],
      outcome: "You get: Peace of mind knowing your family eats nutritious, home-cooked meals daily"
    },
    "stop-wasting-money": {
      headline: "Livin saves you money and reduces food waste",
      benefits: [
        "No more expensive delivery fees",
        "Smart grocery shopping",
        "Batch cooking efficiency",
        "Zero food waste"
      ],
      outcome: "You get: Save $400+ monthly while eating better than takeout"
    },
    "try-new-recipes": {
      headline: "Livin brings culinary adventure to your table",
      benefits: [
        "Diverse global cuisines",
        "Chef-curated recipes",
        "New flavors every week",
        "Professional cooking techniques"
      ],
      outcome: "You get: Restaurant-quality meals and exciting new dishes without the work"
    },
    "manage-diet": {
      headline: "Livin helps you manage your specific dietary needs",
      benefits: [
        "Custom meal plans for your diet",
        "Allergen-free & restriction-friendly recipes",
        "Nutritionist-approved meals",
        "Consistent portion control"
      ],
      outcome: "You get: Stress-free meal management that fits your dietary requirements perfectly"
    }
  };

  const content = contentMap[selectedReason] || contentMap["save-time"];

  const handleContinue = () => {
    navigate("/onboarding/step-3");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Progress Bar */}
      <OnboardingProgress currentStep={2} totalSteps={15} />

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

          {/* Header - Large Serif Font */}
          <h1 className="text-lg md:text-xl lg:text-2xl font-serif font-bold text-foreground mb-8 md:mb-10 leading-tight">
            {content.headline}
          </h1>

          {/* Image */}
          <div className="mb-8 md:mb-10 rounded-3xl overflow-hidden max-w-md">
            <AspectRatio ratio={6 / 5}>
              <img 
                src="https://images.squarespace-cdn.com/content/v1/675e3993212d3654af70cd12/1734365622541-6JE453E18W7JHX4Y7WPX/2F2A0078_websize+%282%29.jpg?format=2500w" 
                alt="Couple enjoying healthy dinner at home" 
                className="w-full h-full object-cover"
                style={{ objectPosition: "50% 35%" }}
                loading="lazy"
              />
            </AspectRatio>
          </div>

          {/* Benefits with Checkmarks */}
          <div className="space-y-4 mb-8">
            {content.benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-primary" strokeWidth={3} />
                </div>
                <span className="text-lg md:text-xl text-foreground font-medium">
                  {benefit}
                </span>
              </div>
            ))}
          </div>

          {/* Highlighted Outcome Card */}
          <div className="bg-secondary/30 border-2 border-primary/20 rounded-2xl p-6 md:p-8 mb-10">
            <p className="text-lg md:text-xl font-semibold text-foreground">
              {content.outcome}
            </p>
          </div>

          {/* Next Button */}
          <div className="flex justify-end">
            <Button 
              variant="primary" 
              size="lg"
              onClick={handleContinue}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
