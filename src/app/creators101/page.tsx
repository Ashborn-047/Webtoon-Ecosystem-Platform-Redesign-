"use client";

import { GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/global/button";
import Link from "next/link";

export default function Creators101Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-8">
      <div className="w-24 h-24 bg-neutral-100 rounded-full flex items-center justify-center mb-6">
        <GraduationCap className="w-12 h-12 text-neutral-600" />
      </div>
      <h1 className="text-4xl font-bold mb-4 tracking-tight text-gray-900">Creators 101</h1>
      <p className="text-xl text-neutral-500 max-w-lg mb-8">
        Resources and guides for aspiring creators.
      </p>
      <Link href="/">
        <Button size="lg" className="bg-black text-white hover:bg-neutral-800 rounded-full px-6 py-3">
          Go Back Home
        </Button>
      </Link>
    </div>
  );
}

