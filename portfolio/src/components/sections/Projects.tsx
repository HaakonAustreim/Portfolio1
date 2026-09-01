import { projects } from "../../data/projects";
import { SectionHeading } from "../ui/SectionHeading";
import { SubCard } from "../ui/SubCard";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <>
      <SectionHeading
        title="Prosjekter"
        description="Ting jeg har lagd"
      />

      {projects.length === 0 ? (
        <SubCard className="p-8 text-center text-ink-faint">
          No projects added yet — add one in src/data/projects.ts.
        </SubCard>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </>
  );
}
