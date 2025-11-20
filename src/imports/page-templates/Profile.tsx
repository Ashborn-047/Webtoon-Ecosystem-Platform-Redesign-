import { Tabs, TabsList, TabsTrigger, TabsContent } from "../../ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { Button } from "../../ui/button";
import { Badge } from "../../ui/badge";
import { Progress } from "../../ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";
import { Bell, Settings, LogOut, CreditCard, Shield, Trophy, BarChart } from "lucide-react";

export function Profile() {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-6 p-6 bg-card rounded-xl border shadow-sm">
         <Avatar className="w-24 h-24 border-4 border-background shadow-sm">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>DU</AvatarFallback>
         </Avatar>
         <div className="flex-1">
           <h1 className="text-2xl font-bold">Demo User</h1>
           <p className="text-muted-foreground">Super Fan • Member since 2021</p>
           <div className="flex gap-2 mt-3">
             <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">Gold Tier</Badge>
             <Badge variant="outline">120 Coins</Badge>
           </div>
         </div>
         <Button variant="outline" size="icon">
           <Settings className="w-5 h-5" />
         </Button>
      </div>

      <Tabs defaultValue="subscriptions" className="w-full">
        <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent space-x-6">
          <TabsTrigger value="subscriptions" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent py-3">Subscriptions</TabsTrigger>
          <TabsTrigger value="comments" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent py-3">Comments</TabsTrigger>
          <TabsTrigger value="following" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent py-3">Following</TabsTrigger>
          <TabsTrigger value="account" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent py-3">Account</TabsTrigger>
        </TabsList>

        <TabsContent value="subscriptions" className="py-6 space-y-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Recently Updated</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="flex gap-3 p-3">
                  <div className="w-20 h-20 bg-muted rounded shrink-0 overflow-hidden">
                    <img src={`https://images.unsplash.com/photo-${1520000000000 + i}?auto=format&fit=crop&w=150&q=80`} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col justify-center w-full">
                    <div className="flex justify-between items-start">
                      <h4 className="font-bold text-sm">Series Title {i}</h4>
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">Ep. 45 • Yesterday</p>
                    <Progress value={33 * i} className="h-1.5" />
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Binge Queue</h3>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="space-y-2">
                        <div className="aspect-square bg-muted rounded-lg"></div>
                        <p className="font-medium text-sm">Title {i}</p>
                    </div>
                ))}
             </div>
          </div>
        </TabsContent>

        <TabsContent value="account" className="py-6 space-y-6">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <Card>
               <CardHeader className="pb-3">
                 <CardTitle className="flex items-center gap-2 text-base"><Trophy className="w-4 h-4 text-yellow-500" /> Achievements</CardTitle>
               </CardHeader>
               <CardContent>
                 <div className="flex gap-2">
                   <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center text-xl">📚</div>
                   <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-xl opacity-50">💬</div>
                   <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-xl opacity-50">⭐</div>
                 </div>
               </CardContent>
             </Card>

             <Card>
               <CardHeader className="pb-3">
                 <CardTitle className="flex items-center gap-2 text-base"><BarChart className="w-4 h-4" /> Reading Stats</CardTitle>
               </CardHeader>
               <CardContent>
                 <div className="space-y-2">
                   <div className="flex justify-between text-sm">
                     <span className="text-muted-foreground">Episodes Read</span>
                     <span className="font-medium">1,243</span>
                   </div>
                   <div className="flex justify-between text-sm">
                     <span className="text-muted-foreground">Time Spent</span>
                     <span className="font-medium">128h</span>
                   </div>
                 </div>
               </CardContent>
             </Card>
           </div>

           <div className="space-y-2">
             <h3 className="text-lg font-semibold">Settings</h3>
             <Card>
               <div className="divide-y">
                 <div className="p-4 flex items-center justify-between hover:bg-accent/50 cursor-pointer">
                   <div className="flex items-center gap-3">
                     <CreditCard className="w-5 h-5 text-muted-foreground" />
                     <div>
                       <p className="font-medium text-sm">Coins & Payment</p>
                       <p className="text-xs text-muted-foreground">Manage your payment methods</p>
                     </div>
                   </div>
                 </div>
                 <div className="p-4 flex items-center justify-between hover:bg-accent/50 cursor-pointer">
                   <div className="flex items-center gap-3">
                     <Shield className="w-5 h-5 text-muted-foreground" />
                     <div>
                       <p className="font-medium text-sm">Privacy & Security</p>
                       <p className="text-xs text-muted-foreground">Control your profile visibility</p>
                     </div>
                   </div>
                 </div>
                 <div className="p-4 flex items-center justify-between hover:bg-red-50 cursor-pointer text-red-600">
                   <div className="flex items-center gap-3">
                     <LogOut className="w-5 h-5" />
                     <p className="font-medium text-sm">Sign Out</p>
                   </div>
                 </div>
               </div>
             </Card>
           </div>
        </TabsContent>

        <TabsContent value="comments">
          <div className="py-10 text-center text-muted-foreground">
             <p>No recent comments found.</p>
          </div>
        </TabsContent>

        <TabsContent value="following">
           <div className="py-10 text-center text-muted-foreground">
             <p>Follow creators to see their updates here.</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
