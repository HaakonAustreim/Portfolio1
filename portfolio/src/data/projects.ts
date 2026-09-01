import type { Project } from "../types";

// Add one object per project. Copy the shape below — `tags` and the two
// URLs are optional-ish (liveUrl/repoUrl can be left out if you don't have
// one yet, but keep `id`, `title`, `description`, `tags`).
export const projects: Project[] = [
  {
    id: "project-1",
    title: "Lokal AI",
    description:
      "Lokal AI bot, knyttet til en lokal nettside via LM Studio.",
    tags: ["LMStudio"],
    repoUrl: "https://github.com/your-username/repo-name",
  },
];
