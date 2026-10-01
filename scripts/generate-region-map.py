"""Generate src/lib/regionMap.ts: the East & Central Africa map paths.

Source data: Natural Earth 50m boundaries, via the world-atlas TopoJSON build.
Run from the project root:

    python3 scripts/generate-region-map.py

The source file is downloaded to scripts/.cache/ on first run.
"""

import json, math, os, urllib.request

SRC_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json"
CACHE = os.path.join(os.path.dirname(__file__), ".cache", "countries-50m.json")
OUT = os.path.join(os.path.dirname(__file__), "..", "src", "lib", "regionMap.ts")

if not os.path.exists(CACHE):
    os.makedirs(os.path.dirname(CACHE), exist_ok=True)
    urllib.request.urlretrieve(SRC_URL, CACHE)

TOPO = json.load(open(CACHE))
SCALE, TRANS = TOPO['transform']['scale'], TOPO['transform']['translate']
ARCS = TOPO['arcs']

def decode(arc):
    x = y = 0
    out = []
    for dx, dy in arc:
        x += dx; y += dy
        out.append((x * SCALE[0] + TRANS[0], y * SCALE[1] + TRANS[1]))
    return out

DEC = [decode(a) for a in ARCS]

def ring(idxs):
    pts = []
    for i in idxs:
        a = DEC[~i][::-1] if i < 0 else DEC[i]
        pts.extend(a if not pts else a[1:])
    return pts

def rings(geom):
    t = geom['type']
    if t == 'Polygon':
        return [ring(r) for r in geom['arcs']]
    if t == 'MultiPolygon':
        return [ring(r) for poly in geom['arcs'] for r in poly]
    return []

# --- region + projection -------------------------------------------------
LON0, LON1 = 11.0, 44.5
LAT0, LAT1 = -19.5, 6.0
W, H = 900.0, 700.0
LATC = math.radians((LAT0 + LAT1) / 2)

def merc(lat):
    lat = max(min(lat, 84.0), -84.0)
    return math.degrees(math.log(math.tan(math.pi / 4 + math.radians(lat) / 2)))

YTOP, YBOT = merc(LAT1), merc(LAT0)        # mercator y grows northward
SPAN = YTOP - YBOT
SX = W / (LON1 - LON0)
SY = H / SPAN
S = min(SX, SY)
OX = (W - (LON1 - LON0) * S) / 2
OY = (H - SPAN * S) / 2

def project(lon, lat):
    return ((lon - LON0) * S + OX, (YTOP - merc(lat)) * S + OY)

# --- Douglas-Peucker -----------------------------------------------------
def rdp(pts, eps):
    if len(pts) < 3:
        return pts
    keep = [False] * len(pts)
    keep[0] = keep[-1] = True
    stack = [(0, len(pts) - 1)]
    while stack:
        a, b = stack.pop()
        if b - a < 2:
            continue
        ax, ay = pts[a]; bx, by = pts[b]
        dx, dy = bx - ax, by - ay
        norm = math.hypot(dx, dy) or 1e-9
        best, bi = -1.0, -1
        for i in range(a + 1, b):
            px, py = pts[i]
            d = abs(dy * px - dx * py + bx * ay - by * ax) / norm
            if d > best:
                best, bi = d, i
        if best > eps:
            keep[bi] = True
            stack.append((a, bi)); stack.append((bi, b))
    return [p for p, k in zip(pts, keep) if k]

def simplify_ring(pts, eps):
    """RDP on a closed ring: split at the point farthest from the start first,
    because a degenerate start==end segment defeats plain Douglas-Peucker."""
    if len(pts) > 1 and pts[0] == pts[-1]:
        pts = pts[:-1]
    if len(pts) < 4:
        return pts
    x0, y0 = pts[0]
    m = max(range(1, len(pts)), key=lambda i: (pts[i][0] - x0) ** 2 + (pts[i][1] - y0) ** 2)
    first = rdp(pts[: m + 1], eps)
    second = rdp(pts[m:] + [pts[0]], eps)
    return first[:-1] + second[:-1]


MARGIN = 80
def clipped_out(pts):
    return all(
        x < -MARGIN or x > W + MARGIN or y < -MARGIN or y > H + MARGIN
        for x, y in pts
    )

def path_for(geom, eps):
    out = []
    for r in rings(geom):
        pts = [project(lon, lat) for lon, lat in r]
        if clipped_out(pts):
            continue
        pts = simplify_ring(pts, eps)
        if len(pts) < 3:
            continue
        d = "M" + " ".join(f"{x:.1f} {y:.1f}" for x, y in pts) + "Z"
        out.append(d.replace("M", "M", 1))
    return "".join(out)

SERVED = ["Tanzania", "Zambia", "Dem. Rep. Congo", "Rwanda", "Burundi", "Uganda", "Malawi"]
LABELS = {"Dem. Rep. Congo": "DR Congo"}

geoms = {g['properties']['name']: g for g in TOPO['objects']['countries']['geometries']}

served, context = [], []
for name, g in geoms.items():
    pts_all = [project(lon, lat) for r in rings(g) for lon, lat in r]
    if not pts_all or clipped_out(pts_all):
        continue
    is_served = name in SERVED
    d = path_for(g, 0.45 if is_served else 0.9)
    if not d:
        continue
    entry = {"name": LABELS.get(name, name), "d": d}
    if is_served:
        # Label anchor: centroid of the country's largest projected ring.
        big = max(
            ([project(lo, la) for lo, la in r] for r in rings(g)),
            key=lambda pts: abs(
                sum(
                    pts[i][0] * pts[(i + 1) % len(pts)][1]
                    - pts[(i + 1) % len(pts)][0] * pts[i][1]
                    for i in range(len(pts))
                )
            ),
        )
        entry["lx"] = round(sum(p[0] for p in big) / len(big), 1)
        entry["ly"] = round(sum(p[1] for p in big) / len(big), 1)
        served.append(entry)
    else:
        context.append(entry)

order = {n: i for i, n in enumerate([LABELS.get(s, s) for s in SERVED])}
served.sort(key=lambda c: order[c["name"]])

CITIES = [
    ("Dar es Salaam", 39.28, -6.82, True),
    ("Kampala", 32.58, 0.32, False),
    ("Kigali", 30.06, -1.94, False),
    ("Bujumbura", 29.36, -3.38, False),
    ("Lubumbashi", 27.48, -11.66, False),
    ("Lusaka", 28.28, -15.41, False),
    ("Lilongwe", 33.78, -13.97, False),
]
cities = [
    {"name": n, "x": round(project(lo, la)[0], 1), "y": round(project(lo, la)[1], 1), "hub": h}
    for n, lo, la, h in CITIES
]

payload = {
    "width": int(W), "height": int(H),
    "served": served, "context": context, "cities": cities,
}
out = "// Generated by scripts/generate-region-map.py from Natural Earth 50m data.\n// Do not edit by hand.\n"
out += "export const regionMap = " + json.dumps(payload, separators=(",", ":")) + " as const;\n"
open(OUT, 'w').write(out)
print("served:", [c["name"] for c in served])
print("context:", len(context), "countries")
print("bytes:", len(out))
