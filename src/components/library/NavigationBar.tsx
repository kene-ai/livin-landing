import { cn } from "@/lib/utils";
import Button from "./Button";

export interface NavItem {
  label: string;
  href: string;
}

export interface NavigationBarProps {
  logo: string | React.ReactNode;
  navItems: NavItem[];
  ctaLabel?: string;
  onCtaClick?: () => void;
  className?: string;
}

/**
 * NavigationBar Component
 * 
 * A responsive navigation bar with logo, nav links, and CTA button
 * 
 * Props:
 * - logo: String (text) or React component
 * - navItems: Array of { label, href }
 * - ctaLabel: Text for CTA button (optional)
 * - onCtaClick: CTA button click handler
 * - className: Additional CSS classes
 */
export default function NavigationBar({
  logo,
  navItems,
  ctaLabel = "Sign Up",
  onCtaClick,
  className,
}: NavigationBarProps) {
  return (
    <nav className={cn("w-full py-6 px-8", className)}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-primary font-bold text-3xl">
          {typeof logo === "string" ? logo : logo}
        </div>

        {/* Nav Items */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        {ctaLabel && (
          <Button onClick={onCtaClick} size="md">
            {ctaLabel}
          </Button>
        )}
      </div>
    </nav>
  );
}
