/**
 * projects.js — Central project data store
 *
 * To add a project: copy one object, fill in the fields, and save.
 * Fields:
 *   id          — unique slug (no spaces)
 *   name        — display name
 *   description — short description (1–2 sentences)
 *   category    — one of: Website | Business System | HR System | Form System |
 *                          Dashboard | Tool | Experiment | Other
 *   status      — Live | In Development | Maintenance | Archived
 *   url         — live URL (leave "" if not deployed)
 *   repoUrl     — GitHub repo URL (leave "" if private/none)
 *   techStack   — array of tech badge strings
 *   featured    — true = shown in Featured section
 *   updatedAt   — ISO date string "YYYY-MM-DD"
 *   thumbnail   — image URL or "" for auto-generated placeholder
 *   notes       — internal notes (not shown in UI)
 */

export const projects = [
  {
    id: "hr-system",
    name: "HR System",
    description: "Employee management, attendance tracking, and branch reporting system with real-time Google Sheets sync.",
    category: "HR System",
    status: "Live",
    url: "https://your-hr-system.example.com",
    repoUrl: "",
    techStack: ["React", "Tailwind", "Google Sheets", "Vite"],
    featured: true,
    updatedAt: "2026-05-05",
    thumbnail: "",
    notes: "Internal business tool",
  },
  {
    id: "shirt-order",
    name: "Shirt Order Web",
    description: "A shirt ordering form connected to a Google Sheets database for easy order management.",
    category: "Form System",
    status: "Live",
    url: "https://your-shirt-order.example.com",
    repoUrl: "",
    techStack: ["HTML", "CSS", "JavaScript", "Google Sheets"],
    featured: false,
    updatedAt: "2026-05-01",
    thumbnail: "",
    notes: "",
  },
  {
    id: "sales-dashboard",
    name: "Sales Dashboard",
    description: "Interactive sales analytics dashboard with charts, KPIs, and monthly trend reports.",
    category: "Dashboard",
    status: "In Development",
    url: "",
    repoUrl: "https://github.com/yourusername/sales-dashboard",
    techStack: ["React", "Recharts", "Tailwind", "Firebase"],
    featured: true,
    updatedAt: "2026-04-20",
    thumbnail: "",
    notes: "",
  },
  {
    id: "leave-request",
    name: "Leave Request System",
    description: "Employee leave request and approval workflow with email notifications and manager dashboard.",
    category: "Business System",
    status: "Live",
    url: "https://your-leave-system.example.com",
    repoUrl: "",
    techStack: ["React", "Tailwind", "Google Sheets", "Apps Script"],
    featured: false,
    updatedAt: "2026-03-15",
    thumbnail: "",
    notes: "",
  },
  {
    id: "inventory-tool",
    name: "Inventory Tracker",
    description: "Simple inventory management tool for tracking stock levels, reorder points, and supplier info.",
    category: "Tool",
    status: "Maintenance",
    url: "https://your-inventory.example.com",
    repoUrl: "",
    techStack: ["HTML", "CSS", "JavaScript", "Google Sheets"],
    featured: false,
    updatedAt: "2026-02-10",
    thumbnail: "",
    notes: "",
  },
  {
    id: "company-website",
    name: "Company Website",
    description: "Corporate landing page with service overview, team section, and contact form.",
    category: "Website",
    status: "Live",
    url: "https://your-company.example.com",
    repoUrl: "",
    techStack: ["React", "Tailwind", "Vite", "GitHub Pages"],
    featured: true,
    updatedAt: "2026-04-01",
    thumbnail: "",
    notes: "",
  },
  {
    id: "expense-tracker",
    name: "Expense Tracker",
    description: "Personal and team expense tracking app with category breakdown and monthly summaries.",
    category: "Tool",
    status: "In Development",
    url: "",
    repoUrl: "https://github.com/yourusername/expense-tracker",
    techStack: ["React", "Tailwind", "Firebase"],
    featured: false,
    updatedAt: "2026-04-28",
    thumbnail: "",
    notes: "",
  },
  {
    id: "feedback-form",
    name: "Customer Feedback Form",
    description: "Multi-step feedback form with rating system, comments, and automatic Google Sheets logging.",
    category: "Form System",
    status: "Live",
    url: "https://your-feedback.example.com",
    repoUrl: "",
    techStack: ["HTML", "CSS", "JavaScript", "Google Sheets"],
    featured: false,
    updatedAt: "2026-01-20",
    thumbnail: "",
    notes: "",
  },
  {
    id: "color-palette",
    name: "Color Palette Generator",
    description: "Generate harmonious color palettes from a base color with export to CSS variables and Tailwind config.",
    category: "Experiment",
    status: "Archived",
    url: "",
    repoUrl: "https://github.com/yourusername/color-palette",
    techStack: ["HTML", "CSS", "JavaScript"],
    featured: false,
    updatedAt: "2025-11-05",
    thumbnail: "",
    notes: "",
  },
  {
    id: "project-hub",
    name: "Project Hub",
    description: "This website — a central hub to showcase and organize all created projects and tools.",
    category: "Website",
    status: "Live",
    url: "https://yourusername.github.io/project-hub/",
    repoUrl: "https://github.com/yourusername/project-hub",
    techStack: ["React", "Tailwind", "Vite", "GitHub Pages"],
    featured: true,
    updatedAt: "2026-05-05",
    thumbnail: "",
    notes: "",
  },
];

/** All unique categories derived from project data */
export const ALL_CATEGORIES = ["All", ...Array.from(new Set(projects.map((p) => p.category))).sort()];

/** All unique statuses derived from project data */
export const ALL_STATUSES = ["All", "Live", "In Development", "Maintenance", "Archived"];

/** All unique tech tags derived from project data */
export const ALL_TECH_TAGS = Array.from(
  new Set(projects.flatMap((p) => p.techStack))
).sort();
