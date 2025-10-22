import { useNavigate } from "react-router-dom";
import OnboardingProgress from "@/components/library/OnboardingProgress";
import Button from "@/components/library/Button";
import livinLogo from "@/assets/livin-logo.webp";
import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Onboarding Step 4
 * 
 * Comparison table showing Livin's value proposition
 */
export default function OnboardingStep4() {
  const navigate = useNavigate();

  const comparisonData = [
    {
      category: "Cost per meal",
      deliveryApps: "$25-40",
      diningOut: "$30+",
      cooking: "$12 + time",
      livin: "starting at $30"
    },
    {
      category: "Healthy options",
      deliveryApps: "Limited",
      diningOut: "Hit or miss",
      cooking: "Yes",
      livin: "30+ meals"
    },
    {
      category: "Cooking time",
      deliveryApps: "0 min",
      diningOut: "60-90 min",
      cooking: "120+ min",
      livin: "0 min"
    },
    {
      category: "Quality",
      deliveryApps: "Reheated",
      diningOut: "Variable",
      cooking: "Depends",
      livin: "Chef-made"
    }
  ];

  const handleNext = () => {
    navigate("/onboarding/step-5");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Progress Bar */}
      <OnboardingProgress currentStep={4} totalSteps={15} />

      {/* Main Content */}
      <div className="pt-8 pb-12 px-6 md:px-8">
        <div className="max-w-5xl mx-auto">
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
            Livin is an affordable and easy way to eat healthy throughout the week
          </h1>

          {/* Comparison Table */}
          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="p-4 text-left font-semibold text-foreground border-b-2 border-muted"></th>
                  <th className="p-4 text-center font-bold text-primary-foreground bg-primary border-b-2 border-primary rounded-t-xl">Livin</th>
                  <th className="p-4 text-center font-semibold text-foreground border-b-2 border-muted">Delivery Apps</th>
                  <th className="p-4 text-center font-semibold text-foreground border-b-2 border-muted">Dining Out</th>
                  <th className="p-4 text-center font-semibold text-foreground border-b-2 border-muted">Cooking</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className="border-b border-muted">
                    <td className="p-4 font-semibold text-foreground">{row.category}</td>
                    <td className={cn(
                      "p-4 text-center font-semibold bg-primary/10",
                      index === comparisonData.length - 1 && "rounded-b-xl"
                    )}>
                      <span className="text-foreground">{row.livin}</span>
                    </td>
                    <td className="p-4 text-center text-muted-foreground">{row.deliveryApps}</td>
                    <td className="p-4 text-center text-muted-foreground">{row.diningOut}</td>
                    <td className="p-4 text-center text-muted-foreground">{row.cooking}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Summary Text */}
          <div className="mb-10 p-6 bg-secondary/30 rounded-2xl">
            <p className="text-lg md:text-xl font-bold text-foreground text-center">
              Get chef-quality meals at home for less than dining out—without the cooking, shopping, or cleanup
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
