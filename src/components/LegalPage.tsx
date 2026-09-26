import type { ReactNode } from "react";
import { company } from "@/lib/site";

export default function LegalPage({
  title,
  intro,
  children,
}: {
  title: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 sm:py-24">
        <p className="eyebrow rule-ember text-ember-600">Legal</p>
        <h1 className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight text-navy-900">
          {title}
        </h1>
        <p className="mt-5 text-base leading-relaxed text-steel-600">{intro}</p>

        <div className="mt-10 space-y-6 text-sm leading-relaxed text-steel-600 [&_h2]:font-display [&_h2]:text-lg [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-navy-900">
          {children}
        </div>

        <div className="mt-12 border-l-2 border-ember-500 bg-steel-50 p-6 text-sm leading-relaxed text-navy-900">
          <p className="font-semibold">Draft pending approval</p>
          <p className="mt-2 text-steel-600">
            This page is a working placeholder. The final wording must be supplied and approved
            by {company.name} before the site goes live. Questions in the meantime:{" "}
            <a href={company.emailHref} className="font-semibold text-navy-800 underline">
              {company.email}
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
