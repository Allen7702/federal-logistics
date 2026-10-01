import type { Metadata } from "next";
import Image from "next/image";
import CTASection from "@/components/CTASection";
import RegionalMap from "@/components/RegionalMap";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Our Network",
  description:
    "Dar es Salaam, Tanga, Mtwara and Zanzibar ports and the major border posts, with road haulage reaching Zambia, DR Congo, Rwanda, Burundi, Uganda and Malawi.",
  alternates: { canonical: "/network" },
};

const gateways = [
  {
    title: "Dar es Salaam Port",
    detail:
      "Our primary gateway. Clearing, terminal coordination and gate-out for containerised, bulk and project cargo.",
  },
  {
    title: "Tanga, Mtwara & Zanzibar ports",
    detail:
      "Cargo arriving through Tanzania's other seaports is cleared and forwarded onward to inland and corridor destinations.",
  },
  {
    title: "Major border posts",
    detail:
      "Documentation and clearance handled at the border posts serving corridor traffic into landlinked markets.",
  },
  {
    title: "Inland economic zones",
    detail:
      "Warehousing, distribution and last-mile delivery across Tanzania's major economic zones.",
  },
];

export default function NetworkPage() {
  return (
    <>
      <PageHero
        eyebrow="Our network"
        title="Tanzania is the gateway. The region is the destination."
        intro="Cargo that lands in Dar es Salaam rarely stops there. Our road haulage carries it onward to the landlinked markets that depend on the port."
        image="/images/port-dar-es-salaam.webp"
        imageAlt="Aerial view of the container terminal at the Port of Dar es Salaam"
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <SectionHeading
                eyebrow="Regional reach"
                title="One consignment, one team, the whole corridor"
                intro="Handing cargo between a clearing agent, a transporter and a warehouse is where consignments get lost. We keep it under one roof from vessel to final destination."
              />
            </Reveal>
            <Reveal delay={120} className="text-navy-900">
              <RegionalMap />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-steel-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <Reveal>
            <SectionHeading eyebrow="Gateways" title="Where we operate" />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {gateways.map((gateway, i) => (
              <Reveal key={gateway.title} delay={i * 70}>
                <div className="h-full border-t-2 border-ember-500 bg-white p-7">
                  <h3 className="font-display text-lg font-bold leading-snug tracking-tight text-navy-900">
                    {gateway.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-steel-600">
                    {gateway.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-navy-900">
        <Image
          src="/images/road-haulage.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-20"
        />
        <div className="blueprint absolute inset-0" />
        <div className="relative mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 sm:py-24">
          <Reveal>
            <p className="eyebrow rule-ember text-ember-400 [&::after]:mx-auto">On the road</p>
            <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
              Road haulage for bulk, containerised and loose cargo
            </h2>
            <p className="mt-5 text-base leading-relaxed text-navy-100/75">
              A modern fleet moving cargo across Tanzania and into the landlinked neighbouring
              markets, with routes planned to keep transit time and cost down.
            </p>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
