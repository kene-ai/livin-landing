import { useState, useEffect } from "react";
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
import { cn } from "@/lib/utils";

interface Chef {
  id: string;
  name: string;
  title: string;
  bio: string;
  imageSrc: string;
  category: string;
  tags: string[];
}

/**
 * Onboarding Step 9 (Route: /onboarding/step-9)
 * 
 * Chef selection with favoriting and category filters
 */
export default function OnboardingStep10() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>("recommended");
  const [favoritedChefs, setFavoritedChefs] = useState<string[]>([]);

  const categories = [
    { id: "recommended", label: "Recommended For You" },
    { id: "family-friendly", label: "Family-Friendly" },
    { id: "experienced", label: "Experienced (15+ Years)" },
    { id: "plant-based", label: "Plant-Based Experts" },
    { id: "international", label: "International Cuisine" },
    { id: "specialty-diet", label: "Specialty Diet" },
  ];

  const allChefs: Chef[] = [
    // Recommended (3 chefs)
    {
      id: "1",
      name: "Marcus Johnson",
      title: "Culinary Institute Graduate",
      bio: "Specializes in Southern comfort food and healthy meal prep. 8 years experience.",
      imageSrc: marcusImg,
      category: "recommended",
      tags: ["experienced", "southern"]
    },
    {
      id: "2",
      name: "Sarah Chen",
      title: "Le Cordon Bleu Certified",
      bio: "Expert in Asian fusion and plant-based cuisine. Passionate about nutrition.",
      imageSrc: sarahImg,
      category: "recommended",
      tags: ["plant-based", "asian", "nutrition"]
    },
    {
      id: "8",
      name: "Lisa Brown",
      title: "Family Meal Expert",
      bio: "Focuses on kid-friendly, nutritious meals that everyone will love.",
      imageSrc: lisaImg,
      category: "recommended",
      tags: ["family-friendly", "kids", "nutrition"]
    },
    // Family-Friendly (4 chefs)
    {
      id: "8",
      name: "Lisa Brown",
      title: "Family Meal Expert",
      bio: "Focuses on kid-friendly, nutritious meals that everyone will love.",
      imageSrc: lisaImg,
      category: "family-friendly",
      tags: ["kids", "nutrition"]
    },
    {
      id: "3",
      name: "David Martinez",
      title: "Italian Cuisine Specialist",
      bio: "Trained in Rome, loves creating family-friendly Italian meals. 10+ years experience.",
      imageSrc: davidImg,
      category: "family-friendly",
      tags: ["italian", "experienced"]
    },
    {
      id: "6",
      name: "Emily Rodriguez",
      title: "Pastry & Savory Chef",
      bio: "French-trained chef with a knack for elegant, simple meals.",
      imageSrc: emilyImg,
      category: "family-friendly",
      tags: ["french", "simple"]
    },
    {
      id: "9",
      name: "Amanda White",
      title: "Kid-Friendly Specialist",
      bio: "Specializes in making healthy meals that kids actually want to eat.",
      imageSrc: "/placeholder.svg",
      category: "family-friendly",
      tags: ["kids", "healthy"]
    },
    // Experienced (15+ years) (4 chefs)
    {
      id: "1",
      name: "Marcus Johnson",
      title: "Culinary Institute Graduate",
      bio: "Specializes in Southern comfort food and healthy meal prep. 8 years experience.",
      imageSrc: marcusImg,
      category: "experienced",
      tags: ["southern", "meal-prep"]
    },
    {
      id: "7",
      name: "Michael Patel",
      title: "Global Cuisine Specialist",
      bio: "Brings flavors from around the world to your kitchen. 12 years experience.",
      imageSrc: michaelImg,
      category: "experienced",
      tags: ["international", "global"]
    },
    {
      id: "10",
      name: "James Anderson",
      title: "Fine Dining Veteran",
      bio: "20 years of Michelin-starred experience, now bringing restaurant quality to homes.",
      imageSrc: "/placeholder.svg",
      category: "experienced",
      tags: ["fine-dining", "upscale"]
    },
    {
      id: "11",
      name: "Patricia Davis",
      title: "Culinary Director",
      bio: "Veteran chef with diverse background in French, American, and contemporary cuisine.",
      imageSrc: "/placeholder.svg",
      category: "experienced",
      tags: ["diverse", "french", "american"]
    },
    // Plant-Based Experts (3 chefs)
    {
      id: "2",
      name: "Sarah Chen",
      title: "Le Cordon Bleu Certified",
      bio: "Expert in Asian fusion and plant-based cuisine. Passionate about nutrition.",
      imageSrc: sarahImg,
      category: "plant-based",
      tags: ["asian", "nutrition", "vegan"]
    },
    {
      id: "4",
      name: "Jennifer Lee",
      title: "Plant-Based Expert",
      bio: "Specializes in vegan and vegetarian cuisine. Makes healthy eating delicious.",
      imageSrc: jenniferImg,
      category: "plant-based",
      tags: ["vegan", "vegetarian"]
    },
    {
      id: "12",
      name: "Carlos Rivera",
      title: "Whole Foods Specialist",
      bio: "Raw food and whole foods expert focusing on nutrient-dense, plant-based meals.",
      imageSrc: "/placeholder.svg",
      category: "plant-based",
      tags: ["raw", "whole-foods", "vegan"]
    },
    // International Cuisine (4 chefs)
    {
      id: "3",
      name: "David Martinez",
      title: "Italian Cuisine Specialist",
      bio: "Trained in Rome, loves creating family-friendly Italian meals. 10+ years experience.",
      imageSrc: davidImg,
      category: "international",
      tags: ["italian"]
    },
    {
      id: "7",
      name: "Michael Patel",
      title: "Global Cuisine Specialist",
      bio: "Brings flavors from around the world to your kitchen. 12 years experience.",
      imageSrc: michaelImg,
      category: "international",
      tags: ["global", "diverse"]
    },
    {
      id: "5",
      name: "Robert Thompson",
      title: "Mediterranean & Middle Eastern Chef",
      bio: "Loves Mediterranean and Middle Eastern flavors. Great with kids.",
      imageSrc: robertImg,
      category: "international",
      tags: ["mediterranean", "middle-eastern"]
    },
    {
      id: "13",
      name: "Yuki Tanaka",
      title: "Japanese Cuisine Master",
      bio: "Authentic Japanese and Asian fusion specialist with Tokyo training.",
      imageSrc: "/placeholder.svg",
      category: "international",
      tags: ["japanese", "asian-fusion"]
    },
    // Specialty Diet (3 chefs)
    {
      id: "14",
      name: "Dr. Nina Foster",
      title: "Keto & Low-Carb Specialist",
      bio: "Nutritionist and chef specializing in delicious keto and low-carb meals.",
      imageSrc: "/placeholder.svg",
      category: "specialty-diet",
      tags: ["keto", "low-carb", "nutrition"]
    },
    {
      id: "15",
      name: "Tom Richardson",
      title: "Gluten-Free Expert",
      bio: "Creating amazing gluten-free meals that taste just as good as the original.",
      imageSrc: "/placeholder.svg",
      category: "specialty-diet",
      tags: ["gluten-free", "celiac"]
    },
    {
      id: "16",
      name: "Sophie Martin",
      title: "Allergen-Friendly Chef",
      bio: "Specializes in meals free from common allergens while maintaining incredible flavor.",
      imageSrc: "/placeholder.svg",
      category: "specialty-diet",
      tags: ["allergen-free", "safe-cooking"]
    },
  ];

  // Load favorites from localStorage and auto-favorite recommended chefs
  useEffect(() => {
    const stored = localStorage.getItem('favoritedChefs');
    const recommendedChefIds = ["1", "2", "8"]; // Marcus, Sarah, Lisa
    
    if (stored) {
      const existingFavorites = JSON.parse(stored);
      // Merge and deduplicate
      const allFavorites = Array.from(new Set([...existingFavorites, ...recommendedChefIds]));
      setFavoritedChefs(allFavorites);
      localStorage.setItem('favoritedChefs', JSON.stringify(allFavorites));
    } else {
      // First time: auto-favorite recommended chefs
      setFavoritedChefs(recommendedChefIds);
      localStorage.setItem('favoritedChefs', JSON.stringify(recommendedChefIds));
    }
  }, []);

  const handleToggleFavorite = (chefId: string) => {
    setFavoritedChefs(prev => {
      const newFavorites = prev.includes(chefId)
        ? prev.filter(id => id !== chefId)
        : [...prev, chefId];
      
      localStorage.setItem('favoritedChefs', JSON.stringify(newFavorites));
      return newFavorites;
    });
  };

  const displayedChefs = allChefs.filter(chef => chef.category === selectedCategory);

  const handleNext = () => {
    navigate("/onboarding/step-10");
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Progress Bar */}
      <OnboardingProgress currentStep={9} totalSteps={14} />

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
              Explore our chefs and favorite the ones you'd like to work with
            </h1>
            <p className="text-base md:text-lg text-muted-foreground">
              We've pre-selected some recommended chefs for you, but feel free to explore and favorite others.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              You can always choose your chef before your first serving.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="mb-8 overflow-x-auto">
            <div className="flex gap-2 pb-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors duration-200",
                    selectedCategory === category.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  )}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Chefs Grid - Filtered by Category */}
          <section className="mb-12">
            <h2 className="text-xl font-semibold text-foreground mb-2">
              {categories.find(c => c.id === selectedCategory)?.label}
            </h2>
            <p className="text-sm text-muted-foreground mb-6">
              {displayedChefs.length} chef{displayedChefs.length !== 1 ? 's' : ''}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {displayedChefs.map(chef => (
                <ChefCard
                  key={chef.id}
                  id={chef.id}
                  name={chef.name}
                  title={chef.title}
                  bio={chef.bio}
                  imageSrc={chef.imageSrc}
                  favorited={favoritedChefs.includes(chef.id)}
                  onToggleFavorite={() => handleToggleFavorite(chef.id)}
                />
              ))}
            </div>
          </section>

          {/* Continue Button + Counter */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              {favoritedChefs.length > 0 
                ? `${favoritedChefs.length} chef${favoritedChefs.length !== 1 ? 's' : ''} favorited`
                : 'No chefs favorited yet'}
            </p>
            <Button 
              variant="primary" 
              size="lg"
              onClick={handleNext}
            >
              Continue
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
