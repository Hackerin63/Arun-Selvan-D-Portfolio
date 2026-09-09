import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, FileDown } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useActiveSection } from "@/hooks/useActiveSection";
import { site } from "@/data/site";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "academics", label: "Academics" },
  { id: "research", label: "Research" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const active = useActiveSection(NAV_ITEMS.map((i) => i.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = (id: string) => {
    setMobileOpen(false);
    // The mobile menu locks body scroll (overflow: hidden) while open. That
    // lock is normally released by the effect above, but this click handler
    // fires in the same tick as the state update, before React re-renders —
    // so the body is still locked at the instant scrollIntoView() runs,
    // which makes the browser silently ignore the scroll on mobile. Release
    // the lock immediately and defer the scroll one frame so the menu-close
    // repaint finishes first.
    document.body.style.overflow = "";
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2.5" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className={`flex items-center justify-between rounded-2xl border px-4 py-2.5 transition-all duration-300 ${
            scrolled
              ? "border-border bg-surface/70 backdrop-blur-xl shadow-[0_1px_0_0_var(--border)]"
              : "border-transparent bg-transparent"
          }`}
        >
          <button
            onClick={() => handleNavClick("home")}
            className="font-mono-label text-sm font-medium tracking-tight cursor-pointer"
            aria-label="Go to top"
          >
            <span className="text-accent">&gt;</span> {site.name}
          </button>

          <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative rounded-full px-3.5 py-1.5 text-sm transition-colors cursor-pointer ${
                  active === item.id ? "text-text" : "text-text-soft hover:text-text"
                }`}
                aria-current={active === item.id ? "true" : undefined}
              >
                {active === item.id && (
                  <motion.span
                    layoutId="nav-active-pill"
                    className="absolute inset-0 rounded-full bg-surface-2 border border-border"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative">{item.label}</span>
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            
              href={site.resumePath}
              download
              className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3.5 py-1.5 text-sm font-medium text-[var(--accent-ink)] transition-transform hover:scale-[1.03] active:scale-[0.98]"
            >
              <FileDown size={14} />
              Resume
            </a>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-text cursor-pointer"
            >
              {mobileOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden mx-4 sm:mx-6 mt-2"
          >
            <div className="rounded-2xl border border-border bg-surface/95 backdrop-blur-xl p-3">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`block w-full rounded-xl px-4 py-3 text-left text-sm cursor-pointer ${
                    active === item.id ? "bg-surface-2 text-text" : "text-text-soft"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
                href={site.resumePath}
                download
                className="mt-2 flex items-center justify-center gap-1.5 rounded-xl bg-accent px-4 py-3 text-sm font-medium text-[var(--accent-ink)]"
              >
                <FileDown size={14} />
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
  
}
