import { useNavigate, useLocation } from "react-router-dom";
import OnboardingProgress from "@/components/library/OnboardingProgress";
import Button from "@/components/library/Button";
import livinLogo from "@/assets/livin-logo.webp";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

/**
 * Onboarding Step 9
 * 
 * Family reinforcement with testimonials
 */
export default function OnboardingStep9() {
  const navigate = useNavigate();
  const location = useLocation();
  const { adults = 2, kids = 0 } = location.state || {};

  const testimonials = [
    {
      name: "Sarah M.",
      location: "Atlanta, GA",
      image: testimonial1,
      quote: "My kids actually ask for seconds now! The chef makes vegetables fun and delicious. It's been a game-changer for our family dinners."
    },
    {
      name: "Michael P.",
      location: "Decatur, GA",
      image: testimonial2,
      quote: "Finally, meals that everyone enjoys. No more cooking three different dinners. Our Livin chef knows exactly what each family member loves."
    },
    {
      name: "Jennifer L.",
      location: "Marietta, GA",
      image: testimonial3,
      quote: "The variety is incredible. My picky eaters are trying new foods every week, and my husband and I get restaurant-quality meals at home."
    }
  ];

  // Dynamic header based on household composition
  const getHeaderText = () => {
    if (kids > 0 && adults > 0) {
      return "Meals your whole family will actually eat";
    } else if (kids > 0) {
      return "Meals your kids will actually eat";
    } else if (adults > 1) {
      return "Meals you'll both love";
    } else {
      return "Meals you'll actually enjoy";
    }
  };

  const handleNext = () => {
    // TODO: Navigate to next step
    console.log("Continuing to final step...");
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

          {/* Dynamic Header */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-12 md:mb-16 text-center leading-tight">
            {getHeaderText()}
          </h1>

          {/* Testimonial Carousel */}
          <div className="mb-12 px-4 md:px-12">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-6 bg-accent/30 rounded-3xl border-2 border-muted h-full flex flex-col">
                      {/* Customer Image */}
                      <div className="mb-6">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-24 h-24 rounded-full object-cover mx-auto border-4 border-primary/20"
                        />
                      </div>

                      {/* Name and Location */}
                      <div className="text-center mb-4">
                        <h3 className="font-bold text-lg text-foreground mb-1">
                          {testimonial.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.location}
                        </p>
                      </div>

                      {/* Quote */}
                      <p className="text-foreground italic text-center flex-grow">
                        "{testimonial.quote}"
                      </p>

                      {/* Livin Customer Badge */}
                      <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                        <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Livin customer</span>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
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
