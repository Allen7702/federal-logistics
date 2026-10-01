import Image from "next/image";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import RegionalMap from "@/components/RegionalMap";
import Hero from "@/components/Hero";
import QuoteForm from "@/components/QuoteForm";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import {
  clearingSteps,
  company,
  services,
  strategy,
  testimonials,
  values,
  whyUs,
} from "@/lib/site";

const quickServices = [
  ...services.map((s) => ({
    title: s.title,
    summary: s.summary,
    image: s.image,
    imageAlt: s.imageAlt,
    href: s.slug === "customs-clearing" ? "/clearing-and-forwarding" : `/services#${s.slug}`,
  })),
  {
    title: "General Supplies & Procurement",
    summary:
      "Industrial, construction, ICT and PPE supplies sourced and delivered against your specification.",
    image: "/images/general-supplies.webp",
    imageAlt: "Team checking procured tools, cabling and protective equipment at a loading bay",
    href: "/services#general-supplies",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* About: introduction, vision and mission */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-start">
            <Reveal>
              <SectionHeading
                eyebrow="About us"
                title="A bridge between suppliers, ports and the businesses that depend on them"
              />
              <div className="mt-6 space-y-5 text-base leading-relaxed text-steel-600">
                <p>
                  Federal Logistics Group Limited is a fully integrated supply chain and logistics
                  management firm headquartered in Dar es Salaam, Tanzania. Established in{" "}
                  {company.established}, the company specialises in end-to-end procurement,
                  cross-border freight logistics and general supply services.
                </p>
                <p>
                  We connect manufacturers, corporate clients and government institutions with
                  high-quality materials and reliable transport networks across East and Central
                  Africa.
                </p>
              </div>
              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-navy-800 underline decoration-ember-500 decoration-2 underline-offset-8 hover:text-ember-600"
              >
                More about us <span aria-hidden>→</span>
              </Link>
            </Reveal>

            <Reveal delay={120}>
              <div className="grid gap-px border border-steel-200 bg-steel-200">
                <div className="bg-steel-50 p-8">
                  <h3 className="eyebrow text-ember-600">Vision</h3>
                  <p className="mt-4 font-display text-lg font-bold leading-snug tracking-tight text-navy-900 sm:text-xl">
                    {strategy.vision}
                  </p>
                </div>
                <div className="bg-steel-50 p-8">
                  <h3 className="eyebrow text-ember-600">Mission</h3>
                  <p className="mt-4 font-display text-lg font-bold leading-snug tracking-tight text-navy-900 sm:text-xl">
                    {strategy.mission}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Clearing & forwarding: the lead capability */}
      <section className="bg-steel-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.05fr] lg:items-start">
            <Reveal>
              <SectionHeading
                eyebrow="What we are known for"
                title={
                  <>
                    Customs clearing and forwarding,
                    <span className="text-ember-500"> handled properly.</span>
                  </>
                }
                intro="Clearance is where consignments stall and costs build. We process import and export documentation through TRA at the Dar es Salaam, Tanga, Mtwara and Zanzibar ports and at the major border posts. We then move the cargo onward, so one team carries your consignment from arrival to final destination."
              />
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/clearing-and-forwarding"
                  className="inline-flex items-center justify-center gap-2 bg-navy-800 px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-navy-700"
                >
                  Clearing &amp; Forwarding <span aria-hidden>→</span>
                </Link>
                <Link
                  href="/quote"
                  className="inline-flex items-center justify-center gap-2 border border-navy-200 px-7 py-4 text-sm font-semibold text-navy-800 transition-colors hover:border-navy-800"
                >
                  Request a Quote
                </Link>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <ol className="divide-y divide-steel-200 border-y border-steel-200">
                {clearingSteps.map((step) => (
                  <li key={step.step} className="group flex gap-6 py-6">
                    <span className="font-display text-sm font-bold text-ember-500">
                      {step.step}
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-bold tracking-tight text-navy-900">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-steel-600">
                        {step.detail}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <Reveal>
            <SectionHeading
              eyebrow="Our services"
              title="From port to final destination"
              intro="Two divisions, one accountable team: logistics and supply chain, and general supplies and procurement."
            />
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {quickServices.map((service, i) => (
              <Reveal key={service.title} delay={i * 80}>
                <Link
                  href={service.href}
                  className="group flex h-full flex-col overflow-hidden border border-steel-200 bg-white transition-colors hover:border-navy-800"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out-quint group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-lg font-bold leading-snug tracking-tight text-navy-900">
                      {service.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-steel-600">
                      {service.summary}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-ember-600">
                      Learn more
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Federal Logistics */}
      <section className="relative isolate overflow-hidden bg-navy-900 py-20 sm:py-24">
        <Image
          src="/images/port-operations.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-15"
        />
        <div className="blueprint absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <Reveal>
            <SectionHeading
              tone="dark"
              eyebrow="Why Federal Logistics"
              title="Cargo is someone's production line, project or budget"
              intro="We plan every move with that in mind. Clients trust us with their cargo for reliability, compliance and cost control, and those three principles shape the way we work."
            />
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {whyUs.map((item, i) => (
              <Reveal key={item.title} delay={i * 60}>
                <div className="h-full bg-navy-900 p-7">
                  <span className="font-display text-xs font-bold text-ember-500">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-display text-base font-bold leading-snug tracking-tight text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-navy-100/70">
                    {item.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Regional reach */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <SectionHeading
                eyebrow="Regional reach"
                title="Dar es Salaam, and the markets behind it"
                intro="Tanzania is the gateway. Our road haulage reaches the landlinked markets that depend on it, so a single consignment can clear the port and keep moving without changing hands."
              />
              <Link
                href="/network"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-navy-800 underline decoration-ember-500 decoration-2 underline-offset-8 hover:text-ember-600"
              >
                See our network <span aria-hidden>→</span>
              </Link>
            </Reveal>
            <Reveal delay={120} className="text-navy-900">
              <RegionalMap />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-steel-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <Reveal>
            <SectionHeading
              eyebrow="Testimonials"
              title="What our clients say"
              intro="Feedback from the businesses and institutions whose cargo and supplies we handle."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.map((item, i) => (
              <Reveal key={item.quote} delay={i * 80}>
                <figure className="flex h-full flex-col border-t-2 border-ember-500 bg-white p-7 sm:p-8">
                  <span aria-hidden className="font-display text-5xl leading-none text-ember-500">
                    &ldquo;
                  </span>
                  <blockquote className="mt-2 flex-1 text-base leading-relaxed text-navy-900">
                    {item.quote}
                  </blockquote>
                  <figcaption className="mt-6 border-t border-steel-200 pt-5">
                    <p className="font-display text-sm font-bold tracking-tight text-navy-900">
                      {item.name}
                    </p>
                    <p className="mt-1 text-sm text-steel-600">{item.org}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values + quote form */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-start">
            <Reveal>
              <SectionHeading
                eyebrow="How we work"
                title="Trust, earned consignment by consignment"
                intro="Established in 2022 and headquartered in Dar es Salaam, Federal Logistics Group Limited works to four values that decide how every job is handled."
              />
              <dl className="mt-10 space-y-6">
                {values.map((value) => (
                  <div key={value.title} className="border-l-2 border-ember-500 pl-5">
                    <dt className="font-display text-base font-bold tracking-tight text-navy-900">
                      {value.title}
                    </dt>
                    <dd className="mt-1.5 text-sm leading-relaxed text-steel-600">
                      {value.detail}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={120}>
              <div className="border border-steel-200 bg-white p-7 sm:p-9">
                <p className="eyebrow rule-ember text-ember-600">Request a quote</p>
                <h3 className="mt-5 font-display text-2xl font-bold tracking-tight text-navy-900">
                  Tell us what needs to move
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-steel-600">
                  Send the consignment details and our team will respond with a scope and
                  quotation.
                </p>
                <div className="mt-8">
                  <QuoteForm compact />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
