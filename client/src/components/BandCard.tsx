import { Band } from "@shared/schema";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";

interface BandCardProps {
  band: Band;
  songCount: number;
  totalDuration: string;
  backgroundImage?: string;
  onClick: () => void;
}

export default function BandCard({ band, songCount, totalDuration, backgroundImage, onClick }: BandCardProps) {
  return (
    <Card
      className="p-6 cursor-pointer hover-elevate active-elevate-2 transition-transform hover:scale-[1.02] relative overflow-hidden"
      onClick={onClick}
      data-testid={`card-band-${band.id}`}
    >
      {backgroundImage && (
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-25 pointer-events-none"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}
      <div className="relative z-10">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h2 className="text-2xl font-semibold flex-1" data-testid={`text-band-name-${band.id}`}>
            {band.name}
          </h2>
          <Badge variant="secondary" data-testid={`badge-song-count-${band.id}`}>
            {songCount} songs
          </Badge>
        </div>
        <div className="space-y-2">
          <p className="text-base" data-testid={`text-band-description-${band.id}`}>
            {band.description}
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span data-testid={`text-band-duration-${band.id}`}>{totalDuration}</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
