import { ExternalLink } from "lucide-react";
import { GithubIcon } from "../ui/icons";
import type { Project } from "../../types";
import { SubCard } from "../ui/SubCard";
import { Badge } from "../ui/Badge";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <SubCard className="flex flex-col p-6">
      <h3 className="text-lg font-semibold text-ink">{project.title}</h3>
      <p className="mt-2 flex-1 text-sm text-ink-soft">
        {project.description}
      </p>

      {project.tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} label={tag} />
          ))}
        </div>
      )}

      {(project.liveUrl || project.repoUrl) && (
        <div className="mt-5 flex gap-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium text-ink hover:underline"
            >
              <ExternalLink size={14} /> Live
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium text-ink-soft hover:underline"
            >
              <GithubIcon size={14} /> Code
            </a>
          )}
        </div>
      )}
    </SubCard>
  );
}
