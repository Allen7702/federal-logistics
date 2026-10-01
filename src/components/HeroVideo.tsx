"use client";

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";

type NetworkInformation = { saveData?: boolean; effectiveType?: string };

const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";
const WIDE_ENOUGH = "(min-width: 768px)";

function shouldPlay() {
  if (window.matchMedia(REDUCED_MOTION).matches) return false;
  if (!window.matchMedia(WIDE_ENOUGH).matches) return false;

  const connection = (navigator as Navigator & { connection?: NetworkInformation })
    .connection;
  if (connection?.saveData) return false;
  if (connection?.effectiveType && /2g|3g/.test(connection.effectiveType)) return false;

  return true;
}

/**
 * Background footage for the hero. The still image underneath is always
 * rendered, and the video only mounts, and only fades in, when it is
 * appropriate and actually playable:
 *
 *  - skipped on phones (the still reads better and costs no data)
 *  - skipped when the visitor prefers reduced motion
 *  - skipped on save-data or 2G/3G connections
 *  - falls back silently to the still if the file is missing or fails
 */
export default function HeroVideo({ src, poster }: { src: string; poster: string }) {
  const [ready, setReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const subscribe = useCallback((onChange: () => void) => {
    const queries = [window.matchMedia(REDUCED_MOTION), window.matchMedia(WIDE_ENOUGH)];
    queries.forEach((q) => q.addEventListener("change", onChange));
    return () => queries.forEach((q) => q.removeEventListener("change", onChange));
  }, []);

  const play = useSyncExternalStore(subscribe, shouldPlay, () => false);

  useEffect(() => {
    if (!play) return;
    const video = videoRef.current;
    if (!video) return;
    // React sets `muted` as a property only; iOS Safari wants the attribute too,
    // and an unmuted video is never allowed to autoplay.
    video.muted = true;
    video.defaultMuted = true;
    // Some browsers refuse autoplay anyway; the still image simply stays up.
    void video.play().catch(() => setReady(false));
  }, [play]);

  if (!play) return null;

  return (
    <video
      ref={videoRef}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-hidden
      tabIndex={-1}
      onLoadedData={() => setReady(true)}
      onCanPlay={() => setReady(true)}
      onError={() => setReady(false)}
      className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-out-quint ${
        ready ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* AV1 first: sharper at a smaller size. Browsers that can't decode it
          skip to the H.264 file. */}
      <source src={`${src}.webm`} type='video/webm; codecs="av01.0.08M.08"' />
      <source src={`${src}.mp4`} type="video/mp4" />
    </video>
  );
}
