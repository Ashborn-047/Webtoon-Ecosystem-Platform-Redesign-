"use client";

import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/global/avatar";
import { Badge } from "@/components/ui/global/badge";
import { Settings } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/global/tabs";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/global/card";
import { Progress } from "@/components/ui/global/progress";
import { SeriesCard } from "@/components/ui/webtoon/SeriesCard";
import { SectionHeader } from "@/components/ui/webtoon/SectionHeader";
import { Button } from "@/components/ui/global/button";
import { ImageWithFallback } from "@/components/shared/ImageWithFallback";
import ImagePlaceholder from "@/components/shared/ImagePlaceholder";

// Mock subscription data
const mockSubscriptions = [
  { id: 1, title: "Tower of God", author: "SIU", genre: "Fantasy", rating: "4.9", image: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=300&h=400&fit=crop", status: "UP", progress: 85 },
  { id: 2, title: "True Beauty", author: "Yaongyi", genre: "Romance", rating: "4.8", image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=300&h=400&fit=crop", status: "UP", progress: 60 },
  { id: 3, title: "Solo Leveling", author: "Chugong", genre: "Action", rating: "4.9", image: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=300&h=400&fit=crop", status: undefined, progress: 100 },
  { id: 4, title: "Lore Olympus", author: "Rachel Smythe", genre: "Romance", rating: "4.9", image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=300&h=400&fit=crop", status: "UP", progress: 45 },
  { id: 5, title: "Unordinary", author: "uru-chan", genre: "Action", rating: "4.7", image: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=300&h=400&fit=crop", status: undefined, progress: 90 },
];

const recentlyUpdated = mockSubscriptions.filter(s => s.status === "UP").slice(0, 4);
const bingeQueue = mockSubscriptions.slice(0, 4);

type FilterType = "all" | "ongoing" | "completed" | "new";

export default function SubscriptionsPage() {
  const pathname = usePathname();
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const activeTab = pathname.includes("/comments") ? "comments" : pathname.includes("/following") ? "following" : pathname.includes("/account") ? "account" : "subscriptions";

  const filteredSubscriptions = mockSubscriptions.filter((sub) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "ongoing") return sub.status === "UP";
    if (activeFilter === "completed") return sub.progress === 100;
    if (activeFilter === "new") return sub.status === "UP" && sub.progress < 10;
    return true;
  });

  return (
    <div className="space-y-8">
      {/* Profile Header */}
      <div className="rounded-2xl border border-neutral-200 shadow-[0_2px_6px_rgba(0,0,0,0.08)] bg-white p-6">
        <div className="flex items-center gap-6">
          <Avatar className="h-[52px] w-[52px] border-2 border-white shadow-sm">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback className="text-lg">DU</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-foreground">Demo User</h1>
            <div className="flex items-center gap-3 mt-2">
              <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200 text-sm rounded-full px-3 py-1">Gold Tier</Badge>
              <Badge variant="outline" className="text-sm rounded-full px-3 py-1">120 Coins</Badge>
            </div>
          </div>
          <button className="p-2 hover:bg-neutral-100 rounded-xl transition-colors">
            <Settings className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>
      </div>

      {/* Profile Tabs */}
      <Tabs value={activeTab} onValueChange={(value) => router.push(`/profile/${value}`)} className="w-full">
        <TabsList className="w-full justify-start bg-transparent p-0 h-auto gap-2">
          <TabsTrigger value="subscriptions" className="rounded-xl border-2 border-transparent data-[state=active]:border-[#00C373] data-[state=active]:bg-[#00C373]/5 data-[state=active]:shadow-[0_0_12px_rgba(0,195,115,0.3)] py-3 px-6 text-base font-semibold text-muted-foreground data-[state=active]:text-[#00C373] data-[state=active]:font-bold transition-all">
            Subscriptions
          </TabsTrigger>
          <TabsTrigger value="comments" className="rounded-xl border-2 border-transparent data-[state=active]:border-[#00C373] data-[state=active]:bg-[#00C373]/5 data-[state=active]:shadow-[0_0_12px_rgba(0,195,115,0.3)] py-3 px-6 text-base font-semibold text-muted-foreground data-[state=active]:text-[#00C373] data-[state=active]:font-bold transition-all">
            Comments
          </TabsTrigger>
          <TabsTrigger value="following" className="rounded-xl border-2 border-transparent data-[state=active]:border-[#00C373] data-[state=active]:bg-[#00C373]/5 data-[state=active]:shadow-[0_0_12px_rgba(0,195,115,0.3)] py-3 px-6 text-base font-semibold text-muted-foreground data-[state=active]:text-[#00C373] data-[state=active]:font-bold transition-all">
            Following
          </TabsTrigger>
          <TabsTrigger value="account" className="rounded-xl border-2 border-transparent data-[state=active]:border-[#00C373] data-[state=active]:bg-[#00C373]/5 data-[state=active]:shadow-[0_0_12px_rgba(0,195,115,0.3)] py-3 px-6 text-base font-semibold text-muted-foreground data-[state=active]:text-[#00C373] data-[state=active]:font-bold transition-all">
            Account
          </TabsTrigger>
        </TabsList>

        <TabsContent value="subscriptions" className="space-y-8 mt-8">
          {/* Recently Updated */}
          <section>
            <SectionHeader title="Recently Updated" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {recentlyUpdated.map((item) => (
                <Card key={item.id} className="rounded-xl border border-neutral-200 shadow-[0_2px_6px_rgba(0,0,0,0.08)] bg-white hover:shadow-md transition-all overflow-hidden">
                  <CardContent className="p-4">
                    <div className="flex gap-3">
                      <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0">
                        <ImagePlaceholder seed={item.id} className="w-full h-full" />
                      </div>
                      <div className="flex flex-col justify-center flex-1 min-w-0">
                        <div className="flex justify-between items-start mb-1">
                          <h4 className="font-semibold text-sm truncate">{item.title}</h4>
                          <div className="w-2 h-2 bg-[#00C373] rounded-full shrink-0 ml-2" />
                        </div>
                        <p className="text-xs text-muted-foreground mb-2">Ep. 45 • Yesterday</p>
                        <Progress value={item.progress} className="h-1.5" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Binge Queue */}
          <section>
            <SectionHeader title="Binge Queue" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {bingeQueue.map((item) => (
                <div key={item.id} className="space-y-2">
                  <div className="aspect-square rounded-xl border border-neutral-200 shadow-[0_2px_6px_rgba(0,0,0,0.08)] bg-white overflow-hidden hover:shadow-md transition-transform hover:scale-[1.02] duration-200">
                    <ImagePlaceholder seed={item.id} className="w-full h-full" />
                  </div>
                  <p className="font-medium text-sm text-center truncate">{item.title}</p>
                </div>
              ))}
            </div>
          </section>

          {/* All Subscribed Series */}
          <section>
            <SectionHeader 
              title="All Subscribed Series"
              description="Series you follow and get updates for."
            />

            {/* Filter Bar */}
            <div className="flex gap-2 mb-6 overflow-x-auto scrollbar-hide pb-2">
              {(["all", "ongoing", "completed", "new"] as FilterType[]).map((filter) => (
                <Button
                  key={filter}
                  variant={activeFilter === filter ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveFilter(filter)}
                  className="rounded-xl whitespace-nowrap"
                >
                  {filter.charAt(0).toUpperCase() + filter.slice(1)}
                </Button>
              ))}
            </div>

            {/* Series Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
              {filteredSubscriptions.map((item) => (
                <SeriesCard
                  key={item.id}
                  title={item.title}
                  author={item.author}
                  genre={item.genre}
                  image="" // Force placeholder
                  rating={item.rating}
                  status={item.status}
                  variant="medium"
                />
              ))}
            </div>

            {filteredSubscriptions.length === 0 && (
              <div className="text-center py-12 text-muted-foreground">
                <p>No subscriptions found for this filter.</p>
              </div>
            )}
          </section>
        </TabsContent>
      </Tabs>
    </div>
  );
}
