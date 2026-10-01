import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import QuoteForm from "@/components/QuoteForm";
import Reveal from "@/components/Reveal";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Request a Quote",
  description:
    "Send your cargo or procurement details to Federal Logistics Group Limited and receive a clear scope and quotation.",
  alternates: { canonical: "/quote" },
};

const expect = [
  {
    title: "We read it the same day",
    detail: "Enquiries reach the operations team directly.",
  },
  {
    title: "We confirm what is missing",
    detail:
      "If the entry or the supply needs a document or specification you have not sent, we tell you up front.",
  },
  {
    title: "You get a scope, then a price",
    detail:
      "The quotation states what is included (clearance, handling, transport).",
  },
];

export default function QuotePage() {
  return (
    <>
      <PageHero
        eyebrow="Request a quote"
        title="Tell us what needs to move"
        intro="The more detail you send about the cargo or the supply requirement, the faster we can come back with an accurate quotation."
        image="/images/port-truck-convoy.webp"
        imageAlt="Container trucks departing the port terminal"
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr] lg:items-start">
            <Reveal>
              <div className="border border-steel-200 p-7 sm:p-10">
                <QuoteForm />
              </div>
            </Reveal>

            <Reveal delay={120}>
              <p className="eyebrow rule-ember text-ember-600">What happens next</p>
              <dl className="mt-8 space-y-7">
                {expect.map((item) => (
                  <div key={item.title} className="border-l-2 border-steel-200 pl-5">
                    <dt className="font-display text-base font-bold tracking-tight text-navy-900">
                      {item.title}
                    </dt>
                    <dd className="mt-2 text-sm leading-relaxed text-steel-600">
                      {item.detail}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-10 bg-navy-900 p-7">
                <p className="eyebrow text-ember-400">Prefer to talk?</p>
                <a
                  href={company.phoneHref}
                  className="mt-4 block font-display text-2xl font-bold tracking-tight text-white hover:text-ember-400"
                >
                  {company.phone}
                </a>
                <a
                  href={company.emailHref}
                  className="mt-2 block break-all text-sm text-navy-100/75 hover:text-ember-400"
                >
                  {company.email}
                </a>
                <p className="mt-5 text-sm leading-relaxed text-navy-100/60">
                  {company.address.line1}, {company.address.line2}
                  <br />
                  {company.address.city}, {company.address.country}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
