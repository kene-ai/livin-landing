import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import OnboardingProgress from "@/components/library/OnboardingProgress";
import ChefCard from "@/components/library/ChefCard";
import Button from "@/components/library/Button";
import livinLogo from "@/assets/livin-logo.webp";
import { cn } from "@/lib/utils";

// Chef Images
import marcusImg from "@/assets/chefs/marcus.png";
import sarahImg from "@/assets/chefs/sarah.png";
import lisaImg from "@/assets/chefs/lisa.png";
import davidImg from "@/assets/chefs/david.png";
import jenniferImg from "@/assets/chefs/jennifer.png";
import robertImg from "@/assets/chefs/robert.png";
import emilyImg from "@/assets/chefs/emily.png";
import michaelImg from "@/assets/chefs/michael.png";

interface Chef {
  id: string;
  name: string;
  title: string;
  bio: string;
  imageSrc: string;
  category: string[];
  tags: string[];
}

const allChefs: Chef[] = [
  // Recommended (3 chefs - will be auto-favorited)
  {
    id: "chef-marcus",
    name: "Marcus Johnson",
    title: "Culinary Institute Graduate",
    bio: "Specializes in Southern comfort food and healthy meal prep. 12+ years experience.",
    imageSrc: marcusImg,
    category: ["recommended", "experienced"],
    tags: ["southern", "healthy", "experienced"],
  },
  {
    id: "chef-sarah",
    name: "Sarah Chen",
    title: "Le Cordon Bleu Certified",
    bio: "Expert in Asian fusion and plant-based cuisine. Creative and nutrition-focused.",
    imageSrc: sarahImg,
    category: ["recommended", "plant-based", "international"],
    tags: ["asian-fusion", "plant-based", "creative"],
  },
  {
    id: "chef-lisa",
    name: "Lisa Brown",
    title: "Family Meal Expert",
    bio: "15 years creating kid-friendly nutritious meals. Calm, patient, and great with families.",
    imageSrc: lisaImg,
    category: ["recommended", "family-friendly", "experienced"],
    tags: ["kid-friendly", "family", "nutrition"],
  },
  
  // Family-Friendly
  {
    id: "chef-david",
    name: "David Martinez",
    title: "Italian Cuisine Specialist",
    bio: "Creates elegant, simple Italian meals perfect for families. Friendly and chatty.",
    imageSrc: davidImg,
    category: ["family-friendly", "international"],
    tags: ["italian", "family", "friendly"],
  },
  {
    id: "chef-emily",
    name: "Emily Rodriguez",
    title: "French-Trained Chef",
    bio: "French culinary techniques made accessible. Specializes in wholesome family dinners.",
    imageSrc: emilyImg,
    category: ["family-friendly", "international"],
    tags: ["french", "family", "elegant"],
  },
  {
    id: "chef-amy",
    name: "Amy Thompson",
    title: "Kids' Nutrition Expert",
    bio: "Makes healthy eating fun for children. 8 years experience with picky eaters.",
    imageSrc: "/chefs/chef-image-2.png",
    category: ["family-friendly"],
    tags: ["kids", "nutrition", "creative"],
  },
  
  // Experienced (15+ years)
  {
    id: "chef-michael",
    name: "Michael Patel",
    title: "Global Cuisine Expert",
    bio: "18 years crafting dishes from around the world. Tons of experience in fine dining.",
    imageSrc: michaelImg,
    category: ["experienced", "international"],
    tags: ["global", "fine-dining", "experienced"],
  },
  {
    id: "chef-robert",
    name: "Robert Thompson",
    title: "Mediterranean & Middle Eastern",
    bio: "20+ years mastering Mediterranean flavors. Calm, professional, and detail-oriented.",
    imageSrc: robertImg,
    category: ["experienced", "international"],
    tags: ["mediterranean", "middle-eastern", "experienced"],
  },
  {
    id: "chef-james",
    name: "James Anderson",
    title: "Veteran Executive Chef",
    bio: "25 years in professional kitchens. Diverse background in American and European cuisine.",
    imageSrc: "/chefs/chef-image-3.png",
    category: ["experienced"],
    tags: ["american", "european", "executive"],
  },
  
  // Plant-Based Experts
  {
    id: "chef-jennifer",
    name: "Jennifer Lee",
    title: "Vegan & Vegetarian Specialist",
    bio: "Passionate about plant-based cooking. Creates flavorful, satisfying vegan meals.",
    imageSrc: jenniferImg,
    category: ["plant-based"],
    tags: ["vegan", "vegetarian", "creative"],
  },
  {
    id: "chef-maya",
    name: "Maya Green",
    title: "Whole Foods Expert",
    bio: "Raw food and whole foods specialist. Nutrition-focused with 10 years experience.",
    imageSrc: "/chefs/chef-image-4.png",
    category: ["plant-based", "specialty-diet"],
    tags: ["raw", "whole-foods", "nutrition"],
  },
  {
    id: "chef-olivia",
    name: "Olivia Stone",
    title: "Plant-Based Nutrition Chef",
    bio: "Certified nutritionist and chef. Makes plant-based eating delicious and easy.",
    imageSrc: "/chefs/chef-image-5.png",
    category: ["plant-based"],
    tags: ["nutrition", "plant-based", "education"],
  },
  
  // International Cuisine
  {
    id: "chef-carlos",
    name: "Carlos Rivera",
    title: "Latin American Chef",
    bio: "Authentic Latin American flavors with a modern twist. Vibrant and creative.",
    imageSrc: "/chefs/chef-image-6.png",
    category: ["international"],
    tags: ["latin-american", "creative", "authentic"],
  },
  {
    id: "chef-yuki",
    name: "Yuki Tanaka",
    title: "Japanese & Korean Fusion",
    bio: "Traditional Japanese techniques with Korean influences. Precision and artistry.",
    imageSrc: "/chefs/chef-image-7.png",
    category: ["international"],
    tags: ["japanese", "korean", "fusion"],
  },
  
  // Specialty Diet
  {
    id: "chef-rachel",
    name: "Rachel Klein",
    title: "Keto & Low-Carb Expert",
    bio: "Specializes in ketogenic and low-carb meal prep. Makes diet compliance delicious.",
    imageSrc: "/chefs/chef-lady.png",
    category: ["specialty-diet"],
    tags: ["keto", "low-carb", "diet"],
  },
  {
    id: "chef-daniel",
    name: "Daniel Foster",
    title: "Gluten-Free Specialist",
    bio: "Expert in gluten-free cooking and baking. 7 years helping clients with celiac disease.",
    imageSrc: "/chefs/chef-image.png",
    category: ["specialty-diet"],
    tags: ["gluten-free", "allergen-friendly", "baking"],
  },
  {
    id: "chef-anna",
    name: "Anna Kowalski",
    title: "Allergen-Friendly Chef",
    bio: "Experienced with multiple food allergies and sensitivities. Safe, delicious meals.",
    imageSrc: "/chefs/chef-image-2.png",
    category: ["specialty-diet"],
    tags: ["allergen-friendly", "safe", "custom"],
  },
];

const categories = [
  { id: "recommended", label: "Recommended For You" },
  { id: "family-friendly", label: "Family-Friendly" },
  { id: "experienced", label: "Experienced (15+ Years)" },
  { id: "plant-based", label: "Plant-Based Experts" },
  { id: "international", label: "International Cuisine" },
  { id: "specialty-diet", label: "Specialty Diet" },
];

/**
 * Onboarding Step 9
 * 
 * Chef selection with favoriting and category filters
 */
export default function OnboardingStep9() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>("recommended");
  const [favoritedChefs, setFavoritedChefs] = useState<string[]>([]);

  // Get recommended chefs (first 3)
  const recommendedChefs = allChefs.filter(chef => chef.category.includes("recommended"));

  // Auto-favorite recommended chefs on initial load
  useEffect(() => {
    const stored = localStorage.getItem('favoritedChefs');
    const recommendedChefIds = recommendedChefs.map(chef => chef.id);
    
    if (stored) {
      const existingFavorites = JSON.parse(stored);
      // Merge existing favorites with recommended chefs
      const allFavorites = Array.from(new Set([...existingFavorites, ...recommendedChefIds]));
      setFavoritedChefs(allFavorites);
      localStorage.setItem('favoritedChefs', JSON.stringify(allFavorites));
    } else {
      // First time: auto-favorite recommended chefs
      setFavoritedChefs(recommendedChefIds);
      localStorage.setItem('favoritedChefs', JSON.stringify(recommendedChefIds));
    }
  }, []);

  // Toggle favorite handler
  const handleToggleFavorite = (chefId: string) => {
    setFavoritedChefs(prev => {
      const newFavorites = prev.includes(chefId)
        ? prev.filter(id => id !== chefId)
        : [...prev, chefId];
      
      localStorage.setItem('favoritedChefs', JSON.stringify(newFavorites));
      return newFavorites;
    });
  };

  // Filter chefs by selected category
  const displayedChefs = allChefs.filter(chef => chef.category.includes(selectedCategory));

  const handleNext = () => {
    navigate("/onboarding/step-10");
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Progress Bar */}
      <OnboardingProgress currentStep={8} totalSteps={14} />

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
