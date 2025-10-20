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
import meal1 from "@/assets/meals/meal-1.jpg";
import meal2 from "@/assets/meals/meal-2.jpg";
import meal3 from "@/assets/meals/meal-3.jpg";
import meal4 from "@/assets/meals/meal-4.jpg";
import meal5 from "@/assets/meals/meal-5.jpg";
import meal6 from "@/assets/meals/meal-6.jpg";

interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
}

/**
 * Onboarding Step 10
 * 
 * Menu category carousel
 */
export default function OnboardingStep10() {
  const navigate = useNavigate();

  const categories: Category[] = [
    {
      id: "1",
      name: "High Protein",
      description: "30 grams of protein or more per serving",
      image: meal1
    },
    {
      id: "2",
      name: "Carb Conscious",
      description: "Low carb, high fat meals",
      image: meal2
    },
    {
      id: "3",
      name: "Kid Friendly",
      description: "Family favorites kids will actually eat",
      image: meal3
    },
    {
      id: "4",
      name: "Mediterranean Cuisine",
      description: "Fresh, flavorful Mediterranean-inspired dishes",
      image: meal4
    },
    {
      id: "5",
      name: "Vegetarian",
      description: "Plant-based meals packed with nutrition",
      image: meal5
    },
    {
      id: "6",
      name: "Fiber Filled",
      description: "High fiber meals for digestive health",
      image: meal6
    },
    {
      id: "7",
      name: "Calorie Conscious",
      description: "550kcal or less per serving",
      image: meal1
    },
    {
      id: "8",
      name: "GLP-1 Balanced",
      description: "Optimized for GLP-1 medication users",
      image: meal2
    },
  ];

  const handleContinue = () => {
    navigate("/onboarding/step-11");
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Progress Bar */}
      <OnboardingProgress currentStep={5} totalSteps={5} />

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
          <div className="mb-12">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {categories.map((category) => (
                  <CarouselItem key={category.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <CategoryCard
                      name={category.name}
                      description={category.description}
                      image={category.image}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0" />
              <CarouselNext className="right-0" />
            </Carousel>
          </div>

          {/* Continue Button */}
          <div className="flex justify-center">
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
