#!/usr/bin/env bash
# Builds public/video/hero.mp4, the hero background reel.
#
# Writes the stills reel. To actually use it, point HeroVideo's `src` in
# src/components/Hero.tsx at /video/hero-stills-reel.
#
# This is a stand-in assembled from the company's own stills: each image gets a
# slow zoom, the clips cross-fade, and the tail fades back into the opening so
# the loop is close to seamless. Replace it with real footage when filming is
# done. Same path, same treatment expected (silent, ~15-20s, 1600x900).
#
# Usage: ./scripts/build-hero-video.sh
set -euo pipefail

cd "$(dirname "$0")/.."
IMG=public/images
OUT=public/video/hero-stills-reel.mp4
TMP=$(mktemp -d)
trap 'rm -rf "$TMP"' EXIT

SCALE="scale=2400:1350:force_original_aspect_ratio=increase,crop=2400:1350"
COMMON="format=yuv420p"

clip() { # clip <source> <zoom expression> <x expression> <output>
  ffmpeg -loglevel error -y -i "$IMG/$1.webp" \
    -vf "$SCALE,zoompan=z='$2':d=125:x='$3':y='ih/2-(ih/zoom/2)':s=1600x900:fps=25,$COMMON" \
    -an -c:v libx264 -crf 20 -preset medium "$TMP/$4.mp4"
}

clip quay-clearance    "min(zoom+0.0006,1.12)"                  "iw/2-(iw/zoom/2)"      c1
clip port-truck-convoy "if(lte(on,1),1.12,max(zoom-0.0006,1.0))" "iw/2-(iw/zoom/2)"     c2
clip port-operations   "min(zoom+0.0005,1.1)"                   "(iw-iw/zoom)*(on/125)" c3
clip vessel-arrival    "min(zoom+0.0006,1.12)"                  "iw/2-(iw/zoom/2)"      c4

# Cross-fade the four clips into one 17s reel.
ffmpeg -loglevel error -y -i "$TMP/c1.mp4" -i "$TMP/c2.mp4" -i "$TMP/c3.mp4" -i "$TMP/c4.mp4" \
  -filter_complex "[0][1]xfade=transition=fade:duration=1:offset=4[a];\
[a][2]xfade=transition=fade:duration=1:offset=8[b];\
[b][3]xfade=transition=fade:duration=1:offset=12,$COMMON[v]" \
  -map "[v]" -an -c:v libx264 -crf 20 -preset medium "$TMP/base.mp4"

# Fade the tail back into the opening so the loop point is soft.
ffmpeg -loglevel error -y -i "$TMP/base.mp4" -t 0.6 -an -c:v libx264 -crf 20 -preset medium "$TMP/head.mp4"
mkdir -p "$(dirname "$OUT")"
ffmpeg -loglevel error -y -i "$TMP/base.mp4" -i "$TMP/head.mp4" \
  -filter_complex "[0][1]xfade=transition=fade:duration=0.6:offset=16.4,$COMMON[v]" \
  -map "[v]" -an -c:v libx264 -crf 29 -preset slow -movflags +faststart "$OUT"

echo "Wrote $OUT ($(du -h "$OUT" | cut -f1))"
