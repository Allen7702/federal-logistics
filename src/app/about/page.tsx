import type { Metadata } from "next";
import Image from "next/image";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { company, values } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Federal Logistics Group Limited is a fully integrated supply chain and logistics management firm established in 2022 and headquartered in Dar es Salaam, Tanzania.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="A bridge between suppliers, ports and the businesses waiting on cargo"
        intro="Established in 2022 and headquartered in Dar es Salaam, Federal Logistics Group Limited connects Manufactures, corporate clients and government institutions with quality materials and good transport networks."
        image="/images/vessel-arrival.webp"
        imageAlt="Container vessel arriving at the Port of Dar es Salaam"
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:items-start">
            <Reveal>
              <SectionHeading eyebrow="Company profile" title="Who we are" />
              <div className="mt-8 space-y-5 text-base leading-relaxed text-steel-600">
                <p>
                  Federal Logistics Group Limited is a premier, fully integrated supply chain
                  and logistics management firm headquartered in Dar es Salaam, Tanzania.
                  Established in {company.established}, the company specialises in end-to-end
                  procurement solutions, cross-border freight logistics and comprehensive
                  general supply services.
                </p>
                <p>
                  The company acts as a bridge connecting Manufactures, corporate clients and
                  government institutions with high-quality materials and seamless transport
                  networks across East and Central Africa, with customs clearing and
                  forwarding at the centre of that work.
                </p>
              </div>

              <dl className="mt-10 grid gap-px border border-steel-200 bg-steel-200 sm:grid-cols-3">
                <div className="bg-white p-6">
                  <dt className="eyebrow text-steel-600">Established</dt>
                  <dd className="mt-3 font-display text-2xl font-bold text-navy-900">
                    {company.established}
                  </dd>
                </div>
                <div className="bg-white p-6">
                  <dt className="eyebrow text-steel-600">Head office</dt>
                  <dd className="mt-3 text-sm font-semibold text-navy-900">
                    {company.address.city}, {company.address.country}
                  </dd>
                </div>
                <div className="bg-white p-6">
                  <dt className="eyebrow text-steel-600">Divisions</dt>
                  <dd className="mt-3 text-sm font-semibold text-navy-900">
                    Logistics &amp; Supply Chain · General Supplies &amp; Procurement
                  </dd>
                </div>
              </dl>
            </Reveal>

            <Reveal delay={120}>
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/images/warehouse-distribution.webp"
                  alt="Warehouse team managing palletised stock and loading a distribution truck"
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-navy-900 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <Reveal>
            <SectionHeading tone="dark" eyebrow="Strategic direction" title="Vision & mission" />
          </Reveal>
          <div className="mt-12 grid gap-px border border-white/10 bg-white/10 lg:grid-cols-2">
            <Reveal>
              <div className="h-full bg-navy-900 p-8 sm:p-10">
                <h3 className="eyebrow text-ember-400">Vision</h3>
                <p className="mt-5 font-display text-xl font-bold leading-snug tracking-tight text-white sm:text-2xl">
                  To be the most reliable and innovative partner in general procurement and
                  multimodal logistics within sub-Saharan Africa.
                </p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="h-full bg-navy-900 p-8 sm:p-10">
                <h3 className="eyebrow text-ember-400">Mission</h3>
                <p className="mt-5 font-display text-xl font-bold leading-snug tracking-tight text-white sm:text-2xl">
                  To deliver exceptional value to our clients by providing cost-effective,
                  timely and high-quality procurement and distribution services while
                  maintaining the highest ethical standards.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-steel-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <Reveal>
            <SectionHeading
              eyebrow="Core values"
              title="Four commitments that decide how a job is handled"
              align="center"
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 80}>
                <div className="h-full border-t-2 border-ember-500 bg-white p-7">
                  <h3 className="font-display text-lg font-bold tracking-tight text-navy-900">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-steel-600">{value.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <Reveal>
            <p className="eyebrow rule-ember text-ember-600 [&::after]:mx-auto">Our team</p>
            <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-navy-900">
              Management profiles
            </h2>
            <p className="mt-5 text-base leading-relaxed text-steel-600">
              Leadership profiles and photographs will be published here once approved by
              management. The section is built and ready. Supply the names, roles and images
              and they drop straight in.
            </p>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
