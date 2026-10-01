import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { clearingSteps } from "@/lib/site";

export const metadata: Metadata = {
  title: "Customs Clearing & Forwarding in Dar es Salaam",
  description:
    "Import and export customs clearing through TRA at Dar es Salaam Port, Kilindini and major border posts, with onward forwarding across Tanzania and the region.",
  alternates: { canonical: "/clearing-and-forwarding" },
};

const handled = [
  "Sea freight imports and exports through Dar es Salaam Port, Mtwara Port, Tanga Port and Zanzibar Port",
  "Border post clearance for corridor traffic",
  "Containerised, bulk, loose and out-of-gauge consignments",
  "Duty and tax assessment with TRA",
  "Permit and regulatory documentation follow-up",
  "Terminal, storage and demurrage coordination",
  "Delivery orders, gate out and onward road transport",
];

const documents = [
  "Bill of lading or airway bill",
  "Commercial invoice",
  "Packing list",
  "Certificate of origin (where applicable)",
  "Permits or licences for controlled goods",
  "TIN and importer details",
];

export default function ClearingPage() {
  return (
    <>
      <PageHero
        eyebrow="Clearing & Forwarding"
        title="Clearance that does not hold your cargo hostage"
        intro="Import and export documentation processed through TRA at Dar es Salaam Port, Kilindini and major border posts, then forwarded onward by road to wherever the consignment is needed."
        image="/images/customs-documentation.webp"
        imageAlt="Clearing agent recording container details at the quayside in Dar es Salaam"
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <Reveal>
            <SectionHeading
              eyebrow="The process"
              title="Four stages, one accountable team"
              intro="Every consignment follows the same path. You always know which stage yours is at and what is needed to move it to the next one."
            />
          </Reveal>
          <div className="mt-14 grid gap-px border border-steel-200 bg-steel-200 sm:grid-cols-2 lg:grid-cols-4">
            {clearingSteps.map((step, i) => (
              <Reveal key={step.step} delay={i * 80}>
                <div className="h-full bg-white p-7">
                  <span className="font-display text-sm font-bold text-ember-500">
                    {step.step}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold leading-snug tracking-tight text-navy-900">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-steel-600">{step.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-steel-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/container-inspection.webp"
                  alt="Officers verifying palletised cargo inside a container against the documentation"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={120}>
              <SectionHeading
                eyebrow="What we handle"
                title="Cargo types and clearance work"
              />
              <ul className="mt-8 grid gap-3">
                {handled.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-steel-600">
                    <span aria-hidden className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-ember-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-start">
            <Reveal>
              <SectionHeading
                eyebrow="Before you send"
                title="What to have ready"
                intro="Having these to hand when you contact us shortens the first stage considerably. If something is missing, tell us and we will advise on what the entry needs."
              />
            </Reveal>
            <Reveal delay={120}>
              <ul className="divide-y divide-steel-200 border-y border-steel-200">
                {documents.map((doc, i) => (
                  <li key={doc} className="flex items-center gap-5 py-4">
                    <span className="font-display text-xs font-bold text-ember-500">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm font-medium text-navy-900">{doc}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/quote"
                className="mt-8 inline-flex items-center gap-2 bg-ember-500 px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-ember-600"
              >
                Start a clearing enquiry <span aria-hidden>→</span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <CTASection
        title="Cargo arriving at Dar es Salaam?"
        subtitle="Send the bill of lading and cargo details. We will tell you what the entry needs and what it will cost to clear and deliver."
      />
    </>
  );
}
