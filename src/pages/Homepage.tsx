import NavigationBar from "@/components/library/NavigationBar";
import Button from "@/components/library/Button";
import Footer from "@/components/library/Footer";

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
    <div className="min-h-screen bg-white scroll-smooth">
      <NavigationBar
        logo="livin"
        navItems={navItems}
        ctaLabel="Sign Up"
      />
      
      {/* Hero Section */}
      <section className="py-12 md:py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            {/* Main Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              Your Personal Chef, In Your Kitchen
            </h1>
            
            {/* Description */}
            <p className="text-lg text-muted-foreground">
              Find a local chef who prepares customized, healthy meals in your kitchen
            </p>
            
            {/* Trust Badges with checkmarks */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-foreground">
                <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                  <span className="text-primary text-sm">✓</span>
                </div>
                <span>Select meals and your dietary preferences</span>
              </div>
              <div className="flex items-center gap-3 text-foreground">
                <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                  <span className="text-primary text-sm">✓</span>
                </div>
                <span>Your Chef prepares the meal in your kitchen</span>
              </div>
              <div className="flex items-center gap-3 text-foreground">
                <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                  <span className="text-primary text-sm">✓</span>
                </div>
                <span>Groceries and cleanup included</span>
              </div>
            </div>
            
            {/* Pricing */}
            <p className="text-2xl font-bold text-foreground">
              Starting at <span className="text-primary">$20 per plate</span>
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button size="lg">
                Get started
              </Button>
            </div>
          </div>
          
          {/* Right Column - Image */}
          <div className="rounded-3xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1556911073-52527ac43761?w=1600" 
              alt="Chef cooking in home kitchen"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
      
      <main className="container mx-auto px-4 max-w-7xl py-12">
        {/* Page content will go here */}
      </main>

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
