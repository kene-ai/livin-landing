import { cn } from "@/lib/utils";
import MenuItemCard from "./MenuItemCard";

export interface MenuMarqueeProps {
  items: Array<{
    name: string;
    tags: string[];
    kidFriendly: boolean;
    image: string;
  }>;
  direction?: "left" | "right";
  className?: string;
}

/**
 * MenuMarquee Component
 * 
 * Infinite scrolling marquee for menu items
 */
export default function MenuMarquee({
  items,
  direction = "right",
  className,
}: MenuMarqueeProps) {
  return (
    <div className={cn("overflow-hidden", className)}>
      <div
        className={cn(
          "flex gap-6 w-fit",
          direction === "right" ? "animate-scroll-right" : "animate-scroll-left",
          "hover:[animation-play-state:paused]"
        )}
      >
        {/* Duplicate items for seamless infinite scroll */}
        {[...items, ...items, ...items].map((item, index) => (
          <div key={index} className="w-80 flex-shrink-0">
            <MenuItemCard
              name={item.name}
              description=""
              imageSrc={item.image}
              dietaryTags={[...item.tags, ...(item.kidFriendly ? ["⭐ Kid Favorite"] : [])]}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
