import { useState, useEffect } from "react";
import { Menu, X, Layers, Moon, Sun } from "lucide-react";

export default function Navbar({ dark, setDark }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Home", href: "#home" },
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNav = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-sm border-b border-gray-200/60 dark:border-white/10"
          : "bg-transparent"
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNav("#home"); }}
          className="flex items-center gap-2 font-bold text-lg text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          aria-label="Project Hub — go to home"
        >
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-600 text-white">
            <Layers size={16} aria-hidden="true" />
          </span>
          <span>Project Hub</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1" role="list">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={(e) => { e.preventDefault(); handleNav(l.href); }}
                className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div className="flex items-center gap-2">
          {/* Dark mode toggle */}
          <button
            onClick={() => setDark((d) => !d)}
            className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {dark ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
          </button>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-white/10 px-4 pb-4"
        >
          <ul className="flex flex-col gap-1 pt-2" role="list">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={(e) => { e.preventDefault(); handleNav(l.href); }}
                  className="block px-4 py-2.5 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
