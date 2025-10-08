import { Song } from "@shared/schema";
import { FaYoutube } from "react-icons/fa";
import { useLocation } from "wouter";
import { getMusicianColor } from "@/data/bands";

interface SongCardProps {
  song: Song;
  onMusicianClick?: (musicianName: string) => void;
}

const instrumentIcons: Record<string, string> = {
  drums: "🥁",
  guitar: "🎸",
  bass: "🎸",
  synth: "🎹",
  vocals: "🎤",
  acoustic: "🎸",
  piano: "🎹",
  backVocal: "🎤",
  electricGuitar: "🎸",
  electricGuitar2: "🎸"
};

export default function SongCard({ song, onMusicianClick }: SongCardProps) {
  const [, setLocation] = useLocation();

  const handleMusicianClick = (musicianName: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (onMusicianClick) {
      onMusicianClick(musicianName);
    } else {
      setLocation(`/musician/${encodeURIComponent(musicianName)}`);
    }
  };

  const shouldShowYoutubeIcon = song.title !== "? - ?" || (song.youtubeUrl && song.youtubeUrl !== "#");

  return (
    <div
      className="flex items-center justify-between p-3 sm:p-4 rounded-lg border-b last:border-b-0 hover-elevate transition-colors gap-2 sm:gap-4"
      data-testid={`card-song-${song.id}`}
    >
      <div className="flex items-center gap-2 sm:gap-4 flex-1 min-w-0">
        <div className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-muted text-xs sm:text-sm font-medium flex-shrink-0">
          {song.trackNumber}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="text-base sm:text-lg font-medium" data-testid={`text-song-title-${song.id}`}>
              {song.title}
            </h3>
            {shouldShowYoutubeIcon && (
              <div className="flex items-center gap-1">
                <a
                  href={song.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 dark:text-red-500 hover:text-red-700 dark:hover:text-red-400 transition-colors flex-shrink-0"
                  data-testid={`link-youtube-${song.id}`}
                  onClick={(e) => e.stopPropagation()}
                  title={song.autoFoundYoutubeUrl ? "Auto-found on YouTube" : "Watch on YouTube"}
                >
                  <FaYoutube className="w-6 h-6 sm:w-7 sm:h-7" />
                </a>
                {song.autoFoundYoutubeUrl && (
                  <span className="text-xs text-muted-foreground italic">Auto-found</span>
                )}
              </div>
            )}
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2 mt-2 flex-wrap">
            {song.musicians.map((musician, index) => (
              <button
                key={index}
                onClick={(e) => handleMusicianClick(musician.name, e)}
                className={`flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-medium ${getMusicianColor(musician.name)} hover-elevate active-elevate-2 cursor-pointer transition-transform hover:scale-105`}
                data-testid={`musician-${song.id}-${index}`}
              >
                <span className="text-xs sm:text-sm">{instrumentIcons[musician.instrument]}</span>
                <span className="whitespace-nowrap">{musician.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-end sm:items-center gap-1 sm:gap-3 flex-shrink-0">
        <span className="font-mono text-lg sm:text-xl font-bold text-primary whitespace-nowrap" data-testid={`text-song-tonality-${song.id}`}>
          {song.tonality}
        </span>
        <span className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap" data-testid={`text-song-duration-${song.id}`}>
          {song.duration}
        </span>
      </div>
    </div>
  );
}
