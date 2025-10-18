import { useNavigate } from "react-router-dom";
import OnboardingProgress from "@/components/library/OnboardingProgress";
import Button from "@/components/library/Button";
import livinLogo from "@/assets/livin-logo.webp";
import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Onboarding Step 6
 * 
 * Comparison table showing Livin's value proposition
 */
export default function OnboardingStep6() {
  const navigate = useNavigate();

  const comparisonData = [
    {
      category: "Cost per meal",
      deliveryApps: "$15-25",
      diningOut: "$20-35",
      cooking: "$8-12",
      livin: "$10-15",
      livinHighlight: true
    },
    {
      category: "Healthy options",
      deliveryApps: "Limited",
      diningOut: "Limited",
      cooking: "Yes",
      livin: "Yes",
      livinCheckmark: true
    },
    {
      category: "Your time",
      deliveryApps: "30+ min wait",
      diningOut: "2+ hours",
      cooking: "2+ hours",
      livin: "Zero",
      livinHighlight: true
    },
    {
      category: "Cleanup",
      deliveryApps: "Minimal",
      diningOut: "None",
      cooking: "30+ min",
      livin: "Zero",
      livinCheckmark: true
    },
    {
      category: "Quality",
      deliveryApps: "Variable",
      diningOut: "Good",
      cooking: "Variable",
      livin: "Chef-quality",
      livinHighlight: true
    }
  ];

  const handleNext = () => {
    // TODO: Navigate to final step or completion
    console.log("Continuing to completion...");
    // navigate("/onboarding/complete");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Progress Bar */}
      <OnboardingProgress currentStep={5} totalSteps={5} />

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
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-8 md:mb-10 leading-tight">
            Livin is an affordable and easy way to eat healthy throughout the week
          </h1>

          {/* Comparison Table */}
          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="p-4 text-left font-semibold text-foreground border-b-2 border-muted"></th>
                  <th className="p-4 text-center font-semibold text-foreground border-b-2 border-muted">Delivery Apps</th>
                  <th className="p-4 text-center font-semibold text-foreground border-b-2 border-muted">Dining Out</th>
                  <th className="p-4 text-center font-semibold text-foreground border-b-2 border-muted">Cooking</th>
                  <th className="p-4 text-center font-bold text-primary-foreground bg-primary border-b-2 border-primary rounded-t-xl">Livin</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className="border-b border-muted">
                    <td className="p-4 font-semibold text-foreground">{row.category}</td>
                    <td className="p-4 text-center text-muted-foreground">{row.deliveryApps}</td>
                    <td className="p-4 text-center text-muted-foreground">{row.diningOut}</td>
                    <td className="p-4 text-center text-muted-foreground">{row.cooking}</td>
                    <td className={cn(
                      "p-4 text-center font-semibold bg-primary/10",
                      index === comparisonData.length - 1 && "rounded-b-xl"
                    )}>
                      {row.livinCheckmark ? (
                        <div className="flex justify-center">
                          <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                            <Check className="w-4 h-4 text-primary-foreground" strokeWidth={3} />
                          </div>
                        </div>
                      ) : (
                        <span className="text-foreground">{row.livin}</span>
                      )}
                    </td>
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
