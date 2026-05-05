import { Layers, Code2, BarChart3, Wrench, FlaskConical } from "lucide-react";

const TYPES = [
  { icon: <Layers size={18} aria-hidden="true" />, label: "Web Applications", desc: "Full-featured apps built for real business use." },
  { icon: <Code2 size={18} aria-hidden="true" />, label: "Internal Systems", desc: "HR, inventory, leave, and workflow tools." },
  { icon: <BarChart3 size={18} aria-hidden="true" />, label: "Dashboards", desc: "Data visualization and reporting interfaces." },
  { icon: <Wrench size={18} aria-hidden="true" />, label: "Utility Tools", desc: "Small focused tools that solve specific problems." },
  { icon: <FlaskConical size={18} aria-hidden="true" />, label: "Experiments", desc: "Prototypes and side projects for learning." },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-900/50"
      aria-label="About section"
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-3">
              About This Hub
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-5 leading-tight">
              One place for everything I've built
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed mb-4">
              This hub collects all web applications, internal systems, dashboards, and experimental tools I have built — organized so they're easy to find and share.
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed mb-6">
              Each project is a real solution built for a real need, ranging from business automation tools to public-facing websites. I focus on clean UI, practical functionality, and maintainable code.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-xs font-medium border border-indigo-100 dark:border-indigo-700/40">
                React &amp; Vite
              </span>
              <span className="px-3 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-xs font-medium border border-indigo-100 dark:border-indigo-700/40">
                Tailwind CSS
              </span>
              <span className="px-3 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-xs font-medium border border-indigo-100 dark:border-indigo-700/40">
                Google Sheets API
              </span>
              <span className="px-3 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-xs font-medium border border-indigo-100 dark:border-indigo-700/40">
                Firebase
              </span>
              <span className="px-3 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-xs font-medium border border-indigo-100 dark:border-indigo-700/40">
                GitHub Pages
              </span>
            </div>
          </div>

          {/* Project type cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {TYPES.map((t) => (
              <div
                key={t.label}
                className="flex items-start gap-3 p-4 rounded-xl bg-white dark:bg-slate-800/60 border border-gray-200 dark:border-white/10 shadow-sm"
              >
                <span className="flex-shrink-0 w-9 h-9 rounded-lg bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                  {t.icon}
                </span>
                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">{t.label}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
