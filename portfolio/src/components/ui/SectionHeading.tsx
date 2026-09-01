interface SectionHeadingProps {
  title: string;
  description?: string;
}

export function SectionHeading({ title, description }: SectionHeadingProps) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold text-ink">{title}</h2>
      {description && (
        <p className="mt-2 max-w-xl text-ink-soft">{description}</p>
      )}
    </div>
  );
}
