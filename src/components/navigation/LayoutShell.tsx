"use client";

import React from "react";
import { NavRail } from "./NavRail";
import { TopHeader } from "./TopHeader";
import { Footer } from "@/components/layout/Footer";
import { useNavStore } from "@/hooks/useNavStore";

export function LayoutShell({ children }: { children: React.ReactNode }) {
  const { navOpen } = useNavStore();

  return (
    <div className="min-h-screen w-full bg-[#F8F8F8]">
      {/* Left Navigation */}
      <NavRail />

      {/* MAIN CONTENT: uses margin-left so content shifts cleanly when nav collapses */}
      <div
        className={`
          flex flex-col min-h-screen transition-all duration-300
          ${navOpen ? "ml-[260px]" : "ml-[80px]"}
        `}
      >
        <TopHeader />
        <main className="flex-1 p-6">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}
