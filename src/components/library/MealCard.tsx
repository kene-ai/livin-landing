import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";

export interface MealCardProps {
  id: string;
  title: string;
  image: string;
  tags: string[];
  favorited: boolean;
  onToggleFavorite: () => void;
}

/**
 * MealCard Component
 * 
 * Card for meal selection with image, title, tags, and favorite button
 */
export default function MealCard({
  id,
  title,
  image,
  tags,
  favorited,
  onToggleFavorite,
}: MealCardProps) {
  return (
    <div className="group relative rounded-2xl overflow-hidden border-2 border-muted hover:border-primary/30 transition-all duration-200 bg-background">
      {/* Food Image */}
      <div className="aspect-square overflow-hidden bg-muted">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Favorite Button */}
      <button
        onClick={onToggleFavorite}
        className="absolute top-3 right-3 w-10 h-10 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-all duration-200 hover:scale-110"
        aria-label={favorited ? "Unfavorite meal" : "Favorite meal"}
      >
        <Heart 
          className={cn(
            "w-5 h-5 transition-all duration-200",
            favorited ? "fill-primary text-primary scale-110" : "text-muted-foreground"
          )}
        />
      </button>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-base text-foreground mb-2 line-clamp-2">
          {title}
        </h3>

        {/* Dietary Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span 
                key={tag}
                className="px-2 py-0.5 text-xs font-medium bg-accent text-foreground rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
