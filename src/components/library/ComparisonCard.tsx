import { cn } from "@/lib/utils";
import { Check, X } from "lucide-react";

export interface ComparisonItem {
  label: string;
  traditional: boolean;
  livin: boolean;
}

export interface ComparisonCardProps {
  items: ComparisonItem[];
  className?: string;
}

/**
 * ComparisonCard Component
 * 
 * Displays a comparison table between traditional meal prep and Livin
 */
export default function ComparisonCard({
  items,
  className,
}: ComparisonCardProps) {
  return (
    <div className={cn("rounded-3xl overflow-hidden border border-border bg-card", className)}>
      <div className="grid grid-cols-3 bg-accent p-4 font-bold">
        <div></div>
        <div className="text-center">Traditional</div>
        <div className="text-center text-primary">Livin</div>
      </div>
      {items.map((item, index) => (
        <div key={index} className="grid grid-cols-3 p-4 border-t border-border items-center">
          <div className="text-foreground">{item.label}</div>
          <div className="flex justify-center">
            {item.traditional ? (
              <Check className="w-5 h-5 text-green-600" />
            ) : (
              <X className="w-5 h-5 text-red-600" />
            )}
          </div>
          <div className="flex justify-center">
            {item.livin ? (
              <Check className="w-5 h-5 text-green-600" />
            ) : (
              <X className="w-5 h-5 text-red-600" />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
