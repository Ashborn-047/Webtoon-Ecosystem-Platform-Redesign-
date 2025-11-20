import { useState, useEffect } from "react";
import { cn } from "@/components/ui/global/utils";
import { Button } from "@/components/ui/global/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/global/avatar";
import { 
  Home, 
  Compass, 
  Trophy, 
  PenTool, 
  BarChart2, 
  ShoppingBag, 
  GraduationCap, 
  Zap, 
  Palette, 
  Beaker, 
  Settings, 
  Menu,
  ChevronLeft,
  ChevronRight,
  Star
} from "lucide-react";

export type PageType = 
  | "design-system" 
  | "home" 
  | "originals"
  | "categories" 
  | "rankings" 
  | "canvas" 
  | "profile" 
  | "data-viz" 
  | "shop"
  | "creators-101"
  | "experimental";

interface NavRailProps {
  activePage: PageType;
  onPageChange: (page: PageType) => void;
}

export function NavRail({ activePage, onPageChange }: NavRailProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Auto-collapse on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setIsCollapsed(true);
      }
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const toggleCollapse = () => setIsCollapsed(!isCollapsed);

  const mainNavItems = [
    { id: "home", icon: Home, label: "Home" },
    { id: "originals", icon: Star, label: "Originals" },
    { id: "categories", icon: Compass, label: "Categories" },
    { id: "rankings", icon: Trophy, label: "Rankings" },
    { id: "canvas", icon: PenTool, label: "Canvas" },
    { id: "data-viz", icon: BarChart2, label: "Data Viz" },
    { id: "shop", icon: ShoppingBag, label: "Webtoon Shop" },
    { id: "creators-101", icon: GraduationCap, label: "Creators 101" },
  ];

  const internalNavItems = [
    { id: "design-system", icon: Palette, label: "Design System" },
    { id: "experimental", icon: Beaker, label: "Playground" },
  ];

  return (
    <div 
      className={cn(
        "flex flex-col h-full bg-sidebar border-r border-sidebar-border transition-all duration-300 ease-in-out relative",
        isCollapsed ? "w-16" : "w-64"
      )}
    >
      {/* Logo / Toggle Trigger */}
      <div 
        className="h-16 flex items-center px-4 border-b border-sidebar-border cursor-pointer hover:bg-sidebar-accent/50 transition-colors"
        onClick={toggleCollapse}
      >
        <div className="flex items-center gap-3 overflow-hidden">
          <div className="shrink-0 w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-sm">
            W
          </div>
          {!isCollapsed && (
            <span className="font-bold text-lg text-primary tracking-tight whitespace-nowrap opacity-100 transition-opacity duration-300">
              WEBTOON
            </span>
          )}
        </div>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 py-4 px-2 space-y-1 overflow-y-auto overflow-x-hidden scrollbar-thin">
        {mainNavItems.map((item) => (
          <NavItem 
            key={item.id}
            item={item} 
            isActive={activePage === item.id} 
            isCollapsed={isCollapsed} 
            onClick={() => onPageChange(item.id as PageType)} 
          />
        ))}

        <div className="my-4 border-t border-sidebar-border mx-2" />
        
        {internalNavItems.map((item) => (
          <NavItem 
            key={item.id}
            item={item} 
            isActive={activePage === item.id} 
            isCollapsed={isCollapsed} 
            onClick={() => onPageChange(item.id as PageType)} 
            variant="ghost"
          />
        ))}
      </nav>

      {/* Profile Footer */}
      <div className="p-2 border-t border-sidebar-border mt-auto">
        <div 
          className={cn(
            "flex items-center gap-3 p-2 rounded-lg hover:bg-sidebar-accent cursor-pointer transition-all",
            isCollapsed ? "justify-center" : "justify-start",
            activePage === 'profile' ? "bg-sidebar-accent" : ""
          )}
          onClick={() => onPageChange('profile')}
        >
          <Avatar className="h-8 w-8 border border-border">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>DU</AvatarFallback>
          </Avatar>
          
          {!isCollapsed && (
            <div className="flex-1 overflow-hidden">
              <p className="text-sm font-medium truncate">Demo User</p>
              <p className="text-xs text-muted-foreground truncate">View Profile</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function NavItem({ 
  item, 
  isActive, 
  isCollapsed, 
  onClick,
  variant = "default" 
}: { 
  item: any, 
  isActive: boolean, 
  isCollapsed: boolean, 
  onClick: () => void,
  variant?: "default" | "ghost"
}) {
  return (
    <Button
      variant="ghost"
      className={cn(
        "w-full flex items-center justify-start gap-3 h-10 px-3 transition-all",
        isActive 
          ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium shadow-sm" 
          : "text-muted-foreground hover:text-sidebar-foreground hover:bg-sidebar-accent/50",
        isCollapsed ? "justify-center px-0" : ""
      )}
      onClick={onClick}
      title={isCollapsed ? item.label : undefined}
    >
      <item.icon className={cn("w-5 h-5 shrink-0", isActive ? "text-primary" : "")} />
      {!isCollapsed && <span className="truncate">{item.label}</span>}
    </Button>
  );
}
