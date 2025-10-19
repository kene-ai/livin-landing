import { useNavigate, useLocation } from "react-router-dom";
import OnboardingProgress from "@/components/library/OnboardingProgress";
import Button from "@/components/library/Button";
import livinLogo from "@/assets/livin-logo.webp";
import chefCookingImage from "@/assets/chef-cooking-home.jpg";
import { Rocket, Calendar, PartyPopper } from "lucide-react";

/**
 * Onboarding Step 4
 * 
 * Reinforcement screen based on selected occasions
 */
export default function OnboardingStep4() {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedOccasions = location.state?.selectedOccasions || [];

  // Dynamic subheader based on selected occasions
  const getOccasionText = () => {
    const occasionMap: Record<string, string> = {
      "weekly-meal-prep": "weekly meal prep",
      "life-gets-crazy": "those busy, chaotic weeks",
      "hosting-guests": "dinner parties and special gatherings",
      "date-nights": "romantic date nights at home"
    };

    const texts = selectedOccasions.map((occ: string) => occasionMap[occ]).filter(Boolean);
    
    if (texts.length === 0) return "all your meal needs";
    if (texts.length === 1) return texts[0];
    if (texts.length === 2) return `${texts[0]} and ${texts[1]}`;
    
    const lastText = texts[texts.length - 1];
    const otherTexts = texts.slice(0, -1).join(", ");
    return `${otherTexts}, and ${lastText}`;
  };

  const handleNext = () => {
    navigate("/onboarding/step-5");
  };

  const benefits = [
    {
      icon: Rocket,
      text: "Book with as little as 48 hours notice"
    },
    {
      icon: Calendar,
      text: "One-time service or recurring—your choice"
    },
    {
      icon: PartyPopper,
      text: "From intimate dinners to feeding 20 guests"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Progress Bar */}
      <OnboardingProgress currentStep={4} totalSteps={5} />

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
          <h1 className="text-lg md:text-xl lg:text-2xl font-serif font-bold text-foreground mb-8 md:mb-10 leading-tight">
            Livin chefs show up whenever you need them most
          </h1>

          {/* Image */}
          <div className="mb-8 md:mb-10 rounded-3xl overflow-hidden max-w-md">
            <img 
              src={chefCookingImage} 
              alt="Chef cooking in home kitchen" 
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Dynamic Subheader */}
          <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-8">
            Get customized meals for {getOccasionText()}
          </h2>

          {/* Benefits with Icons */}
          <div className="space-y-6 mb-10">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-lg md:text-xl text-foreground font-medium pt-0.5">
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
