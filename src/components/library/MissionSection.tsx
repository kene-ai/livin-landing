import { cn } from "@/lib/utils";
import Button from "./Button";
import missionImage from "@/assets/mission-family-chef.webp";
import { AspectRatio } from "@/components/ui/aspect-ratio";

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
    <section className={cn("py-4 md:py-6 px-8 md:px-12 lg:px-16", className)}>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-stretch overflow-hidden rounded-3xl">
        {/* Left Column - Image */}
        <AspectRatio ratio={2} className="w-full">
          <img 
            src={missionImage} 
            alt="Family with personal chef in kitchen"
            className="w-full h-full object-cover"
          />
        </AspectRatio>
        
        {/* Right Column - Mission Card */}
        <div className="bg-secondary border-2 border-primary px-5 md:px-7 py-3 md:py-4 flex flex-col justify-start">
          <div>
            <h2 className="text-primary font-bold text-2xl">
              livin
            </h2>
            
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mt-6 md:mt-8">
              The missing ingredient from your support system: a personal chef.
            </h3>
            
            <p className="text-lg text-foreground mt-6 md:mt-7">
              We started Livin because everyone should have access to healthy, tasty homemade meals, regardless of our available time or skill. So we've made it possible for as low as $20 a plate.
            </p>
            
            <div className="mt-7 md:mt-8 mb-4 md:mb-5">
              <Button variant="primary" size="lg">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
