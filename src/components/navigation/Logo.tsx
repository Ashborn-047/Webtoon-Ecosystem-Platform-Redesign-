"use client";

import Link from "next/link";
import { cn } from "@/components/ui/global/utils";

export default function Logo({ className }: { className?: string }) {
  return (
    <Link href="/">
      <div className={cn("w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center", className)}>
        <span className="text-white font-bold text-lg">W</span>
      </div>
    </Link>
  );
}

