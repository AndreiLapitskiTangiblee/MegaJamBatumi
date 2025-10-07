import SongCard from '../SongCard';

export default function SongCardExample() {
  return (
    <SongCard
      song={{
        id: "mp-1",
        bandId: "misha-pavlov",
        title: "Осенний дождь",
        duration: "4:12",
        trackNumber: 1,
        youtubeUrl: "https://youtube.com/watch?v=dQw4w9WgXcQ",
        musicians: [
          { name: "Миша", instrument: "vocals" },
          { name: "Дима", instrument: "guitar" },
          { name: "Саша", instrument: "bass" },
          { name: "Игорь", instrument: "drums" }
        ]
      }}
    />
  );
}
