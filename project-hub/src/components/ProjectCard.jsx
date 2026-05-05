import { ExternalLink, Globe, Copy, Check, Star, Calendar } from "lucide-react";
import { useState } from "react";
import {
  STATUS_COLORS,
  CATEGORY_GRADIENTS,
  getInitials,
  formatDate,
  isValidUrl,
} from "../utils/helpers";

export default function ProjectCard({ project, onTechClick }) {
  const [copied, setCopied] = useState(false);

  const {
    name = "Untitled",
    description = "",
    category = "Other",
    status = "Archived",
    url = "",
    repoUrl = "",
    techStack = [],
    featured = false,
    updatedAt = "",
    thumbnail = "",
  } = project;

  const statusStyle = STATUS_COLORS[status] ?? STATUS_COLORS["Archived"];
  const gradient = CATEGORY_GRADIENTS[category] ?? CATEGORY_GRADIENTS["Other"];
  const initials = getInitials(name);
  const formattedDate = formatDate(updatedAt);
  const hasUrl = isValidUrl(url);
  const hasRepo = isValidUrl(repoUrl);

  const handleCopy = async () => {
    if (!hasUrl) return;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard not available
    }
  };

  return (
    <article className="group relative flex flex-col bg-white dark:bg-slate-800/60 border border-gray-200 dark:border-white/10 rounded-2xl shadow-sm hover:shadow-xl dark:hover:shadow-black/30 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
      {/* Featured badge */}
      {featured && (
        <div className="absolute top-3 right-3 z-10">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-400 text-xs font-semibold border border-amber-200 dark:border-amber-700/50">
            <Star size={10} aria-hidden="true" />
            Featured
          </span>
        </div>
      )}

      {/* Thumbnail */}
      <div className={`relative h-36 flex-shrink-0 bg-gradient-to-br ${gradient} flex items-center justify-center overflow-hidden`}>
        {thumbnail && isValidUrl(thumbnail) ? (
          <img
            src={thumbnail}
            alt={`${name} preview`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          <span
            className="text-white/90 text-4xl font-extrabold tracking-tight select-none"
            aria-hidden="true"
          >
            {initials}
          </span>
        )}
        {/* Subtle overlay on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" aria-hidden="true" />
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        {/* Header row */}
        <div className="flex items-start justify-between gap-2">
          <h2 className="text-base font-bold text-gray-900 dark:text-white leading-snug line-clamp-2 flex-1 min-w-0">
            {name}
          </h2>
        </div>

        {/* Status + Category badges */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Status */}
          <span
            className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold ${statusStyle.bg} ${statusStyle.text}`}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${statusStyle.dot}`} aria-hidden="true" />
            {status}
          </span>
          {/* Category */}
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-white/10">
            {category}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-3 flex-1">
          {description || <span className="italic text-gray-400 dark:text-gray-600">No description provided.</span>}
        </p>

        {/* Tech stack */}
        {techStack.length > 0 && (
          <div className="flex flex-wrap gap-1.5" role="list" aria-label="Tech stack">
            {techStack.map((tech) => (
              <button
                key={tech}
                role="listitem"
                onClick={() => onTechClick?.(tech)}
                className="px-2 py-0.5 rounded-md text-xs font-medium bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-700/40 hover:bg-indigo-100 dark:hover:bg-indigo-800/40 transition-colors cursor-pointer"
                title={`Filter by ${tech}`}
                aria-label={`Filter by ${tech}`}
              >
                {tech}
              </button>
            ))}
          </div>
        )}

        {/* Date */}
        {formattedDate && (
          <div className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500">
            <Calendar size={11} aria-hidden="true" />
            <span>Updated {formattedDate}</span>
          </div>
        )}

        {/* Action buttons */}
        <div className="flex flex-wrap items-center gap-2 pt-1 mt-auto border-t border-gray-100 dark:border-white/5">
          {/* Open project */}
          {hasUrl ? (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold transition-colors shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              aria-label={`Open ${name} (opens in new tab)`}
            >
              <ExternalLink size={12} aria-hidden="true" />
              Open Project
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-gray-100 dark:bg-white/5 text-gray-400 dark:text-gray-600 text-xs font-semibold cursor-not-allowed select-none border border-gray-200 dark:border-white/10">
              Coming Soon
            </span>
          )}

          {/* GitHub repo */}
          {hasRepo && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/15 text-gray-700 dark:text-gray-300 text-xs font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400"
              aria-label={`View ${name} on GitHub (opens in new tab)`}
            >
              <Globe size={12} aria-hidden="true" />
              Repo
            </a>
          )}

          {/* Copy link */}
          {hasUrl && (
            <button
              onClick={handleCopy}
              className="ml-auto inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/15 text-gray-500 dark:text-gray-400 text-xs font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400"
              aria-label={copied ? "Link copied!" : "Copy project link"}
              title={copied ? "Copied!" : "Copy link"}
            >
              {copied ? (
                <Check size={12} className="text-emerald-500" aria-hidden="true" />
              ) : (
                <Copy size={12} aria-hidden="true" />
              )}
              {copied ? "Copied!" : "Copy"}
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
