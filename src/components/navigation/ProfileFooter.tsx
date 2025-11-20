import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/global/avatar";
import Link from "next/link";

export default function ProfileFooter({ isCollapsed }: { isCollapsed: boolean }) {
  return (
    <Link href="/profile" className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity">
      <Avatar className="h-8 w-8 shrink-0">
        <AvatarImage src="https://github.com/shadcn.png" alt="User" />
        <AvatarFallback>DU</AvatarFallback>
      </Avatar>

      {!isCollapsed && (
        <div className="flex flex-col">
          <span className="text-sm font-medium">Demo User</span>
          <span className="text-xs text-neutral-500 hover:text-neutral-700">
            View Profile
          </span>
        </div>
      )}
    </Link>
  );
}
