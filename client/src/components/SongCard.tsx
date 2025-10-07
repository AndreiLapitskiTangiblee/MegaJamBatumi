import { Song } from "@shared/schema";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

interface SongCardProps {
  song: Song;
}

const instrumentIcons: Record<string, string> = {
  drums: "🥁",
  guitar: "🎸",
  bass: "🎸",
  synth: "🎹",
  vocals: "🎤"
};

export default function SongCard({ song }: SongCardProps) {
  const getInitials = (name: string) => {
    const parts = name.split(" ");
    if (parts.length >= 2) {
      return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  };

  return (
    <div
      className="flex items-center justify-between p-4 rounded-lg border-b last:border-b-0 hover-elevate transition-colors gap-4"
      data-testid={`card-song-${song.id}`}
    >
      <div className="flex items-center gap-4 flex-1 min-w-0">
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-muted text-sm font-medium flex-shrink-0">
          {song.trackNumber}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="text-lg font-medium" data-testid={`text-song-title-${song.id}`}>
              {song.title}
            </h3>
            <a
              href={song.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid={`link-youtube-${song.id}`}
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
          <div className="flex items-center gap-2 mt-2 flex-wrap">
            {song.musicians.map((musician, index) => (
              <div
                key={index}
                className="flex items-center gap-1"
                data-testid={`musician-${song.id}-${index}`}
              >
                <Avatar className="w-7 h-7">
                  <AvatarFallback className="text-xs">
                    {getInitials(musician.name)}
                  </AvatarFallback>
                </Avatar>
                <Badge variant="secondary" className="text-xs">
                  {instrumentIcons[musician.instrument]} {musician.instrument}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="text-sm text-muted-foreground flex-shrink-0" data-testid={`text-song-duration-${song.id}`}>
        {song.duration}
      </div>
    </div>
  );
}
