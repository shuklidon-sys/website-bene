import Link from "next/link";
import { popularQuestions } from "@/lib/data/questions";

export function PopularQuestions() {
  return (
    <section className="py-16 px-6 bg-slate-50">
      <div className="max-w-3xl mx-auto">
        <p className="text-sm font-semibold text-emerald-700 uppercase tracking-wider mb-6">
          Popular Questions
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {popularQuestions.map((q) => (
            <Link
              key={q.slug}
              href={`/ask/${q.slug}`}
              className="group flex items-center justify-between p-5 bg-white border border-slate-200 rounded-xl hover:border-emerald-300 hover:shadow-sm transition-all"
            >
              <span className="text-slate-700 font-medium group-hover:text-slate-900 pr-4 leading-snug">
                {q.question}
              </span>
              <svg
                className="flex-shrink-0 w-4 h-4 text-slate-400 group-hover:text-emerald-600 transition-colors"
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
