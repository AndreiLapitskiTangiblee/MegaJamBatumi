import BandCard from '../BandCard';

export default function BandCardExample() {
  return (
    <BandCard
      band={{
        id: "misha-pavlov",
        name: "Миша Павлов",
        formed: 2015,
        genre: "Indie Rock, Alternative",
        origin: "Moscow, Russia",
        description: "Contemporary indie sound with poetic Russian lyrics"
      }}
      songCount={5}
      onClick={() => console.log('Band card clicked')}
    />
  );
}
