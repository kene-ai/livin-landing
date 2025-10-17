import { cn } from "@/lib/utils";

export interface ContentCardProps {
  title: string;
  description: string;
  imageSrc?: string;
  imagePosition?: "left" | "right";
  className?: string;
}

/**
 * ContentCard Component
 * 
 * Card with image and content, supports left/right layouts
 */
export default function ContentCard({
  title,
  description,
  imageSrc,
  imagePosition = "left",
  className,
}: ContentCardProps) {
  return (
    <div className={cn(
      "grid md:grid-cols-2 gap-8 items-center",
      imagePosition === "right" && "md:grid-flow-dense",
      className
    )}>
      {imageSrc && (
        <div className={cn(
          "rounded-3xl overflow-hidden",
          imagePosition === "right" && "md:col-start-2"
        )}>
          <img src={imageSrc} alt={title} className="w-full h-auto" />
        </div>
      )}
      <div className="space-y-4">
        <h3 className="text-3xl md:text-4xl font-bold text-foreground">{title}</h3>
        <p className="text-lg text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
