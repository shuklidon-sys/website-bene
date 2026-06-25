import Link from "next/link";
import { SearchInput } from "./SearchInput";

export function HeroSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 leading-tight tracking-tight mb-6">
          Employee benefits,
          <br />
          explained simply.
        </h1>
        <p className="text-xl text-slate-600 leading-relaxed mb-14 max-w-2xl mx-auto">
          Learn how employee benefits work, understand your options, and receive
          personalized recommendations for your business—all without talking to
          a salesperson.
        </p>

        <div className="flex flex-col items-center gap-4">
          <SearchInput />

          <div className="flex items-center gap-4 w-full max-w-2xl">
            <div className="flex-1 h-px bg-slate-200" />
            <span className="text-sm text-slate-400 px-2">or</span>
            <div className="flex-1 h-px bg-slate-200" />
          </div>

          <Link
            href="/personalized"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 hover:border-slate-300 transition-colors"
          >
            Make It Personalized
            <svg
              className="w-4 h-4"
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
        </div>
      </div>
    </section>
  );
}
