import { Band, Song } from "@shared/schema";

export const bands: Band[] = [
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
    id: "7",
    name: "Миша Павлов",
    genre: "Singer-Songwriter",
    formed: 2020,
    origin: "Batumi, Georgia",
    description: "Solo acoustic performer"
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
    id: "9",
    name: "Давут",
    genre: "Alternative Rock",
    formed: 2023,
    origin: "Batumi, Georgia",
    description: "Skin To Bone original music"
  },
  {
    id: "10",
    name: "Jindiff",
    genre: "Various",
    formed: 2023,
    origin: "Batumi, Georgia",
    description: "Performer"
  },
  {
    id: "11",
    name: "Витя",
    genre: "Various",
    formed: 2023,
    origin: "Batumi, Georgia",
    description: "Performer"
  },
  {
    id: "12",
    name: "Маша",
    genre: "Metal / Hard Rock",
    formed: 2023,
    origin: "Batumi, Georgia",
    description: "80s metal and rock classics"
  },
  {
    id: "13",
    name: "Баржулька",
    genre: "Various",
    formed: 2023,
    origin: "Batumi, Georgia",
    description: "Performer"
  },
  {
    id: "14",
    name: "Кир",
    genre: "Various",
    formed: 2023,
    origin: "Batumi, Georgia",
    description: "Performer"
  },
  {
    id: "15",
    name: "Котoff",
    genre: "Various",
    formed: 2023,
    origin: "Batumi, Georgia",
    description: "Performer"
  },
  {
    id: "16",
    name: "Сергей Клевер",
    genre: "Various",
    formed: 2023,
    origin: "Batumi, Georgia",
    description: "Performer"
  },
  {
    id: "17",
    name: "Алина",
    genre: "Various",
    formed: 2023,
    origin: "Batumi, Georgia",
    description: "Performer"
  },
  {
    id: "18",
    name: "Mikhail",
    genre: "Blues / Rock",
    formed: 2023,
    origin: "Batumi, Georgia",
    description: "Classic rock and blues covers"
  },
  {
    id: "19",
    name: "Ира",
    genre: "Various",
    formed: 2023,
    origin: "Batumi, Georgia",
    description: "Performer"
  },
  {
    id: "20",
    name: "Сергей",
    genre: "Various",
    formed: 2023,
    origin: "Batumi, Georgia",
    description: "Performer"
  },
  {
    id: "21",
    name: "Олег",
    genre: "Various",
    formed: 2023,
    origin: "Batumi, Georgia",
    description: "Performer"
  }
];

export const songs: Song[] = [
  // Варя (id: 1) - 1 song
  {
    id: "1-1",
    bandId: "1",
    trackNumber: 1,
    title: "? - ?",
    duration: "3:00",
    youtubeUrl: "#",
    tonality: "-",
    musicians: [
      { name: "Арт", instrument: "synth" }
    ]
  },

  // Артем (id: 2) - 1 song
  {
    id: "2-1",
    bandId: "2",
    trackNumber: 1,
    title: "? - ?",
    duration: "3:00",
    youtubeUrl: "#",
    tonality: "-",
    musicians: [
      { name: "Арт", instrument: "synth" }
    ]
  },

  // Alexa (id: 3) - 5 songs
  {
    id: "3-1",
    bandId: "3",
    trackNumber: 1,
    title: "? - ?",
    duration: "3:00",
    youtubeUrl: "#",
    tonality: "-",
    musicians: []
  },
  {
    id: "3-2",
    bandId: "3",
    trackNumber: 2,
    title: "? - ?",
    duration: "3:00",
    youtubeUrl: "#",
    tonality: "-",
    musicians: []
  },
  {
    id: "3-3",
    bandId: "3",
    trackNumber: 3,
    title: "? - ?",
    duration: "3:00",
    youtubeUrl: "#",
    tonality: "-",
    musicians: []
  },
  {
    id: "3-4",
    bandId: "3",
    trackNumber: 4,
    title: "? - ?",
    duration: "3:00",
    youtubeUrl: "#",
    tonality: "-",
    musicians: []
  },
  {
    id: "3-5",
    bandId: "3",
    trackNumber: 5,
    title: "? - ?",
    duration: "3:00",
    youtubeUrl: "#",
    tonality: "-",
    musicians: []
  },

  // Vladimir J (id: 4) - 5 songs
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

  // Лиля (id: 5) - 1 song
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

  // Ivan T. (id: 6) - 5 songs
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

  // Миша Павлов (id: 7) - 5 songs
  {
    id: "7-1",
    bandId: "7",
    trackNumber: 1,
    title: "Миша Павлов - Батоно Батуми",
    duration: "3:30",
    youtubeUrl: "#",
    tonality: "-",
    musicians: [
      { name: "Миша Павлов", instrument: "vocals" },
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
      { name: "Миша Павлов", instrument: "vocals" },
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
      { name: "Миша Павлов", instrument: "vocals" },
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
      { name: "Миша Павлов", instrument: "vocals" },
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
      { name: "Миша Павлов", instrument: "vocals" },
      { name: "Миша Павлов", instrument: "guitar" }
    ]
  },

  // Lera Rawlick (id: 8) - 5 songs
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
  {
    id: "8-3",
    bandId: "8",
    trackNumber: 3,
    title: "Beth Hart - Your Heart Is As Black As Night",
    duration: "4:15",
    youtubeUrl: "#",
    tonality: "Cm",
    musicians: [
      { name: "Lera Rawlick", instrument: "vocals" },
      { name: "Mikhail", instrument: "guitar" },
      { name: "Арт", instrument: "synth" },
      { name: "Вика", instrument: "bass" },
      { name: "Миша", instrument: "drums" }
    ]
  },
  {
    id: "8-4",
    bandId: "8",
    trackNumber: 4,
    title: "Ray Charles - Hit The Road Jack",
    duration: "2:00",
    youtubeUrl: "#",
    tonality: "Am",
    musicians: [
      { name: "Lera Rawlick", instrument: "vocals" },
      { name: "Mikhail", instrument: "guitar" },
      { name: "Арт", instrument: "synth" },
      { name: "Вика", instrument: "bass" },
      { name: "Миша", instrument: "drums" }
    ]
  },
  {
    id: "8-5",
    bandId: "8",
    trackNumber: 5,
    title: "Beatles - Let It Be",
    duration: "4:03",
    youtubeUrl: "#",
    tonality: "C",
    musicians: [
      { name: "Lera Rawlick", instrument: "vocals" },
      { name: "Mikhail", instrument: "guitar" },
      { name: "Арт", instrument: "synth" },
      { name: "Вика", instrument: "bass" },
      { name: "Миша", instrument: "drums" }
    ]
  },

  // Давут (id: 9) - 5 songs
  {
    id: "9-1",
    bandId: "9",
    trackNumber: 1,
    title: "Skin To Bone - Lost in Disguise",
    duration: "3:45",
    youtubeUrl: "#",
    tonality: "-",
    musicians: [
      { name: "Давут", instrument: "vocals" },
      { name: "Jindiff", instrument: "vocals" },
      { name: "Арсений", instrument: "guitar" },
      { name: "Аня", instrument: "bass" },
      { name: "Варя", instrument: "drums" }
    ]
  },
  {
    id: "9-2",
    bandId: "9",
    trackNumber: 2,
    title: "Skin To Bone - ICAN'TSLEEP",
    duration: "3:20",
    youtubeUrl: "#",
    tonality: "-",
    musicians: [
      { name: "Давут", instrument: "vocals" },
      { name: "Jindiff", instrument: "vocals" },
      { name: "Арсений", instrument: "guitar" },
      { name: "Аня", instrument: "bass" },
      { name: "Варя", instrument: "drums" }
    ]
  },
  {
    id: "9-3",
    bandId: "9",
    trackNumber: 3,
    title: "Skin To Bone - No Way Back",
    duration: "4:00",
    youtubeUrl: "#",
    tonality: "-",
    musicians: [
      { name: "Давут", instrument: "vocals" },
      { name: "Jindiff", instrument: "vocals" },
      { name: "Арсений", instrument: "guitar" },
      { name: "Аня", instrument: "bass" },
      { name: "Варя", instrument: "drums" }
    ]
  },
  {
    id: "9-4",
    bandId: "9",
    trackNumber: 4,
    title: "Skin To Bone - From The Ashes Of Hope",
    duration: "3:55",
    youtubeUrl: "#",
    tonality: "-",
    musicians: [
      { name: "Давут", instrument: "vocals" },
      { name: "Jindiff", instrument: "vocals" },
      { name: "Арсений", instrument: "guitar" },
      { name: "Аня", instrument: "bass" },
      { name: "Варя", instrument: "drums" }
    ]
  },
  {
    id: "9-5",
    bandId: "9",
    trackNumber: 5,
    title: "Skin To Bone - Leeches",
    duration: "3:30",
    youtubeUrl: "#",
    tonality: "-",
    musicians: [
      { name: "Давут", instrument: "vocals" },
      { name: "Jindiff", instrument: "vocals" },
      { name: "Арсений", instrument: "guitar" },
      { name: "Аня", instrument: "bass" },
      { name: "Варя", instrument: "drums" }
    ]
  },

  // Jindiff (id: 10) - 5 songs
  {
    id: "10-1",
    bandId: "10",
    trackNumber: 1,
    title: "? - ?",
    duration: "3:00",
    youtubeUrl: "#",
    tonality: "-",
    musicians: []
  },
  {
    id: "10-2",
    bandId: "10",
    trackNumber: 2,
    title: "? - ?",
    duration: "3:00",
    youtubeUrl: "#",
    tonality: "-",
    musicians: []
  },
  {
    id: "10-3",
    bandId: "10",
    trackNumber: 3,
    title: "? - ?",
    duration: "3:00",
    youtubeUrl: "#",
    tonality: "-",
    musicians: []
  },
  {
    id: "10-4",
    bandId: "10",
    trackNumber: 4,
    title: "? - ?",
    duration: "3:00",
    youtubeUrl: "#",
    tonality: "-",
    musicians: []
  },
  {
    id: "10-5",
    bandId: "10",
    trackNumber: 5,
    title: "? - ?",
    duration: "3:00",
    youtubeUrl: "#",
    tonality: "-",
    musicians: []
  },

  // Витя (id: 11) - 5 songs
  {
    id: "11-1",
    bandId: "11",
    trackNumber: 1,
    title: "? - ?",
    duration: "3:00",
    youtubeUrl: "#",
    tonality: "-",
    musicians: []
  },
  {
    id: "11-2",
    bandId: "11",
    trackNumber: 2,
    title: "? - ?",
    duration: "3:00",
    youtubeUrl: "#",
    tonality: "-",
    musicians: []
  },
  {
    id: "11-3",
    bandId: "11",
    trackNumber: 3,
    title: "? - ?",
    duration: "3:00",
    youtubeUrl: "#",
    tonality: "-",
    musicians: []
  },
  {
    id: "11-4",
    bandId: "11",
    trackNumber: 4,
    title: "? - ?",
    duration: "3:00",
    youtubeUrl: "#",
    tonality: "-",
    musicians: []
  },
  {
    id: "11-5",
    bandId: "11",
    trackNumber: 5,
    title: "? - ?",
    duration: "3:00",
    youtubeUrl: "#",
    tonality: "-",
    musicians: []
  },

  // Маша (id: 12) - 5 songs
  {
    id: "12-1",
    bandId: "12",
    trackNumber: 1,
    title: "W.A.S.P. - I Wanna Be Somebody",
    duration: "3:45",
    youtubeUrl: "https://www.youtube.com/watch?v=LA3ID178XLE",
    tonality: "-",
    musicians: [
      { name: "Маша", instrument: "vocals" },
      { name: "Иван", instrument: "guitar" },
      { name: "Илья", instrument: "bass" },
      { name: "Арт", instrument: "drums" }
    ]
  },
  {
    id: "12-2",
    bandId: "12",
    trackNumber: 2,
    title: "W.A.S.P. - Sleeping (In The Fire)",
    duration: "3:55",
    youtubeUrl: "https://www.youtube.com/watch?v=fxgX1VqnP14",
    tonality: "+1",
    musicians: [
      { name: "Маша", instrument: "vocals" },
      { name: "Jene", instrument: "guitar" },
      { name: "Иван", instrument: "guitar" },
      { name: "Илья", instrument: "bass" },
      { name: "Арт", instrument: "drums" }
    ]
  },
  {
    id: "12-3",
    bandId: "12",
    trackNumber: 3,
    title: "Skid Row - Big Guns",
    duration: "3:37",
    youtubeUrl: "https://www.youtube.com/watch?v=Bh5MzIQrkBo",
    tonality: "-",
    musicians: [
      { name: "Маша", instrument: "vocals" },
      { name: "Иван", instrument: "guitar" },
      { name: "Илья", instrument: "bass" },
      { name: "Арт", instrument: "drums" }
    ]
  },
  {
    id: "12-4",
    bandId: "12",
    trackNumber: 4,
    title: "Ария - Возьми мое сердце",
    duration: "5:15",
    youtubeUrl: "https://www.youtube.com/watch?v=MTuS78tqkkY",
    tonality: "-",
    musicians: [
      { name: "Маша", instrument: "vocals" },
      { name: "Иван", instrument: "guitar" },
      { name: "Jene", instrument: "guitar" },
      { name: "Илья", instrument: "bass" },
      { name: "Арт", instrument: "drums" }
    ]
  },
  {
    id: "12-5",
    bandId: "12",
    trackNumber: 5,
    title: "Slaughter - Get Used To It",
    duration: "3:15",
    youtubeUrl: "https://www.youtube.com/watch?v=r2ZzWL2blP0",
    tonality: "-",
    musicians: [
      { name: "Маша", instrument: "vocals" },
      { name: "Иван", instrument: "guitar" },
      { name: "Илья", instrument: "bass" },
      { name: "Арт", instrument: "drums" }
    ]
  },

  // Баржулька (id: 13) - 5 songs
  {
    id: "13-1",
    bandId: "13",
    trackNumber: 1,
    title: "? - ?",
    duration: "3:00",
    youtubeUrl: "#",
    tonality: "-",
    musicians: [
      { name: "Баржулька", instrument: "bass" }
    ]
  },
  {
    id: "13-2",
    bandId: "13",
    trackNumber: 2,
    title: "? - ?",
    duration: "3:00",
    youtubeUrl: "#",
    tonality: "-",
    musicians: [
      { name: "Баржулька", instrument: "bass" }
    ]
  },
  {
    id: "13-3",
    bandId: "13",
    trackNumber: 3,
    title: "? - ?",
    duration: "3:00",
    youtubeUrl: "#",
    tonality: "-",
    musicians: [
      { name: "Баржулька", instrument: "bass" }
    ]
  },
  {
    id: "13-4",
    bandId: "13",
    trackNumber: 4,
    title: "? - ?",
    duration: "3:00",
    youtubeUrl: "#",
    tonality: "-",
    musicians: [
      { name: "Баржулька", instrument: "bass" }
    ]
  },
  {
    id: "13-5",
    bandId: "13",
    trackNumber: 5,
    title: "? - ?",
    duration: "3:00",
    youtubeUrl: "#",
    tonality: "-",
    musicians: [
      { name: "Баржулька", instrument: "bass" }
    ]
  },

  // Кир (id: 14) - 5 songs (excluding empty songName)
  {
    id: "14-1",
    bandId: "14",
    trackNumber: 1,
    title: "? - ?",
    duration: "3:00",
    youtubeUrl: "#",
    tonality: "-",
    musicians: []
  },
  {
    id: "14-2",
    bandId: "14",
    trackNumber: 2,
    title: "? - ?",
    duration: "3:00",
    youtubeUrl: "#",
    tonality: "-",
    musicians: []
  },
  {
    id: "14-3",
    bandId: "14",
    trackNumber: 3,
    title: "? - ?",
    duration: "3:00",
    youtubeUrl: "#",
    tonality: "-",
    musicians: []
  },
  {
    id: "14-4",
    bandId: "14",
    trackNumber: 4,
    title: "? - ?",
    duration: "3:00",
    youtubeUrl: "#",
    tonality: "-",
    musicians: []
  },
  {
    id: "14-5",
    bandId: "14",
    trackNumber: 5,
    title: "? - ?",
    duration: "3:00",
    youtubeUrl: "#",
    tonality: "-",
    musicians: []
  },

  // Котoff (id: 15) - 2 songs (excluding empty songName)
  {
    id: "15-1",
    bandId: "15",
    trackNumber: 1,
    title: "? - ?",
    duration: "3:00",
    youtubeUrl: "#",
    tonality: "-",
    musicians: [
      { name: "Баржулька", instrument: "bass" }
    ]
  },
  {
    id: "15-2",
    bandId: "15",
    trackNumber: 2,
    title: "? - ?",
    duration: "3:00",
    youtubeUrl: "#",
    tonality: "-",
    musicians: [
      { name: "Баржулька", instrument: "bass" }
    ]
  },

  // Сергей Клевер (id: 16) - 5 songs
  {
    id: "16-1",
    bandId: "16",
    trackNumber: 1,
    title: "? - ?",
    duration: "3:00",
    youtubeUrl: "#",
    tonality: "-",
    musicians: []
  },
  {
    id: "16-2",
    bandId: "16",
    trackNumber: 2,
    title: "? - ?",
    duration: "3:00",
    youtubeUrl: "#",
    tonality: "-",
    musicians: []
  },
  {
    id: "16-3",
    bandId: "16",
    trackNumber: 3,
    title: "? - ?",
    duration: "3:00",
    youtubeUrl: "#",
    tonality: "-",
    musicians: []
  },
  {
    id: "16-4",
    bandId: "16",
    trackNumber: 4,
    title: "? - ?",
    duration: "3:00",
    youtubeUrl: "#",
    tonality: "-",
    musicians: []
  },
  {
    id: "16-5",
    bandId: "16",
    trackNumber: 5,
    title: "? - ?",
    duration: "3:00",
    youtubeUrl: "#",
    tonality: "-",
    musicians: []
  },

  // Алина (id: 17) - 5 songs
  {
    id: "17-1",
    bandId: "17",
    trackNumber: 1,
    title: "? - ?",
    duration: "3:00",
    youtubeUrl: "#",
    tonality: "-",
    musicians: []
  },
  {
    id: "17-2",
    bandId: "17",
    trackNumber: 2,
    title: "? - ?",
    duration: "3:00",
    youtubeUrl: "#",
    tonality: "-",
    musicians: []
  },
  {
    id: "17-3",
    bandId: "17",
    trackNumber: 3,
    title: "? - ?",
    duration: "3:00",
    youtubeUrl: "#",
    tonality: "-",
    musicians: []
  },
  {
    id: "17-4",
    bandId: "17",
    trackNumber: 4,
    title: "? - ?",
    duration: "3:00",
    youtubeUrl: "#",
    tonality: "-",
    musicians: []
  },
  {
    id: "17-5",
    bandId: "17",
    trackNumber: 5,
    title: "? - ?",
    duration: "3:00",
    youtubeUrl: "#",
    tonality: "-",
    musicians: []
  },

  // Mikhail (id: 18) - 5 songs
  {
    id: "18-1",
    bandId: "18",
    trackNumber: 1,
    title: "Gary Clark Jr. - Come Together",
    duration: "4:20",
    youtubeUrl: "#",
    tonality: "-",
    musicians: [
      { name: "Mikhail", instrument: "vocals" },
      { name: "Mikhail", instrument: "guitar" },
      { name: "Юра", instrument: "synth" },
      { name: "Вика", instrument: "bass" },
      { name: "Дима", instrument: "drums" }
    ]
  },
  {
    id: "18-2",
    bandId: "18",
    trackNumber: 2,
    title: "Pink Floyd - Another Brick In The Wall",
    duration: "3:59",
    youtubeUrl: "#",
    tonality: "-",
    musicians: [
      { name: "Mikhail", instrument: "vocals" },
      { name: "Mikhail", instrument: "guitar" },
      { name: "Юра", instrument: "synth" },
      { name: "Вика", instrument: "bass" },
      { name: "Дима", instrument: "drums" }
    ]
  },
  {
    id: "18-3",
    bandId: "18",
    trackNumber: 3,
    title: "ZZ Top - La Grange",
    duration: "3:51",
    youtubeUrl: "#",
    tonality: "-",
    musicians: [
      { name: "Mikhail", instrument: "vocals" },
      { name: "Mikhail", instrument: "guitar" },
      { name: "Юра", instrument: "synth" },
      { name: "Вика", instrument: "bass" },
      { name: "Дима", instrument: "drums" }
    ]
  },
  {
    id: "18-4",
    bandId: "18",
    trackNumber: 4,
    title: "Sting - Shape Of My Heart",
    duration: "4:38",
    youtubeUrl: "#",
    tonality: "-",
    musicians: [
      { name: "Mikhail", instrument: "vocals" },
      { name: "Mikhail", instrument: "guitar" },
      { name: "Юра", instrument: "synth" },
      { name: "Вика", instrument: "bass" },
      { name: "Дима", instrument: "drums" }
    ]
  },
  {
    id: "18-5",
    bandId: "18",
    trackNumber: 5,
    title: "Joe Cocker - You Can Leave Your Head On",
    duration: "4:23",
    youtubeUrl: "#",
    tonality: "-",
    musicians: [
      { name: "Mikhail", instrument: "vocals" },
      { name: "Mikhail", instrument: "guitar" },
      { name: "Юра", instrument: "synth" },
      { name: "Вика", instrument: "bass" },
      { name: "Дима", instrument: "drums" }
    ]
  },

  // Ира (id: 19) - 5 songs
  {
    id: "19-1",
    bandId: "19",
    trackNumber: 1,
    title: "? - ?",
    duration: "3:00",
    youtubeUrl: "#",
    tonality: "-",
    musicians: []
  },
  {
    id: "19-2",
    bandId: "19",
    trackNumber: 2,
    title: "? - ?",
    duration: "3:00",
    youtubeUrl: "#",
    tonality: "-",
    musicians: []
  },
  {
    id: "19-3",
    bandId: "19",
    trackNumber: 3,
    title: "? - ?",
    duration: "3:00",
    youtubeUrl: "#",
    tonality: "-",
    musicians: []
  },
  {
    id: "19-4",
    bandId: "19",
    trackNumber: 4,
    title: "? - ?",
    duration: "3:00",
    youtubeUrl: "#",
    tonality: "-",
    musicians: []
  },
  {
    id: "19-5",
    bandId: "19",
    trackNumber: 5,
    title: "? - ?",
    duration: "3:00",
    youtubeUrl: "#",
    tonality: "-",
    musicians: []
  },

  // Сергей (id: 20) - 5 songs
  {
    id: "20-1",
    bandId: "20",
    trackNumber: 1,
    title: "? - ?",
    duration: "3:00",
    youtubeUrl: "#",
    tonality: "-",
    musicians: [
      { name: "Сергей", instrument: "vocals" },
      { name: "Евгений", instrument: "guitar" },
      { name: "Vitaly", instrument: "bass" },
      { name: "Илья", instrument: "drums" }
    ]
  },
  {
    id: "20-2",
    bandId: "20",
    trackNumber: 2,
    title: "? - ?",
    duration: "3:00",
    youtubeUrl: "#",
    tonality: "-",
    musicians: [
      { name: "Сергей", instrument: "vocals" },
      { name: "Евгений", instrument: "guitar" },
      { name: "Vitaly", instrument: "bass" },
      { name: "Илья", instrument: "drums" }
    ]
  },
  {
    id: "20-3",
    bandId: "20",
    trackNumber: 3,
    title: "? - ?",
    duration: "3:00",
    youtubeUrl: "#",
    tonality: "-",
    musicians: [
      { name: "Сергей", instrument: "vocals" },
      { name: "Евгений", instrument: "guitar" },
      { name: "Vitaly", instrument: "bass" },
      { name: "Илья", instrument: "drums" }
    ]
  },
  {
    id: "20-4",
    bandId: "20",
    trackNumber: 4,
    title: "? - ?",
    duration: "3:00",
    youtubeUrl: "#",
    tonality: "-",
    musicians: [
      { name: "Сергей", instrument: "vocals" },
      { name: "Евгений", instrument: "guitar" },
      { name: "Vitaly", instrument: "bass" },
      { name: "Илья", instrument: "drums" }
    ]
  },
  {
    id: "20-5",
    bandId: "20",
    trackNumber: 5,
    title: "? - ?",
    duration: "3:00",
    youtubeUrl: "#",
    tonality: "-",
    musicians: [
      { name: "Сергей", instrument: "vocals" },
      { name: "Евгений", instrument: "guitar" },
      { name: "Vitaly", instrument: "bass" },
      { name: "Илья", instrument: "drums" }
    ]
  },

  // Олег (id: 21) - 5 songs
  {
    id: "21-1",
    bandId: "21",
    trackNumber: 1,
    title: "? - ?",
    duration: "3:00",
    youtubeUrl: "#",
    tonality: "-",
    musicians: []
  },
  {
    id: "21-2",
    bandId: "21",
    trackNumber: 2,
    title: "? - ?",
    duration: "3:00",
    youtubeUrl: "#",
    tonality: "-",
    musicians: []
  },
  {
    id: "21-3",
    bandId: "21",
    trackNumber: 3,
    title: "? - ?",
    duration: "3:00",
    youtubeUrl: "#",
    tonality: "-",
    musicians: []
  },
  {
    id: "21-4",
    bandId: "21",
    trackNumber: 4,
    title: "? - ?",
    duration: "3:00",
    youtubeUrl: "#",
    tonality: "-",
    musicians: []
  },
  {
    id: "21-5",
    bandId: "21",
    trackNumber: 5,
    title: "? - ?",
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
