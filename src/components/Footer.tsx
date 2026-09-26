import Image from "next/image";
import Link from "next/link";
import { company, services } from "@/lib/site";

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/clearing-and-forwarding", label: "Clearing & Forwarding" },
  { href: "/services", label: "Our Services" },
  { href: "/industries", label: "Industries" },
  { href: "/network", label: "Our Network" },
  { href: "/projects", label: "Projects" },
  { href: "/testimonials", label: "Client Trust" },
  { href: "/quote", label: "Request a Quote" },
];

export default function Footer() {
  return (
    <footer className="blueprint bg-navy-950 text-navy-100">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/logo-federal-white.png"
                alt=""
                width={491}
                height={502}
                className="h-10 w-10 object-contain"
              />
              <span className="leading-tight">
                <span className="block font-display text-lg font-bold text-white">
                  Federal Logistics
                </span>
                <span className="block text-[0.6rem] uppercase tracking-[0.28em] text-navy-200">
                  Group Limited
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-navy-100/70">
              A fully integrated supply chain and logistics management firm headquartered in
              Dar es Salaam — customs clearing and forwarding, freight, warehousing and
              general supplies across East and Central Africa.
            </p>
            <p className="mt-5 text-[0.7rem] uppercase tracking-[0.28em] text-ember-400">
              {company.tagline}
            </p>
          </div>

          <div>
            <h3 className="eyebrow text-white">Quick Links</h3>
            <ul className="mt-5 space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-navy-100/70 transition-colors hover:text-ember-400"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow text-white">Services</h3>
            <ul className="mt-5 space-y-2.5">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services#${s.slug}`}
                    className="text-sm text-navy-100/70 transition-colors hover:text-ember-400"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services#general-supplies"
                  className="text-sm text-navy-100/70 transition-colors hover:text-ember-400"
                >
                  General Supplies & Procurement
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="eyebrow text-white">Contact</h3>
            <address className="mt-5 space-y-3 text-sm not-italic text-navy-100/70">
              <p>
                {company.address.line1}
                <br />
                {company.address.line2}
                <br />
                {company.address.city}, {company.address.country}
              </p>
              <p>
                <a href={company.phoneHref} className="hover:text-ember-400">
                  {company.phone}
                </a>
              </p>
              <p>
                <a href={company.emailHref} className="break-all hover:text-ember-400">
                  {company.email}
                </a>
              </p>
              <p>
                <a
                  href={company.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-ember-400"
                >
                  Instagram {company.instagramHandle}
                </a>
              </p>
            </address>
            <Link
              href="/quote"
              className="mt-6 inline-flex items-center gap-2 bg-ember-500 px-5 py-3 text-[0.8rem] font-semibold text-white transition-colors hover:bg-ember-600"
            >
              Request a Quote <span aria-hidden>→</span>
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-navy-100/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-ember-400">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-ember-400">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
