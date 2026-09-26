import type { ReactNode } from "react";

export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "light",
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p
        className={`eyebrow rule-ember ${dark ? "text-ember-400" : "text-ember-600"} ${
          align === "center" ? "[&::after]:mx-auto" : ""
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-5 font-display text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl ${
          dark ? "text-white" : "text-navy-900"
        }`}
      >
        {title}
      </h2>
      {intro ? (
        <p
          className={`mt-5 text-base leading-relaxed ${
            dark ? "text-navy-100/75" : "text-steel-600"
          }`}
        >
          {intro}
        </p>
      ) : null}
    </div>
  );
}
