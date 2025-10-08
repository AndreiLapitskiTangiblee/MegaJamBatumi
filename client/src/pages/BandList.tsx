import { useState } from "react";
import { bands, getSongsByBandId, getAllSongsTotalDuration, songs, getTotalDuration, getBandBackgroundImage } from "@/data/bands";
import BandCard from "@/components/BandCard";
import SongsTable from "@/components/SongsTable";
import ThemeToggle from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { LayoutGrid, Table } from "lucide-react";

export default function BandList() {
  const [, setLocation] = useLocation();
  const [viewMode, setViewMode] = useState<"cards" | "table">("cards");
  const totalDuration = getAllSongsTotalDuration();
  const totalSongs = songs.length;

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-8 py-4 sm:py-8">
        <header className="mb-6 sm:mb-8">
          <div className="flex items-start justify-between gap-2 sm:gap-4 mb-4">
            <div className="min-w-0 flex-1">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2" data-testid="text-page-title">
                Mega Jam Batumi
              </h1>
              <p className="text-sm sm:text-base text-muted-foreground mb-1" data-testid="text-event-date">
                19 Oct 2025
              </p>
              <p className="text-sm sm:text-base text-muted-foreground" data-testid="text-page-subtitle">
                {bands.length} bands • {totalSongs} songs • {totalDuration}
              </p>
            </div>
            <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
              <div className="flex items-center gap-1 bg-muted rounded-lg p-1">
                <Button
                  variant={viewMode === "cards" ? "secondary" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("cards")}
                  data-testid="button-view-cards"
                  className="gap-1 sm:gap-2 px-2 sm:px-3"
                >
                  <LayoutGrid className="w-4 h-4" />
                  <span className="hidden sm:inline">Cards</span>
                </Button>
                <Button
                  variant={viewMode === "table" ? "secondary" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("table")}
                  data-testid="button-view-table"
                  className="gap-1 sm:gap-2 px-2 sm:px-3"
                >
                  <Table className="w-4 h-4" />
                  <span className="hidden sm:inline">Table</span>
                </Button>
              </div>
              <ThemeToggle />
            </div>
          </div>
        </header>

        {viewMode === "cards" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {bands.map((band, index) => {
              const bandSongs = getSongsByBandId(band.id);
              const backgroundImage = getBandBackgroundImage(band.id);
              return (
                <BandCard
                  key={band.id}
                  band={band}
                  songCount={bandSongs.length}
                  totalDuration={getTotalDuration(bandSongs)}
                  backgroundImage={backgroundImage}
                  sequenceNumber={index + 1}
                  onClick={() => setLocation(`/band/${band.id}`)}
                />
              );
            })}
          </div>
        ) : (
          <SongsTable />
        )}
      </div>
    </div>
  );
}
