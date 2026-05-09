import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { ScrollTrigger } from "../animations/gsap";

let lenisInstance = null;

export function getLenis() {
  return lenisInstance;
}

/**
 * Initializes Lenis smooth scroll and syncs it with GSAP ScrollTrigger.
 * Call once at the top of your app (App.jsx or a layout wrapper).
 */
export function useLenis() {
  const rafRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenisInstance = lenis;
    window.lenis = lenis; // Global access for scroll control

    // Sync Lenis with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    function raf(time) {
      lenis.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    }

    rafRef.current = requestAnimationFrame(raf);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      lenis.destroy();
      lenisInstance = null;
      window.lenis = null;
    };
  }, []);
}
