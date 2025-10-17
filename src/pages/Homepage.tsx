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
      <section className="py-8 md:py-16 px-8 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-stretch">
          {/* Left Column - Text Content */}
          <div className="space-y-4 flex flex-col justify-center py-8 pl-8 md:pl-12 lg:pl-16">
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
          <div className="rounded-3xl overflow-hidden h-full min-h-[500px] md:min-h-[600px]">
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
