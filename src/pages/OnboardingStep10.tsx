import { useNavigate } from "react-router-dom";
import OnboardingProgress from "@/components/library/OnboardingProgress";
import Button from "@/components/library/Button";
import MealCard from "@/components/library/MealCard";
import livinLogo from "@/assets/livin-logo.webp";
import meal1 from "@/assets/meals/meal-1.jpg";
import meal2 from "@/assets/meals/meal-2.jpg";
import meal3 from "@/assets/meals/meal-3.jpg";
import meal4 from "@/assets/meals/meal-4.jpg";
import meal5 from "@/assets/meals/meal-5.jpg";
import meal6 from "@/assets/meals/meal-6.jpg";

interface Meal {
  id: string;
  title: string;
  image: string;
  tags: string[];
  categories: string[];
}

/**
 * Onboarding Step 10
 * 
 * Menu selection - favorite 3 meals
 */
export default function OnboardingStep10() {
  const navigate = useNavigate();

  const meals: Meal[] = [
    {
      id: "1",
      title: "Grilled Salmon with Roasted Vegetables",
      image: meal1,
      tags: ["GF", "DF", "High Protein"],
      categories: ["High Protein", "Quick Prep"]
    },
    {
      id: "2",
      title: "Chicken Stir-Fry with Vegetables",
      image: meal2,
      tags: ["GF", "DF"],
      categories: ["Kid-Friendly", "Quick Prep", "High Protein"]
    },
    {
      id: "3",
      title: "Pasta Primavera",
      image: meal3,
      tags: ["Vegetarian"],
      categories: ["Kid-Friendly", "Vegetarian"]
    },
    {
      id: "4",
      title: "Beef Tacos with Fresh Toppings",
      image: meal4,
      tags: ["GF"],
      categories: ["Kid-Friendly", "New This Week"]
    },
    {
      id: "5",
      title: "Mediterranean Buddha Bowl",
      image: meal5,
      tags: ["Vegan", "GF"],
      categories: ["Vegetarian", "High Protein"]
    },
    {
      id: "6",
      title: "Teriyaki Chicken with Brown Rice",
      image: meal6,
      tags: ["DF", "High Protein"],
      categories: ["Kid-Friendly", "Quick Prep", "High Protein"]
    },
    // Duplicate meals to have more options
    {
      id: "7",
      title: "Grilled Salmon with Quinoa",
      image: meal1,
      tags: ["GF", "DF"],
      categories: ["High Protein", "New This Week"]
    },
    {
      id: "8",
      title: "Veggie Stir-Fry",
      image: meal2,
      tags: ["Vegan", "GF"],
      categories: ["Vegetarian", "Quick Prep"]
    },
    {
      id: "9",
      title: "Creamy Pasta with Peas",
      image: meal3,
      tags: ["Vegetarian"],
      categories: ["Kid-Friendly", "Vegetarian"]
    },
    {
      id: "10",
      title: "Fish Tacos",
      image: meal4,
      tags: ["GF", "DF"],
      categories: ["Quick Prep", "High Protein", "New This Week"]
    },
    {
      id: "11",
      title: "Quinoa Power Bowl",
      image: meal5,
      tags: ["Vegan", "GF", "High Protein"],
      categories: ["Vegetarian", "High Protein"]
    },
    {
      id: "12",
      title: "Orange Chicken",
      image: meal6,
      tags: ["DF"],
      categories: ["Kid-Friendly", "High Protein"]
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

          {/* Meal Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
            {meals.map((meal) => (
              <MealCard
                key={meal.id}
                id={meal.id}
                title={meal.title}
                image={meal.image}
                tags={meal.tags}
                favorited={false}
                onToggleFavorite={() => {}}
              />
            ))}
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
