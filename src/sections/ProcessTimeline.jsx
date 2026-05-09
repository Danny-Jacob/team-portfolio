import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap, ScrollTrigger } from "../animations/gsap";
import { processSteps } from "../data";

function ProcessStep({ step, index, isLast }) {
  const stepRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        stepRef.current,
        { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: stepRef.current,
            start: "top 80%",
          },
        }
      );
    });

    return () => ctx.revert();
  }, [index]);

  return (
    <div ref={stepRef} className="relative flex gap-8 md:gap-12">
      {/* Number circle */}
      <div className="flex flex-col items-center">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold shrink-0"
          style={{
            background: "linear-gradient(135deg, #DF9355, #D27321)",
            color: "#fff",
            fontFamily: "Syne, sans-serif",
            boxShadow: "0 0 30px rgba(223,147,85,0.3)",
          }}
        >
          {step.number}
        </div>
        {/* Connecting line */}
        {!isLast && (
          <div
            className="w-px flex-1 mt-4 min-h-[80px]"
            style={{ background: "linear-gradient(180deg, #DF9355 0%, rgba(223,147,85,0.1) 100%)" }}
          />
        )}
      </div>

      {/* Content */}
      <div className="pb-16">
        <h3
          className="text-2xl md:text-3xl font-bold mb-4"
          style={{ fontFamily: "Syne, sans-serif", color: "#e8dcc8" }}
        >
          {step.title}
        </h3>
        <p
          className="text-base md:text-lg leading-relaxed max-w-lg"
          style={{ color: "rgba(232,220,200,0.6)" }}
        >
          {step.description}
        </p>
      </div>
    </div>
  );
}

export function ProcessTimeline() {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the progress line
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0, transformOrigin: "top center" },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            end: "bottom 80%",
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
      className="py-32 relative"
      style={{ background: "#071820" }}
    >
      {/* Background accents */}
      <div
        className="absolute top-0 left-0 w-full h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(223,147,85,0.2), transparent)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-full h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(223,147,85,0.2), transparent)" }}
      />

      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm uppercase tracking-widest mb-6"
            style={{ color: "#DF9355" }}
          >
            Our Process
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold"
            style={{ fontFamily: "Syne, sans-serif", color: "#e8dcc8" }}
          >
            From vision to{" "}
            <span className="bg-gradient-to-r from-[#DF9355] to-[#D27321] bg-clip-text text-transparent">
              market dominance.
            </span>
          </motion.h2>
        </div>

        {/* Timeline */}
        <div className="relative max-w-2xl mx-auto">
          {/* Animated progress line (behind the steps) */}
          <div
            ref={lineRef}
            className="absolute left-8 top-16 w-px h-[calc(100%-100px)] hidden md:block"
            style={{
              background: "linear-gradient(180deg, #DF9355 0%, #226A76 100%)",
              boxShadow: "0 0 10px rgba(223,147,85,0.5)",
            }}
          />

          {/* Steps */}
          {processSteps.map((step, i) => (
            <ProcessStep
              key={step.id}
              step={step}
              index={i}
              isLast={i === processSteps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
