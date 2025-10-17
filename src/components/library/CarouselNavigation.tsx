import { cn } from "@/lib/utils";
import Button from "./Button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface CarouselNavigationProps {
  onPrevious: () => void;
  onNext: () => void;
  currentIndex: number;
  totalItems: number;
  className?: string;
}

/**
 * CarouselNavigation Component
 * 
 * Navigation controls for carousels with prev/next buttons and indicators
 */
export default function CarouselNavigation({
  onPrevious,
  onNext,
  currentIndex,
  totalItems,
  className,
}: CarouselNavigationProps) {
  return (
    <div className={cn("flex items-center justify-center gap-4", className)}>
      <Button variant="circular" size="md" onClick={onPrevious}>
        <ChevronLeft className="w-6 h-6" />
      </Button>
      <div className="flex gap-2">
        {Array.from({ length: totalItems }).map((_, index) => (
          <div
            key={index}
            className={cn(
              "w-2 h-2 rounded-full transition-all",
              index === currentIndex ? "bg-primary w-8" : "bg-border"
            )}
          />
        ))}
      </div>
      <Button variant="circular" size="md" onClick={onNext}>
        <ChevronRight className="w-6 h-6" />
      </Button>
    </div>
  );
}
