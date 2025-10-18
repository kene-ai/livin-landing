import { useState } from "react";
import { useNavigate } from "react-router-dom";
import OnboardingProgress from "@/components/library/OnboardingProgress";
import Button from "@/components/library/Button";
import livinLogo from "@/assets/livin-logo.webp";
import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

/**
 * Onboarding Step 8
 * 
 * Household size and dietary preferences
 */
export default function OnboardingStep8() {
  const navigate = useNavigate();
  const [adults, setAdults] = useState(2);
  const [kids, setKids] = useState(1);
  const [kidAges, setKidAges] = useState<string[]>(["3-5"]);
  const [selectedRestrictions, setSelectedRestrictions] = useState<string[]>([]);

  const dietaryRestrictions = [
    "Vegetarian",
    "Vegan",
    "Gluten-free",
    "Dairy-free",
    "Nut allergy",
    "Pescatarian",
    "Keto",
    "Paleo",
    "Low-carb",
    "Halal",
    "Kosher",
  ];

  const ageRanges = [
    { value: "0-2", label: "0-2 years" },
    { value: "3-5", label: "3-5 years" },
    { value: "6-10", label: "6-10 years" },
    { value: "11-14", label: "11-14 years" },
    { value: "15+", label: "15+ years" },
  ];

  const handleAdultsChange = (delta: number) => {
    const newValue = Math.max(0, adults + delta);
    setAdults(newValue);
  };

  const handleKidsChange = (delta: number) => {
    const newValue = Math.max(0, kids + delta);
    setKids(newValue);
    
    // Update kid ages array
    if (newValue > kidAges.length) {
      setKidAges([...kidAges, "3-5"]);
    } else if (newValue < kidAges.length) {
      setKidAges(kidAges.slice(0, newValue));
    }
  };

  const handleKidAgeChange = (index: number, age: string) => {
    const newAges = [...kidAges];
    newAges[index] = age;
    setKidAges(newAges);
  };

  const toggleRestriction = (restriction: string) => {
    setSelectedRestrictions(prev =>
      prev.includes(restriction)
        ? prev.filter(r => r !== restriction)
        : [...prev, restriction]
    );
  };

  const handleNext = () => {
    navigate("/onboarding/step-9", { state: { adults, kids, kidAges, dietaryRestrictions: selectedRestrictions } });
  };

  const totalPeople = adults + kids;

  return (
    <div className="min-h-screen bg-background">
      {/* Progress Bar */}
      <OnboardingProgress currentStep={5} totalSteps={5} />

      {/* Main Content */}
      <div className="pt-8 pb-12 px-6 md:px-8">
        <div className="max-w-2xl mx-auto">
          {/* Logo */}
          <div className="mb-8 md:mb-12">
            <img 
              src={livinLogo} 
              alt="Livin" 
              className="h-8 md:h-10"
            />
          </div>

          {/* Header */}
          <h1 className="text-lg md:text-xl lg:text-2xl font-serif font-bold text-foreground mb-8 md:mb-10 leading-tight">
            Tell us whose eating
          </h1>

          {/* Adults Counter */}
          <div className="mb-6">
            <div className="flex items-center justify-between p-6 rounded-2xl border-2 border-muted">
              <span className="text-lg md:text-xl font-semibold text-foreground">Adults</span>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => handleAdultsChange(-1)}
                  className="w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center hover:bg-primary/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={adults === 0}
                >
                  <Minus className="w-5 h-5 text-primary" />
                </button>
                <span className="text-2xl font-bold text-foreground w-12 text-center">{adults}</span>
                <button
                  onClick={() => handleAdultsChange(1)}
                  className="w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center hover:bg-primary/10 transition-colors"
                >
                  <Plus className="w-5 h-5 text-primary" />
                </button>
              </div>
            </div>
          </div>

          {/* Kids Counter */}
          <div className="mb-8">
            <div className="flex items-center justify-between p-6 rounded-2xl border-2 border-muted">
              <span className="text-lg md:text-xl font-semibold text-foreground">Kids</span>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => handleKidsChange(-1)}
                  className="w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center hover:bg-primary/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={kids === 0}
                >
                  <Minus className="w-5 h-5 text-primary" />
                </button>
                <span className="text-2xl font-bold text-foreground w-12 text-center">{kids}</span>
                <button
                  onClick={() => handleKidsChange(1)}
                  className="w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center hover:bg-primary/10 transition-colors"
                >
                  <Plus className="w-5 h-5 text-primary" />
                </button>
              </div>
            </div>
          </div>

          {/* Kid Ages (if kids > 0) */}
          {kids > 0 && (
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-foreground mb-4">Ages:</h3>
              <div className="space-y-3">
                {kidAges.map((age, index) => (
                  <Select key={index} value={age} onValueChange={(value) => handleKidAgeChange(index, value)}>
                    <SelectTrigger className="h-14 text-base rounded-2xl border-2 border-muted">
                      <SelectValue placeholder="Select age range" />
                    </SelectTrigger>
                    <SelectContent className="bg-background">
                      {ageRanges.map((range) => (
                        <SelectItem key={range.value} value={range.value}>
                          {range.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                ))}
              </div>
            </div>
          )}

          {/* Dietary Restrictions */}
          <div className="mb-10">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Any allergies or dietary restrictions?
            </h3>
            <div className="flex flex-wrap gap-3">
              {dietaryRestrictions.map((restriction) => (
                <button
                  key={restriction}
                  onClick={() => toggleRestriction(restriction)}
                  className={cn(
                    "px-5 py-2.5 rounded-full border-2 transition-all font-medium",
                    selectedRestrictions.includes(restriction)
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-background text-foreground border-muted hover:border-primary/50"
                  )}
                >
                  {restriction}
                </button>
              ))}
            </div>
          </div>

          {/* Next Button */}
          <div className="flex justify-end">
            <Button 
              variant="primary" 
              size="lg"
              onClick={handleNext}
              disabled={totalPeople === 0}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
