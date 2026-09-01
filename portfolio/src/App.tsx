import { AnimatePresence, motion } from "framer-motion";
import { Sidebar } from "./components/layout/Sidebar";
import { MobileNav } from "./components/layout/MobileNav";
import { BackgroundGlow } from "./components/layout/BackgroundGlow";
import { GlassCard } from "./components/ui/GlassCard";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Skills } from "./components/sections/Skills";
import { Contact } from "./components/sections/Contact";
import { useHashRoute } from "./hooks/useHashRoute";

const sections = {
  about: About,
  projects: Projects,
  skills: Skills,
  contact: Contact,
};

const sectionIds = Object.keys(sections);

function App() {
  const { activeId, navigate } = useHashRoute(sectionIds, "about");
  const ActiveSection = sections[activeId as keyof typeof sections];

  return (
    <div className="relative flex min-h-screen items-center justify-center p-4">
      <BackgroundGlow />

      <MobileNav activeId={activeId} onNavigate={navigate} />

      {/* Hovedbeholderen har låst høyde (85vh) for å skape app-følelsen */}
      <div className="mx-auto flex h-[85vh] w-full max-w-[1200px] items-stretch gap-6">
        <Sidebar activeId={activeId} onNavigate={navigate} />

        <main className="min-w-0 flex-1 h-full">
          {/* GlassCard fyller hele høyden og har egen scroll internt */}
          <GlassCard className="h-full overflow-y-auto p-6 md:p-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
              >
                <ActiveSection />
              </motion.div>
            </AnimatePresence>
          </GlassCard>
        </main>
      </div>
    </div>
  );
}

export default App;