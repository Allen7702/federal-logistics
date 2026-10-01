import Image from "next/image";
import Link from "next/link";
import CorridorStrip from "./CorridorStrip";
import HeroVideo from "./HeroVideo";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-900">
      {/* Footage (or the still it falls back to) fills the frame edge to edge. */}
      <div className="absolute inset-0">
        <Image
          src="/images/quay-clearance.webp"
          alt="Clearing officer checking documents against a container truck at Dar es Salaam Port"
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-105 saturate-[1.15]"
        />
        <HeroVideo src="/video/hero-port-hd-v3" poster="/images/quay-clearance.webp" />
      </div>
      {/* The text runs over the footage, so the frame is shaded where the text
          sits: top to bottom below lg (text spans the width), left to right on
          wide screens (text holds the left half, the footage opens up on the right). */}
      <div
        aria-hidden
        className="absolute inset-0 bg-linear-to-b from-navy-950/60 via-navy-950/75 to-navy-950/90 lg:bg-linear-to-r lg:from-navy-950/85 lg:via-navy-950/60 lg:to-navy-950/25"
      />
      <div className="blueprint absolute inset-0 opacity-40" />

      <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-16 sm:px-6 sm:pt-20 lg:px-10 lg:pb-16 lg:pt-24">
        <p className="eyebrow text-navy-200">
          Tanzania <span className="text-ember-500">→</span> Regional{" "}
          <span className="text-ember-500">→</span> Beyond
        </p>

        <h1 className="mt-6 max-w-2xl font-display text-[2.6rem] font-bold leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-7xl">
          Clearing &amp;
          <br />
          Forwarding
        </h1>
        <p className="mt-5 text-[0.7rem] font-semibold uppercase tracking-[0.42em] text-navy-100/70">
          Keeping trade moving
        </p>

        <p className="mt-7 max-w-xl text-base leading-relaxed text-navy-100/80 sm:text-lg">
          Federal Logistics Group Limited provides end-to-end procurement and multimodal
          logistics solutions, connecting Manufactures, corporate clients and government
          institutions with quality materials and seamless transport networks across East and
          Central Africa.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href="/quote"
            className="inline-flex items-center justify-center gap-2 bg-ember-500 px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-ember-600"
          >
            Request a Quote <span aria-hidden>→</span>
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 border border-white/25 px-7 py-4 text-sm font-semibold text-white transition-colors hover:border-white/60 hover:bg-white/5"
          >
            Explore Our Services
          </Link>
        </div>

        <div className="mt-14 max-w-2xl border-t border-white/10 pt-8 lg:mt-16">
          <CorridorStrip />
        </div>
      </div>
    </section>
  );
}
