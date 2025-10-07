import { Band, Song } from "@shared/schema";

export const bands: Band[] = [
  {
    id: "led-zeppelin",
    name: "Led Zeppelin",
    formed: 1968,
    genre: "Hard Rock, Blues Rock",
    origin: "London, England",
    description: "Pioneers of hard rock and heavy metal with legendary guitar riffs and powerful vocals"
  },
  {
    id: "pink-floyd",
    name: "Pink Floyd",
    formed: 1965,
    genre: "Progressive Rock, Psychedelic Rock",
    origin: "London, England",
    description: "Masters of atmospheric soundscapes and conceptual albums"
  },
  {
    id: "the-beatles",
    name: "The Beatles",
    formed: 1960,
    genre: "Rock, Pop",
    origin: "Liverpool, England",
    description: "The most influential band in history, revolutionizing popular music"
  },
  {
    id: "queen",
    name: "Queen",
    formed: 1970,
    genre: "Rock, Hard Rock",
    origin: "London, England",
    description: "Theatrical rock with operatic elements and unforgettable anthems"
  },
  {
    id: "the-rolling-stones",
    name: "The Rolling Stones",
    formed: 1962,
    genre: "Rock, Blues Rock",
    origin: "London, England",
    description: "The world's greatest rock and roll band with timeless blues-infused rock"
  },
  {
    id: "nirvana",
    name: "Nirvana",
    formed: 1987,
    genre: "Grunge, Alternative Rock",
    origin: "Aberdeen, Washington",
    description: "Defined the grunge era with raw energy and authentic songwriting"
  }
];

export const songs: Song[] = [
  // Led Zeppelin
  {
    id: "lz-1",
    bandId: "led-zeppelin",
    title: "Stairway to Heaven",
    album: "Led Zeppelin IV",
    year: 1971,
    duration: "8:02",
    trackNumber: 1
  },
  {
    id: "lz-2",
    bandId: "led-zeppelin",
    title: "Whole Lotta Love",
    album: "Led Zeppelin II",
    year: 1969,
    duration: "5:34",
    trackNumber: 2
  },
  {
    id: "lz-3",
    bandId: "led-zeppelin",
    title: "Kashmir",
    album: "Physical Graffiti",
    year: 1975,
    duration: "8:37",
    trackNumber: 3
  },
  {
    id: "lz-4",
    bandId: "led-zeppelin",
    title: "Black Dog",
    album: "Led Zeppelin IV",
    year: 1971,
    duration: "4:55",
    trackNumber: 4
  },
  {
    id: "lz-5",
    bandId: "led-zeppelin",
    title: "Immigrant Song",
    album: "Led Zeppelin III",
    year: 1970,
    duration: "2:26",
    trackNumber: 5
  },
  // Pink Floyd
  {
    id: "pf-1",
    bandId: "pink-floyd",
    title: "Comfortably Numb",
    album: "The Wall",
    year: 1979,
    duration: "6:23",
    trackNumber: 1
  },
  {
    id: "pf-2",
    bandId: "pink-floyd",
    title: "Wish You Were Here",
    album: "Wish You Were Here",
    year: 1975,
    duration: "5:34",
    trackNumber: 2
  },
  {
    id: "pf-3",
    bandId: "pink-floyd",
    title: "Time",
    album: "The Dark Side of the Moon",
    year: 1973,
    duration: "7:06",
    trackNumber: 3
  },
  {
    id: "pf-4",
    bandId: "pink-floyd",
    title: "Money",
    album: "The Dark Side of the Moon",
    year: 1973,
    duration: "6:23",
    trackNumber: 4
  },
  {
    id: "pf-5",
    bandId: "pink-floyd",
    title: "Another Brick in the Wall, Part 2",
    album: "The Wall",
    year: 1979,
    duration: "3:59",
    trackNumber: 5
  },
  // The Beatles
  {
    id: "tb-1",
    bandId: "the-beatles",
    title: "Hey Jude",
    album: "Hey Jude",
    year: 1968,
    duration: "7:11",
    trackNumber: 1
  },
  {
    id: "tb-2",
    bandId: "the-beatles",
    title: "Let It Be",
    album: "Let It Be",
    year: 1970,
    duration: "4:03",
    trackNumber: 2
  },
  {
    id: "tb-3",
    bandId: "the-beatles",
    title: "Come Together",
    album: "Abbey Road",
    year: 1969,
    duration: "4:20",
    trackNumber: 3
  },
  {
    id: "tb-4",
    bandId: "the-beatles",
    title: "Here Comes the Sun",
    album: "Abbey Road",
    year: 1969,
    duration: "3:05",
    trackNumber: 4
  },
  {
    id: "tb-5",
    bandId: "the-beatles",
    title: "A Day in the Life",
    album: "Sgt. Pepper's Lonely Hearts Club Band",
    year: 1967,
    duration: "5:33",
    trackNumber: 5
  },
  // Queen
  {
    id: "q-1",
    bandId: "queen",
    title: "Bohemian Rhapsody",
    album: "A Night at the Opera",
    year: 1975,
    duration: "5:55",
    trackNumber: 1
  },
  {
    id: "q-2",
    bandId: "queen",
    title: "We Will Rock You",
    album: "News of the World",
    year: 1977,
    duration: "2:02",
    trackNumber: 2
  },
  {
    id: "q-3",
    bandId: "queen",
    title: "We Are the Champions",
    album: "News of the World",
    year: 1977,
    duration: "2:59",
    trackNumber: 3
  },
  {
    id: "q-4",
    bandId: "queen",
    title: "Somebody to Love",
    album: "A Day at the Races",
    year: 1976,
    duration: "4:56",
    trackNumber: 4
  },
  {
    id: "q-5",
    bandId: "queen",
    title: "Don't Stop Me Now",
    album: "Jazz",
    year: 1978,
    duration: "3:29",
    trackNumber: 5
  },
  // The Rolling Stones
  {
    id: "rs-1",
    bandId: "the-rolling-stones",
    title: "Paint It Black",
    album: "Aftermath",
    year: 1966,
    duration: "3:22",
    trackNumber: 1
  },
  {
    id: "rs-2",
    bandId: "the-rolling-stones",
    title: "Sympathy for the Devil",
    album: "Beggars Banquet",
    year: 1968,
    duration: "6:18",
    trackNumber: 2
  },
  {
    id: "rs-3",
    bandId: "the-rolling-stones",
    title: "Gimme Shelter",
    album: "Let It Bleed",
    year: 1969,
    duration: "4:30",
    trackNumber: 3
  },
  {
    id: "rs-4",
    bandId: "the-rolling-stones",
    title: "Start Me Up",
    album: "Tattoo You",
    year: 1981,
    duration: "3:33",
    trackNumber: 4
  },
  {
    id: "rs-5",
    bandId: "the-rolling-stones",
    title: "(I Can't Get No) Satisfaction",
    album: "Out of Our Heads",
    year: 1965,
    duration: "3:43",
    trackNumber: 5
  },
  // Nirvana
  {
    id: "n-1",
    bandId: "nirvana",
    title: "Smells Like Teen Spirit",
    album: "Nevermind",
    year: 1991,
    duration: "5:01",
    trackNumber: 1
  },
  {
    id: "n-2",
    bandId: "nirvana",
    title: "Come as You Are",
    album: "Nevermind",
    year: 1991,
    duration: "3:39",
    trackNumber: 2
  },
  {
    id: "n-3",
    bandId: "nirvana",
    title: "Heart-Shaped Box",
    album: "In Utero",
    year: 1993,
    duration: "4:41",
    trackNumber: 3
  },
  {
    id: "n-4",
    bandId: "nirvana",
    title: "Lithium",
    album: "Nevermind",
    year: 1991,
    duration: "4:17",
    trackNumber: 4
  },
  {
    id: "n-5",
    bandId: "nirvana",
    title: "In Bloom",
    album: "Nevermind",
    year: 1991,
    duration: "4:14",
    trackNumber: 5
  }
];

export function getBandById(id: string): Band | undefined {
  return bands.find(band => band.id === id);
}

export function getSongsByBandId(bandId: string): Song[] {
  return songs.filter(song => song.bandId === bandId);
}
