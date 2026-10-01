import Image from "next/image";
import { regionMap } from "@/lib/regionMap";
import { corridors } from "@/lib/site";

/**
 * East & Central Africa, drawn from Natural Earth 50m boundaries
 * (see scripts/generate-region-map.py). Tanzania is the hub; the markets our
 * corridors serve are highlighted, with the road routes drawn out of
 * Dar es Salaam Port.
 */

const hub = regionMap.cities.find((c) => c.hub)!;
const destinations = regionMap.cities.filter((c) => !c.hub);

// Label nudges for countries too small (or too clipped) to hold their own label.
const labelOverrides: Record<
  string,
  { x: number; y: number; anchor: "start" | "middle" | "end"; leader?: boolean }
> = {
  Rwanda: { x: 452, y: 186, anchor: "end", leader: true },
  Burundi: { x: 446, y: 268, anchor: "end", leader: true },
  "DR Congo": { x: 305, y: 338, anchor: "middle" },
  Uganda: { x: 545, y: 98, anchor: "middle" },
  Malawi: { x: 700, y: 548, anchor: "start", leader: true },
  Tanzania: { x: 655, y: 470, anchor: "middle" },
};

function arc(x1: number, y1: number, x2: number, y2: number) {
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.hypot(dx, dy) || 1;
  // Bow each route away from the straight line so overlapping corridors stay legible.
  const bow = len * 0.16;
  const cxp = mx + (-dy / len) * bow;
  const cyp = my + (dx / len) * bow;
  return `M${x1} ${y1} Q${cxp.toFixed(1)} ${cyp.toFixed(1)} ${x2} ${y2}`;
}

export default function RegionalMap() {
  return (
    <figure className="m-0">
      <div className="relative overflow-hidden border border-steel-200 bg-[#eef3f7]">
        <svg
          viewBox={`0 0 ${regionMap.width} ${regionMap.height}`}
          className="block w-full"
          role="img"
          aria-label="Map of East and Central Africa showing road corridors from Dar es Salaam Port in Tanzania to Uganda, Rwanda, Burundi, DR Congo, Zambia and Malawi"
        >
          <defs>
            <linearGradient id="tzFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--color-navy-700)" />
              <stop offset="100%" stopColor="var(--color-navy-900)" />
            </linearGradient>
            <filter id="hubGlow" x="-120%" y="-120%" width="340%" height="340%">
              <feGaussianBlur stdDeviation="9" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <rect width={regionMap.width} height={regionMap.height} fill="#e3ecf3" />

          {/* Neighbouring countries, kept quiet */}
          <g fill="#d7dde5" stroke="#eef3f7" strokeWidth="1.2">
            {regionMap.context.map((c) => (
              <path key={c.name} d={c.d} />
            ))}
          </g>

          {/* Markets served by our corridors */}
          <g stroke="#ffffff" strokeWidth="1.4">
            {regionMap.served.map((c) =>
              c.name === "Tanzania" ? null : (
                <path key={c.name} d={c.d} fill="var(--color-navy-200)" />
              ),
            )}
          </g>

          {/* Tanzania: the gateway */}
          {regionMap.served
            .filter((c) => c.name === "Tanzania")
            .map((c) => (
              <path
                key={c.name}
                d={c.d}
                fill="url(#tzFill)"
                stroke="var(--color-ember-500)"
                strokeWidth="1.6"
              />
            ))}

          {/* Corridors out of the port */}
          <g fill="none" stroke="var(--color-ember-500)" strokeLinecap="round">
            {destinations.map((city) => (
              <path
                key={city.name}
                d={arc(hub.x, hub.y, city.x, city.y)}
                strokeWidth="2"
                strokeDasharray="7 7"
                opacity="0.85"
              />
            ))}
          </g>

          {/* Destination cities */}
          <g>
            {destinations.map((city) => (
              <g key={city.name}>
                <circle cx={city.x} cy={city.y} r="5" fill="#ffffff" />
                <circle cx={city.x} cy={city.y} r="3" fill="var(--color-navy-800)" />
                <text
                  x={city.x}
                  y={city.y - 12}
                  textAnchor="middle"
                  className="map-city"
                  fontWeight="600"
                  fill="var(--color-navy-900)"
                  stroke="#eef3f7"
                  strokeWidth="3"
                  paintOrder="stroke"
                >
                  {city.name}
                </text>
              </g>
            ))}
          </g>

          {/* Country labels */}
          <g>
            {regionMap.served.map((c) => {
              const o = labelOverrides[c.name];
              const x = o?.x ?? c.lx;
              const y = o?.y ?? c.ly;
              const isTz = c.name === "Tanzania";
              return (
                <g key={c.name}>
                  {o?.leader && (
                    <line
                      x1={x + 6}
                      y1={y - 4}
                      x2={c.lx}
                      y2={c.ly}
                      stroke="var(--color-navy-600)"
                      strokeWidth="1"
                      opacity="0.6"
                    />
                  )}
                  {o?.leader && (
                    <circle cx={c.lx} cy={c.ly} r="2.5" fill="var(--color-navy-600)" />
                  )}
                  <text
                    x={x}
                    y={y}
                    textAnchor={o?.anchor ?? "middle"}
                    className={isTz ? "map-country-hub" : "map-country"}
                    fontWeight="700"
                    letterSpacing={isTz ? "1.5" : "0"}
                    fill={isTz ? "#ffffff" : "var(--color-navy-800)"}
                    stroke={isTz ? "none" : "#ffffff"}
                    strokeWidth="3"
                    paintOrder="stroke"
                  >
                    {isTz ? c.name.toUpperCase() : c.name}
                  </text>
                </g>
              );
            })}
          </g>

          {/* The hub itself */}
          <g filter="url(#hubGlow)">
            <circle cx={hub.x} cy={hub.y} r="11" fill="var(--color-ember-500)" opacity="0.28" />
            <circle cx={hub.x} cy={hub.y} r="6" fill="var(--color-ember-500)" />
            <circle cx={hub.x} cy={hub.y} r="6" fill="none" stroke="#ffffff" strokeWidth="2" />
          </g>
          <text
            x={hub.x - 14}
            y={hub.y + 4}
            textAnchor="end"
            className="map-port"
            fontWeight="700"
            fill="#ffffff"
            stroke="var(--color-navy-900)"
            strokeWidth="3.5"
            paintOrder="stroke"
          >
            Dar es Salaam Port
          </text>
        </svg>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-steel-200 bg-white px-5 py-3">
          <span className="flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-steel-600">
            <span className="h-3 w-3 bg-navy-800" /> Head office &amp; port
          </span>
          <span className="flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-steel-600">
            <span className="h-3 w-3 bg-navy-200" /> Markets served
          </span>
          <span className="flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-steel-600">
            <span className="h-0.5 w-6 bg-ember-500" /> Road corridors
          </span>
        </div>
      </div>

      <ul className="mt-6 grid gap-x-8 gap-y-1 sm:grid-cols-2">
        {corridors.map((c) => (
          <li
            key={c.country}
            className="flex items-center gap-3 border-b border-steel-200 py-3 last:border-0 sm:last:border-b"
          >
            <Image
              src={`/flags/${c.flag}.svg`}
              alt=""
              width={24}
              height={18}
              className="h-[18px] w-6 shrink-0 border border-black/10 object-cover"
            />
            <span className="text-sm font-semibold text-navy-900">{c.country}</span>
            <span className="ml-auto text-right text-xs text-steel-600">{c.note}</span>
          </li>
        ))}
      </ul>
    </figure>
  );
}
