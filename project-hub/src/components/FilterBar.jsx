import { Search, X, SlidersHorizontal } from "lucide-react";
import { ALL_CATEGORIES, ALL_STATUSES } from "../data/projects";

const SORT_OPTIONS = [
  { value: "featured", label: "Featured First" },
  { value: "newest",   label: "Newest First" },
  { value: "oldest",   label: "Oldest First" },
  { value: "az",       label: "A → Z" },
  { value: "za",       label: "Z → A" },
];

export default function FilterBar({
  search, setSearch,
  category, setCategory,
  status, setStatus,
  sort, setSort,
  activeTech, setActiveTech,
  visibleCount, totalCount,
  onReset,
}) {
  const hasActiveFilters =
    search || category !== "All" || status !== "All" || activeTech;

  return (
    <div className="flex flex-col gap-4">
      {/* Search + Sort row */}
      <div className="flex flex-col sm:flex-row gap-3">
        {/* Search */}
        <div className="relative flex-1">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 pointer-events-none"
            aria-hidden="true"
          />
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search projects, tech, category…"
            className="w-full pl-9 pr-9 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-white/10 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-shadow"
            aria-label="Search projects"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              aria-label="Clear search"
            >
              <X size={14} aria-hidden="true" />
            </button>
          )}
        </div>

        {/* Sort */}
        <div className="relative">
          <SlidersHorizontal
            size={14}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 pointer-events-none"
            aria-hidden="true"
          />
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="pl-8 pr-8 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-white/10 text-sm text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent appearance-none cursor-pointer min-w-[160px]"
            aria-label="Sort projects"
          >
            {SORT_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Category + Status filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        {/* Category pills */}
        <div className="flex-1 overflow-x-auto">
          <div className="flex items-center gap-2 pb-1" role="group" aria-label="Filter by category">
            <span className="text-xs font-medium text-gray-500 dark:text-gray-400 whitespace-nowrap flex-shrink-0">
              Category:
            </span>
            <div className="flex gap-1.5 flex-wrap">
              {ALL_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-indigo-500 ${
                    category === cat
                      ? "bg-indigo-600 text-white shadow-sm"
                      : "bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/15"
                  }`}
                  aria-pressed={category === cat}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Status select */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <span className="text-xs font-medium text-gray-500 dark:text-gray-400 whitespace-nowrap">
            Status:
          </span>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-white/10 text-xs text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent appearance-none cursor-pointer"
            aria-label="Filter by status"
          >
            {ALL_STATUSES.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Active tech tag + result count */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-2">
          {activeTech && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-xs font-medium border border-indigo-200 dark:border-indigo-700/50">
              Tech: {activeTech}
              <button
                onClick={() => setActiveTech(null)}
                className="hover:text-indigo-900 dark:hover:text-indigo-100 transition-colors"
                aria-label={`Remove ${activeTech} tech filter`}
              >
                <X size={12} aria-hidden="true" />
              </button>
            </span>
          )}
          {hasActiveFilters && (
            <button
              onClick={onReset}
              className="text-xs text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 underline underline-offset-2 transition-colors"
              aria-label="Reset all filters"
            >
              Reset all
            </button>
          )}
        </div>

        {/* Result count */}
        <p className="text-xs text-gray-500 dark:text-gray-400" aria-live="polite" aria-atomic="true">
          Showing <strong className="text-gray-700 dark:text-gray-300">{visibleCount}</strong> of{" "}
          <strong className="text-gray-700 dark:text-gray-300">{totalCount}</strong> projects
        </p>
      </div>
    </div>
  );
}
