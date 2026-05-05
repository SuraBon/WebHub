import { useDarkMode } from "./hooks/useDarkMode";
import { projects } from "./data/projects";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectsSection from "./components/ProjectsSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

export default function App() {
  const [dark, setDark] = useDarkMode();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950 text-gray-900 dark:text-white transition-colors duration-300">
      <Navbar dark={dark} setDark={setDark} />

      <main>
        <Hero totalProjects={projects.length} />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
