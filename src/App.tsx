import { lazy, Suspense, useState } from "react";
import { ThemeProvider } from "@/lib/theme";
import { LoadingScreen } from "@/components/LoadingScreen";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Skills } from "@/sections/Skills";

const Projects = lazy(() => import("@/sections/Projects").then((m) => ({ default: m.Projects })));
const Academics = lazy(() => import("@/sections/Academics").then((m) => ({ default: m.Academics })));
const Research = lazy(() => import("@/sections/Research").then((m) => ({ default: m.Research })));
const Experience = lazy(() => import("@/sections/Experience").then((m) => ({ default: m.Experience })));
const Achievements = lazy(() => import("@/sections/Achievements").then((m) => ({ default: m.Achievements })));
const Contact = lazy(() => import("@/sections/Contact").then((m) => ({ default: m.Contact })));

function App() {
  const [booted, setBooted] = useState(false);

  return (
    <ThemeProvider>
      <LoadingScreen onDone={() => setBooted(true)} />
      <div className={`transition-opacity duration-500 ${booted ? "opacity-100" : "opacity-0"}`}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Suspense fallback={null}>
            <Projects />
            <Academics />
            <Research />
            <Experience />
            <Achievements />
            <Contact />
          </Suspense>
        </main>
        <Footer />
      </div>
      {booted && <WhatsAppButton />}
    </ThemeProvider>
  );
}

export default App;
