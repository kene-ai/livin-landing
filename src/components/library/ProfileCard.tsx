import { cn } from "@/lib/utils";

export interface ProfileCardProps {
  name: string;
  title?: string;
  bio?: string;
  imageSrc?: string;
  className?: string;
}

/**
 * ProfileCard Component
 * 
 * Card displaying a person's profile with image, name, title, and bio
 */
export default function ProfileCard({
  name,
  title,
  bio,
  imageSrc,
  className,
}: ProfileCardProps) {
  return (
    <div className={cn("rounded-3xl overflow-hidden bg-card border border-border", className)}>
      {imageSrc && (
        <div className="aspect-square overflow-hidden">
          <img src={imageSrc} alt={name} className="w-full h-full object-cover" />
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
