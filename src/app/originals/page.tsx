"use client";

import { Card, CardContent } from "@/components/ui/global/card";
import { Badge } from "@/components/ui/global/badge";
import { Button } from "@/components/ui/global/button";
import { SeriesCard } from "@/components/ui/webtoon/SeriesCard";
import { SectionHeader } from "@/components/ui/webtoon/SectionHeader";
import { ImageWithFallback } from "@/components/shared/ImageWithFallback";
import ImagePlaceholder from "@/components/shared/ImagePlaceholder";
import { Play, TrendingUp, Star, Clock } from "lucide-react";

export default function OriginalsPage() {
  // Mock data for originals
  const originals = Array.from({ length: 12 }).map((_, i) => ({
    id: i,
    title: `Original Series ${i + 1}`,
    author: "Official Creator",
    genre: i % 3 === 0 ? "Romance" : i % 3 === 1 ? "Action" : "Fantasy",
    rating: (4.5 + Math.random() * 0.5).toFixed(1),
    image: `https://images.unsplash.com/photo-${1550000000000 + (i * 1000)}?auto=format&fit=crop&w=400&q=80`,
    status: i === 0 ? "UP" : undefined,
    subscribers: `${(Math.random() * 5 + 1).toFixed(1)}M`
  }));

  return (
    <div className="space-y-10 pb-10">
      {/* Hero Section */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">WEBTOON Originals</h2>
            <p className="text-muted-foreground mt-1">Premium series from official creators</p>
          </div>
          <div className="flex gap-2">
            <Badge variant="secondary" className="bg-red-100 text-red-800 hover:bg-red-200">
              <TrendingUp className="w-3 h-3 mr-1" /> Trending
            </Badge>
            <Badge variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200">
              <Star className="w-3 h-3 mr-1" /> Premium
            </Badge>
          </div>
        </div>
      </section>

      {/* Featured Originals */}
      <section className="space-y-4">
        <SectionHeader title="Featured Originals" description="Top picks from our editorial team" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => {
            const genre = i === 1 ? "Fantasy" : i === 2 ? "Action" : "Romance";
            return (
              <div key={i} className="group relative aspect-video overflow-hidden rounded-xl border border-neutral-200 shadow-[0_2px_6px_rgba(0,0,0,0.08)] bg-white hover:shadow-md transition-transform hover:scale-[1.02] duration-200">
                <ImagePlaceholder />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4 flex flex-col justify-end rounded-xl">
                  <Badge className="w-fit mb-2 bg-green-500 hover:bg-green-600">Ep. {10 + i}</Badge>
                  <h3 className="text-white font-bold text-lg">Featured Original {i}</h3>
                  <div className="w-full bg-white/30 h-1 rounded-full mt-2 overflow-hidden">
                    <div className="bg-green-500 h-full w-3/4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* All Originals Grid */}
      <section className="space-y-6">
        <SectionHeader title="All Originals" description="Browse all official WEBTOON series" />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {originals.map((item) => (
            <SeriesCard 
              key={item.id}
              title={item.title}
              author={item.author}
              genre={item.genre}
              image=""
              rating={item.rating}
              status={item.status}
              variant="medium"
            />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button size="lg" variant="outline" className="min-w-[200px]">Load More</Button>
        </div>
      </section>
    </div>
  );
}
