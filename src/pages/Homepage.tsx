import { useState } from "react";
import NavigationBar from "@/components/library/NavigationBar";
import Button from "@/components/library/Button";
import Footer from "@/components/library/Footer";
import SectionHeading from "@/components/library/SectionHeading";
import TestimonialCard from "@/components/library/TestimonialCard";
import MenuItemCard from "@/components/library/MenuItemCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Homepage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedDietary, setSelectedDietary] = useState<string[]>([]);
  const navItems = [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Menu", href: "#menu" },
    { label: "Our Chefs", href: "#our-chefs" },
    { label: "Pricing", href: "#pricing" },
  ];

  const footerColumns = [
    {
      title: "Company",
      links: [
        { label: "About", href: "#about" },
        { label: "Careers", href: "#careers" },
        { label: "Contact", href: "#contact" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Help Center", href: "#help" },
        { label: "Terms", href: "#terms" },
        { label: "Privacy", href: "#privacy" },
      ],
    },
  ];

  const categories = ["All", "Poultry", "Beef", "Seafood", "Vegetarian", "⭐ Kid-Friendly"];
  const dietaryOptions = ["Gluten-Free", "Dairy-Free", "Vegan"];

  const menuItems = [
    { name: "Lemon Herb Chicken with Roasted Vegetables", category: "Poultry", tags: ["GF", "DF"], kidFriendly: false, image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=800" },
    { name: "Beef & Broccoli Stir Fry", category: "Beef", tags: ["GF"], kidFriendly: false, image: "https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?w=800" },
    { name: "Salmon with Asparagus", category: "Seafood", tags: ["GF", "DF"], kidFriendly: false, image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800" },
    { name: "Chicken Parmesan", category: "Poultry", tags: [], kidFriendly: true, image: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=800" },
    { name: "Mediterranean Quinoa Bowl", category: "Vegetarian", tags: ["V", "GF"], kidFriendly: false, image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800" },
    { name: "Teriyaki Chicken Bowls", category: "Poultry", tags: ["DF"], kidFriendly: true, image: "https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=800" },
    { name: "Grilled Steak with Sweet Potato", category: "Beef", tags: ["GF", "DF"], kidFriendly: false, image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=800" },
    { name: "Shrimp Tacos with Slaw", category: "Seafood", tags: ["DF"], kidFriendly: true, image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800" },
    { name: "Veggie Pasta Primavera", category: "Vegetarian", tags: ["V"], kidFriendly: true, image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800" },
    { name: "Honey Mustard Chicken Thighs", category: "Poultry", tags: ["GF"], kidFriendly: false, image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=800" },
    { name: "Beef Tacos with Black Beans", category: "Beef", tags: ["GF"], kidFriendly: true, image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=800" },
    { name: "Baked Cod with Lemon Butter", category: "Seafood", tags: ["GF"], kidFriendly: false, image: "https://images.unsplash.com/photo-1580959375944-0b5c8e083211?w=800" },
    { name: "Chickpea Curry", category: "Vegetarian", tags: ["V", "GF", "DF"], kidFriendly: false, image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800" },
    { name: "Turkey Meatballs with Marinara", category: "Poultry", tags: [], kidFriendly: true, image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=800" },
    { name: "Grilled Fish Tacos", category: "Seafood", tags: ["DF"], kidFriendly: false, image: "https://images.unsplash.com/photo-1512838243191-e81e8f66f1fd?w=800" },
    { name: "Stuffed Bell Peppers", category: "Beef", tags: ["GF"], kidFriendly: false, image: "https://images.unsplash.com/photo-1609501676725-7186f017a4b7?w=800" },
    { name: "Tofu Stir Fry", category: "Vegetarian", tags: ["V", "DF"], kidFriendly: false, image: "https://images.unsplash.com/photo-1546069901-eacef0df6022?w=800" },
    { name: "BBQ Chicken Drumsticks", category: "Poultry", tags: ["GF", "DF"], kidFriendly: true, image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=800" },
  ];

  const toggleDietary = (option: string) => {
    setSelectedDietary(prev =>
      prev.includes(option) ? prev.filter(o => o !== option) : [...prev, option]
    );
  };

  const filteredMenuItems = menuItems.filter(item => {
    const categoryMatch = selectedCategory === "All" || 
                         (selectedCategory === "⭐ Kid-Friendly" ? item.kidFriendly : item.category === selectedCategory);
    
    const dietaryMatch = selectedDietary.length === 0 || 
                        selectedDietary.every(diet => {
                          if (diet === "Gluten-Free") return item.tags.includes("GF");
                          if (diet === "Dairy-Free") return item.tags.includes("DF");
                          if (diet === "Vegan") return item.tags.includes("V");
                          return false;
                        });
    
    return categoryMatch && dietaryMatch;
  });

  return (
    <div className="min-h-screen bg-[#FAFAF8] scroll-smooth">
      <NavigationBar
        logo="livin"
        navItems={navItems}
        ctaLabel="Sign Up"
      />
      
      {/* Hero Section */}
      <section className="py-8 md:py-16 px-8 md:px-12 lg:px-16 bg-[#F5F1E8]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-stretch">
          {/* Left Column - Text Content */}
          <div className="space-y-4 flex flex-col justify-start py-8 pl-8 md:pl-12 lg:pl-16">
            {/* Main Headline */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Your Personal Chef,<br />In Your Kitchen
            </h1>
            
            {/* Description */}
            <p className="text-base text-muted-foreground">
              Find a local chef who prepares customized, healthy meals in your kitchen
            </p>
            
            {/* Trust Badges with checkmarks */}
            <div className="space-y-2.5">
              <div className="flex items-center gap-2.5 text-foreground">
                <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                  <span className="text-primary text-xs">✓</span>
                </div>
                <span className="text-sm">Select meals and your dietary preferences</span>
              </div>
              <div className="flex items-center gap-2.5 text-foreground">
                <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                  <span className="text-primary text-xs">✓</span>
                </div>
                <span className="text-sm">Your Chef prepares the meal in your kitchen</span>
              </div>
              <div className="flex items-center gap-2.5 text-foreground">
                <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                  <span className="text-primary text-xs">✓</span>
                </div>
                <span className="text-sm">Groceries and cleanup included</span>
              </div>
            </div>
            
            {/* Pricing */}
            <p className="text-lg font-bold text-foreground">
              Starting at <span className="text-primary">$20 per plate</span>
            </p>
            
            {/* CTA Buttons */}
            <div className="pt-2">
              <Button size="md">
                Get started
              </Button>
            </div>
          </div>
          
          {/* Right Column - Image */}
          <div className="rounded-3xl overflow-hidden h-full">
            <img 
              src="https://images.unsplash.com/photo-1556911073-52527ac43761?w=1600" 
              alt="Chef cooking in home kitchen"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-16 px-8 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <SectionHeading
              title="How Livin Works"
              subtitle="Your chef handles everything from grocery shopping to cleanup. You get healthy, customized meals without lifting a finger."
              centered
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Step 1 */}
            <div className="rounded-3xl bg-card border border-border overflow-hidden">
              <div className="p-6 space-y-4">
                <div className="w-10 h-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center mx-auto">
                  <span className="text-xl font-bold">1</span>
                </div>
                <div className="text-center space-y-2">
                  <h3 className="text-xl font-bold text-foreground">Choose your meal</h3>
                  <p className="text-sm text-muted-foreground">
                    Choose a date, time, and menu -- book with just 48 hours notice.
                  </p>
                </div>
              </div>
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800" 
                  alt="Fresh healthy meal selection"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Step 2 */}
            <div className="rounded-3xl bg-card border border-border overflow-hidden">
              <div className="p-6 space-y-4">
                <div className="w-10 h-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center mx-auto">
                  <span className="text-xl font-bold">2</span>
                </div>
                <div className="text-center space-y-2">
                  <h3 className="text-xl font-bold text-foreground">Chef Shops</h3>
                  <p className="text-sm text-muted-foreground">
                    Chef buys ALL groceries for your meals
                  </p>
                </div>
              </div>
              <div className="aspect-[4/3] bg-muted flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-5xl">🛒</span>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="rounded-3xl bg-card border border-border overflow-hidden">
              <div className="p-6 space-y-4">
                <div className="w-10 h-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center mx-auto">
                  <span className="text-xl font-bold">3</span>
                </div>
                <div className="text-center space-y-2">
                  <h3 className="text-xl font-bold text-foreground">Chef Cooks</h3>
                  <p className="text-sm text-muted-foreground">
                    Chef cooks all your meals for the week right in your own kitchen
                  </p>
                </div>
              </div>
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800" 
                  alt="Chef cooking in kitchen"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Step 4 */}
            <div className="rounded-3xl bg-card border border-border overflow-hidden">
              <div className="p-6 space-y-4">
                <div className="w-10 h-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center mx-auto">
                  <span className="text-xl font-bold">4</span>
                </div>
                <div className="text-center space-y-2">
                  <h3 className="text-xl font-bold text-foreground">Chef Cleans</h3>
                  <p className="text-sm text-muted-foreground">
                    Kitchen left spotless and meals labeled & stored in your fridge
                  </p>
                </div>
              </div>
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800" 
                  alt="Clean organized kitchen"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Callout */}
          <div className="max-w-2xl mx-auto text-center">
            <Button size="lg">
              Sign Up
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-12 md:px-16 lg:px-24 bg-accent/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Results */}
            <div className="space-y-6">
              <SectionHeading
                title="Real Families, Real Results"
                subtitle="Join 1,000+ families who've transformed their meal routine"
              />
              
              <div className="space-y-4 pt-4">
                <p className="text-lg font-semibold text-foreground">
                  Results for the average family:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary-foreground text-xs">✓</span>
                    </div>
                    <span className="text-foreground text-base">Saves $800/month</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary-foreground text-xs">✓</span>
                    </div>
                    <span className="text-foreground text-base">Saves 10 hrs/week on grocery shopping, cooking and cleanup</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary-foreground text-xs">✓</span>
                    </div>
                    <span className="text-foreground text-base">Increased health and nutrition</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column - Testimonials Carousel */}
            <div className="relative">
              <Carousel className="w-full">
                <CarouselContent>
                  <CarouselItem>
                    <TestimonialCard
                      quote="The best part? I don't step foot in a grocery store anymore. Chef Maria buys everything, cooks meals my kids actually eat, and leaves my kitchen cleaner than I ever could. Game changer."
                      author="Sarah M., Mom of 2"
                      role="Los Angeles"
                      avatarSrc="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <TestimonialCard
                      quote="Chef David left our kitchen spotless. I mean SPOTLESS. He even cleaned stuff that was already there. And I never thought about what to buy or cook—just came home to a week of healthy meals."
                      author="Jennifer L., Busy Professional"
                      role="Beverly Hills"
                      avatarSrc="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <TestimonialCard
                      quote="I did the math: grocery delivery fees, meal kit ingredients, my time cooking and cleaning—Livin is actually CHEAPER. And I don't touch a dish or visit a store. Best $320/week I spend."
                      author="Marcus T., Software Engineer"
                      role="Santa Monica"
                      avatarSrc="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
                    />
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="absolute -left-12 top-1/2 -translate-y-1/2" />
                <CarouselNext className="absolute -right-12 top-1/2 -translate-y-1/2" />
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-16 px-8 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 max-w-3xl mx-auto">
            <SectionHeading
              title="What's On the Menu?"
              subtitle="Balanced meals with fresh ingredients—think lean protein, veggies, and grains. Don't love something? Swap it out or request your favorites. Menus update monthly, but you keep access to your top picks."
              centered
            />
          </div>

          {/* Filter Bar */}
          <div className="mb-8 space-y-4">
            {/* Category Pills */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-accent text-accent-foreground hover:bg-accent/80"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Dietary Checkboxes */}
            <div className="flex flex-wrap gap-4 justify-center">
              {dietaryOptions.map(option => (
                <label key={option} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedDietary.includes(option)}
                    onChange={() => toggleDietary(option)}
                    className="w-4 h-4 rounded border-border accent-primary"
                  />
                  <span className="text-sm text-foreground">{option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Menu Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {filteredMenuItems.map((item, index) => (
              <MenuItemCard
                key={index}
                name={item.name}
                description=""
                imageSrc={item.image}
                dietaryTags={[...item.tags, ...(item.kidFriendly ? ["⭐ Kid Favorite"] : [])]}
              />
            ))}
          </div>

          {/* Info Text */}
          <div className="text-center space-y-2 mb-6">
            <p className="text-lg font-semibold text-foreground">
              100+ rotating menu items • Fully customizable • New meals monthly
            </p>
            <p className="text-muted-foreground">
              Chef buys all ingredients • Fresh, never frozen
            </p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button size="lg">
              Explore Full Menu
            </Button>
          </div>
        </div>
      </section>

      <Footer
        logo="livin"
        tagline="Fresh meals, made by vetted chefs in your home"
        contactPhone="1-800-LIVIN"
        contactEmail="hello@livin.com"
        columns={footerColumns}
        socialLinks={{
          instagram: "https://instagram.com/livin",
          facebook: "https://facebook.com/livin",
        }}
      />
    </div>
  );
};

export default Homepage;
