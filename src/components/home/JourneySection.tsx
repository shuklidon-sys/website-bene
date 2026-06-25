const STEPS = [
  {
    number: "01",
    title: "Learn",
    description:
      "Browse guides, comparisons, and answers written for business owners like you.",
    href: "/learn",
    optional: false,
  },
  {
    number: "02",
    title: "Get Recommendations",
    description:
      "Tell us about your business and we'll suggest the right options—with full reasoning behind every recommendation.",
    href: "/personalized",
    optional: false,
  },
  {
    number: "03",
    title: "Talk to an Expert",
    description:
      "When you're ready, connect with a trusted advisor. No pressure, no gatekeeping—just expert help on your terms.",
    href: "/advisors",
    optional: true,
  },
];

export function JourneySection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-3">
          Go from confused to confident.
        </h2>
        <p className="text-lg text-slate-600 mb-14">
          No sales calls required. Move at your own pace.
        </p>

        <div className="relative">
          <div className="hidden md:block absolute left-6 top-6 bottom-6 w-px bg-slate-200" />

          <div className="flex flex-col gap-10">
            {STEPS.map((step) => (
              <div key={step.number} className="flex gap-8 items-start">
                <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center text-slate-400 font-bold text-sm">
                  {step.number}
                </div>

                <div className="pt-2 pb-2">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-semibold text-slate-900">
                      {step.title}
                    </h3>
                    {step.optional && (
                      <span className="text-xs font-medium text-slate-400 border border-slate-200 px-2 py-0.5 rounded-full">
                        Optional
                      </span>
                    )}
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
