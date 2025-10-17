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
