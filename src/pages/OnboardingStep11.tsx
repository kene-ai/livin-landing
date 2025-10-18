import { useState } from "react";
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
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface Meal {
  id: string;
  title: string;
  image: string;
  tags: string[];
  categories: string[];
}

/**
 * Onboarding Step 11
 * 
 * Menu selection - favorite 3 meals
 */
export default function OnboardingStep11() {
  const navigate = useNavigate();
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [favoritedMeals, setFavoritedMeals] = useState<Set<string>>(new Set());

  const filters = [
    "All",
    "Kid-Friendly",
    "Quick Prep",
    "High Protein",
    "Vegetarian",
    "New This Week"
  ];

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

  const filteredMeals = selectedFilter === "All"
    ? meals
    : meals.filter(meal => meal.categories.includes(selectedFilter));

  const toggleFavorite = (mealId: string) => {
    setFavoritedMeals(prev => {
      const newSet = new Set(prev);
      if (newSet.has(mealId)) {
        newSet.delete(mealId);
      } else if (newSet.size < 3) {
        newSet.add(mealId);
      }
      return newSet;
    });
  };

  const handleContinue = () => {
    console.log("Favorited meals:", Array.from(favoritedMeals));
    // navigate("/onboarding/step-12", { state: { favoritedMeals: Array.from(favoritedMeals) } });
  };

  const favoritedCount = favoritedMeals.size;

  return (
    <div className="min-h-screen bg-background pb-32">
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4 leading-tight">
              Meet your new healthy menu
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Livin features 100+ meal options, rotating monthly.
            </p>
            <p className="text-base md:text-lg text-muted-foreground mt-2">
              Select 3 meals to add to your rotation. You'll be able to customize your full menu before scheduling your first service.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="mb-8 flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={cn(
                  "px-5 py-2.5 rounded-full font-medium transition-all",
                  selectedFilter === filter
                    ? "bg-primary text-primary-foreground"
                    : "bg-accent text-foreground hover:bg-accent/80"
                )}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Meal Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredMeals.map((meal) => (
              <MealCard
                key={meal.id}
                id={meal.id}
                title={meal.title}
                image={meal.image}
                tags={meal.tags}
                favorited={favoritedMeals.has(meal.id)}
                onToggleFavorite={() => toggleFavorite(meal.id)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Sticky Footer with Counter */}
      <div className="fixed bottom-0 left-0 right-0 bg-background border-t-2 border-muted py-6 px-6 md:px-8 z-40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-lg md:text-xl font-semibold text-foreground">
              {favoritedCount}/3 meals favorited
            </span>
            {favoritedCount === 3 && (
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary">
                <Check className="w-4 h-4 text-primary-foreground" strokeWidth={3} />
              </div>
            )}
          </div>
          <Button 
            variant="primary" 
            size="lg"
            onClick={handleContinue}
            disabled={favoritedCount !== 3}
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
}
