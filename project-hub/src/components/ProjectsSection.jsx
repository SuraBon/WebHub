import { useState, useMemo } from "react";
import { projects } from "../data/projects";
import { filterAndSort } from "../utils/helpers";
import FilterBar from "./FilterBar";
import ProjectCard from "./ProjectCard";
import EmptyState from "./EmptyState";

const DEFAULT_FILTERS = {
  search: "",
  category: "All",
  status: "All",
  sort: "featured",
  activeTech: null,
};

export default function ProjectsSection() {
  const [search, setSearch]       = useState(DEFAULT_FILTERS.search);
  const [category, setCategory]   = useState(DEFAULT_FILTERS.category);
  const [status, setStatus]       = useState(DEFAULT_FILTERS.status);
  const [sort, setSort]           = useState(DEFAULT_FILTERS.sort);
  const [activeTech, setActiveTech] = useState(DEFAULT_FILTERS.activeTech);

  const filtered = useMemo(
    () => filterAndSort(projects, { search, category, status, sort, activeTech }),
    [search, category, status, sort, activeTech]
  );

  const featuredProjects = useMemo(
    () => filtered.filter((p) => p.featured),
    [filtered]
  );
  const otherProjects = useMemo(
    () => filtered.filter((p) => !p.featured),
    [filtered]
  );

  const handleReset = () => {
    setSearch(DEFAULT_FILTERS.search);
    setCategory(DEFAULT_FILTERS.category);
    setStatus(DEFAULT_FILTERS.status);
    setSort(DEFAULT_FILTERS.sort);
    setActiveTech(DEFAULT_FILTERS.activeTech);
  };

  const hasActiveFilters =
    search || category !== "All" || status !== "All" || activeTech;

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8" aria-label="Projects section">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-3">
            All Projects
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-base max-w-xl">
            Browse, search, and filter through everything I've built.
          </p>
        </div>

        {/* Filter bar */}
        <div className="mb-8">
          <FilterBar
            search={search} setSearch={setSearch}
            category={category} setCategory={setCategory}
            status={status} setStatus={setStatus}
            sort={sort} setSort={setSort}
            activeTech={activeTech} setActiveTech={setActiveTech}
            visibleCount={filtered.length}
            totalCount={projects.length}
            onReset={handleReset}
          />
        </div>

        {/* Empty state */}
        {filtered.length === 0 && <EmptyState onReset={handleReset} />}

        {/* Featured section — only show when no active filters */}
        {!hasActiveFilters && featuredProjects.length > 0 && (
          <div className="mb-12">
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-5 flex items-center gap-2">
              <span className="w-4 h-px bg-gray-300 dark:bg-gray-600" aria-hidden="true" />
              Featured
              <span className="w-4 h-px bg-gray-300 dark:bg-gray-600" aria-hidden="true" />
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {featuredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onTechClick={setActiveTech}
                />
              ))}
            </div>
          </div>
        )}

        {/* All / remaining projects */}
        {filtered.length > 0 && (
          <div>
            {!hasActiveFilters && otherProjects.length > 0 && (
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-5 flex items-center gap-2">
                <span className="w-4 h-px bg-gray-300 dark:bg-gray-600" aria-hidden="true" />
                All Projects
                <span className="w-4 h-px bg-gray-300 dark:bg-gray-600" aria-hidden="true" />
              </h3>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {(hasActiveFilters ? filtered : otherProjects).map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onTechClick={setActiveTech}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
