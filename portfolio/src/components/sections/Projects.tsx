import { projects } from "../../data/projects";
import { SectionHeading } from "../ui/SectionHeading";
import { SubCard } from "../ui/SubCard";
import { ProjectCard } from "./ProjectCard";
import { TryHackMeDashboard } from "./TryHackMeDashboard";

export function Projects() {
  return (
    <>
      <SectionHeading
        title="Prosjekter"
        description="Ting jeg har lagd og jobber med"
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {/* TryHackMe Live Dashboard */}
        <TryHackMeDashboard />

        {/* Manuelt lagde prosjekter fra src/data/projects.ts */}
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {projects.length === 0 && (
        <SubCard className="mt-4 p-8 text-center text-ink-faint">
          Ingen andre prosjekter lagt til ennå — legg til flere i src/data/projects.ts.
        </SubCard>
      )}
    </>
  );
}