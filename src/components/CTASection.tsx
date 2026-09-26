import Link from "next/link";
import { company } from "@/lib/site";

export default function CTASection({
  title = "Need reliable logistics or procurement support?",
  subtitle = "Talk to Federal Logistics Group today. Send the consignment details and we will come back with a clear scope and quotation.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-800">
      <div className="blueprint absolute inset-0" />
      <div
        aria-hidden
        className="absolute -right-24 top-1/2 hidden h-[28rem] w-[28rem] -translate-y-1/2 rounded-full bg-ember-500/10 blur-3xl lg:block"
      />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-20">
        <div className="max-w-xl">
          <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-navy-100/75">{subtitle}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
          <Link
            href="/quote"
            className="inline-flex items-center justify-center gap-2 bg-ember-500 px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-ember-600"
          >
            Request a Quote <span aria-hidden>→</span>
          </Link>
          <a
            href={company.phoneHref}
            className="inline-flex items-center justify-center gap-2 border border-white/25 px-7 py-4 text-sm font-semibold text-white transition-colors hover:border-white/60 hover:bg-white/5"
          >
            Call {company.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
