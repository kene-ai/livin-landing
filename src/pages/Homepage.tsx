import NavigationBar from "@/components/library/NavigationBar";
import Button from "@/components/library/Button";
import Footer from "@/components/library/Footer";
import SectionHeading from "@/components/library/SectionHeading";

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
          <div className="text-center mb-12">
            <SectionHeading
              title="How Livin Works"
              subtitle="Your chef handles everything from grocery shopping to cleanup. You get healthy, customized meals without lifting a finger."
              centered
            />
          </div>

          {/* Process Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Step 1 */}
            <div className="p-6 rounded-3xl bg-card border border-border space-y-4">
              <div className="w-10 h-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center mx-auto">
                <span className="text-xl font-bold">1</span>
              </div>
              <div className="text-center space-y-2">
                <h3 className="text-xl font-bold text-foreground">Choose your meal</h3>
                <ul className="text-sm text-muted-foreground space-y-1 text-left">
                  <li>• Choose date, time, and menu</li>
                  <li>• Book with just 48 hours notice</li>
                </ul>
              </div>
            </div>

            {/* Step 2 */}
            <div className="p-6 rounded-3xl bg-card border border-border space-y-4">
              <div className="w-10 h-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center mx-auto">
                <span className="text-xl font-bold">2</span>
              </div>
              <div className="text-center space-y-2">
                <h3 className="text-xl font-bold text-foreground">Chef Shops</h3>
                <ul className="text-sm text-muted-foreground space-y-1 text-left">
                  <li>• Chef buys ALL groceries for your meals</li>
                  <li>• Standard or organic options</li>
                </ul>
              </div>
            </div>

            {/* Step 3 */}
            <div className="p-6 rounded-3xl bg-card border border-border space-y-4">
              <div className="w-10 h-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center mx-auto">
                <span className="text-xl font-bold">3</span>
              </div>
              <div className="text-center space-y-2">
                <h3 className="text-xl font-bold text-foreground">Chef Cooks</h3>
                <ul className="text-sm text-muted-foreground space-y-1 text-left">
                  <li>• Chef cooks all your meals for the week right in your own kitchen</li>
                </ul>
              </div>
            </div>

            {/* Step 4 */}
            <div className="p-6 rounded-3xl bg-card border border-border space-y-4">
              <div className="w-10 h-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center mx-auto">
                <span className="text-xl font-bold">4</span>
              </div>
              <div className="text-center space-y-2">
                <h3 className="text-xl font-bold text-foreground">Chef Cleans</h3>
                <ul className="text-sm text-muted-foreground space-y-1 text-left">
                  <li>• Kitchen left spotless and meals labeled & stored in your fridge</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Callout */}
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <div className="p-6 rounded-2xl border-2 border-primary bg-primary/5">
              <p className="text-lg font-bold text-foreground">
                ⭐ ONE CHEF VISIT = A FULL WEEK OF MEALS
              </p>
            </div>
            <Button size="lg">
              Sign Up
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
