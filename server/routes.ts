import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

// Cache for duration lookups to avoid repeated API calls
const durationCache = new Map<string, string>();

export async function registerRoutes(app: Express): Promise<Server> {
  // MusicBrainz API endpoint for song durations
  app.get("/api/song-duration", async (req, res) => {
    const songName = req.query.song as string;
    
    if (!songName || songName.trim() === "" || songName === "? - ?") {
      return res.json({ duration: "4:00" });
    }

    // Check cache first
    if (durationCache.has(songName)) {
      return res.json({ duration: durationCache.get(songName) });
    }

    try {
      // Parse song name to extract artist and track (format: "Artist - Track")
      const parts = songName.split(' - ');
      let query = songName;
      
      if (parts.length >= 2) {
        const artist = parts[0].trim();
        const track = parts.slice(1).join(' - ').trim();
        query = `${track} AND artist:${artist}`;
      }

      // Query MusicBrainz API
      const url = `https://musicbrainz.org/ws/2/recording?query=${encodeURIComponent(query)}&fmt=json&limit=1`;
      
      const response = await fetch(url, {
        headers: {
          'User-Agent': 'MegaJamBatumi/1.0 (mega-jam-batumi@replit.com)',
          'Accept': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`MusicBrainz API error: ${response.status}`);
      }

      const data = await response.json();
      
      if (data.recordings && data.recordings.length > 0 && data.recordings[0].length) {
        const durationMs = data.recordings[0].length;
        const totalSeconds = Math.floor(durationMs / 1000);
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        const formatted = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        
        // Cache the result
        durationCache.set(songName, formatted);
        return res.json({ duration: formatted });
      }
    } catch (error) {
      console.warn(`Could not fetch duration for "${songName}":`, error);
    }

    // Default fallback
    const defaultDuration = "4:00";
    durationCache.set(songName, defaultDuration);
    return res.json({ duration: defaultDuration });
  });

  const httpServer = createServer(app);

  return httpServer;
}
