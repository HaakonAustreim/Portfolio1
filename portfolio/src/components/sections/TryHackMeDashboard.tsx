import { useEffect, useState } from "react";
import { SiTryhackme } from "react-icons/si";

interface Room {
  title: string;
  code: string;
  type?: string;
}

export function TryHackMeDashboard() {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
  setLoading(true);

  // Bruker direkte URL med brukernavnet 812 og en mer stabil proxy
  fetch("https://api.allorigins.win/get?url=" + encodeURIComponent("https://tryhackme.com/api/user/completed-rooms?username=812"))
    .then((res) => {
      if (!res.ok) throw new Error("Kunne ikke hente data fra THM");
      return res.json();
    })
    .then((data) => {
      // allorigins pakker inn responsteksten i data.contents
      const parsedData = JSON.parse(data.contents);
      console.log("THM API Data:", parsedData);

      if (Array.isArray(parsedData)) {
        setRooms(parsedData);
      } else {
        setRooms([]);
      }
      setLoading(false);
    })
    .catch((err) => {
      console.error("Feil ved henting av THM-data:", err);
      setLoading(false);
    });
}, []);

  return (
    <div className="rounded-2xl border border-line bg-ink/[0.02] p-6 backdrop-blur-sm sm:col-span-2 xl:col-span-3">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-line pb-4">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-[#212c42] p-2.5 text-white">
            <SiTryhackme size={20} />
          </div>
          <div>
            <h3 className="text-base font-semibold text-ink">
              TryHackMe & Cybersecurity Labs
            </h3>
            <p className="text-xs text-ink-soft">
              Live synkronisering av gjennomførte rom og OSINT-øvelser
            </p>
          </div>
        </div>
        <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-600">
          {rooms.length} Rom Fullført
        </span>
      </div>

      {/* Grid med rom */}
      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
        {loading ? (
          <p className="text-xs text-ink-faint">Laster inn historikk fra TryHackMe...</p>
        ) : rooms.length > 0 ? (
          rooms.slice(0, 6).map((room, index) => (
            <div
              key={room.code || index}
              className="flex items-center justify-between rounded-xl border border-line bg-white/50 p-3.5 shadow-sm transition-all hover:bg-white"
            >
              <div>
                <p className="text-xs font-semibold text-ink">{room.title}</p>
                <p className="mt-0.5 text-[10px] text-ink-faint">
                  {room.type || "Completed Room"}
                </p>
              </div>
              <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-600">
                ✓ Solved
              </span>
            </div>
          ))
        ) : (
          <p className="text-xs text-ink-faint">Ingen rom funnet enda.</p>
        )}
      </div>

      {/* Footer */}
      <div className="mt-6 flex items-center justify-between border-t border-line pt-4 text-[11px] text-ink-faint">
        <span>Kilde: tryhackme.com</span>
        <span>Automatisk oppdatert via API</span>
      </div>
    </div>
  );
}