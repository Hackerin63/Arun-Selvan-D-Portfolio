import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/BrandIcons";
import type { Project } from "@/data/projects";

export function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!project) return;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[90] flex items-end sm:items-center justify-center p-0 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
        >
          <button
            aria-label="Close project details"
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-default"
          />
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-t-2xl sm:rounded-2xl border border-border bg-bg-raised p-6 sm:p-8"
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <span className="font-mono-label text-xs text-accent">{project.status}</span>
                <h3 id="project-modal-title" className="mt-1 text-2xl font-semibold tracking-tight">
                  {project.title}
                </h3>
              </div>
              <button
                ref={closeRef}
                onClick={onClose}
                aria-label="Close"
                className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-border text-text-soft hover:text-text cursor-pointer"
              >
                <X size={16} />
              </button>
            </div>

            <div className="space-y-5 text-sm leading-relaxed">
              <Field label="Overview" value={project.summary} />
              <Field label="Problem" value={project.problem} />
              <Field label="Solution" value={project.solution} />
              <Field label="Architecture" value={project.architecture} />
              <div>
                <p className="font-mono-label text-xs text-text-faint mb-2">Technologies</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="rounded-full border border-border px-2.5 py-1 font-mono-label text-[11px] text-signal">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="font-mono-label text-xs text-text-faint mb-2">Key features</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5">
                  {project.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-text-soft">
                      <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <Field label="Challenges" value={project.challenges} />
              <Field label="Results" value={project.results} />
            </div>

            <div className="mt-7 flex flex-wrap gap-3 border-t border-border pt-5">
              {project.github && (
                <a
                  href={project.github.split(" — ")[0]}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm font-medium hover:border-border-strong"
                >
                  <GithubIcon size={14} />
                  View code
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo.split(" — ")[0]}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-sm font-medium text-[var(--accent-ink)]"
                >
                  <ExternalLink size={14} />
                  Live demo
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-mono-label text-xs text-text-faint mb-1.5">{label}</p>
      <p className="text-text-soft">{value}</p>
    </div>
  );
}
