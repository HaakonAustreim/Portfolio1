import { navItems } from "./navItems";

interface MobileNavProps {
  activeId: string;
  onNavigate: (id: string) => void;
}

/**
 * Floating rounded nav bar shown below the md breakpoint, where the
 * sidebar is hidden. Same glass styling as the rest of the page.
 */
export function MobileNav({ activeId, onNavigate }: MobileNavProps) {
  return (
    <nav className="glass-panel fixed inset-x-3 top-3 z-10 flex items-center gap-1 overflow-x-auto px-2 py-2 md:hidden">
      {navItems.map(({ id, label, icon: Icon }) => {
        const isActive = activeId === id;
        return (
          <button
            key={id}
            type="button"
            onClick={() => onNavigate(id)}
            aria-current={isActive ? "page" : undefined}
            className={`flex shrink-0 items-center gap-1.5 rounded-xl px-3 py-1.5 text-sm font-medium transition-colors duration-200 ${
              isActive ? "bg-ink text-white" : "text-ink-soft"
            }`}
          >
            <Icon size={16} />
            {label}
          </button>
        );
      })}
    </nav>
  );
}
