import { cn } from "@/lib/utils";
import Button from "./Button";

export interface MissionSectionProps {
  className?: string;
}

/**
 * MissionSection Component
 * 
 * Displays the company mission with a two-column layout:
 * - Left: Image
 * - Right: Mission statement with CTA
 */
export default function MissionSection({ className }: MissionSectionProps) {
  return (
    <section className={cn("py-16 px-8 md:px-12 lg:px-16", className)}>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Left Column - Image */}
        <div className="rounded-3xl overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1200" 
            alt="Family with personal chef in kitchen"
            className="w-full h-full object-cover aspect-[4/3]"
          />
        </div>
        
        {/* Right Column - Mission Card */}
        <div className="bg-secondary rounded-3xl border-2 border-primary p-8 md:p-12 space-y-6">
          <h2 className="text-primary font-bold text-2xl">
            livin
          </h2>
          
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            The missing ingredient from your support system: a personal chef.
          </h3>
          
          <p className="text-lg text-foreground">
            We started Livin because everyone should have access to healthy, tasty homemade meals, regardless of our available time or skill. So we've made it possible for as low as $20 a plate.
          </p>
          
          <Button variant="primary" size="lg">
            Sign Up
          </Button>
        </div>
      </div>
    </section>
  );
}
