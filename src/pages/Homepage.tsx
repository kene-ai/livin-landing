import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavigationBar from "@/components/library/NavigationBar";
import Button from "@/components/library/Button";
import Footer from "@/components/library/Footer";
import SectionHeading from "@/components/library/SectionHeading";
import TestimonialCard from "@/components/library/TestimonialCard";
import MenuMarquee from "@/components/library/MenuMarquee";
import ProfileCard from "@/components/library/ProfileCard";
import ServiceCard from "@/components/library/ServiceCard";
import FAQSection from "@/components/library/FAQSection";
import logoNorthside from "@/assets/logo-northside.webp";
import logoEssence from "@/assets/logo-essence.webp";
import logoAjc from "@/assets/logo-ajc.webp";
import logoAbc from "@/assets/logo-abc.webp";
import logoRoughDraft from "@/assets/logo-roughdraft.webp";
import SignupProcess from "@/components/library/SignupProcess";
import MissionSection from "@/components/library/MissionSection";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import heroChef from "@/assets/chefs/chef image 7.png";
import chefImage2 from "@/assets/chefs/chef image 2.png";
import chefImage3 from "@/assets/chefs/chef image 3.png";
import chefImage4 from "@/assets/chefs/chef image 4.png";
import chefImage5 from "@/assets/chefs/chef image 5.png";
import chefImage6 from "@/assets/chefs/chef image 6.png";
import chefImageMain from "@/assets/chefs/chef image.png";
const Homepage = () => {
  const navigate = useNavigate();
  const [selectedDietary, setSelectedDietary] = useState<string[]>([]);
  const navItems = [{
    label: "How It Works",
    href: "#how-it-works"
  }, {
    label: "Menu",
    href: "#menu"
  }, {
    label: "Our Chefs",
    href: "#our-chefs"
  }, {
    label: "Pricing",
    href: "#pricing"
  }];
  const footerColumns = [{
    title: "Company",
    links: [{
      label: "About",
      href: "#about"
    }, {
      label: "Careers",
      href: "#careers"
    }, {
      label: "Contact",
      href: "#contact"
    }]
  }, {
    title: "Support",
    links: [{
      label: "Help Center",
      href: "#help"
    }, {
      label: "Terms",
      href: "#terms"
    }, {
      label: "Privacy",
      href: "#privacy"
    }]
  }];
  const categories = ["All", "Gluten Free", "Dairy Free", "Vegan", "Kid Friendly"];
  const menuItems = [{
    name: "Greek Lemon Herbed Grilled Shrimp with Orzo Salad",
    tags: ["GF", "DF"],
    kidFriendly: false,
    image: "https://images.unsplash.com/photo-1633504581786-316c8002b1b9?w=800"
  }, {
    name: "Asian Sesame Ginger Beef & Broccoli Stir Fry",
    tags: ["GF"],
    kidFriendly: false,
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800"
  }, {
    name: "Wild Caught Salmon with Garlic Roasted Asparagus",
    tags: ["GF", "DF"],
    kidFriendly: false,
    image: "https://images.unsplash.com/photo-1485704686097-ed47f7263ca4?w=800"
  }, {
    name: "Classic Italian Chicken Parmesan with Fresh Marinara",
    tags: [],
    kidFriendly: true,
    image: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=800"
  }, {
    name: "Mediterranean Quinoa Bowl with Roasted Chickpeas and Tahini",
    tags: ["V", "GF"],
    kidFriendly: false,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800"
  }, {
    name: "Honey Teriyaki Glazed Chicken Bowls with Steamed Vegetables",
    tags: ["DF"],
    kidFriendly: true,
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800"
  }, {
    name: "Herb Marinated Grilled Steak with Rosemary Sweet Potato Wedges",
    tags: ["GF", "DF"],
    kidFriendly: false,
    image: "https://images.unsplash.com/photo-1558030006-450675393462?w=800"
  }, {
    name: "Baja Style Grilled Shrimp Tacos with Cilantro Lime Slaw",
    tags: ["DF"],
    kidFriendly: true,
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800"
  }, {
    name: "Garden Fresh Veggie Pasta Primavera with Basil Pesto",
    tags: ["V"],
    kidFriendly: true,
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800"
  }, {
    name: "Dijon Honey Mustard Glazed Chicken Thighs with Green Beans",
    tags: ["GF"],
    kidFriendly: false,
    image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=800"
  }, {
    name: "Tex-Mex Seasoned Beef Tacos with Cilantro Lime Black Beans",
    tags: ["GF"],
    kidFriendly: true,
    image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=800"
  }, {
    name: "Oven Baked Herb Crusted Cod with Meyer Lemon Butter",
    tags: ["GF"],
    kidFriendly: false,
    image: "https://images.unsplash.com/photo-1580959375944-0b5c8e083211?w=800"
  }, {
    name: "Aromatic Coconut Curry Chickpeas with Basmati Rice",
    tags: ["V", "GF", "DF"],
    kidFriendly: false,
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800"
  }, {
    name: "Italian Style Turkey Meatballs with San Marzano Marinara",
    tags: [],
    kidFriendly: true,
    image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=800"
  }, {
    name: "Baja Grilled Mahi Mahi Fish Tacos with Avocado Crema",
    tags: ["DF"],
    kidFriendly: false,
    image: "https://images.unsplash.com/photo-1512838243191-e81e8f66f1fd?w=800"
  }, {
    name: "Cajun Spiced Ground Beef Stuffed Bell Peppers",
    tags: ["GF"],
    kidFriendly: false,
    image: "https://images.unsplash.com/photo-1606744824163-985d376605aa?w=800"
  }, {
    name: "Ginger Garlic Tofu Stir Fry with Snap Peas and Carrots",
    tags: ["V", "DF"],
    kidFriendly: false,
    image: "https://images.unsplash.com/photo-1546069901-eacef0df6022?w=800"
  }, {
    name: "Sweet & Smoky BBQ Glazed Chicken Drumsticks",
    tags: ["GF", "DF"],
    kidFriendly: true,
    image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=800"
  }];

  // Split menu items into two rows
  const row1Items = menuItems.slice(0, 9);
  const row2Items = menuItems.slice(9, 18);
  return <div className="min-h-screen bg-[#FAFAF8] scroll-smooth">
      <NavigationBar logo="livin" navItems={navItems} ctaLabel="Sign Up" onCtaClick={() => navigate("/onboarding")} />
      
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
              <Button size="md" onClick={() => navigate("/onboarding")}>
                Get started
              </Button>
            </div>
          </div>
          
          {/* Right Column - Image */}
          <div className="rounded-3xl overflow-hidden h-full">
            <img src={heroChef} alt="Chef Angela presenting roasted chicken" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-16 px-8 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <SectionHeading title="How Livin Works" subtitle="Your chef handles everything from grocery shopping to cleanup. You get healthy, customized meals without lifting a finger." centered />
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
                <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800" alt="Fresh healthy meal selection" className="w-full h-full object-cover" />
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
                <img src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800" alt="Chef cooking in kitchen" className="w-full h-full object-cover" />
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
                <img src="https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800" alt="Clean organized kitchen" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Callout */}
          <div className="max-w-2xl mx-auto text-center">
            <Button size="lg" onClick={() => navigate("/onboarding")}>
              Sign Up
            </Button>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <MissionSection />

      {/* Testimonials Section */}
      <section className="py-16 px-12 md:px-16 lg:px-24 bg-accent/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Results */}
            <div className="space-y-6">
              <SectionHeading title="Real Families, Real Results" subtitle="Join 1,000+ families who've transformed their meal routine" />
              
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
                    <TestimonialCard quote="The best part? I don't step foot in a grocery store anymore. Chef Maria buys everything, cooks meals my kids actually eat, and leaves my kitchen cleaner than I ever could. Game changer." author="Sarah M., Mom of 2" role="Los Angeles" avatarSrc="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop" />
                  </CarouselItem>
                  <CarouselItem>
                    <TestimonialCard quote="Chef David left our kitchen spotless. I mean SPOTLESS. He even cleaned stuff that was already there. And I never thought about what to buy or cook—just came home to a week of healthy meals." author="Jennifer L., Busy Professional" role="Beverly Hills" avatarSrc="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop" />
                  </CarouselItem>
                  <CarouselItem>
                    <TestimonialCard quote="I did the math: grocery delivery fees, meal kit ingredients, my time cooking and cleaning—Livin is actually CHEAPER. And I don't touch a dish or visit a store. Best $320/week I spend." author="Marcus T., Software Engineer" role="Santa Monica" avatarSrc="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop" />
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
      <section className="py-16 px-8 md:px-12 lg:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 max-w-3xl mx-auto">
            <SectionHeading title="What's On the Menu?" subtitle="Balanced meals with fresh ingredients—think lean protein, veggies, and grains. Don't love something? Swap it out or request your favorites. Menus update monthly, but you keep access to your top picks." centered />
          </div>

          {/* Category Terms */}
          <div className="mb-10">
            <p className="text-center text-muted-foreground text-sm">
              Poultry • Beef • Seafood • Dairy Free • Vegan • Kid Friendly
            </p>
          </div>

          {/* Scrolling Menu Rows */}
          <div className="space-y-6 mb-10">
            {/* Row 1 - Scrolling Right */}
            <MenuMarquee items={row1Items} direction="right" />
            
            {/* Row 2 - Scrolling Left */}
            <MenuMarquee items={row2Items} direction="left" />
          </div>

          {/* Info Text */}
          <div className="text-center space-y-2 mb-6">
            <p className="text-lg font-semibold text-foreground">30+ rotating menu items per month • Fully customizable based on your diet</p>
            <p className="text-muted-foreground">
              Chef buys all ingredients • Fresh, never frozen
            </p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button size="lg" onClick={() => navigate("/onboarding")}>
              Explore Full Menu
            </Button>
          </div>
        </div>
      </section>

      {/* Chef Profiles Section */}
      <section className="py-16 px-8 md:px-12 lg:px-16 bg-accent/30">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <SectionHeading title="Vetted Chefs You Can Trust" subtitle="Every Livin chef is interviewed, background-checked, and personally reviewed by our Culinary Director." />
          </div>

          <div className="relative">
            <Carousel className="w-full">
              <CarouselContent>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <ProfileCard name="Chef Maria Rodriguez" title="Italian & Mediterranean" bio="12 years professional experience. Mom of two. Expert at kid-friendly meals and kitchen organization." imageSrc={chefImage2} />
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <ProfileCard name="Chef David Kim" title="Asian Fusion & Healthy" bio="Former restaurant chef, specializes in dietary restrictions. Meticulous about kitchen cleanliness." imageSrc={chefImage3} />
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <ProfileCard name="Chef Amanda Williams" title="Southern Comfort & BBQ" bio="15 years experience in farm-to-table cooking. Passionate about seasonal ingredients and family-style meals." imageSrc={chefImage5} />
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <ProfileCard name="Chef Carlos Martinez" title="Mexican & Latin American" bio="Culinary school graduate with 10 years experience. Known for authentic flavors and perfectly balanced spices." imageSrc={chefImage4} />
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <ProfileCard name="Chef Emily Chen" title="Plant-Based & Vegan" bio="Certified nutritionist and chef. Specializes in creating delicious vegan meals that even meat-lovers enjoy." imageSrc={chefImage6} />
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <ProfileCard name="Chef James Thompson" title="French & European" bio="Trained in Paris, 14 years experience. Brings restaurant-quality techniques to home cooking with approachable results." imageSrc={chefImageMain} />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex -left-12" />
              <CarouselNext className="hidden md:flex -right-12" />
            </Carousel>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" onClick={() => navigate("/onboarding")}>
              Sign Up
            </Button>
          </div>
        </div>
      </section>

      {/* Cost Comparison Section */}
      <section className="py-16 px-8 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Livin makes healthy, home-cooked meals affordable for your family
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Improve your health and save time and money -- all for less than you currently spend on food delivery. Starting at $150 per week.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=400&fit=crop" alt="Food delivery takeout containers" className="w-full h-48 object-cover rounded-2xl" />
              <ServiceCard title="Food Delivery" price="$25+ per serving" features={["Hidden fees", "Unreliable wait times", "Usually unhealthy"]} isNegative={true} />
            </div>

            <div className="space-y-4">
              <img src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&h=400&fit=crop" alt="Home cooked meal by professional chef" className="w-full h-48 object-cover rounded-2xl" />
              <ServiceCard title="Livin" price="$20+ per serving" features={["Healthy and balanced", "Cooked by a pro", "Customized to your needs"]} highlighted={true} />
            </div>

            <div className="space-y-4">
              <img src="https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=800&h=400&fit=crop" alt="Fast food" className="w-full h-48 object-cover rounded-2xl" />
              <ServiceCard title="Fast Food" price="$8 - $10 per serving" features={["Unhealthy", "Artificial and highly processed", "Leaves a lot of trash"]} isNegative={true} />
            </div>
          </div>
        </div>
      </section>

      {/* Signup Process Section */}
      <SignupProcess onGetStarted={() => navigate("/onboarding")} />

      {/* Press/Media Section */}
      <section className="py-16 px-8 md:px-12 lg:px-16 bg-accent/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Even more love for Livin...
          </h2>
          <div className="flex flex-wrap justify-between items-center gap-8">
            <img src={logoNorthside} alt="Northside Neighbor" className="h-16 md:h-20 object-contain grayscale hover:grayscale-0 transition-all" />
            <img src={logoAjc} alt="The Atlanta Journal-Constitution" className="h-16 md:h-20 object-contain grayscale hover:grayscale-0 transition-all" />
            <img src={logoAbc} alt="Atlanta Business Chronicle" className="h-16 md:h-20 object-contain grayscale hover:grayscale-0 transition-all" />
            <img src={logoRoughDraft} alt="Rough Draft Atlanta" className="h-16 md:h-20 object-contain grayscale hover:grayscale-0 transition-all" />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      <Footer logo="livin" tagline="Fresh meals, made by vetted chefs in your home" contactPhone="1-800-LIVIN" contactEmail="hello@livin.com" columns={footerColumns} socialLinks={{
      instagram: "https://instagram.com/livin",
      facebook: "https://facebook.com/livin"
    }} />
    </div>;
};
export default Homepage;