import { cn } from "@/lib/utils";

export interface StatCardProps {
  value: string;
  label: string;
  className?: string;
}

/**
 * StatCard Component
 * 
 * Displays a statistic with large value and label
 */
export default function StatCard({
  value,
  label,
  className,
}: StatCardProps) {
  return (
    <div className={cn("text-center space-y-2", className)}>
      <div className="text-5xl md:text-6xl font-bold text-primary">{value}</div>
      <div className="text-lg text-muted-foreground">{label}</div>
    </div>
  );
}
