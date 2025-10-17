import { cn } from "@/lib/utils";

export interface CircularImageDisplayProps {
  images: string[];
  size?: "sm" | "md" | "lg";
  className?: string;
}

/**
 * CircularImageDisplay Component
 * 
 * Displays a series of overlapping circular images
 */
export default function CircularImageDisplay({
  images,
  size = "md",
  className,
}: CircularImageDisplayProps) {
  const sizes = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  };

  return (
    <div className={cn("flex -space-x-3", className)}>
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Avatar ${index + 1}`}
          className={cn(
            sizes[size],
            "rounded-full border-2 border-background object-cover"
          )}
        />
      ))}
    </div>
  );
}
