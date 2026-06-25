"use client";

import { useState, useEffect } from "react";
import { searchPlaceholders } from "@/lib/data/questions";

export function SearchInput() {
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [value, setValue] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((i) => (i + 1) % searchPlaceholders.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <form
      className="flex items-center gap-3 w-full max-w-2xl"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="flex-1 relative">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={searchPlaceholders[placeholderIndex]}
          className="w-full px-5 py-4 text-base text-slate-900 bg-white border border-slate-200 rounded-xl placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent shadow-sm transition-shadow"
          aria-label="Ask a benefits question"
        />
      </div>
      <button
        type="submit"
        className="flex-shrink-0 p-4 bg-emerald-700 text-white rounded-xl hover:bg-emerald-800 transition-colors shadow-sm"
        aria-label="Search"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </button>
    </form>
  );
}
