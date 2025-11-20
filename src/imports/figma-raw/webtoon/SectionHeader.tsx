import { cn } from "@/components/ui/global/utils";
import { Button } from "@/components/ui/global/button";
import { ChevronRight } from "lucide-react";

interface SectionHeaderProps {
  title: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
  className?: string;
}

export function SectionHeader({ 
  title, 
  description, 
  actionLabel = "View All", 
  onAction, 
  className 
}: SectionHeaderProps) {
  return (
    <div className={cn("flex items-end justify-between mb-4", className)}>
      <div>
        <h2 className="text-xl font-bold tracking-tight">{title}</h2>
        {description && <p className="text-sm text-muted-foreground mt-1">{description}</p>}
      </div>
      {onAction && (
        <Button variant="ghost" size="sm" onClick={onAction} className="text-muted-foreground hover:text-foreground">
          {actionLabel} <ChevronRight className="w-4 h-4 ml-1" />
        </Button>
      )}
    </div>
  );
}
