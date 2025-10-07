import { bands, songs } from "@/data/bands";
import { ExternalLink } from "lucide-react";
import { useLocation } from "wouter";

const instrumentIcons: Record<string, string> = {
  drums: "🥁",
  guitar: "🎸",
  bass: "🎸",
  synth: "🎹",
  vocals: "🎤"
};

const instrumentColors: Record<string, string> = {
  vocals: "bg-cyan-500 text-white",
  guitar: "bg-indigo-500 text-white",
  bass: "bg-violet-500 text-white",
  synth: "bg-fuchsia-500 text-white",
  drums: "bg-rose-500 text-white"
};

export default function SongsTable() {
  const [, setLocation] = useLocation();

  const handleMusicianClick = (musicianName: string) => {
    setLocation(`/musician/${encodeURIComponent(musicianName)}`);
  };

  return (
    <div className="overflow-x-auto border border-border rounded-lg">
      <table className="w-full border-collapse" data-testid="table-songs">
        <thead>
          <tr className="border-b-2 border-border bg-muted/50">
            <th className="text-left p-3 font-semibold sticky left-0 bg-muted/50 z-10 border-r border-border">Song</th>
            <th className="text-left p-3 font-semibold min-w-[100px] border-r border-border">Duration</th>
            <th className="text-center p-3 font-semibold min-w-[80px] border-r border-border">YouTube</th>
            <th className="text-left p-3 font-semibold min-w-[150px] border-r border-border">
              <div className="flex items-center gap-2">
                {instrumentIcons.vocals} Vocals
              </div>
            </th>
            <th className="text-left p-3 font-semibold min-w-[150px] border-r border-border">
              <div className="flex items-center gap-2">
                {instrumentIcons.guitar} Guitar
              </div>
            </th>
            <th className="text-left p-3 font-semibold min-w-[150px] border-r border-border">
              <div className="flex items-center gap-2">
                {instrumentIcons.bass} Bass
              </div>
            </th>
            <th className="text-left p-3 font-semibold min-w-[150px] border-r border-border">
              <div className="flex items-center gap-2">
                {instrumentIcons.synth} Synth
              </div>
            </th>
            <th className="text-left p-3 font-semibold min-w-[150px]">
              <div className="flex items-center gap-2">
                {instrumentIcons.drums} Drums
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {bands.map((band) => {
            const bandSongs = songs.filter(s => s.bandId === band.id);
            return (
              <>
                <tr key={`band-${band.id}`} className="bg-muted/30">
                  <td colSpan={8} className="p-3 font-semibold sticky left-0 bg-muted/30 z-10">
                    <div className="flex items-center gap-3">
                      <span className="text-lg">{band.name}</span>
                      <span className="text-sm text-muted-foreground font-normal">
                        {band.genre}
                      </span>
                    </div>
                  </td>
                </tr>
                {bandSongs.map((song) => {
                  const getMusicianForInstrument = (instrument: string) => {
                    return song.musicians.find(m => m.instrument === instrument);
                  };

                  return (
                    <tr 
                      key={song.id} 
                      className="border-b border-border hover-elevate"
                      data-testid={`row-song-${song.id}`}
                    >
                      <td className="p-3 sticky left-0 bg-background z-10 border-r border-border">
                        <div className="font-medium">{song.title}</div>
                      </td>
                      <td className="p-3 text-muted-foreground border-r border-border">{song.duration}</td>
                      <td className="p-3 text-center border-r border-border">
                        <a
                          href={song.youtubeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                          data-testid={`link-youtube-${song.id}`}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </td>
                      <td className="p-3 border-r border-border">
                        {getMusicianForInstrument("vocals") && (
                          <button
                            onClick={() => handleMusicianClick(getMusicianForInstrument("vocals")!.name)}
                            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-sm font-medium ${instrumentColors.vocals} hover-elevate active-elevate-2 cursor-pointer transition-transform hover:scale-105`}
                          >
                            {getMusicianForInstrument("vocals")!.name}
                          </button>
                        )}
                      </td>
                      <td className="p-3 border-r border-border">
                        {getMusicianForInstrument("guitar") && (
                          <button
                            onClick={() => handleMusicianClick(getMusicianForInstrument("guitar")!.name)}
                            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-sm font-medium ${instrumentColors.guitar} hover-elevate active-elevate-2 cursor-pointer transition-transform hover:scale-105`}
                          >
                            {getMusicianForInstrument("guitar")!.name}
                          </button>
                        )}
                      </td>
                      <td className="p-3 border-r border-border">
                        {getMusicianForInstrument("bass") && (
                          <button
                            onClick={() => handleMusicianClick(getMusicianForInstrument("bass")!.name)}
                            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-sm font-medium ${instrumentColors.bass} hover-elevate active-elevate-2 cursor-pointer transition-transform hover:scale-105`}
                          >
                            {getMusicianForInstrument("bass")!.name}
                          </button>
                        )}
                      </td>
                      <td className="p-3 border-r border-border">
                        {getMusicianForInstrument("synth") && (
                          <button
                            onClick={() => handleMusicianClick(getMusicianForInstrument("synth")!.name)}
                            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-sm font-medium ${instrumentColors.synth} hover-elevate active-elevate-2 cursor-pointer transition-transform hover:scale-105`}
                          >
                            {getMusicianForInstrument("synth")!.name}
                          </button>
                        )}
                      </td>
                      <td className="p-3">
                        {getMusicianForInstrument("drums") && (
                          <button
                            onClick={() => handleMusicianClick(getMusicianForInstrument("drums")!.name)}
                            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-sm font-medium ${instrumentColors.drums} hover-elevate active-elevate-2 cursor-pointer transition-transform hover:scale-105`}
                          >
                            {getMusicianForInstrument("drums")!.name}
                          </button>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
