import { profile } from "../../data/profile";
import { GithubIcon, LinkedinIcon } from "../ui/icons";
import { navItems } from "./navItems";
import { GlassCard } from "../ui/GlassCard";

interface SidebarProps {
  activeId: string;
  onNavigate: (id: string) => void;
}

export function Sidebar({ activeId, onNavigate }: SidebarProps) {
  return (
    <aside className="hidden shrink-0 md:block md:w-64 h-full">
      {/* GlassCard settes til h-full og justify-between for å fylle høyden */}
      <GlassCard className="flex h-full flex-col justify-between p-6">
        <div>
          <div className="mb-8">
            <p className="font-display text-lg font-semibold text-ink">
              {profile.name}
            </p>
            <p className="text-sm text-ink-faint">{profile.role}</p>
          </div>

          <nav className="flex flex-col gap-1.5">
            {navItems.map(({ id, label, icon: Icon }) => {
              const isActive = activeId === id;
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => onNavigate(id)}
                  aria-current={isActive ? "page" : undefined}
                  className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "bg-ink text-white shadow-sm"
                      : "text-ink-soft hover:bg-ink/[0.06]"
                  }`}
                >
                  <Icon size={18} />
                  {label}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Sosiale lenker plasseres i bunnen */}
        <div className="flex gap-2 border-t border-line pt-5">
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-ink-soft transition-colors hover:bg-ink/[0.06]"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={profile.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-ink-soft transition-colors hover:bg-ink/[0.06]"
          >
            <LinkedinIcon size={18} />
          </a>
        </div>
      </GlassCard>
    </aside>
  );
}