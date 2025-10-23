import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import OnboardingProgress from "@/components/library/OnboardingProgress";
import Button from "@/components/library/Button";
import MealCard from "@/components/library/MealCard";
import livinLogo from "@/assets/livin-logo.webp";

interface MenuItem {
  id: string;
  title: string;
  image: string;
  tags: string[];
  category: string;
}

/**
 * Onboarding Step 8 (Actually Step 7 in flow)
 * 
 * Menu item selection with favoriting
 * Users can explore meals and favorite dishes for their menu
 * Favorites stored in localStorage
 */
export default function OnboardingStep8() {
  const navigate = useNavigate();
  const [favoritedMeals, setFavoritedMeals] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("recommended");

  const categories = [
    { id: "recommended", label: "Recommended For You" },
    { id: "kid-friendly", label: "Kid Friendly" },
    { id: "high-protein", label: "High Protein" },
    { id: "vegetarian", label: "Vegetarian" },
    { id: "carb-conscious", label: "Carb Conscious" },
    { id: "mediterranean", label: "Mediterranean" },
  ];

  // Load favorites from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('favoritedMeals');
    if (stored) {
      try {
        setFavoritedMeals(JSON.parse(stored));
      } catch (e) {
        console.error('Failed to load favorited meals:', e);
      }
    }
  }, []);

  // Toggle favorite and save to localStorage
  const handleToggleFavorite = (mealId: string) => {
    setFavoritedMeals(prev => {
      const newFavorites = prev.includes(mealId)
        ? prev.filter(id => id !== mealId)
        : [...prev, mealId];
      
      localStorage.setItem('favoritedMeals', JSON.stringify(newFavorites));
      return newFavorites;
    });
  };

  // Recommended meals (8+ items, 4+ kid-friendly)
  const recommendedMeals: MenuItem[] = [
    {
      id: "meal-rec-1",
      title: "Chicken Tenders with Sweet Potato Fries",
      image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=600&h=600&fit=crop",
      tags: ["Kid Friendly", "High Protein"],
      category: "recommended"
    },
    {
      id: "meal-rec-2",
      title: "Mac & Cheese with Steamed Broccoli",
      image: "https://images.unsplash.com/photo-1543826173-e9deb7da5084?w=600&h=600&fit=crop",
      tags: ["Kid Friendly", "Vegetarian"],
      category: "recommended"
    },
    {
      id: "meal-rec-3",
      title: "Turkey Meatballs with Whole Wheat Pasta",
      image: "https://images.unsplash.com/photo-1551782450-17144efb9c50?w=600&h=600&fit=crop",
      tags: ["Kid Friendly", "High Protein"],
      category: "recommended"
    },
    {
      id: "meal-rec-4",
      title: "Mini Cheese Pizzas with Side Salad",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&h=600&fit=crop",
      tags: ["Kid Friendly"],
      category: "recommended"
    },
    {
      id: "meal-rec-5",
      title: "Grilled Chicken Breast with Rice & Veggies",
      image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=600&h=600&fit=crop",
      tags: ["High Protein", "Balanced"],
      category: "recommended"
    },
    {
      id: "meal-rec-6",
      title: "Beef Tacos with Black Beans",
      image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=600&h=600&fit=crop",
      tags: ["High Protein", "Fiber"],
      category: "recommended"
    },
    {
      id: "meal-rec-7",
      title: "Baked Salmon with Quinoa & Asparagus",
      image: "https://images.unsplash.com/photo-1485921325833-c519f76c4927?w=600&h=600&fit=crop",
      tags: ["High Protein", "Omega-3"],
      category: "recommended"
    },
    {
      id: "meal-rec-8",
      title: "Mediterranean Chicken Bowl with Hummus",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=600&fit=crop",
      tags: ["High Protein", "Mediterranean"],
      category: "recommended"
    },
  ];

  // Kid Friendly meals
  const kidFriendlyMeals: MenuItem[] = [
    {
      id: "meal-kid-1",
      title: "Chicken Nuggets with Carrot Sticks",
      image: "https://images.unsplash.com/photo-1562967916-eb82221dfb92?w=600&h=600&fit=crop",
      tags: ["Kid Friendly", "High Protein"],
      category: "kid-friendly"
    },
    {
      id: "meal-kid-2",
      title: "Cheese Quesadillas with Salsa",
      image: "https://images.unsplash.com/photo-1618040996337-56904b7850b9?w=600&h=600&fit=crop",
      tags: ["Kid Friendly", "Vegetarian"],
      category: "kid-friendly"
    },
    {
      id: "meal-kid-3",
      title: "Spaghetti & Marinara Sauce",
      image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&h=600&fit=crop",
      tags: ["Kid Friendly", "Vegetarian"],
      category: "kid-friendly"
    },
    {
      id: "meal-kid-4",
      title: "Fish Sticks with Green Beans",
      image: "https://images.unsplash.com/photo-1580959375944-47ec2857a227?w=600&h=600&fit=crop",
      tags: ["Kid Friendly", "Omega-3"],
      category: "kid-friendly"
    },
    {
      id: "meal-kid-5",
      title: "Mini Beef Sliders with Fruit",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=600&fit=crop",
      tags: ["Kid Friendly", "High Protein"],
      category: "kid-friendly"
    },
    {
      id: "meal-kid-6",
      title: "Grilled Cheese with Tomato Soup",
      image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&h=600&fit=crop",
      tags: ["Kid Friendly", "Vegetarian"],
      category: "kid-friendly"
    },
  ];

  // High Protein meals
  const highProteinMeals: MenuItem[] = [
    {
      id: "meal-hp-1",
      title: "Ribeye Steak with Roasted Brussels Sprouts",
      image: "https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=600&h=600&fit=crop",
      tags: ["High Protein", "Carb Conscious"],
      category: "high-protein"
    },
    {
      id: "meal-hp-2",
      title: "Grilled Salmon Fillet with Lemon",
      image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&h=600&fit=crop",
      tags: ["High Protein", "Omega-3"],
      category: "high-protein"
    },
    {
      id: "meal-hp-3",
      title: "Herb-Roasted Chicken with Asparagus",
      image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=600&h=600&fit=crop",
      tags: ["High Protein", "Carb Conscious"],
      category: "high-protein"
    },
    {
      id: "meal-hp-4",
      title: "Turkey Chili with Beans",
      image: "https://images.unsplash.com/photo-1583224964508-615e1bb9e50e?w=600&h=600&fit=crop",
      tags: ["High Protein", "Fiber"],
      category: "high-protein"
    },
    {
      id: "meal-hp-5",
      title: "Protein Power Bowl",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=600&fit=crop",
      tags: ["High Protein", "Balanced"],
      category: "high-protein"
    },
    {
      id: "meal-hp-6",
      title: "Seared Tuna Poke Bowl",
      image: "https://images.unsplash.com/photo-1546549032-9571cd6b27df?w=600&h=600&fit=crop",
      tags: ["High Protein", "Omega-3"],
      category: "high-protein"
    },
  ];

  // Vegetarian meals
  const vegetarianMeals: MenuItem[] = [
    {
      id: "meal-veg-1",
      title: "Lentil Curry with Basmati Rice",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&h=600&fit=crop",
      tags: ["Vegetarian", "High Fiber"],
      category: "vegetarian"
    },
    {
      id: "meal-veg-2",
      title: "Vegetable Stir-Fry with Crispy Tofu",
      image: "https://images.unsplash.com/photo-1546975490-e8b92a360b24?w=600&h=600&fit=crop",
      tags: ["Vegetarian", "High Protein"],
      category: "vegetarian"
    },
    {
      id: "meal-veg-3",
      title: "Chickpea Buddha Bowl",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=600&fit=crop",
      tags: ["Vegetarian", "Balanced"],
      category: "vegetarian"
    },
    {
      id: "meal-veg-4",
      title: "Eggplant Parmesan",
      image: "https://images.unsplash.com/photo-1515516969-d4008cc6241a?w=600&h=600&fit=crop",
      tags: ["Vegetarian"],
      category: "vegetarian"
    },
    {
      id: "meal-veg-5",
      title: "Quinoa Stuffed Bell Peppers",
      image: "https://images.unsplash.com/photo-1556030149-170f21698cd9?w=600&h=600&fit=crop",
      tags: ["Vegetarian", "High Fiber"],
      category: "vegetarian"
    },
    {
      id: "meal-veg-6",
      title: "Black Bean Burrito Bowl",
      image: "https://images.unsplash.com/photo-1604909052743-94e838986d24?w=600&h=600&fit=crop",
      tags: ["Vegetarian", "High Fiber"],
      category: "vegetarian"
    },
  ];

  // Carb Conscious meals
  const carbConsciousMeals: MenuItem[] = [
    {
      id: "meal-cc-1",
      title: "Zucchini Noodles with Turkey Meatballs",
      image: "https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?w=600&h=600&fit=crop",
      tags: ["Carb Conscious", "High Protein"],
      category: "carb-conscious"
    },
    {
      id: "meal-cc-2",
      title: "Cauliflower Fried Rice with Chicken",
      image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600&h=600&fit=crop",
      tags: ["Carb Conscious", "High Protein"],
      category: "carb-conscious"
    },
    {
      id: "meal-cc-3",
      title: "Lettuce Wrap Tacos with Ground Beef",
      image: "https://images.unsplash.com/photo-1613514785940-daed07799d9b?w=600&h=600&fit=crop",
      tags: ["Carb Conscious", "High Protein"],
      category: "carb-conscious"
    },
    {
      id: "meal-cc-4",
      title: "Grilled Chicken Caesar Salad",
      image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=600&h=600&fit=crop",
      tags: ["Carb Conscious", "High Protein"],
      category: "carb-conscious"
    },
    {
      id: "meal-cc-5",
      title: "Keto Beef Bowl with Avocado",
      image: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=600&h=600&fit=crop",
      tags: ["Carb Conscious", "High Protein"],
      category: "carb-conscious"
    },
    {
      id: "meal-cc-6",
      title: "Spaghetti Squash Carbonara",
      image: "https://images.unsplash.com/photo-1621510456681-2330135e5871?w=600&h=600&fit=crop",
      tags: ["Carb Conscious", "High Protein"],
      category: "carb-conscious"
    },
  ];

  // Mediterranean meals
  const mediterraneanMeals: MenuItem[] = [
    {
      id: "meal-med-1",
      title: "Greek Chicken Souvlaki with Tzatziki",
      image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=600&h=600&fit=crop",
      tags: ["Mediterranean", "High Protein"],
      category: "mediterranean"
    },
    {
      id: "meal-med-2",
      title: "Falafel Plate with Hummus & Tabbouleh",
      image: "https://images.unsplash.com/photo-1593007791459-8a25e3f4e228?w=600&h=600&fit=crop",
      tags: ["Mediterranean", "Vegetarian"],
      category: "mediterranean"
    },
    {
      id: "meal-med-3",
      title: "Mediterranean Baked Salmon",
      image: "https://images.unsplash.com/photo-1580959375944-47ec2857a227?w=600&h=600&fit=crop",
      tags: ["Mediterranean", "Omega-3"],
      category: "mediterranean"
    },
    {
      id: "meal-med-4",
      title: "Lamb Kebabs with Couscous",
      image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=600&h=600&fit=crop",
      tags: ["Mediterranean", "High Protein"],
      category: "mediterranean"
    },
    {
      id: "meal-med-5",
      title: "Shakshuka with Feta Cheese",
      image: "https://images.unsplash.com/photo-1587486937676-0c78c7829416?w=600&h=600&fit=crop",
      tags: ["Mediterranean", "Vegetarian"],
      category: "mediterranean"
    },
    {
      id: "meal-med-6",
      title: "Greek Salad with Grilled Shrimp",
      image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&h=600&fit=crop",
      tags: ["Mediterranean", "High Protein"],
      category: "mediterranean"
    },
  ];

  // Combine all meals
  const allMeals: MenuItem[] = [
    ...recommendedMeals,
    ...kidFriendlyMeals,
    ...highProteinMeals,
    ...vegetarianMeals,
    ...carbConsciousMeals,
    ...mediterraneanMeals,
  ];

  // Filter meals by selected category
  const displayedMeals = allMeals.filter(meal => meal.category === selectedCategory);

  const handleContinue = () => {
    navigate("/onboarding/step-9");
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Progress Bar */}
      <OnboardingProgress currentStep={7} totalSteps={14} />

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
          <div className="mb-6">
            <h1 className="text-lg md:text-xl lg:text-2xl font-serif font-bold text-foreground mb-4 leading-tight">
              Explore our menu and favorite dishes you'd like to try
            </h1>
            <p className="text-base md:text-lg text-muted-foreground">
              Select meals you're interested in, or skip and customize later.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Your favorites help us personalize your weekly menu.
            </p>
          </div>

          {/* CATEGORY PILLS */}
          <div className="mb-8 overflow-x-auto">
            <div className="flex gap-2 pb-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`
                    px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap
                    transition-colors duration-200
                    ${selectedCategory === category.id
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                    }
                  `}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* FILTERED MEAL SECTION */}
          <section className="mb-12">
            <h2 className="text-xl font-semibold text-foreground mb-2">
              {categories.find(c => c.id === selectedCategory)?.label}
            </h2>
            <p className="text-sm text-muted-foreground mb-6">
              {displayedMeals.length} dishes
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {displayedMeals.map((meal) => (
                <MealCard
                  key={meal.id}
                  id={meal.id}
                  title={meal.title}
                  image={meal.image}
                  tags={meal.tags}
                  favorited={favoritedMeals.includes(meal.id)}
                  onToggleFavorite={() => handleToggleFavorite(meal.id)}
                />
              ))}
            </div>
          </section>

          {/* Continue Button + Counter */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-12 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              {favoritedMeals.length > 0 
                ? `${favoritedMeals.length} meal${favoritedMeals.length !== 1 ? 's' : ''} favorited`
                : 'No meals favorited yet'}
            </p>
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
