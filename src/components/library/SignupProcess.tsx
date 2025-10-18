import { UserPlus, Calendar, CreditCard, ChefHat } from "lucide-react";
import { cn } from "@/lib/utils";
import Button from "@/components/library/Button";

interface SignupStep {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface SignupProcessProps {
  className?: string;
}

/**
 * SignupProcess Component
 * 
 * Displays the signup process steps in a horizontal layout
 */
export default function SignupProcess({ className }: SignupProcessProps) {
  const steps: SignupStep[] = [
    {
      icon: <UserPlus className="w-8 h-8" />,
      title: "Tell us who's eating",
      description: "Answer questions about dietary preferences and household size",
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Choose your plan",
      description: "Select how many meals per week and your service frequency",
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Schedule your first meal service",
      description: "Pick a convenient time for your chef to cook in your home",
    },
    {
      icon: <ChefHat className="w-8 h-8" />,
      title: "Choose your chef + menu items",
      description: "Browse profiles and menus to find your perfect match",
    },
  ];

  return (
    <section className={cn("py-16 px-8 md:px-12 lg:px-16", className)}>
      <div className="max-w-7xl mx-auto">
        {/* Header with title and button */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <h2 className="text-4xl md:text-5xl font-bold">
            Signup Process
          </h2>
          <Button variant="primary" size="lg">
            Get started today
          </Button>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-start space-y-3">
              <div className="text-foreground">
                {step.icon}
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom text */}
        <p className="text-lg text-muted-foreground max-w-3xl">
          Book your first meal service within 48 hours. Every week you'll have the chance to customize your meals, chef, and service day.
        </p>
      </div>
    </section>
  );
}
