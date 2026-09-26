import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import QuoteForm from "@/components/QuoteForm";
import Reveal from "@/components/Reveal";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Call, email or visit Federal Logistics Group Limited at NIC Investment House, Samora / Mirambo Street, Dar es Salaam, Tanzania.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    company.mapQuery,
  )}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="Talk to the team in Dar es Salaam"
        intro="Call, email or send an enquiry. Cargo questions reach the operations team directly."
        image="/images/quay-clearance.webp"
        imageAlt="Clearing officer working at the quayside in Dar es Salaam"
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:items-start">
            <Reveal>
              <p className="eyebrow rule-ember text-ember-600">Head office</p>
              <address className="mt-8 space-y-8 not-italic">
                <div>
                  <h2 className="eyebrow text-steel-600">Address</h2>
                  <p className="mt-3 text-base leading-relaxed text-navy-900">
                    {company.address.line1}
                    <br />
                    {company.address.line2}
                    <br />
                    {company.address.city}, {company.address.country}
                  </p>
                </div>
                <div>
                  <h2 className="eyebrow text-steel-600">Phone</h2>
                  <a
                    href={company.phoneHref}
                    className="mt-3 block font-display text-2xl font-bold tracking-tight text-navy-900 hover:text-ember-600"
                  >
                    {company.phone}
                  </a>
                </div>
                <div>
                  <h2 className="eyebrow text-steel-600">Email</h2>
                  <a
                    href={company.emailHref}
                    className="mt-3 block break-all text-base font-semibold text-navy-900 hover:text-ember-600"
                  >
                    {company.email}
                  </a>
                </div>
                <div>
                  <h2 className="eyebrow text-steel-600">Instagram</h2>
                  <a
                    href={company.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 block text-base font-semibold text-navy-900 hover:text-ember-600"
                  >
                    {company.instagramHandle}
                  </a>
                </div>
              </address>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a
                  href={company.phoneHref}
                  className="inline-flex items-center justify-center gap-2 bg-ember-500 px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-ember-600"
                >
                  Click to call
                </a>
                <a
                  href={company.emailHref}
                  className="inline-flex items-center justify-center gap-2 border border-navy-200 px-7 py-4 text-sm font-semibold text-navy-800 transition-colors hover:border-navy-800"
                >
                  Click to email
                </a>
              </div>

              <p className="mt-8 text-sm leading-relaxed text-steel-600">
                Business hours will be listed here once confirmed by management.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <div className="border border-steel-200 p-7 sm:p-9">
                <p className="eyebrow rule-ember text-ember-600">Send an enquiry</p>
                <div className="mt-8">
                  <QuoteForm />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-steel-50 pb-20 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="relative aspect-[16/9] w-full overflow-hidden border border-steel-200 bg-white sm:aspect-[21/9]">
            <iframe
              src={mapSrc}
              title={`Map showing ${company.name} head office in Dar es Salaam`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full"
            />
          </div>
        </div>
      </section>
    </>
  );
}
