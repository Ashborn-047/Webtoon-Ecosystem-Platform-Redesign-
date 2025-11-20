import { cn } from "@/components/ui/global/utils";
import { Badge } from "@/components/ui/global/badge";
import { Play } from "lucide-react";

interface SeriesCardProps {
  title: string;
  author?: string;
  image: string;
  variant?: "large" | "medium" | "small";
  genre?: string;
  rating?: string;
  status?: string;
  views?: string;
  isMatch?: boolean;
  className?: string;
}

export function SeriesCard({ 
  title, 
  author, 
  image, 
  variant = "medium", 
  genre, 
  rating, 
  status,
  views,
  isMatch,
  className 
}: SeriesCardProps) {
  
  if (variant === "large") {
    return (
      <div className={cn("group relative aspect-video overflow-hidden rounded-xl bg-muted cursor-pointer", className)}>
        <img 
          src={image}
          alt={title}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-6 flex flex-col justify-end">
          {status && <Badge className="w-fit mb-2 bg-green-500 hover:bg-green-600">{status}</Badge>}
          <h3 className="text-white font-bold text-2xl mb-1">{title}</h3>
          <p className="text-gray-200 text-sm mb-3">{genre} • {author}</p>
          <div className="flex items-center gap-4">
             <div className="flex items-center gap-1 text-yellow-400 text-sm font-bold">
               <span>★</span> {rating}
             </div>
             <div className="text-gray-300 text-sm">{views} views</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("space-y-2 cursor-pointer group", className)}>
      <div className="aspect-[2/3] rounded-lg overflow-hidden bg-muted relative shadow-sm transition-all duration-300 group-hover:shadow-md">
        <img 
          src={image}
          alt={title}
          className="object-cover w-full h-full transition-transform group-hover:scale-105"
        />
        {isMatch && (
           <div className="absolute top-2 left-2">
             <Badge variant="secondary" className="font-bold text-xs bg-green-500 text-white border-none">98% Match</Badge>
           </div>
        )}
        {status === "UP" && (
          <div className="absolute top-2 right-2">
             <div className="bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-sm">UP</div>
          </div>
        )}
      </div>
      <div>
        <h3 className={cn("font-semibold leading-tight text-foreground group-hover:text-primary truncate", variant === "small" ? "text-xs" : "text-sm")}>
          {title}
        </h3>
        {(genre || author) && (
          <p className={cn("text-muted-foreground truncate", variant === "small" ? "text-[10px]" : "text-xs")}>
            {genre} {genre && author && "•"} {author}
          </p>
        )}
        {rating && (
          <div className="flex items-center gap-1 text-[10px] text-muted-foreground mt-1">
             <span className="text-yellow-500">★</span> {rating}
          </div>
        )}
      </div>
    </div>
  );
}
