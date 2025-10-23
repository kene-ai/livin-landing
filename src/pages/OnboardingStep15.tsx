import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import OnboardingProgress from "@/components/library/OnboardingProgress";
import Button from "@/components/library/Button";
import OnboardingOption from "@/components/library/OnboardingOption";
import livinLogo from "@/assets/livin-logo.webp";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";
import marcusImg from "@/assets/chefs/marcus.png";
import davidImg from "@/assets/chefs/david.png";
import emilyImg from "@/assets/chefs/emily.png";
import sarahImg from "@/assets/chefs/sarah.png";
import jenniferImg from "@/assets/chefs/jennifer.png";
import robertImg from "@/assets/chefs/robert.png";
import michaelImg from "@/assets/chefs/michael.png";
import lisaImg from "@/assets/chefs/lisa.png";
interface PricingPlan {
  id: string;
  name: string;
  weeklyPrice: number;
  monthlyPrice: number;
  meals: number;
  plates: number;
  popular?: boolean;
}

/**
 * Onboarding Step 15
 * 
 * Pricing plan selection
 */
export default function OnboardingStep15() {
  const navigate = useNavigate();
  const [frequency, setFrequency] = useState<"weekly" | "monthly">("weekly");
  const [groceryType, setGroceryType] = useState<"standard" | "organic">("standard");
  const [selectedPlan, setSelectedPlan] = useState<string>("");
  const [numAdults, setNumAdults] = useState<number>(() => {
    const stored = localStorage.getItem('onboarding_adults');
    return stored ? parseInt(stored, 10) : 2;
  });
  const [numChildren, setNumChildren] = useState<number>(() => {
    const stored = localStorage.getItem('onboarding_kids');
    return stored ? parseInt(stored, 10) : 0;
  });
  const [platesPerServing, setPlatesPerServing] = useState<number>(4);
  const [selectedChef, setSelectedChef] = useState<any>(null);
  const [selectedMealsForPreview, setSelectedMealsForPreview] = useState<any[]>([]);

  // Calculate recommended plates based on family size
  useEffect(() => {
    const recommended = Math.ceil(numAdults + numChildren * 0.5);
    setPlatesPerServing(recommended);
  }, [numAdults, numChildren]);

  // Chef data (from OnboardingStep10.tsx)
  const allChefs = [
    {
      id: "1",
      name: "Marcus Johnson",
      title: "Culinary Institute Graduate, specializing in Southern comfort & healthy meal prep",
      imageSrc: marcusImg,
    },
    {
      id: "2",
      name: "David Chen",
      title: "Expert in Asian fusion cuisine with 15 years of experience",
      imageSrc: davidImg,
    },
    {
      id: "3",
      name: "Emily Rodriguez",
      title: "Italian cuisine specialist with plant-based expertise",
      imageSrc: emilyImg,
    },
    {
      id: "4",
      name: "Sarah Williams",
      title: "Mediterranean diet expert, certified nutritionist",
      imageSrc: sarahImg,
    },
    {
      id: "5",
      name: "Jennifer Lee",
      title: "Korean and Japanese cuisine specialist",
      imageSrc: jenniferImg,
    },
    {
      id: "6",
      name: "Robert Anderson",
      title: "BBQ and Southern comfort food master",
      imageSrc: robertImg,
    },
    {
      id: "7",
      name: "Michael Brown",
      title: "French culinary school graduate, fine dining expert",
      imageSrc: michaelImg,
    },
    {
      id: "8",
      name: "Lisa Thompson",
      title: "Plant-based nutrition specialist and meal prep expert",
      imageSrc: lisaImg,
    },
  ];

  const defaultChef = allChefs[0];

  // Meal data (simplified from OnboardingStep8.tsx)
  const recommendedMeals = [
    {
      id: "meal-rec-1",
      title: "Chicken Tenders with Sweet Potato Fries",
      image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=600&h=600&fit=crop",
    },
    {
      id: "meal-rec-2",
      title: "Mac & Cheese with Steamed Broccoli",
      image: "https://images.unsplash.com/photo-1543826173-e9deb7da5084?w=600&h=600&fit=crop",
    },
    {
      id: "meal-rec-3",
      title: "Turkey Meatballs with Whole Wheat Pasta",
      image: "https://images.unsplash.com/photo-1551782450-17144efb9c50?w=600&h=600&fit=crop",
    },
    {
      id: "meal-rec-4",
      title: "Mini Cheese Pizzas with Side Salad",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&h=600&fit=crop",
    },
    {
      id: "meal-rec-5",
      title: "Grilled Chicken Breast with Rice & Veggies",
      image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=600&h=600&fit=crop",
    },
    {
      id: "meal-rec-6",
      title: "Beef Tacos with Black Beans",
      image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=600&h=600&fit=crop",
    },
    {
      id: "meal-rec-7",
      title: "Baked Salmon with Quinoa & Asparagus",
      image: "https://images.unsplash.com/photo-1485921325833-c519f76c4927?w=600&h=600&fit=crop",
    },
    {
      id: "meal-rec-8",
      title: "Mediterranean Chicken Bowl with Hummus",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=600&fit=crop",
    },
  ];

  // Load chef and meals when a plan is selected
  useEffect(() => {
    if (selectedPlan) {
      // Load chef
      const favoritedChefIds = JSON.parse(localStorage.getItem('favoritedChefs') || '[]');
      const chefId = favoritedChefIds.length > 0 ? favoritedChefIds[0] : "1";
      const chef = allChefs.find(c => c.id === chefId) || defaultChef;
      setSelectedChef(chef);

      // Load meals
      const plan = plans.find(p => p.id === selectedPlan);
      if (plan) {
        const favoritedMealIds = JSON.parse(localStorage.getItem('favoritedMeals') || '[]');
        
        // Get favorited meals first
        const favoritedMealObjects = recommendedMeals.filter(m => 
          favoritedMealIds.includes(m.id)
        );
        
        // If we need more meals, add random ones
        const mealsNeeded = plan.meals;
        let selectedMeals = [...favoritedMealObjects];
        
        if (selectedMeals.length < mealsNeeded) {
          const remainingMeals = recommendedMeals.filter(m => 
            !favoritedMealIds.includes(m.id)
          );
          const additionalMeals = remainingMeals
            .sort(() => Math.random() - 0.5)
            .slice(0, mealsNeeded - selectedMeals.length);
          selectedMeals = [...selectedMeals, ...additionalMeals];
        }
        
        // Limit to the exact number needed
        selectedMeals = selectedMeals.slice(0, mealsNeeded);
        setSelectedMealsForPreview(selectedMeals);
      }
    }
  }, [selectedPlan, numAdults, numChildren]);

  // Pricing table based on family size (adults + children * 0.5, rounded up)
  const pricingTable: Record<number, Record<string, number>> = {
    3: {
      // 3 adults equivalent
      lite: 187,
      // 2 meal
      plus: 227,
      // 3 meal
      core: 289,
      // 4 meal
      premier: 644 // 10 meal
    },
    4: {
      // 4 adults equivalent
      lite: 223,
      // 2 meal
      plus: 282,
      // 3 meal
      core: 352,
      // 4 meal
      premier: 818 // 10 meal
    }
  };
  const plans: PricingPlan[] = [{
    id: "lite",
    name: "2 meal plan",
    weeklyPrice: 185,
    monthlyPrice: 185,
    meals: 2,
    plates: 4
  }, {
    id: "plus",
    name: "3 meal plan",
    weeklyPrice: 248,
    monthlyPrice: 248,
    meals: 3,
    plates: 6
  }, {
    id: "core",
    name: "4 meal plan",
    weeklyPrice: 301,
    monthlyPrice: 301,
    meals: 4,
    plates: 8,
    popular: true
  }, {
    id: "premier",
    name: "10 meal plan",
    weeklyPrice: 590,
    monthlyPrice: 590,
    meals: 10,
    plates: 20
  }];
  const getPrice = (plan: PricingPlan) => {
    const familySize = Math.ceil(numAdults + numChildren * 0.5);

    // Get base price from pricing table, fallback to plan's default if not found
    const basePrice = pricingTable[familySize]?.[plan.id] || (frequency === "weekly" ? plan.weeklyPrice : plan.monthlyPrice);
    const groceryCost = groceryType === "organic" ? 30 : 0;
    return basePrice + groceryCost;
  };
  const getPricePerPlate = (plan: PricingPlan) => {
    const totalPrice = getPrice(plan);
    return Math.round(totalPrice / plan.plates);
  };
  const getPricePerMeal = (plan: PricingPlan) => {
    const totalPrice = getPrice(plan);
    return Math.round(totalPrice / plan.meals);
  };
  const handleContinue = () => {
    if (selectedPlan) {
      const plan = plans.find(p => p.id === selectedPlan);
      if (plan) {
        const selectedPlanData = {
          planName: plan.name,
          meals: plan.meals,
          price: getPrice(plan),
          frequency,
          groceryType
        };
        
        localStorage.setItem('checkout_plan', JSON.stringify(selectedPlanData));
        
        console.log("Selected plan:", selectedPlanData);
        navigate("/checkout");
      }
    }
  };
  const getFamilyDescription = () => {
    const adultText = numAdults === 1 ? "1 adult" : `${numAdults} adults`;
    const childText = numChildren === 1 ? "1 child" : `${numChildren} children`;
    if (numChildren === 0) {
      return adultText;
    }
    return `${adultText} and ${childText}`;
  };

  // Filter plans based on selected plates per serving
  const filteredPlans = plans.filter(plan => plan.plates >= platesPerServing);
  return <div className="min-h-screen bg-background pb-24">
      {/* Progress Bar */}
      <OnboardingProgress currentStep={14} totalSteps={14} />

      {/* Main Content */}
      <div className="pt-8 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Logo */}
          <div className="mb-12">
            <img src={livinLogo} alt="Livin" className="h-8 md:h-10" />
          </div>

          {/* Header */}
          <div className="mb-10">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3">
              Choose your Livin subscription
            </h1>
          </div>

          {/* Family Size Selection */}
          <div className="mb-6">
            <h2 className="text-lg md:text-xl font-semibold text-foreground mb-3">
              Family Size
            </h2>
            <div className="grid md:grid-cols-2 gap-3 max-w-2xl">
              {/* Adults */}
              <div className="space-y-2">
                <Label htmlFor="adults" className="text-sm text-foreground">
                  Adults (12 and over)
                </Label>
                <div className="rounded-2xl border-2 border-border bg-card px-5 py-3.5">
                  <div className="flex items-center gap-1 justify-center">
                    <button type="button" onClick={() => setNumAdults(Math.max(1, numAdults - 1))} className="h-9 w-9 rounded-md border border-input bg-background hover:bg-accent flex items-center justify-center transition-colors" aria-label="Decrease adults">
                      <Minus className="h-4 w-4" />
                    </button>
                    <div className="w-16 text-center">
                      <span className="text-xl font-semibold text-foreground">{numAdults}</span>
                    </div>
                    <button type="button" onClick={() => setNumAdults(Math.min(10, numAdults + 1))} className="h-9 w-9 rounded-md border border-input bg-background hover:bg-accent flex items-center justify-center transition-colors" aria-label="Increase adults">
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Children */}
              <div className="space-y-2">
                <Label htmlFor="children" className="text-sm text-foreground">
                  Children (under 12)
                </Label>
                <div className="rounded-2xl border-2 border-border bg-card px-5 py-3.5">
                  <div className="flex items-center gap-1 justify-center">
                    <button type="button" onClick={() => setNumChildren(Math.max(0, numChildren - 1))} className="h-9 w-9 rounded-md border border-input bg-background hover:bg-accent flex items-center justify-center transition-colors" aria-label="Decrease children">
                      <Minus className="h-4 w-4" />
                    </button>
                    <div className="w-16 text-center">
                      <span className="text-xl font-semibold text-foreground">{numChildren}</span>
                    </div>
                    <button type="button" onClick={() => setNumChildren(Math.min(10, numChildren + 1))} className="h-9 w-9 rounded-md border border-input bg-background hover:bg-accent flex items-center justify-center transition-colors" aria-label="Increase children">
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/* Frequency Selection */}
          <div className="mb-6">
            <h2 className="text-lg md:text-xl font-semibold text-foreground mb-2">
              Frequency
            </h2>
            <p className="text-xs text-muted-foreground mb-3">
              Livin chefs will cook for your family once a {frequency === "weekly" ? "week" : "month"}
            </p>
            <div className="grid md:grid-cols-2 gap-3 max-w-2xl">
              <OnboardingOption value="weekly" label="Once a week" selected={frequency === "weekly"} onClick={() => setFrequency("weekly")} />
              <OnboardingOption value="monthly" label="Once a month" selected={frequency === "monthly"} onClick={() => setFrequency("monthly")} />
            </div>
          </div>

          {/* Grocery Type Selection */}
          <div className="mb-10">
            <h2 className="text-lg md:text-xl font-semibold text-foreground mb-2">
              Grocery tier
            </h2>
            {groceryType === "organic" && <p className="text-xs text-muted-foreground mb-3">
                Livin chefs will purchase organic groceries from premium stores like Whole Foods.
              </p>}
            <div className="grid md:grid-cols-2 gap-3 max-w-2xl">
              <OnboardingOption value="standard" label="Standard groceries" selected={groceryType === "standard"} onClick={() => setGroceryType("standard")} />
              <OnboardingOption value="organic" label="Organic groceries (+$30)" selected={groceryType === "organic"} onClick={() => setGroceryType("organic")} />
            </div>
          </div>

          {/* Family Plan Selection Headline */}
          <div className="mb-6">
            <h2 className="text-lg md:text-xl font-semibold text-foreground mb-3">Choose a plan</h2>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {filteredPlans.map(plan => <div key={plan.id} className={cn("relative rounded-3xl border-2 p-6 space-y-4 transition-all duration-200 cursor-pointer hover:shadow-lg text-center", selectedPlan === plan.id ? "border-primary bg-primary/5" : "border-border bg-card hover:border-primary/50")} onClick={() => setSelectedPlan(plan.id)}>
                {/* Popular Badge */}
                {plan.popular && <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                    ⭐ MOST POPULAR
                  </Badge>}

                {/* Plan Name */}
                <h3 className="text-2xl font-bold text-foreground">
                  {plan.name}
                </h3>

                {/* Price */}
                <div className="text-xl font-normal text-foreground">
                  ${getPrice(plan)} per {frequency === "weekly" ? "week" : "month"}
                </div>

                {/* Details */}
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">
                    ${getPricePerMeal(plan)} per meal
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {plan.meals === 2 && "3hrs of in-home service"}
                    {plan.meals === 3 && "3hr30min of in-home service"}
                    {plan.meals === 4 && "4hrs of in-home service"}
                    {plan.meals === 10 && "9hrs30min of in-home service"}
                  </p>
                </div>

                {/* Select Button */}
                <Button variant={selectedPlan === plan.id ? "primary" : "outline"} size="md" className="w-full" onClick={e => {
              e.stopPropagation();
              setSelectedPlan(plan.id);
            }}>
                  Select Plan
                </Button>
              </div>)}
          </div>

          {/* Fine Print */}
          <p className="text-sm text-muted-foreground text-center mb-8">
            You can change your mealplan at any time
          </p>

          {/* Your First Service Preview */}
          {selectedPlan && selectedChef && selectedMealsForPreview.length > 0 && (
            <div className="mb-10 p-6 md:p-8 bg-accent/30 rounded-3xl border-2 border-muted">
              {/* Header */}
              <div className="mb-6">
                <h2 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                  Your first Livin service preview
                </h2>
                <p className="text-sm text-muted-foreground">
                  (Here's a preview of what your first Livin service might look like. You'll have the ability to edit and confirm your choices up to 48 hours before your service)
                </p>
              </div>

              {/* Chef Display */}
              <div className="mb-6 flex items-center gap-4 p-4 bg-background/50 rounded-2xl">
                <div className="flex-shrink-0">
                  <img 
                    src={selectedChef.imageSrc} 
                    alt={selectedChef.name}
                    className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-2 border-border"
                  />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">👨‍🍳 Chef:</p>
                  <h3 className="text-lg font-semibold text-foreground">{selectedChef.name}</h3>
                  <p className="text-sm text-muted-foreground">{selectedChef.title}</p>
                </div>
              </div>

              {/* Meal Cards Grid */}
              <div className={cn(
                "grid gap-4",
                selectedMealsForPreview.length === 2 && "grid-cols-1 sm:grid-cols-2",
                selectedMealsForPreview.length === 3 && "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
                selectedMealsForPreview.length === 4 && "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
                selectedMealsForPreview.length >= 10 && "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              )}>
                {selectedMealsForPreview.map((meal) => (
                  <div key={meal.id} className="bg-background rounded-2xl overflow-hidden border border-border hover:shadow-md transition-shadow">
                    {/* Meal Image */}
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={meal.image} 
                        alt={meal.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Meal Info */}
                    <div className="p-4">
                      <h4 className="text-base font-semibold text-foreground mb-2">
                        {meal.title}
                      </h4>
                      
                      {/* Plate Icons */}
                      <div className="flex items-center gap-2">
                        <div className="flex gap-1">
                          {Array.from({ length: Math.min(platesPerServing, 5) }).map((_, i) => (
                            <span key={i} className="text-lg">🍽️</span>
                          ))}
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {platesPerServing} plate{platesPerServing !== 1 ? 's' : ''}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Continue Button */}
          <div className="flex justify-center">
            <Button variant="primary" size="lg" onClick={handleContinue} disabled={!selectedPlan} className="px-12">
              Continue to Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>;
}