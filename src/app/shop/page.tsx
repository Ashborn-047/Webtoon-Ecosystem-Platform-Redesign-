"use client";

import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/global/button";
import Link from "next/link";

export default function ShopPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-8">
      <div className="w-24 h-24 bg-neutral-100 rounded-full flex items-center justify-center mb-6">
        <ShoppingBag className="w-12 h-12 text-neutral-600" />
      </div>
      <h1 className="text-4xl font-bold mb-4 tracking-tight text-gray-900">Webtoon Shop</h1>
      <p className="text-xl text-neutral-500 max-w-lg mb-8">
        Merchandise, coins, and more from your favorite creators.
      </p>
      <Link href="/">
        <Button size="lg" className="bg-black text-white hover:bg-neutral-800 rounded-full px-6 py-3">
          Go Back Home
        </Button>
      </Link>
    </div>
  );
}

