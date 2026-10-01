import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Projects & Case Studies",
  description:
    "Completed and ongoing logistics and procurement assignments handled by Federal Logistics Group Limited.",
  alternates: { canonical: "/projects" },
};

const caseStudyShape = [
  { label: "Client / sector", detail: "Who the work was for and the industry it sits in." },
  { label: "Requirement", detail: "What had to move or be supplied, and the constraint." },
  { label: "Solution", detail: "How the clearance, transport or supply was structured." },
  { label: "Delivery / outcome", detail: "What was delivered, when, and what it saved." },
];

const capabilities = [
  {
    image: "/images/port-operations.webp",
    alt: "Ship-to-shore crane discharging containers at Dar es Salaam Port",
    title: "Port operations",
    detail: "Terminal coordination, verification and gate-out on containerised consignments.",
  },
  {
    image: "/images/project-cargo.webp",
    alt: "Crane lifting crated heavy machinery at the quayside",
    title: "Project & heavy-lift cargo",
    detail: "Oversized and out-of-gauge consignments planned, lifted and routed.",
  },
  {
    image: "/images/port-truck-convoy.webp",
    alt: "Container trucks leaving the port terminal",
    title: "Corridor haulage",
    detail: "Road movements from the port to inland and cross-border destinations.",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Work in progress, and a place to show it"
        intro="This portfolio is built and ready for Federal Logistics Group's completed and ongoing assignments. Approved project details and photographs are published here as management releases them."
        image="/images/port-operations.webp"
        imageAlt="Container handling operations at Dar es Salaam Port"
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <Reveal>
            <SectionHeading
              eyebrow="Capabilities in the field"
              title="The kind of work we handle"
              intro="Until named case studies are approved for publication, these are the operations our teams run day to day."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {capabilities.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <article className="h-full overflow-hidden border border-steel-200">
                  <div className="relative aspect-[16/11]">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-lg font-bold tracking-tight text-navy-900">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-steel-600">
                      {item.detail}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-steel-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-start">
            <Reveal>
              <SectionHeading
                eyebrow="For management"
                title="How a case study will be published"
                intro="Each project follows the same four-part structure, so the portfolio stays consistent as it grows. Send the details and photographs and we will format them."
              />
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-navy-800 underline decoration-ember-500 decoration-2 underline-offset-8 hover:text-ember-600"
              >
                Submit project details <span aria-hidden>→</span>
              </Link>
            </Reveal>
            <Reveal delay={120}>
              <ol className="divide-y divide-steel-200 border-y border-steel-200">
                {caseStudyShape.map((row, i) => (
                  <li key={row.label} className="flex gap-6 py-5">
                    <span className="font-display text-xs font-bold text-ember-500">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-display text-base font-bold tracking-tight text-navy-900">
                        {row.label}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-steel-600">
                        {row.detail}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
