import { cn } from "@/lib/utils";

export interface MenuItemCardProps {
  name: string;
  description: string;
  imageSrc?: string;
  dietaryTags?: string[];
  onClick?: () => void;
  className?: string;
}

/**
 * MenuItemCard Component
 * 
 * Card for displaying menu items with image, name, description, and dietary tags
 */
export default function MenuItemCard({
  name,
  description,
  imageSrc,
  dietaryTags,
  onClick,
  className,
}: MenuItemCardProps) {
  return (
    <div 
      className={cn(
        "rounded-3xl overflow-hidden bg-card border border-border hover:shadow-lg transition-shadow cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      {imageSrc && (
        <div className="aspect-video overflow-hidden">
          <img src={imageSrc} alt={name} className="w-full h-full object-cover" />
        </div>
      )}
      <div className="p-6 space-y-3">
        <h3 className="text-xl font-bold text-foreground">{name}</h3>
        <p className="text-muted-foreground">{description}</p>
        {dietaryTags && dietaryTags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {dietaryTags.map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full bg-accent text-xs font-medium text-accent-foreground">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
