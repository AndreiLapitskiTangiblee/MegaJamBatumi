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

async function fetchSongDuration(songName: string): Promise<string> {
  // For unknown songs "? - ?", use default
  if (songName === "? - ?" || !songName.trim()) {
    return "4:00";
  }

  try {
    // Use backend endpoint to fetch duration
    const response = await fetch(`/api/song-duration?song=${encodeURIComponent(songName)}`);
    
    if (response.ok) {
      const data = await response.json();
      if (data.duration) {
        return data.duration;
      }
    }
  } catch (error) {
    console.warn(`Could not fetch duration for "${songName}":`, error);
  }

  // Default fallback
  return "4:00";
}

function detectGenre(songs: ApiSong[]): string {
  // Extract all valid song names
  const songNames = songs
    .filter(s => s.songName && s.songName.trim() !== "" && s.songName !== "? - ?")
    .map(s => s.songName.toLowerCase());
  
  if (songNames.length === 0) {
    return "Various";
  }
  
  // Genre detection patterns
  const genrePatterns = [
    { keywords: ['metallica', 'three days grace', 'drowning pool', 'linkin park', 'enter sandman', 'bodies'], genre: 'Metal / Rock' },
    { keywords: ['radiohead', 'pink floyd', 'creep', 'wish you were here'], genre: 'Alternative Rock' },
    { keywords: ['bon jovi', "it's my life"], genre: 'Rock' },
    { keywords: ['billy joel'], genre: 'Rock / Pop' },
    { keywords: ['zaz', 'je veux'], genre: 'French Pop / Jazz' },
    { keywords: ['lp', 'lost on you'], genre: 'Pop / Alternative' },
    { keywords: ['jazz', 'blues'], genre: 'Jazz / Blues' },
    { keywords: ['classical', 'symphony', 'concerto'], genre: 'Classical' },
    { keywords: ['hip hop', 'rap'], genre: 'Hip Hop' },
    { keywords: ['electronic', 'edm', 'techno'], genre: 'Electronic' },
  ];
  
  // Check each pattern
  for (const pattern of genrePatterns) {
    const matched = songNames.some(name => 
      pattern.keywords.some(keyword => name.includes(keyword))
    );
    if (matched) {
      return pattern.genre;
    }
  }
  
  // Check if all songs are from the same artist (original music)
  const uniqueArtists = new Set(
    songNames
      .filter(name => name.includes(' - '))
      .map(name => name.split(' - ')[0].trim())
  );
  
  if (uniqueArtists.size === 1 && songNames.length > 2) {
    return 'Original Music';
  }
  
  return "Various";
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
    const songsPromises: Promise<Song>[] = [];
    
    apiData.forEach((apiBand) => {
      // Detect genre from songs
      const genre = detectGenre(apiBand.songs);
      const description = genre !== "Various" ? genre : "Performer";
      
      // Create band
      const band: Band = {
        id: apiBand.id,
        name: apiBand.name,
        genre: genre,
        formed: 2025,
        origin: "Batumi, Georgia",
        description: description
      };
      bands.push(band);
      
      // Filter and create songs (exclude empty songName, keep "? - ?")
      const validSongs = apiBand.songs.filter(s => 
        s.songName && s.songName.trim() !== ""
      );
      
      validSongs.forEach((apiSong, index) => {
        const songPromise = (async () => {
          const musicians = transformInstrumentsToMusicians(apiSong.instruments);
          
          // Determine YouTube URL
          let youtubeUrl = apiSong.link || "";
          let autoFoundYoutubeUrl = false;
          
          if (!youtubeUrl && apiSong.songName !== "? - ?") {
            youtubeUrl = createYouTubeSearchUrl(apiSong.songName);
            autoFoundYoutubeUrl = true;
          }
          
          // Fetch duration asynchronously
          const duration = await fetchSongDuration(apiSong.songName);
          
          const song: Song = {
            id: `${apiBand.id}-${index + 1}`,
            bandId: apiBand.id,
            title: apiSong.songName,
            duration,
            trackNumber: index + 1,
            youtubeUrl,
            tonality: apiSong.key || "-",
            musicians,
            autoFoundYoutubeUrl
          };
          
          return song;
        })();
        
        songsPromises.push(songPromise);
      });
    });
    
    // Wait for all song durations to be fetched
    const songs = await Promise.all(songsPromises);
    
    return { bands, songs };
  } catch (error) {
    console.error("Error fetching bands data:", error);
    throw error;
  }
}
