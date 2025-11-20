"use client";

import { cn } from "@/components/ui/global/utils";
import { Button } from "@/components/ui/global/button";
import { Badge } from "@/components/ui/global/badge";

interface HeroPanelProps {
  title: string;
  subtitle: string;
  tags: string[];
  className?: string;
}

export function HeroPanel({ title, subtitle, tags, className }: HeroPanelProps) {
  return (
    <div className={cn(
      "relative rounded-wt-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-purple-800 p-8 md:p-10 text-white overflow-hidden shadow-wt-lg",
      className
    )}>
      <div className="relative z-10 max-w-3xl">
        <Badge className="bg-white/20 hover:bg-white/30 text-white border-none mb-4 backdrop-blur-sm">Discovery Hub</Badge>
        <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">{title}</h1>
        <p className="text-lg md:text-xl text-indigo-100 mb-8 max-w-xl leading-relaxed">{subtitle}</p>
        
        <div className="flex flex-wrap gap-3">
          {tags.map((tag) => (
            <Button 
              key={tag} 
              variant="secondary" 
              size="sm" 
              className="bg-white/10 hover:bg-white/20 text-white border-none backdrop-blur-md transition-all hover:scale-105"
            >
              {tag}
            </Button>
          ))}
        </div>
      </div>
      
      {/* Abstract Background Elements */}
      <div className="absolute right-0 top-0 h-full w-1/2 opacity-30 pointer-events-none">
        <div className="absolute right-[-50px] top-[-50px] w-[300px] h-[300px] rounded-full bg-pink-500 blur-[100px]" />
        <div className="absolute right-[100px] bottom-[-50px] w-[200px] h-[200px] rounded-full bg-blue-500 blur-[80px]" />
      </div>
    </div>
  );
}
