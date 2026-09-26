import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { services, supplies } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Freight forwarding and transport, customs clearing and port operations, warehousing and distribution, specialised cargo handling, and general supplies and procurement.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Two divisions, one accountable team"
        intro="Logistics and supply chain on one side, general supplies and procurement on the other — combined when a client needs the goods sourced, cleared and delivered together."
        image="/images/port-truck-convoy.webp"
        imageAlt="Container trucks leaving the terminal at Dar es Salaam Port"
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <Reveal>
            <SectionHeading
              eyebrow="Division A"
              title="Logistics & Supply Chain"
              intro="Moving cargo through the port and across the region, with the compliance work handled alongside it."
            />
          </Reveal>

          <div className="mt-14 space-y-16">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={60}>
                <article
                  id={service.slug}
                  className="grid scroll-mt-28 gap-10 lg:grid-cols-2 lg:items-center"
                >
                  <div
                    className={`relative aspect-[16/10] overflow-hidden ${
                      i % 2 === 1 ? "lg:order-2" : ""
                    }`}
                  >
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <span className="font-display text-xs font-bold tracking-[0.2em] text-ember-500">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-4 font-display text-2xl font-bold leading-tight tracking-tight text-navy-900 sm:text-3xl">
                      {service.title}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-steel-600">
                      {service.summary}
                    </p>
                    <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                      {service.points.map((point) => (
                        <li
                          key={point}
                          className="flex gap-3 text-sm leading-relaxed text-navy-900"
                        >
                          <span aria-hidden className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-ember-500" />
                          {point}
                        </li>
                      ))}
                    </ul>
                    {service.slug === "customs-clearing" && (
                      <Link
                        href="/clearing-and-forwarding"
                        className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-navy-800 underline decoration-ember-500 decoration-2 underline-offset-8 hover:text-ember-600"
                      >
                        See the full clearing &amp; forwarding process <span aria-hidden>→</span>
                      </Link>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="general-supplies" className="scroll-mt-24 bg-navy-900 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <Reveal>
              <SectionHeading
                tone="dark"
                eyebrow="Division B"
                title="General Supplies & Procurement"
                intro="Sourcing against your specification and delivering it — with our own transport and clearing capability behind the supply."
              />
              <div className="relative mt-10 aspect-[16/10] overflow-hidden">
                <Image
                  src="/images/general-supplies.webp"
                  alt="Staff checking procured tools, cabling and protective equipment at a loading bay"
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2">
                {supplies.map((item) => (
                  <div key={item.title} className="h-full bg-navy-900 p-7">
                    <h3 className="font-display text-base font-bold leading-snug tracking-tight text-white">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-navy-100/70">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
              <Link
                href="/quote"
                className="mt-8 inline-flex items-center gap-2 bg-ember-500 px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-ember-600"
              >
                Request a supply quotation <span aria-hidden>→</span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
