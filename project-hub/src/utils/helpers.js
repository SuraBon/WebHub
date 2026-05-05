/**
 * helpers.js — Shared utility functions
 */

/** Status → Tailwind color classes */
export const STATUS_COLORS = {
  Live: {
    bg: "bg-emerald-100 dark:bg-emerald-900/30",
    text: "text-emerald-700 dark:text-emerald-400",
    dot: "bg-emerald-500",
  },
  "In Development": {
    bg: "bg-blue-100 dark:bg-blue-900/30",
    text: "text-blue-700 dark:text-blue-400",
    dot: "bg-blue-500",
  },
  Maintenance: {
    bg: "bg-amber-100 dark:bg-amber-900/30",
    text: "text-amber-700 dark:text-amber-400",
    dot: "bg-amber-500",
  },
  Archived: {
    bg: "bg-gray-100 dark:bg-gray-800",
    text: "text-gray-500 dark:text-gray-400",
    dot: "bg-gray-400",
  },
};

/** Category → gradient for placeholder thumbnail */
export const CATEGORY_GRADIENTS = {
  "HR System":        "from-violet-500 to-purple-600",
  "Business System":  "from-blue-500 to-indigo-600",
  "Form System":      "from-cyan-500 to-teal-600",
  Dashboard:          "from-orange-500 to-amber-600",
  Website:            "from-pink-500 to-rose-600",
  Tool:               "from-green-500 to-emerald-600",
  Experiment:         "from-yellow-500 to-orange-500",
  Other:              "from-gray-500 to-slate-600",
};

/** Get initials from a project name (max 2 chars) */
export function getInitials(name = "") {
  return name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");
}

/** Format ISO date string to readable format */
export function formatDate(dateStr = "") {
  if (!dateStr) return null;
  try {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(new Date(dateStr + "T00:00:00"));
  } catch {
    return null;
  }
}

/** Validate that a string looks like a URL */
export function isValidUrl(str = "") {
  if (!str) return false;
  try {
    const url = new URL(str);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

/** Filter + sort projects based on current filter state */
export function filterAndSort(projects, { search, category, status, sort, activeTech }) {
  const q = search.trim().toLowerCase();

  let result = projects.filter((p) => {
    // Tech tag filter
    if (activeTech && !p.techStack.includes(activeTech)) return false;
    // Category filter
    if (category !== "All" && p.category !== category) return false;
    // Status filter
    if (status !== "All" && p.status !== status) return false;
    // Search
    if (q) {
      const haystack = [
        p.name,
        p.description,
        p.category,
        p.status,
        ...(p.techStack ?? []),
      ]
        .join(" ")
        .toLowerCase();
      if (!haystack.includes(q)) return false;
    }
    return true;
  });

  switch (sort) {
    case "featured":
      result = [...result].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
      break;
    case "newest":
      result = [...result].sort(
        (a, b) => new Date(b.updatedAt || 0) - new Date(a.updatedAt || 0)
      );
      break;
    case "oldest":
      result = [...result].sort(
        (a, b) => new Date(a.updatedAt || 0) - new Date(b.updatedAt || 0)
      );
      break;
    case "az":
      result = [...result].sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "za":
      result = [...result].sort((a, b) => b.name.localeCompare(a.name));
      break;
    default:
      break;
  }

  return result;
}
