import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/BrandIcons";
import type { Project } from "@/data/projects";

export function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: (project: Project) => void;
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="group panel panel-corners flex h-full flex-col rounded-lg p-5 transition-colors hover:border-border-strong"
    >
      <div className="mb-4 flex items-start justify-between gap-3">
        <span className="font-mono-label text-[11px] text-text-faint">{project.status}</span>
        <div className="flex gap-1.5">
          {project.categories.map((cat) => (
            <span
              key={cat}
              className="rounded-full border border-border px-2 py-0.5 font-mono-label text-[10px] text-text-soft"
            >
              {cat}
            </span>
          ))}
        </div>
      </div>

      <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
      <p className="mt-2 text-sm text-text-soft leading-relaxed line-clamp-3">{project.summary}</p>

      <div className="mt-4 flex flex-wrap items-center gap-x-1.5 gap-y-1">
        {project.technologies.slice(0, 4).map((tech, i, arr) => (
          <span key={tech} className="font-mono-label text-[11px] text-signal">
            {tech}
            {i < arr.length - 1 && <span className="text-text-faint"> ·</span>}
          </span>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
        <button
          onClick={() => onOpen(project)}
          className="inline-flex items-center gap-1 text-sm font-medium text-text transition-colors hover:text-accent cursor-pointer"
        >
          Details
          <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
        <div className="flex items-center gap-2">
          {project.github && (
            <a
              href={project.github.split(" — ")[0]}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} on GitHub`}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-text-soft transition-colors hover:text-text hover:border-border-strong"
            >
              <GithubIcon size={14} />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo.split(" — ")[0]}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} live demo`}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-text-soft transition-colors hover:text-text hover:border-border-strong"
            >
              <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
