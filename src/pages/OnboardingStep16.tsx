import { useState } from "react";
import { useNavigate } from "react-router-dom";
import OnboardingProgress from "@/components/library/OnboardingProgress";
import Button from "@/components/library/Button";
import OnboardingOption from "@/components/library/OnboardingOption";
import livinLogo from "@/assets/livin-logo.webp";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface PricingPlan {
  id: string;
  name: string;
  weeklyPrice: number;
  monthlyPrice: number;
  dishes: number;
  plates: number;
  popular?: boolean;
}

/**
 * Onboarding Step 16
 * 
 * Pricing plan selection
 */
export default function OnboardingStep16() {
  const navigate = useNavigate();
  const [frequency, setFrequency] = useState<"weekly" | "monthly">("weekly");
  const [groceryType, setGroceryType] = useState<"standard" | "organic">("standard");
  const [selectedPlan, setSelectedPlan] = useState<string>("");

  const plans: PricingPlan[] = [
    {
      id: "lite",
      name: "Lite",
      weeklyPrice: 185,
      monthlyPrice: 185,
      dishes: 2,
      plates: 4,
    },
    {
      id: "plus",
      name: "Plus",
      weeklyPrice: 248,
      monthlyPrice: 248,
      dishes: 3,
      plates: 6,
    },
    {
      id: "core",
      name: "Core",
      weeklyPrice: 301,
      monthlyPrice: 301,
      dishes: 4,
      plates: 8,
      popular: true,
    },
    {
      id: "premier",
      name: "Premier",
      weeklyPrice: 590,
      monthlyPrice: 590,
      dishes: 10,
      plates: 20,
    },
  ];

  const getPrice = (plan: PricingPlan) => {
    const basePrice = frequency === "weekly" ? plan.weeklyPrice : plan.monthlyPrice;
    const groceryCost = groceryType === "organic" ? 30 : 0;
    return basePrice + groceryCost;
  };

  const getPricePerPlate = (plan: PricingPlan) => {
    const totalPrice = getPrice(plan);
    return Math.round(totalPrice / plan.plates);
  };

  const handleContinue = () => {
    if (selectedPlan) {
      console.log("Selected plan:", { plan: selectedPlan, frequency, groceryType });
      // navigate("/onboarding/checkout");
    }
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Progress Bar */}
      <OnboardingProgress currentStep={5} totalSteps={5} />

      {/* Main Content */}
      <div className="pt-8 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Logo */}
          <div className="mb-12">
            <img 
              src={livinLogo} 
              alt="Livin" 
              className="h-8 md:h-10"
            />
          </div>

          {/* Header */}
          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Choose your plan
            </h1>
            <p className="text-lg text-muted-foreground">
              All plans include: Chef service • Groceries • Cleanup • Storage containers
            </p>
          </div>

          {/* Frequency Selection */}
          <div className="mb-10">
            <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
              How often would you like your Livin service?
            </h2>
            <div className="grid md:grid-cols-2 gap-4 max-w-2xl">
              <OnboardingOption
                value="weekly"
                label="Once a week"
                selected={frequency === "weekly"}
                onClick={() => setFrequency("weekly")}
              />
              <OnboardingOption
                value="monthly"
                label="Once a month"
                selected={frequency === "monthly"}
                onClick={() => setFrequency("monthly")}
              />
            </div>
          </div>

          {/* Grocery Type Selection */}
          <div className="mb-12">
            <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
              What kind of groceries would you like?
            </h2>
            <div className="grid md:grid-cols-2 gap-4 max-w-2xl">
              <OnboardingOption
                value="standard"
                label="Standard groceries"
                selected={groceryType === "standard"}
                onClick={() => setGroceryType("standard")}
              />
              <OnboardingOption
                value="organic"
                label="Organic groceries (+$30)"
                selected={groceryType === "organic"}
                onClick={() => setGroceryType("organic")}
              />
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={cn(
                  "relative rounded-3xl border-2 p-6 space-y-4 transition-all duration-200 cursor-pointer hover:shadow-lg text-center",
                  selectedPlan === plan.id
                    ? "border-primary bg-primary/5"
                    : "border-border bg-card hover:border-primary/50"
                )}
                onClick={() => setSelectedPlan(plan.id)}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                    ⭐ MOST POPULAR
                  </Badge>
                )}

                {/* Plan Name */}
                <h3 className="text-2xl font-bold text-foreground">
                  {plan.name}
                </h3>

                {/* Price */}
                <div className="text-3xl font-bold text-primary">
                  ${getPrice(plan)}
                  <span className="text-base text-muted-foreground font-normal">
                    {" "}per {frequency === "weekly" ? "week" : "month"}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-foreground">
                  Livin chef cooks in your home once a {frequency === "weekly" ? "week" : "month"}
                </p>

                {/* Details */}
                <div className="space-y-1 text-foreground">
                  <p className="text-base">
                    {plan.dishes} different dishes • {plan.plates} total plates per {frequency === "weekly" ? "week" : "month"}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    ~${getPricePerPlate(plan)}/plate
                  </p>
                </div>

                {/* Select Button */}
                <Button
                  variant={selectedPlan === plan.id ? "primary" : "outline"}
                  size="md"
                  className="w-full"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedPlan(plan.id);
                  }}
                >
                  Select Plan
                </Button>
              </div>
            ))}
          </div>

          {/* Fine Print */}
          <p className="text-sm text-muted-foreground text-center mb-8">
            This is just a preference—you can change anytime
          </p>

          {/* Continue Button */}
          <div className="flex justify-center">
            <Button
              variant="primary"
              size="lg"
              onClick={handleContinue}
              disabled={!selectedPlan}
              className="px-12"
            >
              Continue to Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
