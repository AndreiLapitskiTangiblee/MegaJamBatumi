import { bands, songs } from "@/data/bands";
import { FaYoutube } from "react-icons/fa";
import { useLocation } from "wouter";
import { getMusicianColor } from "@/data/bands";

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
            <th className="text-left p-2 sm:p-3 font-semibold sticky left-0 bg-muted/50 z-10 border-r border-border min-w-[60px]">Song</th>
            <th className="text-left p-2 sm:p-3 font-semibold min-w-[40px] border-r border-border">Tonality</th>
            <th className="text-left p-2 sm:p-3 font-semibold min-w-[40px] border-r border-border">Duration</th>
            <th className="text-center p-2 sm:p-3 font-semibold min-w-[32px] border-r border-border">YT</th>
            <th className="text-left p-2 sm:p-3 font-semibold min-w-[50px] border-r border-border">
              <div className="flex items-center gap-1 sm:gap-2">
                <span className="hidden sm:inline">{instrumentIcons.vocals}</span> Vocals
              </div>
            </th>
            <th className="text-left p-2 sm:p-3 font-semibold min-w-[50px] border-r border-border">
              <div className="flex items-center gap-1 sm:gap-2">
                <span className="hidden sm:inline">{instrumentIcons.guitar}</span> Guitar
              </div>
            </th>
            <th className="text-left p-2 sm:p-3 font-semibold min-w-[50px] border-r border-border">
              <div className="flex items-center gap-1 sm:gap-2">
                <span className="hidden sm:inline">{instrumentIcons.bass}</span> Bass
              </div>
            </th>
            <th className="text-left p-2 sm:p-3 font-semibold min-w-[50px] border-r border-border">
              <div className="flex items-center gap-1 sm:gap-2">
                <span className="hidden sm:inline">{instrumentIcons.synth}</span> Synth
              </div>
            </th>
            <th className="text-left p-2 sm:p-3 font-semibold min-w-[50px]">
              <div className="flex items-center gap-1 sm:gap-2">
                <span className="hidden sm:inline">{instrumentIcons.drums}</span> Drums
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
                  <td colSpan={9} className="p-2 sm:p-3 font-semibold sticky left-0 bg-muted/30 z-10">
                    <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                      <span className="text-base sm:text-lg">{band.name}</span>
                      <span className="text-xs sm:text-sm text-muted-foreground font-normal">
                        {band.genre}
                      </span>
                    </div>
                  </td>
                </tr>
                {bandSongs.map((song) => {
                  const getMusicianForInstrument = (instrument: string) => {
                    return song.musicians.find(m => m.instrument === instrument);
                  };

                  const shouldShowYoutubeIcon = song.title !== "? - ?" || (song.youtubeUrl && song.youtubeUrl !== "#");

                  return (
                    <tr 
                      key={song.id} 
                      className="border-b border-border hover-elevate"
                      data-testid={`row-song-${song.id}`}
                    >
                      <td className="p-2 sm:p-3 sticky left-0 bg-background z-10 border-r border-border">
                        <div className="font-medium text-sm sm:text-base">{song.title}</div>
                      </td>
                      <td className="p-2 sm:p-3 border-r border-border">
                        <span className="font-mono font-semibold text-primary text-sm sm:text-base">{song.tonality}</span>
                      </td>
                      <td className="p-2 sm:p-3 text-muted-foreground border-r border-border text-sm sm:text-base">{song.duration}</td>
                      <td className="p-2 sm:p-3 text-center border-r border-border">
                        {shouldShowYoutubeIcon && (
                          <div className="flex items-center justify-center gap-1">
                            <a
                              href={song.youtubeUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center text-red-600 dark:text-red-500 hover:text-red-700 dark:hover:text-red-400 transition-colors"
                              data-testid={`link-youtube-${song.id}`}
                              title={song.autoFoundYoutubeUrl ? "Auto-found on YouTube" : "Watch on YouTube"}
                            >
                              <FaYoutube className="w-5 h-5 sm:w-6 sm:h-6" />
                            </a>
                          </div>
                        )}
                      </td>
                      <td className="p-2 sm:p-3 border-r border-border">
                        {getMusicianForInstrument("vocals") && (
                          <button
                            onClick={() => handleMusicianClick(getMusicianForInstrument("vocals")!.name)}
                            className={`inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-medium ${instrumentColors.vocals} hover-elevate active-elevate-2 cursor-pointer transition-transform hover:scale-105 whitespace-nowrap`}
                          >
                            {getMusicianForInstrument("vocals")!.name}
                          </button>
                        )}
                      </td>
                      <td className="p-2 sm:p-3 border-r border-border">
                        {getMusicianForInstrument("guitar") && (
                          <button
                            onClick={() => handleMusicianClick(getMusicianForInstrument("guitar")!.name)}
                            className={`inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-medium ${instrumentColors.guitar} hover-elevate active-elevate-2 cursor-pointer transition-transform hover:scale-105 whitespace-nowrap`}
                          >
                            {getMusicianForInstrument("guitar")!.name}
                          </button>
                        )}
                      </td>
                      <td className="p-2 sm:p-3 border-r border-border">
                        {getMusicianForInstrument("bass") && (
                          <button
                            onClick={() => handleMusicianClick(getMusicianForInstrument("bass")!.name)}
                            className={`inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-medium ${instrumentColors.bass} hover-elevate active-elevate-2 cursor-pointer transition-transform hover:scale-105 whitespace-nowrap`}
                          >
                            {getMusicianForInstrument("bass")!.name}
                          </button>
                        )}
                      </td>
                      <td className="p-2 sm:p-3 border-r border-border">
                        {getMusicianForInstrument("synth") && (
                          <button
                            onClick={() => handleMusicianClick(getMusicianForInstrument("synth")!.name)}
                            className={`inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-medium ${instrumentColors.synth} hover-elevate active-elevate-2 cursor-pointer transition-transform hover:scale-105 whitespace-nowrap`}
                          >
                            {getMusicianForInstrument("synth")!.name}
                          </button>
                        )}
                      </td>
                      <td className="p-2 sm:p-3">
                        {getMusicianForInstrument("drums") && (
                          <button
                            onClick={() => handleMusicianClick(getMusicianForInstrument("drums")!.name)}
                            className={`inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-medium ${instrumentColors.drums} hover-elevate active-elevate-2 cursor-pointer transition-transform hover:scale-105 whitespace-nowrap`}
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
