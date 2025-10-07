import { Song } from "@shared/schema";
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

const instrumentColors: Record<string, string> = {
  drums: "bg-orange-500/90 text-white",
  guitar: "bg-purple-500/90 text-white",
  bass: "bg-blue-500/90 text-white",
  synth: "bg-pink-500/90 text-white",
  vocals: "bg-green-500/90 text-white"
};

export default function SongCard({ song }: SongCardProps) {
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
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-sm font-medium ${instrumentColors[musician.instrument]}`}
                data-testid={`musician-${song.id}-${index}`}
              >
                <span>{instrumentIcons[musician.instrument]}</span>
                <span>{musician.name}</span>
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
