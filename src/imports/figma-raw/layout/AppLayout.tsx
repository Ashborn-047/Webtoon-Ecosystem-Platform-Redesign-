import { useState } from "react";
import { NavRail, PageType } from "./NavRail";
import { TopHeader } from "./TopHeader";

interface AppLayoutProps {
  children: React.ReactNode;
  activePage: PageType;
  onPageChange: (page: PageType) => void;
}

export function AppLayout({ children, activePage, onPageChange }: AppLayoutProps) {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-background">
      {/* Collapsible Left Navigation Rail */}
      <NavRail activePage={activePage} onPageChange={onPageChange} />
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <TopHeader />
        
        {/* Single Scroll Container for the Page Content */}
        <main className="flex-1 overflow-y-auto bg-muted/10 scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent">
          <div className="mx-auto max-w-7xl p-6 md:p-8 min-h-full pb-20">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
