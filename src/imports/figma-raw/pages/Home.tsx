import { Card, CardContent } from "@/components/ui/global/card";
import { Badge } from "@/components/ui/global/badge";
import { Button } from "@/components/ui/global/button";
import { Play, TrendingUp, Star, Clock } from "lucide-react";

export function Home() {
  return (
    <div className="space-y-10 pb-10">
      {/* Hero / Continue Reading Module */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight">Continue Reading</h2>
          <Button variant="link">View all</Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="group relative aspect-video overflow-hidden rounded-xl bg-muted">
              <img 
                src={`https://images.unsplash.com/photo-${i === 1 ? "1612036782180-6f0b6cd846fe" : i === 2 ? "1620641781242-5b59c78c729e" : "1578632767115-351597cf2477"}?auto=format&fit=crop&w=800&q=80`}
                alt="Series cover"
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4 flex flex-col justify-end">
                <Badge className="w-fit mb-2 bg-green-500 hover:bg-green-600">Ep. {10 + i}</Badge>
                <h3 className="text-white font-bold text-lg">Lore Olympus</h3>
                <div className="w-full bg-white/30 h-1 rounded-full mt-2 overflow-hidden">
                  <div className="bg-green-500 h-full w-3/4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* For You Module */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">For You</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {[
            "1534809027769-b00d750a6ead",
            "1620641781242-5b59c78c729e",
            "1578632767115-351597cf2477",
            "1612036782180-6f0b6cd846fe",
            "1560972550-aba343e8b952"
          ].map((imageId, i) => (
            <div key={i} className="space-y-2 cursor-pointer group">
              <div className="aspect-[2/3] rounded-lg overflow-hidden bg-muted relative">
                 <img 
                  src={`https://images.unsplash.com/photo-${imageId}?auto=format&fit=crop&w=400&q=80`}
                  alt="Series cover"
                  className="object-cover w-full h-full transition-transform group-hover:scale-105"
                />
                <div className="absolute top-2 left-2">
                   {i === 0 && <Badge variant="secondary" className="font-bold text-xs">98% Match</Badge>}
                </div>
              </div>
              <div>
                <h3 className="font-semibold leading-none truncate">Tower of God</h3>
                <p className="text-sm text-muted-foreground">Fantasy • SIU</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Editor's Picks Module */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">Editor's Picks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            "1560972550-aba343e8b952",
            "1541963463532-d68292c34b19"
          ].map((imageId, i) => (
             <Card key={i} className="overflow-hidden border-none shadow-md bg-card">
               <div className="flex h-48">
                 <div className="w-1/3 relative">
                    <img 
                      src={`https://images.unsplash.com/photo-${imageId}?auto=format&fit=crop&w=400&q=80`}
                      alt="Pick"
                      className="object-cover w-full h-full"
                    />
                 </div>
                 <CardContent className="flex-1 p-6 flex flex-col justify-center">
                    <Badge variant="outline" className="w-fit mb-2">Must Read</Badge>
                    <h3 className="text-xl font-bold mb-2">Midnight Poppy Land</h3>
                    <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                      A quirky editor falls for a stoic mafia bodyguard in this colorful romance.
                    </p>
                    <Button size="sm" className="w-fit">
                      <Play className="w-4 h-4 mr-2" /> Start Reading
                    </Button>
                 </CardContent>
               </div>
             </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
