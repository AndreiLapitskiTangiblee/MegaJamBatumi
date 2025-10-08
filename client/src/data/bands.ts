import { Band, Song } from "@shared/schema";

export const bands: Band[] = [
  {
    id: "7",
    name: "Миша Павлов",
    genre: "Singer-Songwriter",
    formed: 2020,
    origin: "Batumi, Georgia",
    description: "Solo acoustic performer"
  },
  {
    id: "4",
    name: "Vladimir J",
    genre: "Rock / Alternative",
    formed: 2023,
    origin: "Batumi, Georgia",
    description: "Rock covers and originals"
  },
  {
    id: "5",
    name: "Лиля",
    genre: "Rock",
    formed: 2023,
    origin: "Batumi, Georgia",
    description: "Rock performer"
  },
  {
    id: "6",
    name: "Ivan T.",
    genre: "Metal / Rock",
    formed: 2023,
    origin: "Batumi, Georgia",
    description: "Heavy rock and metal covers"
  },
  {
    id: "8",
    name: "Lera Rawlick",
    genre: "Pop / Soul",
    formed: 2023,
    origin: "Batumi, Georgia",
    description: "Pop and soul performer"
  },
  {
    id: "1",
    name: "Варя",
    genre: "Various",
    formed: 2023,
    origin: "Batumi, Georgia",
    description: "Performer"
  },
  {
    id: "2",
    name: "Артем",
    genre: "Various",
    formed: 2023,
    origin: "Batumi, Georgia",
    description: "Performer"
  },
  {
    id: "3",
    name: "Alexa",
    genre: "Various",
    formed: 2023,
    origin: "Batumi, Georgia",
    description: "Performer"
  }
];

export const songs: Song[] = [
  // Миша Павлов
  {
    id: "7-1",
    bandId: "7",
    trackNumber: 1,
    title: "Миша Павлов - Батоно Батуми",
    duration: "3:30",
    youtubeUrl: "#",
    tonality: "-",
    musicians: [
      { name: "Миша Павлов", instrument: "guitar" }
    ]
  },
  {
    id: "7-2",
    bandId: "7",
    trackNumber: 2,
    title: "Миша Павлов - Поменяй у кота песок",
    duration: "3:30",
    youtubeUrl: "#",
    tonality: "-",
    musicians: [
      { name: "Миша Павлов", instrument: "guitar" }
    ]
  },
  {
    id: "7-3",
    bandId: "7",
    trackNumber: 3,
    title: "Миша Павлов - С тобой рядом",
    duration: "3:30",
    youtubeUrl: "#",
    tonality: "-",
    musicians: [
      { name: "Миша Павлов", instrument: "guitar" }
    ]
  },
  {
    id: "7-4",
    bandId: "7",
    trackNumber: 4,
    title: "Миша Павлов - Не бойся за меня",
    duration: "3:30",
    youtubeUrl: "#",
    tonality: "-",
    musicians: [
      { name: "Миша Павлов", instrument: "guitar" }
    ]
  },
  {
    id: "7-5",
    bandId: "7",
    trackNumber: 5,
    title: "Миша Павлов - Он сказал и ушел",
    duration: "3:30",
    youtubeUrl: "#",
    tonality: "-",
    musicians: [
      { name: "Миша Павлов", instrument: "guitar" }
    ]
  },

  // Vladimir J
  {
    id: "4-1",
    bandId: "4",
    trackNumber: 1,
    title: "Последняя поэма",
    duration: "4:00",
    youtubeUrl: "#",
    tonality: "-",
    musicians: [
      { name: "Vladimir J", instrument: "vocals" },
      { name: "Vladimir J", instrument: "guitar" },
      { name: "Лиля", instrument: "vocals" }
    ]
  },
  {
    id: "4-2",
    bandId: "4",
    trackNumber: 2,
    title: "Radiohead - Creep",
    duration: "3:58",
    youtubeUrl: "#",
    tonality: "-",
    musicians: [
      { name: "Vladimir J", instrument: "vocals" },
      { name: "Андрей", instrument: "guitar" },
      { name: "Иван", instrument: "guitar" },
      { name: "Вика", instrument: "bass" },
      { name: "Арт", instrument: "drums" }
    ]
  },
  {
    id: "4-3",
    bandId: "4",
    trackNumber: 3,
    title: "Конец фильма - Желтые глаза",
    duration: "4:15",
    youtubeUrl: "#",
    tonality: "-",
    musicians: [
      { name: "Vladimir J", instrument: "vocals" },
      { name: "Vladimir J", instrument: "guitar" },
      { name: "Андрей", instrument: "guitar" },
      { name: "Иван", instrument: "guitar" },
      { name: "Вася", instrument: "bass" },
      { name: "Арт", instrument: "drums" }
    ]
  },
  {
    id: "4-4",
    bandId: "4",
    trackNumber: 4,
    title: "Billy Joel - A Matter Of Trust",
    duration: "4:10",
    youtubeUrl: "#",
    tonality: "C",
    musicians: [
      { name: "Vladimir J", instrument: "vocals" },
      { name: "Андрей", instrument: "guitar" },
      { name: "Иван", instrument: "guitar" },
      { name: "Вася", instrument: "bass" },
      { name: "Миша", instrument: "drums" }
    ]
  },
  {
    id: "4-5",
    bandId: "4",
    trackNumber: 5,
    title: "Pink Floyd - Wish You Were Here",
    duration: "5:34",
    youtubeUrl: "#",
    tonality: "-",
    musicians: [
      { name: "Vladimir J", instrument: "vocals" },
      { name: "Vladimir J", instrument: "guitar" },
      { name: "Миша", instrument: "vocals" },
      { name: "Иван", instrument: "guitar" },
      { name: "Миша", instrument: "synth" },
      { name: "Вика", instrument: "bass" },
      { name: "Арт", instrument: "drums" }
    ]
  },

  // Лиля
  {
    id: "5-1",
    bandId: "5",
    trackNumber: 1,
    title: "Bon Jovi - It's My Life",
    duration: "3:44",
    youtubeUrl: "#",
    tonality: "-",
    musicians: [
      { name: "Лиля", instrument: "vocals" },
      { name: "Андрей", instrument: "guitar" },
      { name: "Иван", instrument: "guitar" },
      { name: "Миша", instrument: "synth" },
      { name: "Вика", instrument: "bass" },
      { name: "Арт", instrument: "drums" }
    ]
  },

  // Ivan T.
  {
    id: "6-1",
    bandId: "6",
    trackNumber: 1,
    title: "Metallica - Enter Sandman",
    duration: "5:31",
    youtubeUrl: "#",
    tonality: "-",
    musicians: [
      { name: "Ivan T.", instrument: "vocals" },
      { name: "Евгений", instrument: "guitar" },
      { name: "Иван", instrument: "guitar" },
      { name: "Vitaly", instrument: "bass" },
      { name: "Коля", instrument: "drums" }
    ]
  },
  {
    id: "6-2",
    bandId: "6",
    trackNumber: 2,
    title: "Three Days Grace - Animal I Have Become",
    duration: "3:51",
    youtubeUrl: "#",
    tonality: "-",
    musicians: [
      { name: "Ivan T.", instrument: "vocals" },
      { name: "Евгений", instrument: "guitar" },
      { name: "Иван", instrument: "guitar" },
      { name: "Vitaly", instrument: "bass" },
      { name: "Коля", instrument: "drums" }
    ]
  },
  {
    id: "6-3",
    bandId: "6",
    trackNumber: 3,
    title: "Mushmellow - Toxic",
    duration: "3:15",
    youtubeUrl: "#",
    tonality: "-",
    musicians: [
      { name: "Ivan T.", instrument: "vocals" },
      { name: "Евгений", instrument: "guitar" },
      { name: "Иван", instrument: "guitar" },
      { name: "Vitaly", instrument: "bass" },
      { name: "Коля", instrument: "drums" }
    ]
  },
  {
    id: "6-4",
    bandId: "6",
    trackNumber: 4,
    title: "Drowning Pool - Bodies",
    duration: "3:22",
    youtubeUrl: "#",
    tonality: "-",
    musicians: [
      { name: "Ivan T.", instrument: "vocals" },
      { name: "Евгений", instrument: "guitar" },
      { name: "Иван", instrument: "guitar" },
      { name: "Vitaly", instrument: "bass" },
      { name: "Коля", instrument: "drums" }
    ]
  },
  {
    id: "6-5",
    bandId: "6",
    trackNumber: 5,
    title: "Linkin Park - From The Inside",
    duration: "2:55",
    youtubeUrl: "#",
    tonality: "-",
    musicians: [
      { name: "Ivan T.", instrument: "vocals" },
      { name: "Евгений", instrument: "guitar" },
      { name: "Иван", instrument: "guitar" },
      { name: "Vitaly", instrument: "bass" },
      { name: "Коля", instrument: "drums" }
    ]
  },

  // Lera Rawlick
  {
    id: "8-1",
    bandId: "8",
    trackNumber: 1,
    title: "ZAZ - Je veux",
    duration: "3:30",
    youtubeUrl: "#",
    tonality: "Dm",
    musicians: [
      { name: "Lera Rawlick", instrument: "vocals" },
      { name: "Mikhail", instrument: "guitar" },
      { name: "Арт", instrument: "synth" },
      { name: "Вика", instrument: "bass" },
      { name: "Миша", instrument: "drums" }
    ]
  },
  {
    id: "8-2",
    bandId: "8",
    trackNumber: 2,
    title: "LP - Lost On You",
    duration: "4:26",
    youtubeUrl: "#",
    tonality: "Fm",
    musicians: [
      { name: "Lera Rawlick", instrument: "vocals" },
      { name: "Mikhail", instrument: "guitar" },
      { name: "Арт", instrument: "synth" },
      { name: "Вика", instrument: "bass" },
      { name: "Миша", instrument: "drums" }
    ]
  },

  // Варя - placeholder with one song
  {
    id: "1-1",
    bandId: "1",
    trackNumber: 1,
    title: "TBD",
    duration: "3:00",
    youtubeUrl: "#",
    tonality: "-",
    musicians: [
      { name: "Арт", instrument: "synth" }
    ]
  },

  // Артем - placeholder with one song
  {
    id: "2-1",
    bandId: "2",
    trackNumber: 1,
    title: "TBD",
    duration: "3:00",
    youtubeUrl: "#",
    tonality: "-",
    musicians: [
      { name: "Арт", instrument: "synth" }
    ]
  },

  // Alexa - placeholder with one song
  {
    id: "3-1",
    bandId: "3",
    trackNumber: 1,
    title: "TBD",
    duration: "3:00",
    youtubeUrl: "#",
    tonality: "-",
    musicians: []
  }
];

export function getBandById(id: string): Band | undefined {
  return bands.find(band => band.id === id);
}

export function getSongsByBandId(bandId: string): Song[] {
  return songs.filter(song => song.bandId === bandId);
}

export function getSongsByMusicianName(musicianName: string): Song[] {
  return songs.filter(song => 
    song.musicians.some(m => m.name === musicianName)
  );
}

export function getMusicianInstruments(musicianName: string): string[] {
  const musicianSongs = getSongsByMusicianName(musicianName);
  const instruments = new Set<string>();
  
  musicianSongs.forEach(song => {
    song.musicians.forEach(m => {
      if (m.name === musicianName) {
        instruments.add(m.instrument);
      }
    });
  });
  
  return Array.from(instruments);
}

export interface SongsByBand {
  band: Band;
  songs: Song[];
}

export function getSongsByMusicianGroupedByBand(musicianName: string): SongsByBand[] {
  const musicianSongs = getSongsByMusicianName(musicianName);
  const bandMap = new Map<string, Song[]>();
  
  musicianSongs.forEach(song => {
    if (!bandMap.has(song.bandId)) {
      bandMap.set(song.bandId, []);
    }
    bandMap.get(song.bandId)!.push(song);
  });
  
  const result: SongsByBand[] = [];
  bandMap.forEach((songs, bandId) => {
    const band = getBandById(bandId);
    if (band) {
      result.push({ band, songs });
    }
  });
  
  return result;
}
