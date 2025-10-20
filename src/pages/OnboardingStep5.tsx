import { useState } from "react";
import { useNavigate } from "react-router-dom";
import OnboardingProgress from "@/components/library/OnboardingProgress";
import Button from "@/components/library/Button";
import livinLogo from "@/assets/livin-logo.webp";
import { Input } from "@/components/ui/input";

/**
 * Onboarding Step 5
 * 
 * Zip code collection and service area check
 */
export default function OnboardingStep5() {
  const navigate = useNavigate();
  const [zipCode, setZipCode] = useState("");
  const [status, setStatus] = useState<"initial" | "checking" | "in-service">("initial");

  // Check service area - always returns in-service
  const checkServiceArea = async (zip: string) => {
    setStatus("checking");
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    
    setStatus("in-service");
  };

  const handleCheckZip = () => {
    if (zipCode.length === 5) {
      checkServiceArea(zipCode);
    }
  };

  const handleContinue = () => {
    navigate("/onboarding/step-6");
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

          {status === "initial" && (
            <>
              {/* Header */}
              <h1 className="text-lg md:text-xl lg:text-2xl font-serif font-bold text-foreground mb-8 md:mb-10 leading-tight">
                Let's see if we're in your area!
              </h1>

              {/* Zip Code Input */}
              <div className="mb-8">
                <Input
                  type="text"
                  placeholder="Enter your zip code"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value.replace(/\D/g, "").slice(0, 5))}
                  className="h-16 text-lg rounded-2xl border-2 border-primary/30 focus:border-primary"
                  maxLength={5}
                />
              </div>

              {/* Continue Button */}
              <div className="flex justify-end">
                <Button 
                  variant="primary" 
                  size="lg"
                  onClick={handleCheckZip}
                  disabled={zipCode.length !== 5}
                >
                  Continue
                </Button>
              </div>
            </>
          )}

          {status === "checking" && (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">Checking availability...</p>
            </div>
          )}

          {status === "in-service" && (
            <>
              {/* Success Message */}
              <div className="mb-8 p-8 bg-primary/10 rounded-3xl border-2 border-primary/20">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
                  Great news! We serve your area.
                </h2>
                <p className="text-lg text-muted-foreground">
                  Let's continue setting up your account.
                </p>
              </div>

              {/* Continue Button */}
              <div className="flex justify-end">
                <Button 
                  variant="primary" 
                  size="lg"
                  onClick={handleContinue}
                >
                  Continue
                </Button>
              </div>
            </>
          )}

        </div>
      </div>
    </div>
  );
}
