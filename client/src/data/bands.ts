import { Band, Song } from "@shared/schema";

export const bands: Band[] = [
  {
    id: "misha-pavlov",
    name: "Миша Павлов",
    formed: 2015,
    genre: "Indie Rock, Alternative",
    origin: "Moscow, Russia",
    description: "Contemporary indie sound with poetic Russian lyrics"
  },
  {
    id: "vova-i-lilya",
    name: "Вова и Лиля",
    formed: 2018,
    genre: "Folk Rock, Acoustic",
    origin: "Saint Petersburg, Russia",
    description: "Heartfelt folk melodies with intimate storytelling"
  },
  {
    id: "skin-to-bone",
    name: "Skin To Bone",
    formed: 2012,
    genre: "Hard Rock, Metal",
    origin: "Berlin, Germany",
    description: "Raw and powerful heavy rock with intense energy"
  },
  {
    id: "jindiff",
    name: "Jindiff",
    formed: 2016,
    genre: "Alternative Rock, Post-Rock",
    origin: "Prague, Czech Republic",
    description: "Atmospheric soundscapes blending alternative and experimental rock"
  },
  {
    id: "vitya",
    name: "Витя",
    formed: 2019,
    genre: "Punk Rock, Garage Rock",
    origin: "Kyiv, Ukraine",
    description: "High-energy punk with garage rock attitude"
  }
];

export const songs: Song[] = [
  // Миша Павлов - Band members: Alex, Jordan, Sam, Taylor
  {
    id: "mp-1",
    bandId: "misha-pavlov",
    title: "Осенний дождь",
    duration: "4:12",
    trackNumber: 1,
    youtubeUrl: "https://youtube.com/watch?v=dQw4w9WgXcQ",
    musicians: [
      { name: "Alex", instrument: "vocals" },
      { name: "Jordan", instrument: "guitar" },
      { name: "Sam", instrument: "bass" },
      { name: "Taylor", instrument: "drums" }
    ]
  },
  {
    id: "mp-2",
    bandId: "misha-pavlov",
    title: "Звёзды над городом",
    duration: "3:45",
    trackNumber: 2,
    youtubeUrl: "https://youtube.com/watch?v=oHg5SJYRHA0",
    musicians: [
      { name: "Alex", instrument: "vocals" },
      { name: "Jordan", instrument: "guitar" },
      { name: "Sam", instrument: "synth" }
    ]
  },
  {
    id: "mp-3",
    bandId: "misha-pavlov",
    title: "Тишина",
    duration: "5:20",
    trackNumber: 3,
    youtubeUrl: "https://youtube.com/watch?v=9bZkp7q19f0",
    musicians: [
      { name: "Alex", instrument: "vocals" },
      { name: "Jordan", instrument: "guitar" },
      { name: "Sam", instrument: "bass" },
      { name: "Taylor", instrument: "drums" },
      { name: "Morgan", instrument: "synth" }
    ]
  },
  {
    id: "mp-4",
    bandId: "misha-pavlov",
    title: "Ночная Москва",
    duration: "4:05",
    trackNumber: 4,
    youtubeUrl: "https://youtube.com/watch?v=kJQP7kiw5Fk",
    musicians: [
      { name: "Alex", instrument: "vocals" },
      { name: "Jordan", instrument: "guitar" },
      { name: "Taylor", instrument: "drums" }
    ]
  },
  {
    id: "mp-5",
    bandId: "misha-pavlov",
    title: "Последний снег",
    duration: "3:58",
    trackNumber: 5,
    youtubeUrl: "https://youtube.com/watch?v=L_jWHffIx5E",
    musicians: [
      { name: "Alex", instrument: "vocals" },
      { name: "Jordan", instrument: "guitar" },
      { name: "Sam", instrument: "bass" },
      { name: "Taylor", instrument: "drums" }
    ]
  },
  // Вова и Лиля - Band members: Morgan, Casey, Riley
  {
    id: "vl-1",
    bandId: "vova-i-lilya",
    title: "Вместе",
    duration: "3:30",
    trackNumber: 1,
    youtubeUrl: "https://youtube.com/watch?v=fJ9rUzIMcZQ",
    musicians: [
      { name: "Morgan", instrument: "vocals" },
      { name: "Casey", instrument: "guitar" },
      { name: "Riley", instrument: "bass" }
    ]
  },
  {
    id: "vl-2",
    bandId: "vova-i-lilya",
    title: "Рассвет",
    duration: "4:15",
    trackNumber: 2,
    youtubeUrl: "https://youtube.com/watch?v=YQHsXMglC9A",
    musicians: [
      { name: "Morgan", instrument: "vocals" },
      { name: "Casey", instrument: "guitar" },
      { name: "Riley", instrument: "bass" },
      { name: "Avery", instrument: "drums" }
    ]
  },
  {
    id: "vl-3",
    bandId: "vova-i-lilya",
    title: "Белые ночи",
    duration: "3:42",
    trackNumber: 3,
    youtubeUrl: "https://youtube.com/watch?v=7wtfhZwyrcc",
    musicians: [
      { name: "Morgan", instrument: "vocals" },
      { name: "Casey", instrument: "synth" },
      { name: "Riley", instrument: "bass" },
      { name: "Avery", instrument: "drums" }
    ]
  },
  {
    id: "vl-4",
    bandId: "vova-i-lilya",
    title: "Дорога домой",
    duration: "5:10",
    trackNumber: 4,
    youtubeUrl: "https://youtube.com/watch?v=2Vv-BfVoq4g",
    musicians: [
      { name: "Morgan", instrument: "vocals" },
      { name: "Casey", instrument: "guitar" },
      { name: "Riley", instrument: "bass" }
    ]
  },
  {
    id: "vl-5",
    bandId: "vova-i-lilya",
    title: "Память",
    duration: "4:28",
    trackNumber: 5,
    youtubeUrl: "https://youtube.com/watch?v=lDK9QqIzhwk",
    musicians: [
      { name: "Morgan", instrument: "vocals" },
      { name: "Casey", instrument: "guitar" },
      { name: "Riley", instrument: "bass" },
      { name: "Avery", instrument: "drums" }
    ]
  },
  // Skin To Bone - Band members: Avery, Jordan, Sam, Taylor, Riley
  {
    id: "stb-1",
    bandId: "skin-to-bone",
    title: "Burn the Sky",
    duration: "4:50",
    trackNumber: 1,
    youtubeUrl: "https://youtube.com/watch?v=hTWKbfoikeg",
    musicians: [
      { name: "Avery", instrument: "vocals" },
      { name: "Jordan", instrument: "guitar" },
      { name: "Sam", instrument: "bass" },
      { name: "Taylor", instrument: "drums" }
    ]
  },
  {
    id: "stb-2",
    bandId: "skin-to-bone",
    title: "Razor Edge",
    duration: "3:55",
    trackNumber: 2,
    youtubeUrl: "https://youtube.com/watch?v=cd-J5n7wk7E",
    musicians: [
      { name: "Avery", instrument: "vocals" },
      { name: "Jordan", instrument: "guitar" },
      { name: "Riley", instrument: "guitar" },
      { name: "Sam", instrument: "bass" },
      { name: "Taylor", instrument: "drums" }
    ]
  },
  {
    id: "stb-3",
    bandId: "skin-to-bone",
    title: "Iron Will",
    duration: "5:22",
    trackNumber: 3,
    youtubeUrl: "https://youtube.com/watch?v=nfWlot6h_JM",
    musicians: [
      { name: "Avery", instrument: "vocals" },
      { name: "Jordan", instrument: "guitar" },
      { name: "Sam", instrument: "bass" },
      { name: "Taylor", instrument: "drums" }
    ]
  },
  {
    id: "stb-4",
    bandId: "skin-to-bone",
    title: "Shadow Fighter",
    duration: "4:38",
    trackNumber: 4,
    youtubeUrl: "https://youtube.com/watch?v=uelHwf8o7_U",
    musicians: [
      { name: "Avery", instrument: "vocals" },
      { name: "Riley", instrument: "guitar" },
      { name: "Sam", instrument: "bass" },
      { name: "Taylor", instrument: "drums" }
    ]
  },
  {
    id: "stb-5",
    bandId: "skin-to-bone",
    title: "Final Stand",
    duration: "6:15",
    trackNumber: 5,
    youtubeUrl: "https://youtube.com/watch?v=5anLPw0Efmo",
    musicians: [
      { name: "Avery", instrument: "vocals" },
      { name: "Jordan", instrument: "guitar" },
      { name: "Riley", instrument: "guitar" },
      { name: "Sam", instrument: "bass" }
    ]
  },
  // Jindiff - Band members: Alex, Casey, Morgan, Taylor
  {
    id: "j-1",
    bandId: "jindiff",
    title: "Echoes in the Void",
    duration: "6:45",
    trackNumber: 1,
    youtubeUrl: "https://youtube.com/watch?v=jfKfPfyJRdk",
    musicians: [
      { name: "Alex", instrument: "guitar" },
      { name: "Casey", instrument: "synth" },
      { name: "Morgan", instrument: "bass" },
      { name: "Taylor", instrument: "drums" }
    ]
  },
  {
    id: "j-2",
    bandId: "jindiff",
    title: "Crystalline",
    duration: "5:30",
    trackNumber: 2,
    youtubeUrl: "https://youtube.com/watch?v=RgKAFK5djSk",
    musicians: [
      { name: "Alex", instrument: "vocals" },
      { name: "Casey", instrument: "synth" },
      { name: "Taylor", instrument: "drums" }
    ]
  },
  {
    id: "j-3",
    bandId: "jindiff",
    title: "Urban Drift",
    duration: "7:12",
    trackNumber: 3,
    youtubeUrl: "https://youtube.com/watch?v=Ks-_Mh1QhMc",
    musicians: [
      { name: "Alex", instrument: "guitar" },
      { name: "Casey", instrument: "synth" },
      { name: "Morgan", instrument: "bass" },
      { name: "Taylor", instrument: "drums" }
    ]
  },
  {
    id: "j-4",
    bandId: "jindiff",
    title: "Neon Dreams",
    duration: "5:58",
    trackNumber: 4,
    youtubeUrl: "https://youtube.com/watch?v=ZyhrYis509A",
    musicians: [
      { name: "Alex", instrument: "guitar" },
      { name: "Casey", instrument: "synth" },
      { name: "Morgan", instrument: "bass" },
      { name: "Taylor", instrument: "drums" }
    ]
  },
  {
    id: "j-5",
    bandId: "jindiff",
    title: "Infinite Loop",
    duration: "8:20",
    trackNumber: 5,
    youtubeUrl: "https://youtube.com/watch?v=pt8VYOfr8To",
    musicians: [
      { name: "Alex", instrument: "vocals" },
      { name: "Casey", instrument: "synth" },
      { name: "Morgan", instrument: "bass" }
    ]
  },
  // Витя - Band members: Riley, Sam, Jordan, Alex
  {
    id: "v-1",
    bandId: "vitya",
    title: "Бунт",
    duration: "2:45",
    trackNumber: 1,
    youtubeUrl: "https://youtube.com/watch?v=WfGMYdalClU",
    musicians: [
      { name: "Riley", instrument: "vocals" },
      { name: "Sam", instrument: "guitar" },
      { name: "Jordan", instrument: "bass" },
      { name: "Alex", instrument: "drums" }
    ]
  },
  {
    id: "v-2",
    bandId: "vitya",
    title: "На улице",
    duration: "3:10",
    trackNumber: 2,
    youtubeUrl: "https://youtube.com/watch?v=Soa3gO7tL-c",
    musicians: [
      { name: "Riley", instrument: "vocals" },
      { name: "Sam", instrument: "guitar" },
      { name: "Jordan", instrument: "bass" }
    ]
  },
  {
    id: "v-3",
    bandId: "vitya",
    title: "Свобода",
    duration: "2:55",
    trackNumber: 3,
    youtubeUrl: "https://youtube.com/watch?v=SQoA_wjmE9w",
    musicians: [
      { name: "Riley", instrument: "vocals" },
      { name: "Sam", instrument: "guitar" },
      { name: "Jordan", instrument: "bass" },
      { name: "Alex", instrument: "drums" }
    ]
  },
  {
    id: "v-4",
    bandId: "vitya",
    title: "Время перемен",
    duration: "3:25",
    trackNumber: 4,
    youtubeUrl: "https://youtube.com/watch?v=60ItHLz5WEA",
    musicians: [
      { name: "Riley", instrument: "vocals" },
      { name: "Sam", instrument: "guitar" },
      { name: "Jordan", instrument: "bass" },
      { name: "Morgan", instrument: "synth" },
      { name: "Alex", instrument: "drums" }
    ]
  },
  {
    id: "v-5",
    bandId: "vitya",
    title: "Молодость",
    duration: "2:38",
    trackNumber: 5,
    youtubeUrl: "https://youtube.com/watch?v=8UVNT4wvIGY",
    musicians: [
      { name: "Riley", instrument: "vocals" },
      { name: "Sam", instrument: "guitar" },
      { name: "Jordan", instrument: "bass" },
      { name: "Alex", instrument: "drums" }
    ]
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
