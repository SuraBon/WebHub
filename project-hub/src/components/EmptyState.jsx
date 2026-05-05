import { SearchX } from "lucide-react";

export default function EmptyState({ onReset }) {
  return (
    <div className="flex flex-col items-center justify-center py-24 px-4 text-center">
      <div className="w-16 h-16 rounded-2xl bg-gray-100 dark:bg-white/10 flex items-center justify-center mb-5">
        <SearchX size={28} className="text-gray-400 dark:text-gray-500" aria-hidden="true" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
        No projects found
      </h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 max-w-xs mb-6">
        No projects match your current search or filters. Try adjusting your query or clearing the filters.
      </p>
      <button
        onClick={onReset}
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold transition-colors shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Reset Filters
      </button>
    </div>
  );
}
