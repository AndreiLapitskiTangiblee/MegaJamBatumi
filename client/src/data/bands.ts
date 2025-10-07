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
  // Миша Павлов
  {
    id: "mp-1",
    bandId: "misha-pavlov",
    title: "Осенний дождь",
    album: "Первый альбом",
    year: 2016,
    duration: "4:12",
    trackNumber: 1
  },
  {
    id: "mp-2",
    bandId: "misha-pavlov",
    title: "Звёзды над городом",
    album: "Первый альбом",
    year: 2016,
    duration: "3:45",
    trackNumber: 2
  },
  {
    id: "mp-3",
    bandId: "misha-pavlov",
    title: "Тишина",
    album: "Второй путь",
    year: 2018,
    duration: "5:20",
    trackNumber: 3
  },
  {
    id: "mp-4",
    bandId: "misha-pavlov",
    title: "Ночная Москва",
    album: "Второй путь",
    year: 2018,
    duration: "4:05",
    trackNumber: 4
  },
  {
    id: "mp-5",
    bandId: "misha-pavlov",
    title: "Последний снег",
    album: "Новые горизонты",
    year: 2020,
    duration: "3:58",
    trackNumber: 5
  },
  // Вова и Лиля
  {
    id: "vl-1",
    bandId: "vova-i-lilya",
    title: "Вместе",
    album: "Наши истории",
    year: 2019,
    duration: "3:30",
    trackNumber: 1
  },
  {
    id: "vl-2",
    bandId: "vova-i-lilya",
    title: "Рассвет",
    album: "Наши истории",
    year: 2019,
    duration: "4:15",
    trackNumber: 2
  },
  {
    id: "vl-3",
    bandId: "vova-i-lilya",
    title: "Белые ночи",
    album: "Север",
    year: 2020,
    duration: "3:42",
    trackNumber: 3
  },
  {
    id: "vl-4",
    bandId: "vova-i-lilya",
    title: "Дорога домой",
    album: "Север",
    year: 2020,
    duration: "5:10",
    trackNumber: 4
  },
  {
    id: "vl-5",
    bandId: "vova-i-lilya",
    title: "Память",
    album: "Акустика",
    year: 2021,
    duration: "4:28",
    trackNumber: 5
  },
  // Skin To Bone
  {
    id: "stb-1",
    bandId: "skin-to-bone",
    title: "Burn the Sky",
    album: "Metal Dawn",
    year: 2013,
    duration: "4:50",
    trackNumber: 1
  },
  {
    id: "stb-2",
    bandId: "skin-to-bone",
    title: "Razor Edge",
    album: "Metal Dawn",
    year: 2013,
    duration: "3:55",
    trackNumber: 2
  },
  {
    id: "stb-3",
    bandId: "skin-to-bone",
    title: "Iron Will",
    album: "Unbreakable",
    year: 2015,
    duration: "5:22",
    trackNumber: 3
  },
  {
    id: "stb-4",
    bandId: "skin-to-bone",
    title: "Shadow Fighter",
    album: "Unbreakable",
    year: 2015,
    duration: "4:38",
    trackNumber: 4
  },
  {
    id: "stb-5",
    bandId: "skin-to-bone",
    title: "Final Stand",
    album: "Revolution",
    year: 2017,
    duration: "6:15",
    trackNumber: 5
  },
  // Jindiff
  {
    id: "j-1",
    bandId: "jindiff",
    title: "Echoes in the Void",
    album: "Abstract Horizons",
    year: 2017,
    duration: "6:45",
    trackNumber: 1
  },
  {
    id: "j-2",
    bandId: "jindiff",
    title: "Crystalline",
    album: "Abstract Horizons",
    year: 2017,
    duration: "5:30",
    trackNumber: 2
  },
  {
    id: "j-3",
    bandId: "jindiff",
    title: "Urban Drift",
    album: "City Lights",
    year: 2019,
    duration: "7:12",
    trackNumber: 3
  },
  {
    id: "j-4",
    bandId: "jindiff",
    title: "Neon Dreams",
    album: "City Lights",
    year: 2019,
    duration: "5:58",
    trackNumber: 4
  },
  {
    id: "j-5",
    bandId: "jindiff",
    title: "Infinite Loop",
    album: "Dimensions",
    year: 2021,
    duration: "8:20",
    trackNumber: 5
  },
  // Витя
  {
    id: "v-1",
    bandId: "vitya",
    title: "Бунт",
    album: "Первый удар",
    year: 2019,
    duration: "2:45",
    trackNumber: 1
  },
  {
    id: "v-2",
    bandId: "vitya",
    title: "На улице",
    album: "Первый удар",
    year: 2019,
    duration: "3:10",
    trackNumber: 2
  },
  {
    id: "v-3",
    bandId: "vitya",
    title: "Свобода",
    album: "Гараж",
    year: 2020,
    duration: "2:55",
    trackNumber: 3
  },
  {
    id: "v-4",
    bandId: "vitya",
    title: "Время перемен",
    album: "Гараж",
    year: 2020,
    duration: "3:25",
    trackNumber: 4
  },
  {
    id: "v-5",
    bandId: "vitya",
    title: "Молодость",
    album: "Живой звук",
    year: 2021,
    duration: "2:38",
    trackNumber: 5
  }
];

export function getBandById(id: string): Band | undefined {
  return bands.find(band => band.id === id);
}

export function getSongsByBandId(bandId: string): Song[] {
  return songs.filter(song => song.bandId === bandId);
}
