import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { values, whyUs } from "@/lib/site";

export const metadata: Metadata = {
  title: "Client Trust",
  description:
    "What Federal Logistics Group Limited commits to on every consignment, and where verified client testimonials will be published.",
  alternates: { canonical: "/testimonials" },
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Client trust"
        title="We would rather show you the standard than a borrowed quote"
        intro="Verified client testimonials are published here once they are supplied and approved for publication. Until then, this is what we hold ourselves to on every consignment."
        image="/images/container-inspection.webp"
        imageAlt="Clearing officers checking cargo against the documentation"
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <Reveal>
            <SectionHeading
              eyebrow="Our commitments"
              title="What every client gets"
              intro="No invented reviews and no borrowed logos. These are the commitments that carry a consignment from the port to your site."
            />
          </Reveal>
          <div className="mt-12 grid gap-px border border-steel-200 bg-steel-200 sm:grid-cols-2 lg:grid-cols-3">
            {whyUs.map((item) => (
              <Reveal key={item.title}>
                <div className="h-full bg-white p-7">
                  <h3 className="font-display text-base font-bold leading-snug tracking-tight text-navy-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-steel-600">{item.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-900 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <Reveal>
            <SectionHeading
              tone="dark"
              eyebrow="Core values"
              title="The standard behind the service"
              align="center"
            />
          </Reveal>
          <div className="mt-12 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <Reveal key={value.title}>
                <div className="h-full bg-navy-900 p-7">
                  <h3 className="font-display text-lg font-bold tracking-tight text-white">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-navy-100/70">
                    {value.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-navy-100/60">
            Worked with us and happy to say so?{" "}
            <Link href="/contact" className="text-ember-400 underline underline-offset-4">
              Send us a testimonial
            </Link>
            . We publish only what clients approve.
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
