import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { gsap, ScrollTrigger } from "../animations/gsap";
import { MagneticButton } from "../components/ui/MagneticButton";
import { Link } from "react-router-dom";

export function FinalCTA() {
  const sectionRef = useRef(null);
  const headlineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Headline word reveal
      const words = headlineRef.current?.querySelectorAll(".word");
      gsap.fromTo(
        words,
        { opacity: 0, y: 60, rotateX: -40 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 1,
          stagger: 0.1,
          ease: "expo.out",
          scrollTrigger: {
            trigger: headlineRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-40 overflow-hidden"
    >
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 animate-gradient"
        style={{
          background: "linear-gradient(135deg, #094550 0%, #0c2430 25%, #071820 50%, #0c2430 75%, #094550 100%)",
          backgroundSize: "400% 400%",
        }}
      />

      {/* Radial glow from center */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(223,147,85,0.15) 0%, transparent 50%)",
        }}
      />

      {/* Floating orbs */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl pointer-events-none"
        style={{ background: "rgba(223,147,85,0.1)" }}
      />
      <motion.div
        animate={{
          y: [0, 40, 0],
          x: [0, -30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl pointer-events-none"
        style={{ background: "rgba(210,115,33,0.1)" }}
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 right-1/3 w-40 h-40 rounded-full blur-2xl pointer-events-none"
        style={{ background: "rgba(164,73,42,0.15)" }}
      />

      {/* Content */}
      <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm uppercase tracking-widest mb-8"
          style={{ color: "#DF9355" }}
        >
          Ready to grow?
        </motion.p>

        {/* Headline */}
        <h2
          ref={headlineRef}
          className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] mb-10"
          style={{ fontFamily: "Syne, sans-serif", perspective: "1000px" }}
        >
          <span className="word inline-block" style={{ color: "#e8dcc8" }}>Ready </span>
          <span className="word inline-block" style={{ color: "#e8dcc8" }}>to </span>
          <span className="word inline-block bg-gradient-to-r from-[#DF9355] via-[#D27321] to-[#A4492A] bg-clip-text text-transparent">dominate</span>
          <br />
          <span className="word inline-block" style={{ color: "#e8dcc8" }}>your </span>
          <span className="word inline-block bg-gradient-to-r from-[#DF9355] via-[#D27321] to-[#A4492A] bg-clip-text text-transparent">market?</span>
        </h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
          style={{ color: "rgba(232,220,200,0.7)" }}
        >
          Let's talk about how we can transform your brand, 
          amplify your reach, and accelerate your growth. 
          No fluff. Just results.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <MagneticButton as={Link} to="/contact" variant="gold" className="text-base px-10 py-5">
            Book a Strategy Call
            <ArrowRight size={18} className="ml-2" />
          </MagneticButton>
          <MagneticButton as={Link} to="/projects" variant="outline" className="text-base px-10 py-5">
            View Our Work
          </MagneticButton>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8"
        >
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2"
                  style={{
                    background: `linear-gradient(135deg, ${["#DF9355", "#D27321", "#226A76", "#42776F"][i]}, ${["#D27321", "#A4492A", "#094550", "#226A76"][i]})`,
                    borderColor: "#071820",
                  }}
                />
              ))}
            </div>
            <span className="text-sm" style={{ color: "rgba(232,220,200,0.6)" }}>
              Join 150+ happy clients
            </span>
          </div>

          <div className="h-8 w-px hidden sm:block" style={{ background: "rgba(232,220,200,0.2)" }} />

          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4" viewBox="0 0 20 20" fill="#DF9355">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm" style={{ color: "rgba(232,220,200,0.6)" }}>
              4.9/5 average rating
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
