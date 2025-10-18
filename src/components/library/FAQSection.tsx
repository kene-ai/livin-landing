import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Button from "@/components/library/Button";

const FAQSection = () => {
  const faqs = [
    {
      question: "How much does this cost?",
      answer: "Most customers spend between $150 and $450 per week. Livin was built to make having a chef more accessible. If you're already using delivery apps or dining out, you can afford us. Check out the cost comparison below."
    },
    {
      question: "What's included in the price?",
      answer: "Everything. Your chef buys ALL groceries (you never shop), cooks multiple meals in your home, stores them in labeled containers in your fridge, and leaves your kitchen spotless—cleaner than before they arrived. No extra fees for groceries, shopping, or cleanup. The $20 per plate is all-inclusive."
    },
    {
      question: "Do I pay for groceries separately?",
      answer: "No! Groceries are 100% included in your weekly price. Your chef buys everything needed for your meals—you never see a grocery bill or shopping list. Whether you choose standard or organic groceries, it's all covered in the price you see in the calculator."
    },
    {
      question: "Where do the chefs come from?",
      answer: "We handpick pros with real culinary experience. Every chef is interviewed, background-checked, and personally reviewed by our Culinary Director for cooking skills, cleanliness, and hospitality."
    },
    {
      question: "What's on the menu?",
      answer: "Balanced meals with fresh ingredients - think lean protein, veggies, and grains. Don't love something? Swap it out or request your favorites. Menus update monthly, but you keep access to your top picks."
    },
    {
      question: "What if I have dietary restrictions?",
      answer: "Every menu is fully customizable. We accommodate all allergies and dietary preferences (gluten-free, dairy-free, vegetarian, vegan, etc.). Your chef buys appropriate ingredients and prepares your meals according to your needs."
    },
    {
      question: "Do chefs use my kitchen gear?",
      answer: "Yes, usually your pots, pans, and containers. Just note anything off-limits in your profile, and your chef will adjust."
    },
    {
      question: "How soon can I book?",
      answer: "All your chef needs is 48 hours' notice! Need meals next week but it's already Friday? We've got you."
    },
    {
      question: "Do you deliver?",
      answer: "Nope - and that's on purpose. We believe in fresh, customized meals made right in your home. It's better that way."
    },
    {
      question: "Do I have to subscribe?",
      answer: "Yes - but it comes with some pretty great perks!\n\nAs a subscriber you get:\n\n• The ability to request your favorite chefs\n• A personalized menu based on your favorites, even as monthly menus change\n• Flexible plans - adjust, pause, or cancel anytime\n\nPlus, we only require one service per month to keep your subscription active. Easy!"
    }
  ];

  return (
    <section className="py-16 px-8 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-[400px_1fr] gap-12 md:gap-16 items-start">
          {/* Left Column - Heading and CTA */}
          <div className="space-y-6 md:sticky md:top-8">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Frequently asked questions
            </h2>
            <Button size="lg" className="w-full md:w-auto">
              Get started today
            </Button>
          </div>

          {/* Right Column - Accordion */}
          <div className="w-full">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-medium hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground whitespace-pre-line">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
