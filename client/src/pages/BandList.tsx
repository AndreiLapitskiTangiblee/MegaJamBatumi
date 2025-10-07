import { bands, getSongsByBandId } from "@/data/bands";
import BandCard from "@/components/BandCard";
import { useLocation } from "wouter";

export default function BandList() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-2" data-testid="text-page-title">
            Rock Bands ({bands.length})
          </h1>
          <p className="text-muted-foreground" data-testid="text-page-subtitle">
            Explore legendary rock bands and their iconic songs
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bands.map((band) => (
            <BandCard
              key={band.id}
              band={band}
              songCount={getSongsByBandId(band.id).length}
              onClick={() => setLocation(`/band/${band.id}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
