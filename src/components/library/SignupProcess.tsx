import { UserPlus, Calendar, CreditCard, ChefHat } from "lucide-react";
import { cn } from "@/lib/utils";

interface SignupStep {
  icon: React.ReactNode;
  title: string;
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
      icon: <UserPlus className="w-12 h-12" />,
      title: "Tell us who's eating",
    },
    {
      icon: <CreditCard className="w-12 h-12" />,
      title: "Choose your plan",
    },
    {
      icon: <Calendar className="w-12 h-12" />,
      title: "Select the date for your first meal service",
    },
    {
      icon: <ChefHat className="w-12 h-12" />,
      title: "Choose your chef + menu items",
    },
  ];

  return (
    <section className={cn("py-16 px-8 md:px-12 lg:px-16", className)}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Signup Process
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center space-y-4">
              <div className="w-24 h-24 rounded-2xl bg-accent/50 flex items-center justify-center text-foreground">
                {step.icon}
              </div>
              <h3 className="text-lg font-semibold text-foreground max-w-xs">
                {step.title}
              </h3>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground max-w-3xl mx-auto">
          Book your first meal service within 48 hours. Every week you'll have the chance to customize your meals, chef, and service day.
        </p>
      </div>
    </section>
  );
}
