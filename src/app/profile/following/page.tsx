"use client";

import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/global/card";
import { Avatar, AvatarFallback } from "@/components/ui/global/avatar";
import { SectionHeader } from "@/components/ui/webtoon/SectionHeader";
import { Button } from "@/components/ui/global/button";
import { Badge } from "@/components/ui/global/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/global/tabs";
import { UserPlus, UserMinus, Settings } from "lucide-react";
import { cn } from "@/components/ui/global/utils";

// Mock creator data
const mockCreators = [
  {
    id: 1,
    name: "SIU",
    username: "@siu_official",
    followers: "4.8M",
    initial: "SI",
    series: "Tower of God",
    category: "Fantasy"
  },
  {
    id: 2,
    name: "Yaongyi",
    username: "@yaongyi",
    followers: "6.1M",
    initial: "YA",
    series: "True Beauty",
    category: "Romance"
  },
  {
    id: 3,
    name: "Rachel Smythe",
    username: "@rachelsmythe",
    followers: "4.5M",
    initial: "RS",
    series: "Lore Olympus",
    category: "Mythology"
  },
  {
    id: 4,
    name: "uru-chan",
    username: "@uruchan",
    followers: "3.9M",
    initial: "UC",
    series: "Unordinary",
    category: "Action"
  },
  {
    id: 5,
    name: "Alphatart",
    username: "@alphatart",
    followers: "4.2M",
    initial: "AL",
    series: "The Remarried Empress",
    category: "Drama"
  },
  {
    id: 6,
    name: "mongie",
    username: "@mongie",
    followers: "3.5M",
    initial: "MO",
    series: "Let's Play",
    category: "Romance"
  },
];

export default function FollowingPage() {
  const pathname = usePathname();
  const router = useRouter();
  const [following, setFollowing] = useState<Set<number>>(new Set([1, 2, 3]));
  const activeTab = pathname.includes("/subscriptions") ? "subscriptions" : pathname.includes("/comments") ? "comments" : pathname.includes("/account") ? "account" : "following";

  const toggleFollow = (id: number) => {
    setFollowing((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <div className="space-y-8">
      {/* Profile Header */}
      <div className="rounded-2xl border border-neutral-200 shadow-[0_2px_6px_rgba(0,0,0,0.08)] bg-white p-6">
        <div className="flex items-center gap-6">
          <Avatar className="h-[52px] w-[52px] border-2 border-white shadow-sm bg-gradient-to-br from-green-400 to-green-600">
            <AvatarFallback className="text-lg text-white font-bold">DU</AvatarFallback>
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

        <TabsContent value="following" className="space-y-6 mt-8">
          <SectionHeader 
            title="Creators You Follow"
            description="Stay updated with creators you care about."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockCreators.map((creator) => {
              const isFollowing = following.has(creator.id);
              return (
                <Card 
                  key={creator.id}
                  className="rounded-xl border border-neutral-200 shadow-[0_2px_6px_rgba(0,0,0,0.08)] bg-white hover:shadow-md transition-all"
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <Avatar className="h-20 w-20 border-2 border-neutral-200 shadow-sm bg-gradient-to-br from-green-400 to-green-600">
                        <AvatarFallback className="text-lg text-white font-bold">{creator.initial}</AvatarFallback>
                      </Avatar>
                      <div className="space-y-1">
                        <h3 className="font-bold text-lg">{creator.name}</h3>
                        <p className="text-sm text-muted-foreground">{creator.username}</p>
                        <p className="text-xs text-muted-foreground">{creator.series}</p>
                      </div>
                      <Badge variant="outline" className="rounded-xl">
                        {creator.category}
                      </Badge>
                      <div className="text-sm font-medium text-muted-foreground">
                        {creator.followers} followers
                      </div>
                      <Button
                        variant={isFollowing ? "outline" : "default"}
                        size="sm"
                        onClick={() => toggleFollow(creator.id)}
                        className={cn(
                          "w-full rounded-xl",
                          isFollowing 
                            ? "border-[#00C373] text-[#00C373] hover:bg-neutral-100" 
                            : "bg-[#00C373] hover:bg-[#00b368] text-white"
                        )}
                      >
                        {isFollowing ? (
                          <>
                            <UserMinus className="w-4 h-4 mr-2" />
                            Unfollow
                          </>
                        ) : (
                          <>
                            <UserPlus className="w-4 h-4 mr-2" />
                            Follow
                          </>
                        )}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {mockCreators.length === 0 && (
            <div className="text-center py-12 text-muted-foreground">
              <p>Follow creators to see their updates here.</p>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
