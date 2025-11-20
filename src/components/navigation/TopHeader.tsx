"use client";

import { Bell } from "lucide-react";
import { Input } from "@/components/ui/global/input";
import { Button } from "@/components/ui/global/button";
import Logo from "@/components/navigation/Logo";

export function TopHeader() {
  return (
    <header className="w-full h-16 bg-white border-b border-neutral-200 shadow-sm flex items-center shrink-0">
      <div className="w-full max-w-[1400px] mx-auto px-6 flex items-center justify-between gap-6">
        
        {/* Center: Search */}
        <div className="flex-1 max-w-[600px]">
          <Input
            placeholder="Search series, creators, or genres..."
            className="rounded-full bg-neutral-100 border-none focus-visible:ring-[2px] focus-visible:ring-green-500 h-10 px-4"
          />
        </div>

        {/* Right: Notification + Publish */}
        <div className="flex items-center gap-4">
          <button className="relative">
            <Bell className="w-5 h-5 text-neutral-700" />
            <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500" />
          </button>

          <Button className="bg-black text-white rounded-full px-5 py-2 h-9 hover:bg-neutral-800">
            Publish
          </Button>
        </div>
      </div>
    </header>
  );
}
