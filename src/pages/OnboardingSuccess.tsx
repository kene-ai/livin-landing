import { useNavigate } from "react-router-dom";
import OnboardingProgress from "@/components/library/OnboardingProgress";
import Button from "@/components/library/Button";
import livinLogo from "@/assets/livin-logo.webp";

/**
 * Onboarding Success Page
 * 
 * Celebratory confirmation screen after completing onboarding
 */
export default function OnboardingSuccess() {
  const navigate = useNavigate();

  const handleContinue = () => {
    // Navigate to dashboard or home
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Progress Bar - 100% Complete */}
      <OnboardingProgress currentStep={20} totalSteps={20} />

      {/* Main Content */}
      <div className="pt-8 px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-16">
            <img 
              src={livinLogo} 
              alt="Livin" 
              className="h-8 md:h-10"
            />
          </div>

          {/* Success Message */}
          <div className="text-center space-y-12 py-16">
            {/* Emoji & Header */}
            <div className="space-y-6">
              <div className="text-8xl md:text-9xl">🎉</div>
              <h1 className="text-5xl md:text-7xl font-bold text-foreground" style={{ fontFamily: 'Georgia, serif' }}>
                Welcome to Livin!
              </h1>
            </div>

            {/* Subtext */}
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Set up your account and book your first service!
            </p>

            {/* CTA Button */}
            <div className="pt-8">
              <Button
                variant="primary"
                size="lg"
                onClick={handleContinue}
                className="px-16 py-6 text-xl shadow-2xl hover:scale-105 transform transition-all"
              >
                Let's eat!
              </Button>
            </div>

            {/* Additional Info */}
            <div className="pt-12 space-y-6 max-w-xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl mb-2">📅</div>
                  <p className="text-sm font-semibold text-foreground">Schedule</p>
                  <p className="text-xs text-muted-foreground">Pick your date & time</p>
                </div>
                <div>
                  <div className="text-4xl mb-2">🍽️</div>
                  <p className="text-sm font-semibold text-foreground">Menu</p>
                  <p className="text-xs text-muted-foreground">Choose your meals</p>
                </div>
                <div>
                  <div className="text-4xl mb-2">👨‍🍳</div>
                  <p className="text-sm font-semibold text-foreground">Chef</p>
                  <p className="text-xs text-muted-foreground">Meet your chef</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
