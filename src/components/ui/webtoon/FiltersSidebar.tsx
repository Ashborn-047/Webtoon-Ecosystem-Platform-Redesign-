"use client";

import { Filter, Search } from "lucide-react";
import { Input } from "@/components/ui/global/input";
import { Checkbox } from "@/components/ui/global/checkbox";
import { Label } from "@/components/ui/global/label";
import { ScrollArea } from "@/components/ui/global/scroll-area";
import { cn } from "@/components/ui/global/utils";

interface FiltersSidebarProps {
  className?: string;
}

export function FiltersSidebar({ className }: FiltersSidebarProps) {
  const GENRES = ["Action", "Romance", "Fantasy", "Drama", "Thriller", "Horror", "Comedy", "Slice of Life", "Sci-fi", "Historical"];
  const STATUS = ["Ongoing", "Completed", "New", "Hiatus"];

  return (
    <div className={cn("w-full md:w-64 shrink-0 space-y-8", className)}>
      <div className="space-y-4">
        <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground flex items-center gap-2">
          <Filter className="w-4 h-4" /> Filter By
        </h3>
        
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-medium mb-3">Status</h4>
            <div className="space-y-2.5">
              {STATUS.map((status) => (
                <div key={status} className="flex items-center space-x-2">
                  <Checkbox id={`status-${status}`} />
                  <Label htmlFor={`status-${status}`} className="text-sm font-normal cursor-pointer">{status}</Label>
                </div>
              ))}
            </div>
          </div>

          <div className="h-px bg-border" />

          <div>
             <h4 className="text-sm font-medium mb-3">Genres</h4>
             <div className="space-y-2.5">
               {GENRES.map((genre) => (
                <div key={genre} className="flex items-center space-x-2">
                  <Checkbox id={`genre-${genre}`} />
                  <Label htmlFor={`genre-${genre}`} className="text-sm font-normal cursor-pointer">{genre}</Label>
                </div>
              ))}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
