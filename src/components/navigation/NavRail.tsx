"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/components/ui/global/utils";
import { Button } from "@/components/ui/global/button";
import {
  Home,
  Compass,
  Trophy,
  PenTool,
  BarChart2,
  ShoppingBag,
  GraduationCap,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useNavStore } from "@/hooks/useNavStore";
import ProfileFooter from "./ProfileFooter";

export function NavRail() {
  const pathname = usePathname();
  const { navOpen, toggleNav, setNavOpen } = useNavStore();
  const isCollapsed = !navOpen; // Derive directly from store
  const [isMobile, setIsMobile] = useState(false);

  /* Mobile auto-collapse fix */
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile && navOpen) {
        setNavOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [navOpen, setNavOpen]);

  const toggleCollapse = () => {
    toggleNav();
  };

  /* NAV ITEMS */
  const mainNavItems = [
    { id: "home", icon: Home, label: "Home", href: "/" },
    { id: "originals", icon: Star, label: "Originals", href: "/originals" },
    { id: "categories", icon: Compass, label: "Categories", href: "/categories" },
    { id: "rankings", icon: Trophy, label: "Rankings", href: "/rankings" },
    { id: "canvas", icon: PenTool, label: "Canvas", href: "/canvas" },
    { id: "dataviz", icon: BarChart2, label: "Data Viz", href: "/dataviz" },
    { id: "shop", icon: ShoppingBag, label: "Webtoon Shop", href: "/shop" },
    { id: "creators", icon: GraduationCap, label: "Creators 101", href: "/creators101" },
  ];

  return (
    <aside
      className={cn(
        "fixed top-0 left-0 h-screen border-r bg-white z-50 flex flex-col shadow-sm",
        "transition-all duration-300",
        isCollapsed ? "w-[80px]" : "w-[260px]"
      )}
    >
      {/* Top Toggle (Logo) */}
      <div className="h-16 flex items-center justify-center border-b bg-white">
        <button
          onClick={toggleCollapse}
          className={cn(
            "flex items-center gap-3 transition-all duration-300",
            isCollapsed ? "justify-center w-full px-0" : "justify-start w-full px-4"
          )}
        >
          <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center shrink-0 shadow-sm">
            <span className="text-white font-bold text-lg">W</span>
          </div>
          
          {!isCollapsed && (
            <span className="text-lg font-bold tracking-tight text-black truncate">WEBTOON</span>
          )}
        </button>
      </div>

      {/* Scrollable Nav Items */}
      <div className="flex-1 overflow-y-auto no-scrollbar px-3 py-4">
        <nav className="space-y-1">
          {mainNavItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href === "/" && pathname === "/home");

            return (
              <Link key={item.id} href={item.href}>
                <div
                  className={cn(
                    "flex items-center gap-3 py-2.5 rounded-xl cursor-pointer transition-all px-3",
                    isActive
                      ? "bg-neutral-100 text-[#00C373] font-medium"
                      : "text-neutral-500 hover:bg-[#00C373]/10 hover:text-[#00C373]",
                    isCollapsed && "justify-center px-0"
                  )}
                >
                  {isActive && (
                    <div className="absolute left-0 w-[3px] h-6 bg-[#00C373] rounded-r-full" />
                  )}

                  <item.icon className={cn("h-5 w-5", isActive && "text-[#00C373]")} />

                  {!isCollapsed && (
                    <span className="text-sm truncate">{item.label}</span>
                  )}
                </div>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Always-visible bottom footer */}
      <div className="border-t px-4 py-4 bg-white">
        <ProfileFooter isCollapsed={isCollapsed} />
      </div>
    </aside>
  );
}
