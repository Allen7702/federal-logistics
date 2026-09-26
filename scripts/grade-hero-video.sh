#!/usr/bin/env bash
# Builds the hero background reel from the client's original 1080p drone
# footage, in a single encode from the camera files:
#
#   public/video/<name>.webm  AV1 — smaller and sharper, used where supported
#   public/video/<name>.mp4   H.264 fallback
#
# Cut: four 7s shots with 2s cross-fades, then a 1.2s tail-to-head fade so the
# loop is soft. Every frame is cropped 1920x880 from y=200, which drops the TPA
# crest in the top band with no upscaling (see README "Hero video").
#
# Grade: lifts the footage out of its flat teal look — a touch more exposure
# and contrast, stronger saturation, a warmer balance, then mild sharpening.
#
# Usage: ./scripts/grade-hero-video.sh [source-dir] [output-name]
#   defaults: ~/Videos/Federal -> public/video/hero-port-hd-v3
set -euo pipefail

cd "$(dirname "$0")/.."
SRC=${1:-$HOME/Videos/Federal}
OUT=public/video/${2:-hero-port-hd-v3}
TMP=$(mktemp -d)
trap 'rm -rf "$TMP"' EXIT

PREP="fps=25,crop=1920:880:0:200,setsar=1,format=yuv420p"
GRADE="eq=brightness=0.04:contrast=1.06:saturation=1.28:gamma=1.06,\
colorbalance=rs=0.04:bs=-0.04:rm=0.03:bm=-0.03,\
unsharp=5:5:0.4,format=yuv420p"

# Assemble the graded cut losslessly, so the only lossy step is the final encode.
ffmpeg -loglevel error -y -i "$SRC/BANDARI_2.mp4" -i "$SRC/BANDARI_3.mp4" -filter_complex "\
[0:v]trim=1:8,setpts=PTS-STARTPTS,$PREP[s1];\
[1:v]trim=3:10,setpts=PTS-STARTPTS,$PREP[s2];\
[0:v]trim=19:26,setpts=PTS-STARTPTS,$PREP[s3];\
[1:v]trim=26:33,setpts=PTS-STARTPTS,$PREP[s4];\
[s1][s2]xfade=transition=fade:duration=2:offset=5[a];\
[a][s3]xfade=transition=fade:duration=2:offset=10[b];\
[b][s4]xfade=transition=fade:duration=2:offset=15,$GRADE[v]" \
  -map "[v]" -an -c:v libx264 -qp 0 -preset ultrafast "$TMP/base.mkv"

# Fade the tail back into the opening so the loop point is soft.
ffmpeg -loglevel error -y -i "$TMP/base.mkv" -t 1.2 -c:v libx264 -qp 0 -preset ultrafast "$TMP/head.mkv"
ffmpeg -loglevel error -y -i "$TMP/base.mkv" -i "$TMP/head.mkv" -filter_complex \
  "[0][1]xfade=transition=fade:duration=1.2:offset=20.8,format=yuv420p[v]" \
  -map "[v]" -an -c:v libx264 -qp 0 -preset ultrafast "$TMP/reel.mkv"

mkdir -p "$(dirname "$OUT")"
ffmpeg -loglevel error -y -i "$TMP/reel.mkv" -an \
  -c:v libx264 -profile:v high -crf 23 -preset slow -tune film -maxrate 3M -bufsize 6M \
  -movflags +faststart "$OUT.mp4"
ffmpeg -loglevel error -y -i "$TMP/reel.mkv" -an \
  -c:v libsvtav1 -crf 46 -preset 4 -g 250 "$OUT.webm"

du -h "$OUT.mp4" "$OUT.webm"
