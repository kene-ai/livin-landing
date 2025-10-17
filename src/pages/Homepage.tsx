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
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1556911073-52527ac43761?w=1600')"
          }}
        />
        
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        
        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl px-6 space-y-6">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Your Personal Chef Does Everything
          </h1>
          
          {/* Subheadline */}
          <p className="text-2xl md:text-3xl text-white/90 font-medium">
            Shop • Cook • Clean • Repeat
          </p>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Chef comes to your home, buys all groceries, cooks multiple meals, and leaves your kitchen spotless
          </p>
          
          {/* Pricing */}
          <p className="text-xl md:text-2xl text-secondary font-bold">
            Starting at $20 per plate
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="lg">
              Sign Up
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent text-white border-white hover:bg-white hover:text-foreground">
              Browse Menu
            </Button>
          </div>
          
          {/* Trust Badges */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-white/90 text-sm md:text-base pt-4">
            <span>✓ All groceries included</span>
            <span className="hidden sm:inline">•</span>
            <span>✓ Complete cleanup</span>
            <span className="hidden sm:inline">•</span>
            <span>✓ No subscription required</span>
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
