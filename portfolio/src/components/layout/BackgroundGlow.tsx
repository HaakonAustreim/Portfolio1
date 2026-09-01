/**
 * Soft, blurred grey shapes sitting behind the glass panels — this is
 * what the frosted cards are actually blurring. Purely decorative, so it's
 * marked aria-hidden.
 */
export function BackgroundGlow() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute -left-24 -top-24 h-96 w-96 rounded-full bg-ink/[0.05] blur-3xl" />
      <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-ink/[0.04] blur-3xl" />
      <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-ink/[0.03] blur-3xl" />
    </div>
  );
}
