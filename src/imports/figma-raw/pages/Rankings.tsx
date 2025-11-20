import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/global/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/global/tabs";
import { Badge } from "@/components/ui/global/badge";
import { TrendingUp, ArrowUp, Minus, ArrowDown, Star } from "lucide-react";

export function Rankings() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Top Rated</h2>
          <p className="text-muted-foreground">See what everyone is reading right now.</p>
        </div>
        <div className="flex gap-2">
            <Badge variant="secondary" className="bg-red-100 text-red-800 hover:bg-red-200">
                <TrendingUp className="w-3 h-3 mr-1" /> Trending
            </Badge>
            <Badge variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                <Star className="w-3 h-3 mr-1" /> Originals
            </Badge>
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="mb-8 w-full justify-start overflow-x-auto">
          <TabsTrigger value="all">All Genres</TabsTrigger>
          <TabsTrigger value="romance">Romance</TabsTrigger>
          <TabsTrigger value="fantasy">Fantasy</TabsTrigger>
          <TabsTrigger value="action">Action</TabsTrigger>
          <TabsTrigger value="drama">Drama</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-6">
            {/* Top 3 Podium */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end mb-10">
                {/* 2nd Place */}
                <div className="order-2 md:order-1 relative">
                    <div className="aspect-[2/3] rounded-lg overflow-hidden shadow-lg border-4 border-silver transform scale-90 origin-bottom">
                         <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=500&q=80" className="w-full h-full object-cover" />
                         <div className="absolute top-2 left-2 bg-gray-300 text-gray-800 font-bold px-3 py-1 rounded-full shadow-sm">#2</div>
                    </div>
                    <div className="text-center mt-2">
                        <h3 className="font-bold truncate">Second Best</h3>
                        <p className="text-sm text-muted-foreground">2.4M views</p>
                    </div>
                </div>
                
                 {/* 1st Place */}
                <div className="order-1 md:order-2 relative z-10">
                    <div className="aspect-[2/3] rounded-xl overflow-hidden shadow-xl border-4 border-yellow-400">
                         <img src="https://images.unsplash.com/photo-1535905557558-afc4877a26fc?auto=format&fit=crop&w=500&q=80" className="w-full h-full object-cover" />
                         <div className="absolute top-0 right-0 p-4">
                             <div className="bg-yellow-400 text-yellow-900 font-bold w-10 h-10 rounded-full flex items-center justify-center shadow-md text-lg">1</div>
                         </div>
                    </div>
                     <div className="text-center mt-3">
                        <h3 className="text-xl font-bold truncate">The Top Series</h3>
                        <p className="text-sm text-green-600 font-medium">3.1M views • Trending</p>
                    </div>
                </div>

                 {/* 3rd Place */}
                <div className="order-3 relative">
                    <div className="aspect-[2/3] rounded-lg overflow-hidden shadow-lg border-4 border-amber-700/50 transform scale-90 origin-bottom">
                         <img src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&w=500&q=80" className="w-full h-full object-cover" />
                         <div className="absolute top-2 left-2 bg-orange-200 text-orange-800 font-bold px-3 py-1 rounded-full shadow-sm">#3</div>
                    </div>
                     <div className="text-center mt-2">
                        <h3 className="font-bold truncate">Third Place</h3>
                        <p className="text-sm text-muted-foreground">1.8M views</p>
                    </div>
                </div>
            </div>

            {/* List Rankings 4-10 */}
            <div className="space-y-2 bg-card rounded-xl border p-1">
                {[4, 5, 6, 7, 8, 9, 10].map((rank) => (
                    <div key={rank} className="flex items-center gap-4 p-3 hover:bg-accent/50 rounded-lg transition-colors group cursor-pointer">
                        <div className="w-8 font-bold text-xl text-muted-foreground text-center">{rank}</div>
                         <div className="w-12 h-12 rounded bg-muted overflow-hidden shrink-0">
                            <img src={`https://images.unsplash.com/photo-${1600000000000 + rank}?auto=format&fit=crop&w=100&q=80`} className="w-full h-full object-cover" />
                         </div>
                        <div className="flex-1 min-w-0">
                            <h4 className="font-semibold truncate group-hover:text-primary transition-colors">Ranked Series Title {rank}</h4>
                            <p className="text-xs text-muted-foreground">Author Name • Genre</p>
                        </div>
                        <div className="flex items-center gap-1 text-xs font-medium">
                            {rank % 3 === 0 ? (
                                <span className="text-red-500 flex items-center"><ArrowDown className="w-3 h-3" /> 2</span>
                            ) : rank % 3 === 1 ? (
                                <span className="text-green-500 flex items-center"><ArrowUp className="w-3 h-3" /> 4</span>
                            ) : (
                                <span className="text-muted-foreground flex items-center"><Minus className="w-3 h-3" /></span>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
