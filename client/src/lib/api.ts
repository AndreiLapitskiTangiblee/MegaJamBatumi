import { Band, Song, Musician } from "@shared/schema";

const API_URL = "https://mega-jam.pages.dev/js/requests/requests.js";

interface ApiInstruments {
  backVocal: string;
  acoustic: string;
  electricGuitar: string;
  electricGuitar2: string;
  piano: string;
  bass: string;
  drums: string;
}

interface ApiSong {
  songName: string;
  link: string;
  key: string;
  comment: string;
  status: string;
  instruments: ApiInstruments;
}

interface ApiBand {
  name: string;
  id: string;
  songs: ApiSong[];
}

interface ApiResponse {
  requests: ApiBand[];
}

function createYouTubeSearchUrl(songName: string): string {
  const query = encodeURIComponent(songName);
  return `https://www.youtube.com/results?search_query=${query}`;
}

function parseMusicianFromInstrument(value: string, instrument: Musician['instrument']): Musician | null {
  if (!value || value.trim() === "") return null;
  
  // Handle cases like "? (Арт)" or "Вика (?)" - extract the name
  let name = value.trim();
  
  // Remove question marks in parentheses
  name = name.replace(/\s*\?\s*/g, '').replace(/[()]/g, '').trim();
  
  if (!name) return null;
  
  return { name, instrument };
}

function transformInstrumentsToMusicians(instruments: ApiInstruments): Musician[] {
  const musicians: Musician[] = [];
  
  const instrumentMap: Array<[keyof ApiInstruments, Musician['instrument']]> = [
    ['acoustic', 'acoustic'],
    ['electricGuitar', 'electricGuitar'],
    ['electricGuitar2', 'electricGuitar2'],
    ['piano', 'piano'],
    ['backVocal', 'backVocal'],
    ['bass', 'bass'],
    ['drums', 'drums'],
  ];
  
  for (const [apiKey, ourKey] of instrumentMap) {
    const musician = parseMusicianFromInstrument(instruments[apiKey], ourKey);
    if (musician) {
      musicians.push(musician);
    }
  }
  
  return musicians;
}

function estimateDuration(songName: string): string {
  // For unknown songs "? - ?", use 4:00
  if (songName === "? - ?" || !songName.trim()) {
    return "4:00";
  }
  
  // For known songs, estimate based on typical song length
  return "4:00";
}

export async function fetchBandsData(): Promise<{ bands: Band[], songs: Song[] }> {
  try {
    const response = await fetch(API_URL, {
      mode: 'cors',
      headers: {
        'Accept': 'application/javascript, text/javascript, */*'
      }
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const text = await response.text();
    
    // Execute the JavaScript to get the requests array
    // Replace 'export const' with 'var' so we can access it
    const executableJS = text.replace('export const requests', 'var requests');
    
    // Use Function constructor to safely execute the code
    const func = new Function(executableJS + '; return requests;');
    const apiData: ApiBand[] = func();
    
    const bands: Band[] = [];
    const songs: Song[] = [];
    
    apiData.forEach((apiBand) => {
      // Create band
      const band: Band = {
        id: apiBand.id,
        name: apiBand.name,
        genre: "Various",
        formed: 2025,
        origin: "Batumi, Georgia",
        description: "Performer at Mega Jam Batumi"
      };
      bands.push(band);
      
      // Filter and create songs (exclude empty songName, keep "? - ?")
      const validSongs = apiBand.songs.filter(s => 
        s.songName && s.songName.trim() !== ""
      );
      
      validSongs.forEach((apiSong, index) => {
        const musicians = transformInstrumentsToMusicians(apiSong.instruments);
        
        // Determine YouTube URL
        let youtubeUrl = apiSong.link || "";
        let autoFoundYoutubeUrl = false;
        
        if (!youtubeUrl && apiSong.songName !== "? - ?") {
          youtubeUrl = createYouTubeSearchUrl(apiSong.songName);
          autoFoundYoutubeUrl = true;
        }
        
        const song: Song = {
          id: `${apiBand.id}-${index + 1}`,
          bandId: apiBand.id,
          title: apiSong.songName,
          duration: estimateDuration(apiSong.songName),
          trackNumber: index + 1,
          youtubeUrl,
          tonality: apiSong.key || "-",
          musicians,
          autoFoundYoutubeUrl
        };
        
        songs.push(song);
      });
    });
    
    return { bands, songs };
  } catch (error) {
    console.error("Error fetching bands data:", error);
    throw error;
  }
}
