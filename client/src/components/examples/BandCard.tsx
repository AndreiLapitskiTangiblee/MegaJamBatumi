import BandCard from '../BandCard';

export default function BandCardExample() {
  return (
    <BandCard
      band={{
        id: "led-zeppelin",
        name: "Led Zeppelin",
        formed: 1968,
        genre: "Hard Rock, Blues Rock",
        origin: "London, England",
        description: "Pioneers of hard rock and heavy metal with legendary guitar riffs and powerful vocals"
      }}
      onClick={() => console.log('Band card clicked')}
    />
  );
}
