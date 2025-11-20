"use client";

import { Button } from "@/components/ui/global/button";
import { Badge } from "@/components/ui/global/badge";
import { Card, CardContent } from "@/components/ui/global/card";
import { ImageWithFallback } from "@/components/shared/ImageWithFallback";
import ImagePlaceholder from "@/components/shared/ImagePlaceholder";
import { PenTool, MessageSquare, Heart, UserPlus } from "lucide-react";

export default function CanvasPage() {
  return (
    <div className="space-y-10">
      <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-xl flex items-start justify-between shadow-[0_2px_6px_rgba(0,0,0,0.08)]">
        <div>
          <h2 className="text-2xl font-bold text-orange-900 flex items-center gap-2">
            <PenTool className="w-6 h-6" /> Canvas Creator Ecosystem
          </h2>
          <p className="text-orange-800 mt-2">
            Discover the next big hit before anyone else. Support independent creators.
          </p>
        </div>
        <Button className="bg-orange-500 hover:bg-orange-600 text-white">
          Start Creating
        </Button>
      </div>

      {/* Creator Spotlight */}
      <section className="space-y-6">
        <h3 className="text-xl font-bold">Creator Spotlight</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {[1, 2, 3].map((i) => (
             <Card key={i} className="overflow-hidden rounded-xl border border-neutral-200 shadow-[0_2px_6px_rgba(0,0,0,0.08)] bg-white hover:shadow-md transition-transform hover:scale-[1.02] duration-200">
               <div className="h-32 bg-gradient-to-r from-purple-500 to-indigo-500 relative">
                  <div className="absolute -bottom-8 left-6">
                    <div className="w-20 h-20 rounded-full border-2 border-white bg-white overflow-hidden shadow-sm">
                         <ImageWithFallback src={`https://images.unsplash.com/photo-${1500 + i}?auto=format&fit=crop&w=150&q=80`} category="SliceOfLife" className="w-full h-full object-cover rounded-full" alt="Creator avatar" />
                    </div>
                  </div>
               </div>
               <CardContent className="pt-10 pb-6 px-6">
                 <div className="flex justify-between items-start mb-2">
                   <div>
                     <h4 className="font-bold text-lg">Indie Artist {i}</h4>
                     <p className="text-sm text-muted-foreground">@indie_art_{i}</p>
                   </div>
                   <Button size="sm" variant="outline" className="h-8 gap-1">
                     <UserPlus className="w-3 h-3" /> Follow
                   </Button>
                 </div>
                 <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                   Creating slice of life comics about my cat and programming. Updates every Tuesday!
                 </p>
                 <div className="flex gap-2 text-xs font-medium">
                   <Badge variant="secondary">Slice of Life</Badge>
                   <Badge variant="secondary">Comedy</Badge>
                 </div>
               </CardContent>
             </Card>
           ))}
        </div>
      </section>

      {/* Fan Art Gallery */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
           <h3 className="text-xl font-bold">Community Fan Art</h3>
           <Button variant="link" className="text-[#00C373]">View Gallery</Button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
           {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
             <div key={i} className="rounded-xl border border-neutral-200 shadow-[0_2px_6px_rgba(0,0,0,0.08)] bg-white overflow-hidden relative group cursor-pointer hover:shadow-md transition-transform hover:scale-[1.02] duration-200 aspect-square">
               <ImageWithFallback 
                 src={`https://images.unsplash.com/photo-${1550000000000 + i * 1000}?auto=format&fit=crop&w=400&q=80`}
                 category="Comedy"
                 fallback={<ImagePlaceholder seed={i} className="w-full h-full" />}
                 className="w-full h-full object-cover transition-transform group-hover:scale-105 rounded-xl"
                 alt="fanart"
               />
               <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 text-white rounded-xl">
                  <div className="flex items-center gap-1"><Heart className="w-5 h-5 fill-current" /> 120</div>
                  <div className="flex items-center gap-1"><MessageSquare className="w-5 h-5" /> 4</div>
               </div>
             </div>
           ))}
        </div>
      </section>
    </div>
  );
}
