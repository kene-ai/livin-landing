import { cn } from "@/lib/utils";

export interface CategoryCardProps {
  name: string;
  description: string;
  image: string;
  className?: string;
}

/**
 * CategoryCard Component
 * 
 * Displays a menu category with a circular image, overlay, and text
 */
export default function CategoryCard({ 
  name, 
  description, 
  image, 
  className 
}: CategoryCardProps) {
  return (
    <div className={cn("relative overflow-hidden rounded-3xl aspect-square", className)}>
      {/* Image with overlay */}
      <div className="relative w-full h-full">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      {/* Text content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <h3 className="text-white font-bold text-2xl md:text-3xl lg:text-4xl mb-2">
          {name}
        </h3>
        <p className="text-white/90 text-sm md:text-base lg:text-lg max-w-xs">
          {description}
        </p>
      </div>
    </div>
  );
}
