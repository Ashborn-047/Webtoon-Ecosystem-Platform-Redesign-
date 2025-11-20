import { Button } from "@/components/ui/global/button";
import { ArrowLeft } from "lucide-react";

interface PlaceholderPageProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export function PlaceholderPage({ title, description, icon }: PlaceholderPageProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] text-center p-8">
      <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mb-6 text-primary">
        {icon || <span className="text-4xl font-bold text-muted-foreground">?</span>}
      </div>
      <h1 className="text-4xl font-bold mb-4 tracking-tight">{title}</h1>
      <p className="text-xl text-muted-foreground max-w-lg mb-8">{description}</p>
      <Button size="lg">
        Go Back Home
      </Button>
    </div>
  );
}
