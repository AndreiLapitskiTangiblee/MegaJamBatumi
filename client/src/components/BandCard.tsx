import { Band } from "@shared/schema";
import { Card } from "@/components/ui/card";

interface BandCardProps {
  band: Band;
  onClick: () => void;
}

export default function BandCard({ band, onClick }: BandCardProps) {
  return (
    <Card
      className="p-6 cursor-pointer hover-elevate active-elevate-2 transition-transform hover:scale-[1.02]"
      onClick={onClick}
      data-testid={`card-band-${band.id}`}
    >
      <h2 className="text-2xl font-semibold mb-2" data-testid={`text-band-name-${band.id}`}>
        {band.name}
      </h2>
      <div className="space-y-1">
        <p className="text-sm text-muted-foreground" data-testid={`text-band-formed-${band.id}`}>
          Formed {band.formed} • {band.origin}
        </p>
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
