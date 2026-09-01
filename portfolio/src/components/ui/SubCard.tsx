import type { ReactNode } from "react";

interface SubCardProps {
  children: ReactNode;
  className?: string;
}

/**
 * A plainer card for content that lives *inside* the main glass panel
 * (project cards, skill groups, the contact card). Skips the backdrop
 * blur since it would just be blurring another glass panel — a solid
 * tint with a hairline border reads better nested one level deep.
 */
export function SubCard({ children, className = "" }: SubCardProps) {
  return (
    <div
      className={`rounded-2xl border border-line bg-white/70 ${className}`}
    >
      {children}
    </div>
  );
}
