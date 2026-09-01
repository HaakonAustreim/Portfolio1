interface BadgeProps {
  label: string;
}

export function Badge({ label }: BadgeProps) {
  return (
    <span className="rounded-full bg-ink/[0.06] px-3 py-1 text-xs font-medium text-ink-soft">
      {label}
    </span>
  );
}
