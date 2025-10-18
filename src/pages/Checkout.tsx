import { useState } from "react";
import { useNavigate } from "react-router-dom";
import OnboardingProgress from "@/components/library/OnboardingProgress";
import Button from "@/components/library/Button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import livinLogo from "@/assets/livin-logo.webp";
import { format, addMonths } from "date-fns";

/**
 * Checkout Page
 * 
 * Final checkout screen with order summary and payment details
 */
export default function Checkout() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<"card" | "cashapp" | "bank">("card");
  const [saveInfo, setSaveInfo] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const nextBillDate = format(addMonths(new Date(), 1), "MMMM d, yyyy");

  const handleSubscribe = () => {
    if (email && phone && agreeToTerms) {
      console.log("Processing subscription...", { email, phone, paymentMethod, saveInfo });
      navigate("/onboarding/success");
    }
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Progress Bar */}
      <OnboardingProgress currentStep={6} totalSteps={6} />

      {/* Main Content */}
      <div className="pt-8 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Logo */}
          <div className="mb-12">
            <img 
              src={livinLogo} 
              alt="Livin" 
              className="h-8 md:h-10"
            />
          </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* LEFT COLUMN - Order Summary */}
            <div className="space-y-8">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                  Your Subscription
                </h1>

                {/* Plan Details Card */}
                <div className="bg-accent rounded-2xl p-6 space-y-4 mb-8">
                  <h2 className="text-2xl font-bold text-foreground">Core</h2>
                  <p className="text-lg text-foreground">4 meals • 8 plates per week</p>
                  <p className="text-base text-muted-foreground">Standard groceries</p>
                  <div className="pt-2 border-t border-border">
                    <p className="text-3xl font-bold text-primary">$301 <span className="text-base text-muted-foreground font-normal">per month</span></p>
                  </div>
                </div>

                {/* Pricing Breakdown */}
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center text-lg">
                    <span className="font-semibold text-foreground">Total Billed Today:</span>
                    <span className="font-bold text-foreground">$301</span>
                  </div>
                  <div className="flex justify-between items-center text-base text-muted-foreground">
                    <span>Next Bill Date:</span>
                    <span>{nextBillDate}</span>
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-border my-8"></div>

                {/* Next Steps */}
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    Next Steps After Signup:
                  </h3>
                  <ol className="space-y-3 text-foreground">
                    <li className="flex gap-3">
                      <span className="font-bold text-primary">1.</span>
                      <span>Schedule your first service date & time</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold text-primary">2.</span>
                      <span>Select your menu</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold text-primary">3.</span>
                      <span>Choose your chef</span>
                    </li>
                  </ol>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN - Account & Payment */}
            <div className="space-y-8">
              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-6">
                  Contact information
                </h2>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-foreground mb-2 block">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="hello@chooselivin.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-sm font-medium text-foreground mb-2 block">
                      Phone
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="0905 123 4567"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Payment method
                </h3>
                <div className="space-y-3">
                  {/* Card Option */}
                  <label 
                    className="flex items-center justify-between p-4 border-2 border-border rounded-lg cursor-pointer hover:border-primary transition-colors"
                    onClick={() => setPaymentMethod("card")}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full border-2 ${paymentMethod === "card" ? "border-primary bg-primary" : "border-border"} flex items-center justify-center`}>
                        {paymentMethod === "card" && <div className="w-2 h-2 rounded-full bg-white"></div>}
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                          <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
                          <path d="M2 10h20" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                        <span className="font-medium text-foreground">Card</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-8 h-5 bg-[#1A1F71] rounded"></div>
                      <div className="w-8 h-5 bg-[#EB001B] rounded"></div>
                      <div className="w-8 h-5 bg-[#0066B2] rounded"></div>
                    </div>
                  </label>

                  {/* Cash App Pay Option */}
                  <label 
                    className="flex items-center justify-between p-4 border-2 border-border rounded-lg cursor-pointer hover:border-primary transition-colors"
                    onClick={() => setPaymentMethod("cashapp")}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full border-2 ${paymentMethod === "cashapp" ? "border-primary bg-primary" : "border-border"} flex items-center justify-center`}>
                        {paymentMethod === "cashapp" && <div className="w-2 h-2 rounded-full bg-white"></div>}
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 bg-[#00D632] rounded flex items-center justify-center text-white text-xs font-bold">$</div>
                        <span className="font-medium text-foreground">Cash App Pay</span>
                      </div>
                    </div>
                  </label>

                  {/* Bank Option */}
                  <label 
                    className="flex items-center justify-between p-4 border-2 border-border rounded-lg cursor-pointer hover:border-primary transition-colors"
                    onClick={() => setPaymentMethod("bank")}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full border-2 ${paymentMethod === "bank" ? "border-primary bg-primary" : "border-border"} flex items-center justify-center`}>
                        {paymentMethod === "bank" && <div className="w-2 h-2 rounded-full bg-white"></div>}
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                          <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" stroke="currentColor" strokeWidth="2"/>
                          <path d="M9 22V12h6v10" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                        <span className="font-medium text-foreground">Bank</span>
                      </div>
                    </div>
                    <div className="px-3 py-1 bg-[#00D632] text-white text-xs font-semibold rounded">
                      $3 back
                    </div>
                  </label>
                </div>
              </div>

              {/* Save Information Checkbox */}
              <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                <Checkbox 
                  id="save-info"
                  checked={saveInfo}
                  onCheckedChange={(checked) => setSaveInfo(checked as boolean)}
                  className="mt-0.5"
                />
                <div className="flex-1">
                  <label htmlFor="save-info" className="text-sm font-medium text-foreground cursor-pointer block">
                    Save my information for faster checkout
                  </label>
                  <p className="text-xs text-muted-foreground mt-1">
                    Pay securely at Livin (formerly Cookonnect) and everywhere Link is accepted
                  </p>
                </div>
              </div>

              {/* Terms Agreement */}
              <div className="flex items-start gap-3">
                <Checkbox 
                  id="terms"
                  checked={agreeToTerms}
                  onCheckedChange={(checked) => setAgreeToTerms(checked as boolean)}
                  className="mt-0.5"
                />
                <label htmlFor="terms" className="text-sm text-muted-foreground cursor-pointer flex-1">
                  I agree to the <a href="#" className="text-foreground underline">Terms of Service</a> and <a href="#" className="text-foreground underline">Privacy Policy</a>
                </label>
              </div>

              {/* Subscribe Button */}
              <Button
                variant="primary"
                size="lg"
                onClick={handleSubscribe}
                disabled={!email || !phone || !agreeToTerms}
                className="w-full text-lg py-6"
              >
                Subscribe
              </Button>

              {/* Footer Text */}
              <p className="text-xs text-center text-muted-foreground">
                By subscribing, you authorize Livin (formerly Cookonnect) to charge you according to the terms until you cancel.
              </p>

              {/* Powered by Stripe */}
              <div className="flex items-center justify-center gap-3 text-xs text-muted-foreground">
                <span>powered by</span>
                <span className="font-semibold text-[#635BFF]">stripe</span>
                <span>•</span>
                <a href="#" className="hover:text-foreground">Terms</a>
                <span>•</span>
                <a href="#" className="hover:text-foreground">Privacy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
