import { useState } from "react";
import { useNavigate } from "react-router-dom";
import OnboardingProgress from "@/components/library/OnboardingProgress";
import { Button } from "@/components/ui/button";
import livinLogo from "@/assets/livin-logo.webp";
import { Input } from "@/components/ui/input";
/**
 * Onboarding Step 13
 * 
 * Email capture for discount
 */
export default function OnboardingStep13() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleContinue = () => {
    if (email && email.includes("@")) {
      console.log("Email captured:", email);
      navigate("/onboarding/step-14");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Progress Bar */}
      <OnboardingProgress currentStep={13} totalSteps={14} />

      {/* Main Content */}
      <div className="pt-8 pb-12 px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8 md:mb-12">
            <img 
              src={livinLogo} 
              alt="Livin" 
              className="h-8 md:h-10"
            />
          </div>

          {/* Email Capture Section */}
          <div className="rounded-3xl p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Enter your email to get 20% off of your first month
            </h2>

            {/* Email Input */}
            <div className="mb-6">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-16 text-lg rounded-2xl border-2 border-primary/30 focus:border-primary"
              />
            </div>

            {/* Continue Button */}
            <div className="flex justify-end">
              <Button 
                variant="default" 
                size="lg"
                onClick={handleContinue}
                disabled={!email || !email.includes("@")}
              >
                Choose subscription
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
