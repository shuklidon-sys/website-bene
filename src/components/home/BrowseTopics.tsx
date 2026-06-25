import Link from "next/link";
import { contentPillars } from "@/lib/data/pillars";

export function BrowseTopics() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-sm font-semibold text-emerald-700 uppercase tracking-wider mb-2">
          Browse by Topic
        </p>
        <h2 className="text-2xl font-bold text-slate-900 tracking-tight mb-8">
          Explore the education library
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {contentPillars.map((pillar) => (
            <Link
              key={pillar.slug}
              href={`/learn/${pillar.slug}/`}
              className="group flex flex-col gap-2 p-5 bg-white border border-slate-200 rounded-xl hover:border-emerald-300 hover:shadow-sm transition-all"
            >
              <div className="flex items-start justify-between">
                <span className="text-slate-900 font-semibold group-hover:text-emerald-700 transition-colors leading-snug">
                  {pillar.title}
                </span>
                <svg
                  className="flex-shrink-0 mt-0.5 ml-3 w-4 h-4 text-slate-400 group-hover:text-emerald-600 transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed">
                {pillar.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
