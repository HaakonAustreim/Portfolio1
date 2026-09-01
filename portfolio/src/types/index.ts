export interface NavItem {
  id: string;
  label: string;
  /** Any component from lucide-react, e.g. Home, Folder, User. */
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  /** e.g. ["React", "Python"] — shown as small tags on the card. */
  tags: string[];
  /** Link to the live project, if there is one. Leave undefined if none yet. */
  liveUrl?: string;
  /** Link to the source code, if it's public. */
  repoUrl?: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Profile {
  name: string;
  role: string;
  summary: string;
  location: string;
  email: string;
  githubUrl: string;
  linkedinUrl: string;
}
