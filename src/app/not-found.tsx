import Link from "next/link";

export default function NotFound() {
  return (
    <div className="blueprint bg-navy-900">
      <div className="mx-auto max-w-3xl px-4 py-28 text-center sm:px-6 sm:py-36">
        <p className="eyebrow text-ember-400">404 — Off route</p>
        <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
          This consignment took a wrong turn
        </h1>
        <p className="mt-5 text-base leading-relaxed text-navy-100/75">
          The page you were looking for is not here. Let us get you back on the corridor.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-ember-500 px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-ember-600"
          >
            Back to home <span aria-hidden>→</span>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 border border-white/25 px-7 py-4 text-sm font-semibold text-white transition-colors hover:border-white/60"
          >
            Contact us
          </Link>
        </div>
      </div>
    </div>
  );
}
