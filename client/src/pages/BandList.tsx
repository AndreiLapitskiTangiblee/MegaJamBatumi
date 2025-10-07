import { useState } from "react";
import { bands, getSongsByBandId } from "@/data/bands";
import BandCard from "@/components/BandCard";
import SongsTable from "@/components/SongsTable";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { LayoutGrid, Table } from "lucide-react";

export default function BandList() {
  const [, setLocation] = useLocation();
  const [viewMode, setViewMode] = useState<"cards" | "table">("cards");

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <header className="mb-8">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <h1 className="text-4xl font-bold mb-2" data-testid="text-page-title">
                Rock Bands ({bands.length})
              </h1>
              <p className="text-muted-foreground" data-testid="text-page-subtitle">
                Explore legendary rock bands and their iconic songs
              </p>
            </div>
            <div className="flex items-center gap-2 bg-muted rounded-lg p-1">
              <Button
                variant={viewMode === "cards" ? "secondary" : "ghost"}
                size="sm"
                onClick={() => setViewMode("cards")}
                data-testid="button-view-cards"
                className="gap-2"
              >
                <LayoutGrid className="w-4 h-4" />
                Cards
              </Button>
              <Button
                variant={viewMode === "table" ? "secondary" : "ghost"}
                size="sm"
                onClick={() => setViewMode("table")}
                data-testid="button-view-table"
                className="gap-2"
              >
                <Table className="w-4 h-4" />
                Table
              </Button>
            </div>
          </div>
        </header>

        {viewMode === "cards" ? (
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
        ) : (
          <SongsTable />
        )}
      </div>
    </div>
  );
}
