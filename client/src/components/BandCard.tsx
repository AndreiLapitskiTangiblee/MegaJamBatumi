import { Band } from "@shared/schema";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface BandCardProps {
  band: Band;
  songCount: number;
  onClick: () => void;
}

export default function BandCard({ band, songCount, onClick }: BandCardProps) {
  return (
    <Card
      className="p-6 cursor-pointer hover-elevate active-elevate-2 transition-transform hover:scale-[1.02]"
      onClick={onClick}
      data-testid={`card-band-${band.id}`}
    >
      <div className="flex items-start justify-between gap-3 mb-2">
        <h2 className="text-2xl font-semibold flex-1" data-testid={`text-band-name-${band.id}`}>
          {band.name}
        </h2>
        <Badge variant="secondary" data-testid={`badge-song-count-${band.id}`}>
          {songCount} songs
        </Badge>
      </div>
      <div className="space-y-1">
        <p className="text-sm text-muted-foreground" data-testid={`text-band-genre-${band.id}`}>
          {band.genre}
        </p>
        <p className="text-base mt-3" data-testid={`text-band-description-${band.id}`}>
          {band.description}
        </p>
      </div>
    </Card>
  );
}
