"use client";

import { cn } from "@/components/ui/global/utils";
import { SectionHeader } from "@/components/ui/webtoon/SectionHeader";
import { ImageWithFallback } from "@/components/shared/ImageWithFallback";
import ImagePlaceholder from "@/components/shared/ImagePlaceholder";

interface DisneySeries {
  id: number;
  title: string;
  tag: string;
  color: string;
  image?: string;
}

interface DisneyShowcaseProps {
  series?: DisneySeries[];
  className?: string;
}

const defaultDisneySeries: DisneySeries[] = [
  { 
    id: 1, 
    title: "Spider-Man", 
    tag: "MARVEL", 
    color: "from-red-600 to-red-800",
    image: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=300&h=400&fit=crop"
  },
  { 
    id: 2, 
    title: "Star Wars", 
    tag: "STAR WARS", 
    color: "from-yellow-500 to-orange-600",
    image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=300&h=400&fit=crop"
  },
  { 
    id: 3, 
    title: "Frozen", 
    tag: "DISNEY", 
    color: "from-blue-400 to-cyan-600",
    image: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=300&h=400&fit=crop"
  },
  { 
    id: 4, 
    title: "The Mandalorian", 
    tag: "STAR WARS", 
    color: "from-gray-700 to-gray-900",
    image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=300&h=400&fit=crop"
  },
  { 
    id: 5, 
    title: "Avengers", 
    tag: "MARVEL", 
    color: "from-red-500 to-orange-600",
    image: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=300&h=400&fit=crop"
  },
];

export function DisneyShowcase({ series = defaultDisneySeries, className }: DisneyShowcaseProps) {
  return (
    <section className={cn("mb-section py-section", className)}>
      <SectionHeader 
        title="Disney+ Stories on WEBTOON"
        description="Marvel • Star Wars • Disney Classics"
        actionLabel="View All"
      />
      
      {/* Promotional Banner */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 rounded-2xl p-8 mb-8 shadow-[0_2px_6px_rgba(0,0,0,0.08)]">
        <div className="text-white">
          <h3 className="text-xl font-bold mb-2">Marvel • Star Wars • Disney Classics</h3>
          <p className="text-blue-200">Epic stories in vertical scroll format</p>
        </div>
      </div>

      {/* Series Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-6">
        {series.map((item) => (
          <div key={item.id} className="cursor-pointer group">
            <div className="relative aspect-[2/3] rounded-xl border border-neutral-200 shadow-[0_2px_6px_rgba(0,0,0,0.08)] bg-white overflow-hidden hover:shadow-md transition-transform hover:scale-[1.02] duration-200">
              <ImagePlaceholder />
              <div className="absolute top-2 left-2">
                <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-xl font-bold shadow-sm">
                  {item.tag}
                </span>
              </div>
            </div>
            <h3 className="font-medium text-sm text-gray-900 mt-2 truncate">{item.title}</h3>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="text-center">
        <button className="inline-block text-webtoon-green text-sm hover:underline font-semibold px-4 py-2 border-2 border-webtoon-green rounded-wt-md hover:bg-webtoon-soft transition-colors">
          See more Disney+ stories →
        </button>
      </div>
    </section>
  );
}

