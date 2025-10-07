import { Song } from "@shared/schema";

interface SongCardProps {
  song: Song;
}

export default function SongCard({ song }: SongCardProps) {
  return (
    <div
      className="flex items-center justify-between p-4 rounded-lg border-b last:border-b-0 hover-elevate transition-colors"
      data-testid={`card-song-${song.id}`}
    >
      <div className="flex items-center gap-4 flex-1">
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-muted text-sm font-medium">
          {song.trackNumber}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-medium" data-testid={`text-song-title-${song.id}`}>
            {song.title}
          </h3>
          <p className="text-sm text-muted-foreground" data-testid={`text-song-album-${song.id}`}>
            {song.album} • {song.year}
          </p>
        </div>
      </div>
      <div className="text-sm text-muted-foreground" data-testid={`text-song-duration-${song.id}`}>
        {song.duration}
      </div>
    </div>
  );
}
