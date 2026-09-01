import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../ui/icons";
import { profile } from "../../data/profile";
import { SectionHeading } from "../ui/SectionHeading";
import { SubCard } from "../ui/SubCard";

export function Contact() {
  return (
    <>
      <SectionHeading title="Kontakt" />

      <SubCard className="flex flex-col gap-3 p-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-medium text-ink">Get in touch</p>
          <p className="text-sm text-ink-soft">
            Feel free to reach out about internships, projects, or anything
            else.
          </p>
        </div>

        <div className="flex gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-2 rounded-xl bg-white/70 px-4 py-2 text-sm font-medium text-ink hover:bg-white/90"
          >
            <Mail size={16} /> Haakon3a@gmail.com
          </a>
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-ink-soft hover:bg-white/40"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={profile.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-ink-soft hover:bg-white/40"
          >
            <LinkedinIcon size={18} />
          </a>
        </div>
      </SubCard>
    </>
  );
}
