import { cn } from "@/lib/utils";

export interface TestimonialCardProps {
  quote: string;
  author: string;
  role?: string;
  avatarSrc?: string;
  className?: string;
}

/**
 * TestimonialCard Component
 * 
 * Card displaying customer testimonial with author info
 */
export default function TestimonialCard({
  quote,
  author,
  role,
  avatarSrc,
  className,
}: TestimonialCardProps) {
  return (
    <div className={cn("p-8 rounded-3xl bg-accent space-y-6", className)}>
      <p className="text-lg text-foreground italic">"{quote}"</p>
      <div className="flex items-center gap-4">
        {avatarSrc && (
          <img src={avatarSrc} alt={author} className="w-12 h-12 rounded-full object-cover" />
        )}
        <div>
          <div className="font-bold text-foreground">{author}</div>
          {role && <div className="text-sm text-muted-foreground">{role}</div>}
        </div>
      </div>
    </div>
  );
}
