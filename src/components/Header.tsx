"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { company, nav } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-white/10 bg-navy-900/95 backdrop-blur-md"
          : "border-transparent bg-navy-900"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center gap-6 px-4 sm:px-6 lg:px-10">
        <Link href="/" className="flex shrink-0 items-center gap-3">
          <Image
            src="/logo-mark.png"
            alt=""
            width={493}
            height={471}
            className="h-9 w-9 object-contain"
            priority
          />
          <span className="leading-tight">
            <span className="block font-display text-[1.05rem] font-bold tracking-tight text-white">
              Federal Logistics
            </span>
            <span className="block text-[0.6rem] font-medium uppercase tracking-[0.28em] text-navy-200">
              Group Limited
            </span>
          </span>
        </Link>

        <nav className="ml-auto hidden items-center gap-1 lg:flex">
          {nav.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-3 py-2 text-[0.82rem] font-medium transition-colors ${
                  active ? "text-white" : "text-navy-100/80 hover:text-white"
                }`}
              >
                {item.label}
                <span
                  className={`absolute inset-x-3 -bottom-0.5 h-0.5 bg-ember-500 transition-transform duration-300 ease-out-quint ${
                    active ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:ml-0">
          <a
            href={company.phoneHref}
            className="hidden text-sm font-semibold text-white xl:block"
          >
            {company.phone}
          </a>
          <Link
            href="/quote"
            className="hidden items-center gap-2 bg-ember-500 px-5 py-2.5 text-[0.82rem] font-semibold text-white transition-colors hover:bg-ember-600 sm:inline-flex"
          >
            Request a Quote
            <span aria-hidden>→</span>
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-10 w-10 place-items-center text-white lg:hidden"
          >
            <span className="relative block h-4 w-6">
              <span
                className={`absolute left-0 h-0.5 w-6 bg-white transition-all duration-300 ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 h-0.5 w-6 bg-white transition-opacity duration-200 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 h-0.5 w-6 bg-white transition-all duration-300 ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t border-white/10 bg-navy-900 transition-[max-height] duration-400 ease-out-quint lg:hidden ${
          open ? "max-h-[32rem]" : "max-h-0"
        }`}
      >
        <nav className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block border-b border-white/5 py-3 text-sm font-medium text-navy-100 last:border-0"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/quote"
            onClick={() => setOpen(false)}
            className="mt-4 block bg-ember-500 px-5 py-3 text-center text-sm font-semibold text-white"
          >
            Request a Quote
          </Link>
          <a
            href={company.phoneHref}
            className="mt-2 block py-3 text-center text-sm font-semibold text-white"
          >
            {company.phone}
          </a>
        </nav>
      </div>
    </header>
  );
}
