import { profile } from "../../data/profile";
import { 
  SiPython, 
  SiLinux, 
  SiReact, 
  SiWireshark, 
  SiTryhackme 
} from "react-icons/si";
import { FaCompass, FaVideo } from "react-icons/fa";

export function About() {
  return (
    <div className="flex h-full flex-col justify-between">
      {/* Header med mer luft mot boksene */}
      <div className="mb-10 md:mb-12">
        <h1 className="text-3xl font-semibold text-ink md:text-4xl">
          {profile.name}
        </h1>
        <p className="mt-1.5 text-base text-ink-soft">{profile.role}</p>
      </div>

      {/* Bento-grid */}
      <div className="grid flex-1 grid-cols-1 gap-5 md:grid-cols-3">
        {/* Brikke 1: Hovedintro */}
        <div className="flex flex-col justify-between rounded-2xl border border-line bg-ink/[0.02] p-6 backdrop-blur-sm md:col-span-2">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-ink-faint">
              Om meg
            </h2>
            <p className="mt-3 text-base leading-relaxed text-ink-soft">
              Jeg er en 17 år gammel IT elev på Haugaland videregående skole
              med stor interesse for utvikling, å lage noe, cybersikkerhet, OSINT og digital etterforskning.
            </p>
          </div>
          <p className="mt-6 text-xs font-medium text-ink-faint">
            {profile.location}
          </p>
        </div>

        {/* Brikke 2: Nåværende status uden den grønne prikken */}
        <div className="flex flex-col justify-between rounded-2xl border border-line bg-ink/[0.02] p-6 backdrop-blur-sm">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-ink-faint">
            Nåværende status
          </h2>
          <div className="my-auto">
          <h3 className="text-sm font-semibold text-ink">Aktiv læring</h3>
          <p className="mt-2 text-xs leading-relaxed text-ink-soft">
          Dybdelæring i Wireshark på skole & lærer cybersecurity på TryHackMe.
          </p>
        </div>
      <span className="text-[11px] font-medium text-ink-faint">
      VG2 IT / Haugaland VGS
  </span>
</div>

        {/* Brikke 3: OSINT & Geolokalisering */}
        <div className="flex flex-col justify-between rounded-2xl border border-line bg-ink/[0.02] p-6 backdrop-blur-sm">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-ink-faint">
              Fokus & Metodikk
            </h2>
            <h3 className="mt-3 text-lg font-semibold text-ink">
              OSINT & Geolokalisering
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-ink-soft">
              Trener mønstergjenkjenning og geolokalisering gjennom GeoGuessr, og
              bruker TryHackMe til å lære etterforskningsteknikker.
            </p>
          </div>
        </div>

        {/* Brikke 4: Verktøykasse med rene logoer */}
        <div className="flex flex-col justify-between rounded-2xl border border-line bg-ink/[0.02] p-6 backdrop-blur-sm md:col-span-2">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-ink-faint">
            Verktøykasse & Interesser
          </h2>
          <div className="mt-4 flex flex-wrap gap-2.5">
            <span className="flex items-center gap-2 rounded-xl border border-line bg-white/60 px-3.5 py-2 text-xs font-medium text-ink shadow-sm">
              <SiTryhackme className="text-[#212c42]" size={15} /> TryHackMe
            </span>
            <span className="flex items-center gap-2 rounded-xl border border-line bg-white/60 px-3.5 py-2 text-xs font-medium text-ink shadow-sm">
              <FaCompass className="text-emerald-600" size={15} /> GeoGuessr
            </span>
            <span className="flex items-center gap-2 rounded-xl border border-line bg-white/60 px-3.5 py-2 text-xs font-medium text-ink shadow-sm">
              <SiPython className="text-[#3776AB]" size={15} /> Python
            </span>
            <span className="flex items-center gap-2 rounded-xl border border-line bg-white/60 px-3.5 py-2 text-xs font-medium text-ink shadow-sm">
              <SiWireshark className="text-[#1679A7]" size={15} /> Wireshark
            </span>
            <span className="flex items-center gap-2 rounded-xl border border-line bg-white/60 px-3.5 py-2 text-xs font-medium text-ink shadow-sm">
              <SiLinux className="text-black" size={15} /> Linux
            </span>
            <span className="flex items-center gap-2 rounded-xl border border-line bg-white/60 px-3.5 py-2 text-xs font-medium text-ink shadow-sm">
              <FaVideo className="text-purple-600" size={13} /> Videoredigering
            </span>
            <span className="flex items-center gap-2 rounded-xl border border-line bg-white/60 px-3.5 py-2 text-xs font-medium text-ink shadow-sm">
              <SiReact className="text-[#61DAFB]" size={15} /> React
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}