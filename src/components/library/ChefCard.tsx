import { cn } from "@/lib/utils";
import { Heart } from "lucide-react";

export interface ChefCardProps {
  id: string;
  name: string;
  title?: string;
  bio?: string;
  imageSrc?: string;
  favorited?: boolean;
  onToggleFavorite?: () => void;
  className?: string;
}

/**
 * ChefCard Component
 * 
 * Card displaying a chef's profile with favorite functionality
 */
export default function ChefCard({
  id,
  name,
  title,
  bio,
  imageSrc,
  favorited,
  onToggleFavorite,
  className,
}: ChefCardProps) {
  return (
    <div className={cn("rounded-3xl overflow-hidden bg-card border-2 border-border hover:border-primary/30 transition-all", className)}>
      {imageSrc && (
        <div className="aspect-square overflow-hidden relative">
          <img 
            src={imageSrc} 
            alt={name} 
            className="w-full h-full object-cover" 
            loading="lazy"
            onError={(e) => {
              e.currentTarget.src = '/placeholder.svg';
              e.currentTarget.onerror = null;
            }}
          />
          
          {/* Favorite Button */}
          {onToggleFavorite && (
            <button
              onClick={onToggleFavorite}
              className="absolute top-3 right-3 w-10 h-10 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-all duration-200 hover:scale-110"
              aria-label={favorited ? "Unfavorite chef" : "Favorite chef"}
            >
              <Heart 
                className={cn(
                  "w-5 h-5 transition-all duration-200",
                  favorited ? "fill-primary text-primary scale-110" : "text-muted-foreground"
                )}
              />
            </button>
          )}
        </div>
      )}
      <div className="p-6 space-y-2">
        <h3 className="text-xl font-bold text-foreground">{name}</h3>
        {title && <p className="text-sm text-primary font-medium">{title}</p>}
        {bio && <p className="text-muted-foreground">{bio}</p>}
      </div>
    </div>
  );
}
