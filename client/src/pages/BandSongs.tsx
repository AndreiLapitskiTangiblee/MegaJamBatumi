import { useRoute, useLocation } from "wouter";
import { getBandById, getSongsByBandId } from "@/data/bands";
import SongCard from "@/components/SongCard";
import ThemeToggle from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function BandSongs() {
  const [, params] = useRoute("/band/:id");
  const [, setLocation] = useLocation();
  
  const bandId = params?.id || "";
  const band = getBandById(bandId);
  const songs = getSongsByBandId(bandId);

  if (!band) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Band not found</h1>
          <Button onClick={() => setLocation("/")} data-testid="button-back">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Bands
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-8">
        <div className="flex items-center justify-between mb-6">
          <Button
            variant="ghost"
            onClick={() => setLocation("/")}
            data-testid="button-back-to-bands"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Bands
          </Button>
          <ThemeToggle />
        </div>

        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-2" data-testid="text-band-name">
            {band.name}
          </h1>
          <p className="text-base mb-6" data-testid="text-band-description">
            {band.description}
          </p>
          <h2 className="text-xl font-semibold" data-testid="text-songs-count">
            Songs ({songs.length})
          </h2>
        </header>

        <div className="space-y-3">
          {songs.map((song, index) => (
            <div key={song.id} className="bg-card rounded-lg border border-card-border relative">
              <div className="absolute -left-2 -top-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold z-10">
                {index + 1}
              </div>
              <SongCard song={song} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
