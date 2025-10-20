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
    <div className={cn("relative overflow-hidden rounded-3xl aspect-[3/4]", className)}>
      {/* Image */}
      <img 
        src={image} 
        alt={name}
        className="w-full h-full object-cover"
      />
      
      {/* Gradient overlay at bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      
      {/* Text content - bottom left */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
        <h3 className="text-white font-bold text-xl md:text-2xl lg:text-3xl mb-2">
          {name}
        </h3>
        <p className="text-white/90 text-sm md:text-base lg:text-lg">
          {description}
        </p>
      </div>
    </div>
  );
}
