import type { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

/**
 * The frosted-glass panel used everywhere on the page — sidebar, project
 * cards, contact card. Keeping it as one component means the "look" lives
 * in one place if you want to tweak blur/opacity/radius later.
 */
export function GlassCard({ children, className = "" }: GlassCardProps) {
  return <div className={`glass-panel ${className}`}>{children}</div>;
}
