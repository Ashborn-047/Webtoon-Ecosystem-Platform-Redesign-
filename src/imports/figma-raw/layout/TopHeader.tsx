import { Search, Bell } from "lucide-react";
import { Input } from "@/components/ui/global/input";
import { Button } from "@/components/ui/global/button";

export function TopHeader() {
  return (
    <header className="h-16 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-6 flex items-center justify-between gap-4 sticky top-0 z-50">
      <div className="flex items-center gap-4 flex-1 max-w-xl">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search series, creators, or genres..." 
            className="pl-9 bg-muted/50 border-transparent focus-visible:bg-background focus-visible:border-ring focus-visible:ring-1 focus-visible:ring-ring"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" className="relative text-muted-foreground hover:text-foreground">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-background"></span>
        </Button>
        
        <div className="w-px h-6 bg-border mx-1"></div>
        
        <Button className="bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
          Publish
        </Button>
      </div>
    </header>
  );
}
