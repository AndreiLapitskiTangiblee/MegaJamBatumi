import { useState, useEffect } from "react";
import { useBandsData } from "@/hooks/useBandsData";
import { getBandBackgroundImage } from "@/data/bands";
import BandCard from "@/components/BandCard";
import SongsTable from "@/components/SongsTable";
import ThemeToggle from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { LayoutGrid, Table } from "lucide-react";

const SCROLL_POSITION_KEY = "bandListScrollPosition";
const VIEW_MODE_KEY = "bandListViewMode";

function formatDuration(totalMinutes: number): string {
  const hours = Math.floor(totalMinutes / 60);
  const mins = totalMinutes % 60;
  if (hours > 0) {
    return `${hours}h ${mins}m`;
  }
  return `${mins}m`;
}

function parseDuration(duration: string): number {
  const parts = duration.split(':');
  if (parts.length === 2) {
    return parseInt(parts[0]) * 60 + parseInt(parts[1]);
  }
  return 0;
}

export default function BandList() {
  const [, setLocation] = useLocation();
  const { data, isLoading } = useBandsData();
  
  // Initialize view mode from localStorage or default to "cards"
  const [viewMode, setViewMode] = useState<"cards" | "table">(() => {
    const saved = localStorage.getItem(VIEW_MODE_KEY);
    return (saved === "cards" || saved === "table") ? saved : "cards";
  });
  
  const bands = data?.bands || [];
  const songs = data?.songs || [];
  
  const totalDurationSeconds = songs.reduce((acc, song) => acc + parseDuration(song.duration), 0);
  const totalDuration = formatDuration(Math.floor(totalDurationSeconds / 60));
  const totalSongs = songs.length;

  // Save view mode to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(VIEW_MODE_KEY, viewMode);
  }, [viewMode]);

  // Restore scroll position when component mounts
  useEffect(() => {
    const savedScrollPosition = sessionStorage.getItem(SCROLL_POSITION_KEY);
    if (savedScrollPosition) {
      window.scrollTo(0, parseInt(savedScrollPosition));
    }
  }, []);

  // Save scroll position before navigating away
  useEffect(() => {
    const handleScroll = () => {
      sessionStorage.setItem(SCROLL_POSITION_KEY, window.scrollY.toString());
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-8 py-4 sm:py-8">
        <header className="mb-6 sm:mb-8">
          {/* Mobile layout */}
          <div className="sm:hidden space-y-3 mb-4">
            {/* Row 1: Title centered */}
            <h1 className="text-2xl font-bold text-center" data-testid="text-page-title">
              Mega Jam Batumi
            </h1>
            
            {/* Row 2: View toggle left, theme toggle right */}
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-1 bg-muted rounded-lg p-1">
                <Button
                  variant={viewMode === "cards" ? "secondary" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("cards")}
                  data-testid="button-view-cards"
                  className="gap-1 px-2"
                >
                  <LayoutGrid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === "table" ? "secondary" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("table")}
                  data-testid="button-view-table"
                  className="gap-1 px-2"
                >
                  <Table className="w-4 h-4" />
                </Button>
              </div>
              <ThemeToggle />
            </div>
            
            {/* Row 3: Everything else */}
            <div className="text-center space-y-1">
              <p className="text-sm text-muted-foreground" data-testid="text-event-date">
                19 Oct 2025
              </p>
              <p className="text-sm text-muted-foreground" data-testid="text-page-subtitle">
                {bands.length} bands • {totalSongs} songs • {totalDuration}
              </p>
            </div>
          </div>

          {/* Desktop layout */}
          <div className="hidden sm:flex items-start justify-between gap-4 mb-4">
            <div className="min-w-0 flex-1">
              <h1 className="text-3xl md:text-4xl font-bold mb-2" data-testid="text-page-title">
                Mega Jam Batumi
              </h1>
              <p className="text-base text-muted-foreground mb-1" data-testid="text-event-date">
                19 Oct 2025
              </p>
              <p className="text-base text-muted-foreground" data-testid="text-page-subtitle">
                {bands.length} bands performing • {totalSongs} songs • {totalDuration}
              </p>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <div className="flex items-center gap-1 bg-muted rounded-lg p-1">
                <Button
                  variant={viewMode === "cards" ? "secondary" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("cards")}
                  data-testid="button-view-cards"
                  className="gap-2 px-3"
                >
                  <LayoutGrid className="w-4 h-4" />
                  <span>Cards</span>
                </Button>
                <Button
                  variant={viewMode === "table" ? "secondary" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("table")}
                  data-testid="button-view-table"
                  className="gap-2 px-3"
                >
                  <Table className="w-4 h-4" />
                  <span>Table</span>
                </Button>
              </div>
              <ThemeToggle />
            </div>
          </div>
        </header>

        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <div className="text-center">
              <div className="text-lg text-muted-foreground">Loading bands...</div>
            </div>
          </div>
        ) : viewMode === "cards" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {bands.map((band, index) => {
              const bandSongs = songs.filter(s => s.bandId === band.id);
              const backgroundImage = getBandBackgroundImage(band.id);
              const bandDurationSeconds = bandSongs.reduce((acc, song) => acc + parseDuration(song.duration), 0);
              const bandDuration = formatDuration(Math.floor(bandDurationSeconds / 60));
              
              return (
                <BandCard
                  key={band.id}
                  band={band}
                  songCount={bandSongs.length}
                  totalDuration={bandDuration}
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
