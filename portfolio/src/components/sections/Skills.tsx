import { skills } from "../../data/skills";
import { SectionHeading } from "../ui/SectionHeading";
import { SubCard } from "../ui/SubCard";
import { Badge } from "../ui/Badge";

export function Skills() {
  return (
    <>
      <SectionHeading
      title="Mestringer"
      description="Hva jeg kan"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        {skills.map((group) => (
          <SubCard key={group.category} className="p-6">
            <h3 className="text-sm font-semibold text-ink-soft">
              {group.category}
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Badge key={item} label={item} />
              ))}
            </div>
          </SubCard>
        ))}
      </div>
    </>
  );
}
