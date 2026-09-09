import { motion } from "framer-motion";
import { ArrowRight, FileDown, ChevronDown } from "lucide-react";
import { BackgroundGrid } from "@/components/BackgroundGrid";
import { site, focusAreas } from "@/data/site";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

export function Hero() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-14">
      <BackgroundGrid />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1fr_360px] lg:gap-10">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-3.5 py-1.5 font-mono-label text-xs text-text-soft"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            {site.roles.join(" • ")}
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 max-w-2xl text-4xl font-semibold leading-[1.08] tracking-tight text-balance sm:text-5xl lg:text-[3.4rem]"
          >
            {site.tagline}
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-xl text-base leading-relaxed text-text-soft sm:text-lg">
            {site.intro}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
            <button
              onClick={() => scrollTo("projects")}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-[var(--accent-ink)] transition-transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              View My Work
              <ArrowRight size={15} />
            </button>
            <a
              href={site.resumePath}
              download
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium transition-colors hover:border-border-strong hover:bg-surface"
            >
              <FileDown size={15} />
              Download Resume
            </a>
            <button
              onClick={() => scrollTo("contact")}
              className="inline-flex items-center gap-2 px-2 py-3 text-sm font-medium text-text-soft transition-colors hover:text-text cursor-pointer"
            >
              Or just say hello →
            </button>
          </motion.div>

          <motion.div variants={item} className="mt-12 grid max-w-xl grid-cols-3 gap-4 border-t border-border pt-5">
            <Stat value="3+" label="Shipped projects" />
            <Stat value="8.40" label="MCA CGPA" />
            <Stat value="4+" label="Focus domains" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:block"
        >
          <div className="panel panel-corners rounded-lg p-5">
            <div className="flex items-center gap-2 border-b border-border pb-3 font-mono-label text-[11px] text-text-faint">
              <span className="h-1.5 w-1.5 rounded-full bg-success" />
              status.json
            </div>
            <dl className="mt-4 space-y-3 font-mono-label text-xs">
              <Row k="role" v={site.title} />
              <Row k="based_in" v={site.location.split(" — ")[0]} />
              <Row k="availability" v="Open to opportunities" />
              <Row k="stack" v="Java · Spring · React · Python" />
            </dl>
            <div className="mt-5 border-t border-border pt-4">
              <p className="font-mono-label text-[10px] text-text-faint mb-2">focus_areas</p>
              <div className="flex flex-wrap gap-1.5">
                {focusAreas.slice(0, 4).map((area) => (
                  <span
                    key={area}
                    className="rounded-md border border-border bg-surface-2 px-2 py-1 text-[11px] text-signal"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollTo("about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        aria-label="Scroll to about section"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1.5 text-text-faint sm:flex cursor-pointer"
      >
        <span className="font-mono-label text-[10px]">scroll</span>
        <ChevronDown size={14} className="animate-bounce" />
      </motion.button>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-mono-label text-xl text-accent">{value}</p>
      <p className="mt-1 text-xs text-text-faint">{label}</p>
    </div>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-baseline justify-between gap-3">
      <dt className="text-text-faint">{k}</dt>
      <dd className="text-right text-text-soft">{v}</dd>
    </div>
  );
}
