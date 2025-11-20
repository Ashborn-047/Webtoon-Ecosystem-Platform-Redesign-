"use client";

import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/global/avatar";
import { Badge } from "@/components/ui/global/badge";
import { Settings } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/global/tabs";
import { Card, CardContent } from "@/components/ui/global/card";
import { SectionHeader } from "@/components/ui/webtoon/SectionHeader";

// Mock comment data
const mockComments = [
  {
    id: 1,
    seriesTitle: "Tower of God",
    episode: "Ep. 156",
    date: "2 days ago",
    comment: "This episode was absolutely incredible! The character development is on another level. Can't wait for the next one!",
    avatar: "https://github.com/shadcn.png",
    initial: "DU"
  },
  {
    id: 2,
    seriesTitle: "True Beauty",
    episode: "Ep. 203",
    date: "5 days ago",
    comment: "The art style in this series is so beautiful. The romance is getting really interesting now!",
    avatar: "https://github.com/shadcn.png",
    initial: "DU"
  },
  {
    id: 3,
    seriesTitle: "Solo Leveling",
    episode: "Ep. 89",
    date: "1 week ago",
    comment: "The action sequences are mind-blowing. This is definitely one of my favorite webtoons!",
    avatar: "https://github.com/shadcn.png",
    initial: "DU"
  },
  {
    id: 4,
    seriesTitle: "Lore Olympus",
    episode: "Ep. 234",
    date: "1 week ago",
    comment: "The mythology references are so well done. Hades and Persephone's relationship is everything!",
    avatar: "https://github.com/shadcn.png",
    initial: "DU"
  },
  {
    id: 5,
    seriesTitle: "Unordinary",
    episode: "Ep. 88",
    date: "2 weeks ago",
    comment: "The plot twist in this episode caught me completely off guard. Amazing storytelling!",
    avatar: "https://github.com/shadcn.png",
    initial: "DU"
  },
];

export default function CommentsPage() {
  const pathname = usePathname();
  const router = useRouter();
  const activeTab = pathname.includes("/subscriptions") ? "subscriptions" : pathname.includes("/following") ? "following" : pathname.includes("/account") ? "account" : "comments";

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

        <TabsContent value="comments" className="space-y-6 mt-8">
          <SectionHeader 
            title="Your Comments"
            description="Your recent activity across Webtoon."
          />

          <div className="space-y-3">
            {mockComments.map((comment) => (
              <Card 
                key={comment.id} 
                className="rounded-xl border border-neutral-200 shadow-[0_2px_6px_rgba(0,0,0,0.08)] bg-white hover:shadow-md transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <Avatar className="h-10 w-10 border border-neutral-200 shrink-0">
                      <AvatarImage src={comment.avatar} />
                      <AvatarFallback>{comment.initial}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0 space-y-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h4 className="font-semibold text-sm text-foreground">{comment.seriesTitle}</h4>
                        <Badge variant="outline" className="text-xs rounded-xl">
                          {comment.episode}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{comment.date}</span>
                      </div>
                      <p className="text-sm text-foreground line-clamp-3 leading-relaxed">
                        {comment.comment}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {mockComments.length === 0 && (
            <div className="text-center py-12 text-muted-foreground">
              <p>No recent comments found.</p>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
