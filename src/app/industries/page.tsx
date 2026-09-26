import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { industries } from "@/lib/site";

export const metadata: Metadata = {
  title: "Industries & Solutions",
  description:
    "How Federal Logistics Group supports construction and infrastructure, manufacturing, government and institutional procurement, agriculture, and corporate and ICT clients.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries & solutions"
        title="Different sectors, different pressure points"
        intro="A stalled container costs a construction programme differently from how it costs a production line. These are the sectors our capabilities are built around."
        image="/images/project-cargo.webp"
        imageAlt="Crane lifting a crated industrial machine at the quayside"
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <Reveal>
            <SectionHeading
              eyebrow="Who we support"
              title="Sector solutions"
              intro="Every engagement starts the same way: what is moving, where it has to be, and by when. What changes is the compliance, handling and timing around it."
            />
          </Reveal>
          <div className="mt-12 grid gap-px border border-steel-200 bg-steel-200 md:grid-cols-2">
            {industries.map((industry, i) => (
              <Reveal key={industry.title} delay={i * 70}>
                <div className="h-full bg-white p-8">
                  <span className="font-display text-xs font-bold text-ember-500">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-display text-xl font-bold leading-snug tracking-tight text-navy-900">
                    {industry.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-steel-600">
                    {industry.detail}
                  </p>
                </div>
              </Reveal>
            ))}
            <div className="hidden bg-steel-50 p-8 md:block" />
          </div>
          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-steel-600">
            Working in a sector not listed here? The handling plan is built per consignment —
            tell us what needs to move and we will confirm whether we are the right fit.
          </p>
        </div>
      </section>

      <CTASection
        title="Not sure which service you need?"
        subtitle="Describe the cargo or the supply requirement and we will map it to the right division."
      />
    </>
  );
}
