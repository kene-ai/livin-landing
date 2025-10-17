import { cn } from "@/lib/utils";
import Button from "./Button";

export interface StickyCtaButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
}

/**
 * StickyCtaButton Component
 * 
 * A sticky CTA button that appears at the bottom of the screen on mobile
 */
export default function StickyCtaButton({
  label,
  onClick,
  className,
}: StickyCtaButtonProps) {
  return (
    <div className={cn("fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-sm border-t border-border md:hidden", className)}>
      <Button onClick={onClick} size="lg" className="w-full">
        {label}
      </Button>
    </div>
  );
}
