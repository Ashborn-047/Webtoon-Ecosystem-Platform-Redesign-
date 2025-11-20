import { HeroPanel } from "../webtoon/HeroPanel";
import { FiltersSidebar } from "../webtoon/FiltersSidebar";
import { SeriesCard } from "../webtoon/SeriesCard";
import { SectionHeader } from "../webtoon/SectionHeader";
import { Button } from "@/components/ui/global/button";

export function Categories() {
  // Mock data for the grid
  const series = Array.from({ length: 12 }).map((_, i) => ({
    id: i,
    title: `Series Title ${i + 1}`,
    author: "Creator Name",
    genre: i % 2 === 0 ? "Romance" : "Action",
    rating: (4 + Math.random()).toFixed(1),
    image: `https://images.unsplash.com/photo-${1550000000000 + (i * 1000)}?auto=format&fit=crop&w=400&q=80`,
    status: i === 0 ? "UP" : undefined
  }));

  return (
    <div className="flex flex-col gap-8 w-full">
      {/* Hero Panel */}
      <HeroPanel 
        title="Find Your Next Obsession" 
        subtitle="Explore thousands of series curated just for your taste. From heart-fluttering romance to pulse-pounding action."
        tags={["Hidden Gems", "Rising Stars", "Award Winners"]}
      />

      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Left Filters Sidebar - Sticky on desktop */}
        <aside className="hidden md:block sticky top-0">
          <FiltersSidebar />
        </aside>

        {/* Main Grid Content */}
        <div className="flex-1 min-w-0 space-y-10">
          
          {/* Adaptive Genre Grid (Mini) */}
          <section>
            <SectionHeader title="Popular Genres" />
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
               {["Action", "Romance", "Fantasy", "Drama", "Thriller"].map((genre, i) => (
                 <Button 
                   key={genre} 
                   variant="outline" 
                   className="h-12 justify-start px-4 font-medium hover:border-primary hover:bg-primary/5 transition-colors"
                 >
                   {genre}
                 </Button>
               ))}
            </div>
          </section>

          {/* Main Series Grid */}
          <section>
            <SectionHeader 
              title="All Series" 
              description="Showing 1,240 results" 
              // actionLabel="Sort by: Popular"
            />
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8">
              {series.map((item) => (
                <SeriesCard 
                  key={item.id}
                  title={item.title}
                  author={item.author}
                  genre={item.genre}
                  image={item.image}
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
          
          {/* Hidden Gems Strip */}
          <section className="bg-accent/30 p-6 rounded-xl border border-border/50">
             <SectionHeader title="Hidden Gems" description="Underrated series you shouldn't miss" />
             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex gap-4 p-3 bg-background rounded-lg border hover:shadow-md transition-shadow cursor-pointer">
                    <div className="w-20 h-24 shrink-0 rounded bg-muted overflow-hidden">
                       <img 
                          src={`https://images.unsplash.com/photo-${1580000000000 + i * 500}?auto=format&fit=crop&w=200&q=80`} 
                          className="w-full h-full object-cover"
                          alt="gem"
                       />
                    </div>
                    <div className="flex flex-col justify-center">
                       <h4 className="font-bold text-sm line-clamp-1">Underrated Gem Title {i}</h4>
                       <p className="text-xs text-muted-foreground mb-1">Thriller • 9.8</p>
                       <p className="text-xs text-muted-foreground line-clamp-2">A story about finding the unexpected in the most...</p>
                    </div>
                  </div>
                ))}
             </div>
          </section>

        </div>
      </div>
    </div>
  );
}
