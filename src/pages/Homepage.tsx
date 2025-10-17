import NavigationBar from "@/components/library/NavigationBar";
import Button from "@/components/library/Button";
import Footer from "@/components/library/Footer";
import SectionHeading from "@/components/library/SectionHeading";
import TestimonialCard from "@/components/library/TestimonialCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Homepage = () => {
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
