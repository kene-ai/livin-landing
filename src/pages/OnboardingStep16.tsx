import { useState } from "react";
import { useNavigate } from "react-router-dom";
import OnboardingProgress from "@/components/library/OnboardingProgress";
import Button from "@/components/library/Button";
import livinLogo from "@/assets/livin-logo.webp";
import { Input } from "@/components/ui/input";
import { Package, CreditCard, Calendar, Utensils } from "lucide-react";

/**
 * Onboarding Step 16
 * 
 * Subscription details and email capture
 */
export default function OnboardingStep16() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const subscriptionSections = [
    {
      icon: Package,
      title: "What's Included",
      points: [
        "Chef service: shopping, cooking, cleanup",
        "All groceries",
        "Storage containers & labeling"
      ]
    },
    {
      icon: CreditCard,
      title: "Simple Monthly Billing",
      points: [
        "Pay monthly—cancel anytime",
        "First charge today, then monthly on the 15th",
        "No hidden fees or penalties"
      ]
    },
    {
      icon: Calendar,
      title: "Flexible Scheduling",
      points: [
        "Book services with 48 hours notice",
        "Choose weekly, bi-weekly, or one-time services",
        "Reschedule or skip anytime"
      ]
    },
    {
      icon: Utensils,
      title: "Full Customization",
      points: [
        "New menu every week",
        "Pick your meals & chef before each service",
        "Dietary preferences & allergies respected"
      ]
    }
  ];

  const handleContinue = () => {
    if (email && email.includes("@")) {
      console.log("Email captured:", email);
      navigate("/onboarding/step-17");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Progress Bar */}
      <OnboardingProgress currentStep={5} totalSteps={5} />

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

          {/* Header */}
          <div className="mb-10 md:mb-12">
            <h1 className="text-lg md:text-xl lg:text-2xl font-serif font-bold text-foreground mb-4 leading-tight">
              How Livin Subscriptions Work
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Livin subscriptions start at $150 per month. No long-term commitments—cancel anytime.
            </p>
          </div>

          {/* Subscription Sections */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {subscriptionSections.map((section, index) => {
              const IconComponent = section.icon;
              return (
                <div key={index} className="bg-card border border-border rounded-3xl p-8 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">
                      {section.title}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {section.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="text-sm md:text-base text-muted-foreground">
                        • {point}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Visual Divider */}
          <div className="h-px bg-muted my-12" />

          {/* Email Capture Section */}
          <div className="bg-secondary/30 rounded-3xl p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Enter your email to get $20 off of your first month
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
            <div className="flex justify-end mb-4">
              <Button 
                variant="primary" 
                size="lg"
                onClick={handleContinue}
                disabled={!email || !email.includes("@")}
              >
                Continue
              </Button>
            </div>

            {/* Fine Print */}
            <p className="text-sm text-muted-foreground text-center">
              By continuing, you agree to receive updates about your Livin service. You can unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
