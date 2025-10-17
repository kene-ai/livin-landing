import { cn } from "@/lib/utils";
import { Instagram, Facebook } from "lucide-react";

export interface FooterColumn {
  title?: string;
  links: { label: string; href: string }[];
}

export interface FooterProps {
  logo: string | React.ReactNode;
  tagline: string;
  contactPhone: string;
  contactEmail: string;
  columns: FooterColumn[];
  socialLinks?: {
    instagram?: string;
    facebook?: string;
  };
  illustration?: React.ReactNode;
  className?: string;
}

/**
 * Footer Component
 * 
 * Full-width footer with navigation columns, contact info, and social links
 * 
 * Props:
 * - logo: Footer logo (text or component)
 * - tagline: Call-to-action text
 * - contactPhone: Phone number
 * - contactEmail: Email address
 * - columns: Array of navigation columns with links
 * - socialLinks: Object with instagram/facebook URLs
 * - illustration: Optional decorative illustration
 * - className: Additional CSS classes
 */
export default function Footer({
  logo,
  tagline,
  contactPhone,
  contactEmail,
  columns,
  socialLinks,
  illustration,
  className,
}: FooterProps) {
  return (
    <footer className={cn("bg-primary text-primary-foreground rounded-3xl p-12 relative overflow-hidden", className)}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Left Column - Logo, Tagline, Contact */}
          <div className="space-y-6">
            {/* Logo */}
            <div className="text-4xl font-bold">
              {typeof logo === "string" ? logo : logo}
            </div>

            {/* Tagline */}
            <h3 className="font-serif text-3xl lg:text-4xl leading-tight">
              {tagline}
            </h3>

            {/* Contact Info */}
            <div className="space-y-2">
              <p>
                Contact us at <strong>{contactPhone}</strong> or drop us an email at
              </p>
              <p>
                <strong>{contactEmail}</strong> if you have any questions.
              </p>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="flex gap-12 md:col-span-1 lg:col-span-2">
            {columns.map((column, idx) => (
              <div key={idx} className="space-y-4">
                {column.title && (
                  <h4 className="font-semibold text-lg mb-6">{column.title}</h4>
                )}
                <ul className="space-y-3">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="hover:underline underline-offset-4 transition-all"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Social Icons */}
            {socialLinks && (
              <div className="flex gap-3 items-start">
                {socialLinks.instagram && (
                  <a
                    href={socialLinks.instagram}
                    className="w-12 h-12 rounded-full bg-secondary hover:bg-secondary/90 flex items-center justify-center transition-all"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-6 h-6 text-foreground" />
                  </a>
                )}
                {socialLinks.facebook && (
                  <a
                    href={socialLinks.facebook}
                    className="w-12 h-12 rounded-full bg-secondary hover:bg-secondary/90 flex items-center justify-center transition-all"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-6 h-6 text-foreground" />
                  </a>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Large Logo */}
        <div className="mt-12">
          <div className="text-[10rem] font-bold leading-none opacity-90">
            {typeof logo === "string" ? logo : "livin"}
          </div>
        </div>
      </div>

      {/* Illustration */}
      {illustration && (
        <div className="absolute bottom-0 right-0 w-1/3 opacity-20">
          {illustration}
        </div>
      )}
    </footer>
  );
}
