import { Song } from "@shared/schema";
import { ExternalLink } from "lucide-react";
import { useLocation } from "wouter";

interface SongCardProps {
  song: Song;
  onMusicianClick?: (musicianName: string) => void;
}

const instrumentIcons: Record<string, string> = {
  drums: "🥁",
  guitar: "🎸",
  bass: "🎸",
  synth: "🎹",
  vocals: "🎤"
};

const instrumentColors: Record<string, string> = {
  vocals: "bg-cyan-500 text-white",
  guitar: "bg-indigo-500 text-white",
  bass: "bg-violet-500 text-white",
  synth: "bg-fuchsia-500 text-white",
  drums: "bg-rose-500 text-white"
};

const allInstruments: Array<"vocals" | "guitar" | "bass" | "synth" | "drums"> = [
  "vocals",
  "guitar", 
  "bass",
  "synth",
  "drums"
];

export default function SongCard({ song, onMusicianClick }: SongCardProps) {
  const [, setLocation] = useLocation();
  const presentInstruments = new Set(song.musicians.map(m => m.instrument));
  const missingInstruments = allInstruments.filter(inst => !presentInstruments.has(inst));

  const handleMusicianClick = (musicianName: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (onMusicianClick) {
      onMusicianClick(musicianName);
    } else {
      setLocation(`/musician/${encodeURIComponent(musicianName)}`);
    }
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
            <span className="font-mono text-sm font-semibold text-primary" data-testid={`text-song-tonality-${song.id}`}>
              {song.tonality}
            </span>
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
              <button
                key={index}
                onClick={(e) => handleMusicianClick(musician.name, e)}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-sm font-medium ${instrumentColors[musician.instrument]} hover-elevate active-elevate-2 cursor-pointer transition-transform hover:scale-105`}
                data-testid={`musician-${song.id}-${index}`}
              >
                <span>{instrumentIcons[musician.instrument]}</span>
                <span>{musician.name}</span>
              </button>
            ))}
            {missingInstruments.map((instrument, index) => (
              <div
                key={`missing-${index}`}
                className="flex items-center justify-center w-8 h-8 rounded-full bg-white dark:bg-gray-900 border-2 border-black dark:border-white text-sm"
                data-testid={`missing-instrument-${song.id}-${instrument}`}
              >
                <span>{instrumentIcons[instrument]}</span>
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
