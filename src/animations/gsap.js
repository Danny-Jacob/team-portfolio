import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };

/**
 * Fade up animation with scroll trigger
 */
export function gsapFadeUp(targets, options = {}) {
  return gsap.fromTo(
    targets,
    { opacity: 0, y: 60 },
    {
      opacity: 1,
      y: 0,
      duration: options.duration || 1,
      stagger: options.stagger || 0.15,
      ease: options.ease || "power3.out",
      scrollTrigger: options.scrollTrigger || null,
      delay: options.delay || 0,
    }
  );
}

/**
 * Cinematic text reveal — splits by chars, clips each
 */
export function gsapRevealText(targets, options = {}) {
  return gsap.fromTo(
    targets,
    { opacity: 0, y: 80, skewY: 2 },
    {
      opacity: 1,
      y: 0,
      skewY: 0,
      duration: options.duration || 1.2,
      stagger: options.stagger || 0.08,
      ease: "expo.out",
      scrollTrigger: options.scrollTrigger || null,
      delay: options.delay || 0,
    }
  );
}

/**
 * Clip-path image reveal (left to right)
 */
export function gsapClipReveal(target, options = {}) {
  return gsap.fromTo(
    target,
    { clipPath: "inset(0 100% 0 0)" },
    {
      clipPath: "inset(0 0% 0 0)",
      duration: options.duration || 1.4,
      ease: "expo.inOut",
      scrollTrigger: options.scrollTrigger || null,
      delay: options.delay || 0,
    }
  );
}

/**
 * Animate a progress line from scaleY 0 to 1 (top to bottom)
 */
export function gsapDrawLine(target, scrollTriggerConfig = {}) {
  return gsap.fromTo(
    target,
    { scaleY: 0, transformOrigin: "top center" },
    {
      scaleY: 1,
      ease: "none",
      scrollTrigger: {
        scrub: 1,
        ...scrollTriggerConfig,
      },
    }
  );
}

/**
 * Counter animation for number stats
 */
export function gsapCounter(target, endValue, options = {}) {
  const obj = { val: 0 };
  return gsap.to(obj, {
    val: endValue,
    duration: options.duration || 2,
    ease: "power2.out",
    scrollTrigger: options.scrollTrigger || null,
    onUpdate() {
      target.textContent =
        options.prefix ? options.prefix + Math.round(obj.val) + (options.suffix || "") :
        Math.round(obj.val) + (options.suffix || "");
    },
  });
}
