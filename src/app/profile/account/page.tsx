"use client";

import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/global/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/global/avatar";
import { SectionHeader } from "@/components/ui/webtoon/SectionHeader";
import { Button } from "@/components/ui/global/button";
import { Badge } from "@/components/ui/global/badge";
import { Input } from "@/components/ui/global/input";
import { Label } from "@/components/ui/global/label";
import { Switch } from "@/components/ui/global/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/global/tabs";
import { Settings, Mail, Bell, CreditCard, Shield, Trash2, Trophy, BarChart } from "lucide-react";
import { cn } from "@/components/ui/global/utils";

export default function AccountPage() {
  const pathname = usePathname();
  const router = useRouter();
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    updates: false,
    comments: true,
  });
  const activeTab = pathname.includes("/subscriptions") ? "subscriptions" : pathname.includes("/comments") ? "comments" : pathname.includes("/following") ? "following" : "account";

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

        <TabsContent value="account" className="space-y-6 mt-8">
          <SectionHeader 
            title="Account Settings"
            description="Manage your profile and preferences"
          />

          {/* Profile Info Card */}
          <Card className="rounded-xl border border-neutral-200 shadow-[0_2px_6px_rgba(0,0,0,0.08)] bg-white">
            <CardHeader className="p-6 pb-4">
              <CardTitle className="flex items-center gap-2 text-base">
                <Settings className="w-5 h-5 text-[#00C373]" />
                Profile Information
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-0 space-y-4">
              <div className="flex items-center gap-6">
                <Avatar className="h-16 w-16 border-2 border-neutral-200 shadow-sm">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback className="text-base">DU</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="text-lg font-bold">Demo User</h3>
                  <p className="text-sm text-muted-foreground">Super Fan • Member since 2021</p>
                  <div className="flex gap-2 mt-2">
                    <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200 text-sm">Gold Tier</Badge>
                    <Badge variant="outline" className="text-sm">120 Coins</Badge>
                  </div>
                </div>
                <Button variant="outline" className="rounded-xl">
                  Edit Profile
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Email Settings */}
          <Card className="rounded-xl border border-neutral-200 shadow-[0_2px_6px_rgba(0,0,0,0.08)] bg-white">
            <CardHeader className="p-6 pb-4">
              <CardTitle className="flex items-center gap-2 text-base">
                <Mail className="w-5 h-5 text-[#00C373]" />
                Email & Contact
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-0 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm">Email Address</Label>
                <Input 
                  id="email" 
                  type="email" 
                  defaultValue="demo.user@example.com"
                  className="rounded-xl"
                />
              </div>
              <Button variant="outline" className="rounded-xl">
                Update Email
              </Button>
            </CardContent>
          </Card>

          {/* Notifications */}
          <Card className="rounded-xl border border-neutral-200 shadow-[0_2px_6px_rgba(0,0,0,0.08)] bg-white">
            <CardHeader className="p-6 pb-4">
              <CardTitle className="flex items-center gap-2 text-base">
                <Bell className="w-5 h-5 text-[#00C373]" />
                Notification Preferences
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-0 space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="email-notif" className="text-sm">Email Notifications</Label>
                  <p className="text-xs text-muted-foreground">Receive updates via email</p>
                </div>
                <Switch 
                  id="email-notif"
                  checked={notifications.email}
                  onCheckedChange={(checked) => setNotifications({...notifications, email: checked})}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="push-notif" className="text-sm">Push Notifications</Label>
                  <p className="text-xs text-muted-foreground">Get notified on your device</p>
                </div>
                <Switch 
                  id="push-notif"
                  checked={notifications.push}
                  onCheckedChange={(checked) => setNotifications({...notifications, push: checked})}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="updates-notif" className="text-sm">Series Updates</Label>
                  <p className="text-xs text-muted-foreground">New episode notifications</p>
                </div>
                <Switch 
                  id="updates-notif"
                  checked={notifications.updates}
                  onCheckedChange={(checked) => setNotifications({...notifications, updates: checked})}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="comments-notif" className="text-sm">Comment Replies</Label>
                  <p className="text-xs text-muted-foreground">When someone replies to you</p>
                </div>
                <Switch 
                  id="comments-notif"
                  checked={notifications.comments}
                  onCheckedChange={(checked) => setNotifications({...notifications, comments: checked})}
                />
              </div>
            </CardContent>
          </Card>

          {/* Subscription & Coins */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="rounded-xl border border-neutral-200 shadow-[0_2px_6px_rgba(0,0,0,0.08)] bg-white">
              <CardHeader className="p-6 pb-4">
                <CardTitle className="flex items-center gap-2 text-base">
                  <Trophy className="w-4 h-4 text-yellow-500" />
                  Subscription Tier
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <div className="space-y-3">
                  <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200 text-base px-3 py-1">
                    Gold Tier
                  </Badge>
                  <p className="text-sm text-muted-foreground">
                    Enjoy ad-free reading and exclusive content
                  </p>
                  <Button variant="outline" className="w-full rounded-xl">
                    Manage Subscription
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-xl border border-neutral-200 shadow-[0_2px_6px_rgba(0,0,0,0.08)] bg-white">
              <CardHeader className="p-6 pb-4">
                <CardTitle className="flex items-center gap-2 text-base">
                  <CreditCard className="w-4 h-4 text-[#00C373]" />
                  Coins & Payment
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Current Balance</span>
                    <span className="text-xl font-bold text-[#00C373]">120 Coins</span>
                  </div>
                  <Button className="w-full bg-[#00C373] hover:bg-[#00b368] text-white rounded-xl">
                    Purchase Coins
                  </Button>
                  <Button variant="outline" className="w-full rounded-xl">
                    Payment Methods
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Stats */}
          <Card className="rounded-xl border border-neutral-200 shadow-[0_2px_6px_rgba(0,0,0,0.08)] bg-white">
            <CardHeader className="p-6 pb-4">
              <CardTitle className="flex items-center gap-2 text-base">
                <BarChart className="w-4 h-4 text-[#00C373]" />
                Reading Statistics
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-0">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-gradient-to-br from-[#f9f9f9] to-[#f0f0f0] rounded-xl">
                  <div className="text-2xl font-bold text-[#00C373]">1,243</div>
                  <div className="text-xs text-muted-foreground mt-1">Episodes Read</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-[#f9f9f9] to-[#f0f0f0] rounded-xl">
                  <div className="text-2xl font-bold text-[#00C373]">128h</div>
                  <div className="text-xs text-muted-foreground mt-1">Time Spent</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-[#f9f9f9] to-[#f0f0f0] rounded-xl">
                  <div className="text-2xl font-bold text-[#00C373]">45</div>
                  <div className="text-xs text-muted-foreground mt-1">Series Active</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-[#f9f9f9] to-[#f0f0f0] rounded-xl">
                  <div className="text-2xl font-bold text-[#00C373]">12</div>
                  <div className="text-xs text-muted-foreground mt-1">Comments</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Privacy & Security */}
          <Card className="rounded-xl border border-neutral-200 shadow-[0_2px_6px_rgba(0,0,0,0.08)] bg-white">
            <CardHeader className="p-6 pb-4">
              <CardTitle className="flex items-center gap-2 text-base">
                <Shield className="w-5 h-5 text-[#00C373]" />
                Privacy & Security
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-0 space-y-0">
              <div className="flex items-center justify-between p-4 hover:bg-neutral-100 rounded-xl cursor-pointer transition-colors">
                <div>
                  <p className="font-medium text-sm">Change Password</p>
                  <p className="text-xs text-muted-foreground">Update your account password</p>
                </div>
                <Button variant="ghost" size="sm" className="rounded-xl">
                  Change
                </Button>
              </div>
              <div className="flex items-center justify-between p-4 hover:bg-neutral-100 rounded-xl cursor-pointer transition-colors">
                <div>
                  <p className="font-medium text-sm">Privacy Settings</p>
                  <p className="text-xs text-muted-foreground">Control your profile visibility</p>
                </div>
                <Button variant="ghost" size="sm" className="rounded-xl">
                  Manage
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Delete Account */}
          <Card className="rounded-xl border border-red-200 shadow-[0_2px_6px_rgba(0,0,0,0.08)] bg-red-50/30">
            <CardHeader className="p-6 pb-4">
              <CardTitle className="flex items-center gap-2 text-base text-red-600">
                <Trash2 className="w-5 h-5" />
                Danger Zone
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-0">
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Once you delete your account, there is no going back. Please be certain.
                </p>
                <Button 
                  variant="destructive" 
                  className="rounded-xl"
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  Delete Account
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
