import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";
import { site } from "@/data/site";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export function Footer() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-mono-label text-sm">
              <span className="text-accent">&gt;</span> {site.name}
            </p>
            <p className="mt-2 max-w-xs text-sm text-text-soft">
              Designed &amp; built with React, TypeScript &amp; curiosity.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-text-soft" aria-label="Footer">
            {NAV_ITEMS.map((item) => (
              <button key={item.id} onClick={() => scrollTo(item.id)} className="hover:text-text cursor-pointer">
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex gap-3">
            <a
              href={site.social.github.split(" — ")[0]}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-text-soft hover:text-text"
            >
              <GithubIcon size={15} />
            </a>
            <a
              href={site.social.linkedin.split(" — ")[0]}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-text-soft hover:text-text"
            >
              <LinkedinIcon size={15} />
            </a>
            <a
              href={site.social.email}
              aria-label="Email"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-text-soft hover:text-text"
            >
              <Mail size={15} />
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col-reverse gap-2 border-t border-border pt-6 text-xs text-text-faint sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p className="font-mono-label">Built with React · TypeScript · Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
