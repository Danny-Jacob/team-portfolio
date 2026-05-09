import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { gsap, ScrollTrigger } from "../animations/gsap";

export function ShowreelSection() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax video scale
      gsap.fromTo(
        videoRef.current,
        { scale: 0.85, borderRadius: "40px" },
        {
          scale: 1,
          borderRadius: "0px",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "top top",
            scrub: 1,
          },
        }
      );

      // Text reveal
      const words = textRef.current?.querySelectorAll(".word");
      gsap.fromTo(
        words,
        { opacity: 0.1 },
        {
          opacity: 1,
          stagger: 0.1,
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 70%",
            end: "bottom 50%",
            scrub: 1,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-32"
      style={{ background: "#030e11" }}
    >
      {/* Video container */}
      <div
        ref={videoRef}
        className="relative w-full aspect-video overflow-hidden"
        style={{ background: "#071820" }}
      >
        {/* Placeholder video background */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, #094550 0%, #071820 50%, #0c2430 100%)",
          }}
        />

        {/* Animated gradient overlay */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background: "radial-gradient(ellipse at center, rgba(223,147,85,0.2) 0%, transparent 70%)",
          }}
        />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(223,147,85,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(223,147,85,0.3) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Center play button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-32 md:h-32 rounded-full flex items-center justify-center z-20 cursor-pointer group"
          style={{
            background: "rgba(223,147,85,0.9)",
            boxShadow: "0 0 60px rgba(223,147,85,0.5)",
          }}
        >
          <Play size={32} className="text-white ml-1 group-hover:scale-110 transition-transform" />
        </motion.button>

        {/* Cinematic text overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <h2
            ref={textRef}
            className="text-4xl md:text-6xl lg:text-8xl font-bold text-center leading-tight px-6"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            <span className="word inline-block" style={{ color: "rgba(232,220,200,0.15)" }}>We </span>
            <span className="word inline-block" style={{ color: "rgba(232,220,200,0.15)" }}>create </span>
            <span className="word inline-block" style={{ color: "rgba(232,220,200,0.15)" }}>experiences </span>
            <br className="hidden md:block" />
            <span className="word inline-block" style={{ color: "rgba(232,220,200,0.15)" }}>that </span>
            <span className="word inline-block" style={{ color: "rgba(223,147,85,0.3)" }}>move </span>
            <span className="word inline-block" style={{ color: "rgba(232,220,200,0.15)" }}>people.</span>
          </h2>
        </div>

        {/* Corner decorations */}
        <div className="absolute top-8 left-8 flex flex-col gap-2">
          <div className="w-8 h-px bg-[#DF9355]/50" />
          <div className="w-4 h-px bg-[#DF9355]/30" />
        </div>
        <div className="absolute bottom-8 right-8 flex flex-col items-end gap-2">
          <div className="w-8 h-px bg-[#DF9355]/50" />
          <div className="w-4 h-px bg-[#DF9355]/30" />
        </div>

        {/* Side labels */}
        <div
          className="absolute left-8 top-1/2 -translate-y-1/2 text-xs uppercase tracking-widest hidden lg:block"
          style={{ color: "rgba(223,147,85,0.5)", writingMode: "vertical-rl", transform: "rotate(180deg) translateY(50%)" }}
        >
          Showreel 2026
        </div>
        <div
          className="absolute right-8 top-1/2 -translate-y-1/2 text-xs uppercase tracking-widest hidden lg:block"
          style={{ color: "rgba(223,147,85,0.5)", writingMode: "vertical-rl" }}
        >
          Play Video
        </div>
      </div>
    </section>
  );
}
