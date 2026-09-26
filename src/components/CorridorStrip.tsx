const stops = ["Dar es Salaam", "Customs Clearance", "Inland Transport", "Destination"];

/** The four-stop line that runs under the hero: port to final destination. */
export default function CorridorStrip({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const dark = tone === "dark";
  return (
    <ol className="flex flex-wrap items-start gap-x-2 gap-y-6">
      {stops.map((stop, i) => (
        <li key={stop} className="flex min-w-[7.5rem] flex-1 items-start gap-2">
          <div className="w-full">
            <div className="flex items-center">
              <span
                className={`grid h-3.5 w-3.5 shrink-0 place-items-center rounded-full border-2 ${
                  i === 0
                    ? "border-ember-500 bg-ember-500"
                    : dark
                      ? "border-white/40"
                      : "border-navy-200"
                }`}
              />
              <span
                className={`h-px flex-1 ${
                  dark
                    ? "bg-gradient-to-r from-white/40 to-white/15"
                    : "bg-navy-100"
                } ${i === stops.length - 1 ? "opacity-0" : ""}`}
              />
            </div>
            <p
              className={`mt-3 pr-3 text-[0.7rem] font-semibold uppercase leading-snug tracking-[0.14em] ${
                dark ? "text-navy-100/80" : "text-steel-600"
              }`}
            >
              {stop}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
