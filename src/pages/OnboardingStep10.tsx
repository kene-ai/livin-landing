import { useNavigate } from "react-router-dom";
import OnboardingProgress from "@/components/library/OnboardingProgress";
import Button from "@/components/library/Button";
import ChefCard from "@/components/library/ChefCard";
import livinLogo from "@/assets/livin-logo.webp";
import marcusImg from "@/assets/chefs/marcus.png";
import sarahImg from "@/assets/chefs/sarah.png";
import davidImg from "@/assets/chefs/david.png";
import jenniferImg from "@/assets/chefs/jennifer.png";
import robertImg from "@/assets/chefs/robert.png";
import emilyImg from "@/assets/chefs/emily.png";
import michaelImg from "@/assets/chefs/michael.png";
import lisaImg from "@/assets/chefs/lisa.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Check } from "lucide-react";

interface Chef {
  id: string;
  name: string;
  title: string;
  bio: string;
  imageSrc: string;
}

/**
 * Onboarding Step 10
 * 
 * Chef browsing
 */
export default function OnboardingStep10() {
  const navigate = useNavigate();

  const chefs: Chef[] = [
    {
      id: "1",
      name: "Marcus Johnson",
      title: "Culinary Institute Graduate",
      bio: "Specializes in Southern comfort food and healthy meal prep. 8 years experience.",
      imageSrc: marcusImg
    },
    {
      id: "2",
      name: "Sarah Chen",
      title: "Le Cordon Bleu Certified",
      bio: "Expert in Asian fusion and plant-based cuisine. Passionate about nutrition.",
      imageSrc: sarahImg
    },
    {
      id: "3",
      name: "David Martinez",
      title: "Italian Cuisine Specialist",
      bio: "Trained in Rome, loves creating family-friendly Italian meals. 10+ years experience.",
      imageSrc: davidImg
    },
    {
      id: "4",
      name: "Jennifer Lee",
      title: "Plant-Based Expert",
      bio: "Specializes in vegan and vegetarian cuisine. Makes healthy eating delicious.",
      imageSrc: jenniferImg
    },
    {
      id: "5",
      name: "Robert Thompson",
      title: "Culinary Arts Professional",
      bio: "Loves Mediterranean and Middle Eastern flavors. Great with kids.",
      imageSrc: robertImg
    },
    {
      id: "6",
      name: "Emily Rodriguez",
      title: "Pastry & Savory Chef",
      bio: "French-trained chef with a knack for elegant, simple meals.",
      imageSrc: emilyImg
    },
    {
      id: "7",
      name: "Michael Patel",
      title: "Global Cuisine Specialist",
      bio: "Brings flavors from around the world to your kitchen. 12 years experience.",
      imageSrc: michaelImg
    },
    {
      id: "8",
      name: "Lisa Brown",
      title: "Family Meal Expert",
      bio: "Focuses on kid-friendly, nutritious meals that everyone will love.",
      imageSrc: lisaImg
    }
  ];

  const trustIndicators = [
    "Background-checked & fully insured",
    "Average rating: 4.9★ from 500+ families",
    "Professional culinary training",
    "Specialties: Italian, Asian, Plant-based, Southern, and more",
    "Shop for groceries, cook, clean, and package meals"
  ];

  const handleNext = () => {
    navigate("/onboarding/step-11");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Progress Bar */}
      <OnboardingProgress currentStep={5} totalSteps={5} />

      {/* Main Content */}
      <div className="pt-8 pb-12 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Logo */}
          <div className="mb-8 md:mb-12">
            <img 
              src={livinLogo} 
              alt="Livin" 
              className="h-8 md:h-10"
            />
          </div>

          {/* Header */}
          <div className="mb-8 md:mb-10">
            <h1 className="text-lg md:text-xl lg:text-2xl font-serif font-bold text-foreground mb-4 leading-tight">
              Meet our trusted chefs
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Livin has great chefs who are background-checked, insured, and passionate about cooking. You'll be able to choose which chef you want each time you book.
            </p>
          </div>

          {/* Chef Carousel */}
          <div className="mb-12 px-4 md:px-12">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {chefs.map((chef) => (
                  <CarouselItem key={chef.id} className="md:basis-1/2 lg:basis-1/3">
                    <ChefCard
                      id={chef.id}
                      name={chef.name}
                      title={chef.title}
                      bio={chef.bio}
                      imageSrc={chef.imageSrc}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </div>

          {/* Trust Indicators */}
          <div className="mb-10 p-8 bg-accent/30 rounded-3xl border-2 border-muted">
            <div className="space-y-4">
              {trustIndicators.map((indicator, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-primary-foreground" strokeWidth={3} />
                  </div>
                  <span className="text-base md:text-lg text-foreground font-medium">
                    {indicator}
                  </span>
                </div>
              ))}
            </div>
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
