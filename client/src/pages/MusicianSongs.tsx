import { useRoute, useLocation } from "wouter";
import { getSongsByMusicianGroupedByBand, getMusicianInstruments } from "@/data/bands";
import SongCard from "@/components/SongCard";
import ThemeToggle from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { Card } from "@/components/ui/card";

const instrumentIcons: Record<string, string> = {
  drums: "🥁",
  guitar: "🎸",
  bass: "🎸",
  synth: "🎹",
  vocals: "🎤"
};

export default function MusicianSongs() {
  const [, params] = useRoute("/musician/:name");
  const [, setLocation] = useLocation();
  
  const musicianName = params?.name ? decodeURIComponent(params.name) : "";
  const songsByBand = getSongsByMusicianGroupedByBand(musicianName);
  const instruments = getMusicianInstruments(musicianName);
  const totalSongs = songsByBand.reduce((sum, { songs }) => sum + songs.length, 0);

  if (songsByBand.length === 0) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Musician not found</h1>
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
            onClick={() => window.history.back()}
            data-testid="button-back"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <ThemeToggle />
        </div>

        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-3" data-testid="text-musician-name">
            {musicianName}
          </h1>
          <div className="flex items-center gap-2 flex-wrap mb-2">
            {instruments.map((instrument, index) => (
              <Badge key={index} variant="secondary" data-testid={`badge-instrument-${index}`}>
                {instrumentIcons[instrument]} {instrument}
              </Badge>
            ))}
          </div>
          <p className="text-muted-foreground" data-testid="text-stats">
            {totalSongs} songs across {songsByBand.length} {songsByBand.length === 1 ? 'band' : 'bands'}
          </p>
        </header>

        <div className="space-y-8">
          {songsByBand.map(({ band, songs }) => (
            <Card key={band.id} className="p-6">
              <div className="mb-4">
                <h2 className="text-2xl font-semibold mb-1" data-testid={`text-band-name-${band.id}`}>
                  {band.name}
                </h2>
                <p className="text-sm text-muted-foreground" data-testid={`text-band-info-${band.id}`}>
                  {band.genre} • {songs.length} {songs.length === 1 ? 'song' : 'songs'}
                </p>
              </div>
              <div className="bg-background rounded-lg border border-border">
                {songs.map((song) => (
                  <SongCard key={song.id} song={song} />
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
