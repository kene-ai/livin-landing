import { cn } from "@/lib/utils";
import Button from "./Button";
import missionImage from "@/assets/mission-family-chef.webp";

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
    <section className={cn("py-6 md:py-8 px-8 md:px-12 lg:px-16", className)}>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-stretch overflow-hidden rounded-3xl">
        {/* Left Column - Image */}
        <div className="h-[320px] md:h-[380px] lg:h-[420px]">
          <img 
            src={missionImage} 
            alt="Family with personal chef in kitchen"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Right Column - Mission Card */}
        <div className="bg-secondary border-2 border-primary px-6 md:px-8 py-4 md:py-6 flex flex-col justify-center md:h-[380px] lg:h-[420px]">
          <div className="space-y-3">
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
      </div>
    </section>
  );
}
