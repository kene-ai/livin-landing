import { useNavigate } from "react-router-dom";
import OnboardingProgress from "@/components/library/OnboardingProgress";
import Button from "@/components/library/Button";
import CategoryCard from "@/components/library/CategoryCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import livinLogo from "@/assets/livin-logo.webp";

interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
}

/**
 * Onboarding Step 8
 * 
 * Menu category carousel
 */
export default function OnboardingStep8() {
  const navigate = useNavigate();

  const categories: Category[] = [
    {
      id: "1",
      name: "High Protein",
      description: "30 grams of protein or more per serving",
      image: "https://images.unsplash.com/photo-1485704686097-ed47f7263ca4?w=800"
    },
    {
      id: "2",
      name: "Carb Conscious",
      description: "Low carb, high fat meals",
      image: "https://images.unsplash.com/photo-1508170754725-6e9a5cfbcabf?w=800"
    },
    {
      id: "3",
      name: "Kid Friendly",
      description: "Family favorites kids will actually eat",
      image: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=800"
    },
    {
      id: "4",
      name: "Mediterranean",
      description: "Fresh, flavorful Mediterranean-inspired dishes",
      image: "https://images.unsplash.com/photo-1633504581786-316c8002b1b9?w=800"
    },
    {
      id: "5",
      name: "Vegetarian",
      description: "Plant-based meals packed with nutrition",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800"
    },
    {
      id: "6",
      name: "Fiber Filled",
      description: "High fiber meals for digestive health",
      image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800"
    },
    {
      id: "7",
      name: "Calorie Conscious",
      description: "550kcal or less per serving",
      image: "https://images.unsplash.com/photo-1512838243191-e81e8f66f1fd?w=800"
    },
    {
      id: "8",
      name: "GLP-1 Balanced",
      description: "Optimized for GLP-1 medication users",
      image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=800"
    },
  ];

  const handleContinue = () => {
    navigate("/onboarding/step-9");
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Progress Bar */}
      <OnboardingProgress currentStep={8} totalSteps={15} />

      {/* Main Content */}
      <div className="pt-8 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
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
              Meet your new healthy menu
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Livin features 30+ meal options, rotating weekly.
            </p>
            <p className="text-base md:text-lg text-muted-foreground mt-2">
              You'll be able to customize your meals every week. Below is a preview of our menu.
            </p>
          </div>

          {/* Category Carousel */}
          <div className="mb-12 px-12 md:px-16">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {categories.map((category) => (
                  <CarouselItem key={category.id} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                    <CategoryCard
                      name={category.name}
                      description={category.description}
                      image={category.image}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="-left-12 md:-left-16" />
              <CarouselNext className="-right-12 md:-right-16" />
            </Carousel>
          </div>

          {/* Continue Button */}
          <div className="flex justify-end">
            <Button 
              variant="primary" 
              size="lg"
              onClick={handleContinue}
            >
              Continue
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
