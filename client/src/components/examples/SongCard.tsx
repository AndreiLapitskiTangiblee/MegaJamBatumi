import SongCard from '../SongCard';

export default function SongCardExample() {
  return (
    <SongCard
      song={{
        id: "lz-1",
        bandId: "led-zeppelin",
        title: "Stairway to Heaven",
        album: "Led Zeppelin IV",
        year: 1971,
        duration: "8:02",
        trackNumber: 1
      }}
    />
  );
}
