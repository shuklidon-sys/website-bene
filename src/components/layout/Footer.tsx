import Link from "next/link";

const NAV_LINKS = [
  { label: "Learn", href: "/learn" },
  { label: "Explore", href: "/explore" },
  { label: "Tools", href: "/tools" },
  { label: "Personalized", href: "/personalized" },
  { label: "About", href: "/about" },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-10">
          <div>
            <div className="font-bold text-xl text-slate-900 tracking-tight mb-2">
              Bene<span className="text-emerald-700">-</span>fits
            </div>
            <p className="text-slate-500 text-sm">
              The trusted guide for employee benefits.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-500">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-slate-900 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="border-t border-slate-100 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-400">
          <span>© 2026 Bene-fits. All rights reserved.</span>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="hover:text-slate-600 transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="hover:text-slate-600 transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
