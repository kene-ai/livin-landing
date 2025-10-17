import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "circular";
  size?: "sm" | "md" | "lg";
}

/**
 * Button Component
 * 
 * A versatile button component with multiple variants
 * 
 * Props:
 * - variant: "primary" (orange), "secondary" (yellow), "outline", "circular" (for navigation)
 * - size: "sm", "md", "lg"
 * - All standard button HTML attributes
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none";
    
    const variants = {
      primary: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90",
      outline: "border-2 border-foreground bg-transparent hover:bg-foreground/10",
      circular: "rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg",
    };

    const sizes = {
      sm: "px-6 py-2 text-sm rounded-full",
      md: "px-8 py-3 text-base rounded-full",
      lg: "px-10 py-4 text-lg rounded-full",
    };

    const circularSizes = {
      sm: "w-10 h-10",
      md: "w-12 h-12",
      lg: "w-14 h-14",
    };

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          variant === "circular" ? circularSizes[size] : sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
