import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { gsap, ScrollTrigger } from "../animations/gsap";
import { caseStudies } from "../data";

function CaseStudyCard({ study, index, size = "normal" }) {
  const cardRef = useRef(null);
  const imageRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Clip-path reveal animation
      gsap.fromTo(
        cardRef.current,
        { clipPath: "inset(100% 0 0 0)" },
        {
          clipPath: "inset(0% 0 0 0)",
          duration: 1.2,
          ease: "expo.inOut",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 85%",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const isLarge = size === "large";

  return (
    <motion.div
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative overflow-hidden rounded-2xl cursor-pointer group ${
        isLarge ? "md:col-span-2 md:row-span-2" : ""
      }`}
      style={{ background: "#226A76" }}
    >
      {/* Image */}
      <motion.div
        ref={imageRef}
        animate={{ scale: isHovered ? 1.05 : 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <img
          src={study.image}
          alt={study.title}
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: isHovered
              ? "linear-gradient(180deg, rgba(3,14,17,0.3) 0%, rgba(3,14,17,0.9) 100%)"
              : "linear-gradient(180deg, rgba(3,14,17,0.1) 0%, rgba(3,14,17,0.8) 100%)",
            transition: "background 0.4s ease",
          }}
        />
      </motion.div>

      {/* Content */}
      <div className={`relative z-10 h-full flex flex-col justify-end ${isLarge ? "p-10" : "p-6"}`}>
        {/* Category */}
        <span
          className="text-xs uppercase tracking-widest mb-3"
          style={{ color: "#DF9355" }}
        >
          {study.category}
        </span>

        {/* Title */}
        <h3
          className={`font-bold mb-3 ${isLarge ? "text-3xl md:text-4xl" : "text-xl"}`}
          style={{ fontFamily: "Syne, sans-serif", color: "#e8dcc8" }}
        >
          {study.title}
        </h3>

        {/* Description (show on hover or always for large) */}
        <p
          className={`text-sm leading-relaxed mb-6 ${
            isLarge ? "opacity-100" : "opacity-0 group-hover:opacity-100"
          } transition-opacity duration-300`}
          style={{ color: "rgba(232,220,200,0.7)" }}
        >
          {study.description}
        </p>

        {/* Metrics */}
        <div className={`flex gap-6 ${!isLarge && "opacity-0 group-hover:opacity-100"} transition-opacity duration-300`}>
          <div>
            <div className="text-2xl font-bold" style={{ color: "#DF9355" }}>
              {study.metrics.revenue}
            </div>
            <div className="text-xs" style={{ color: "rgba(232,220,200,0.5)" }}>
              Revenue Growth
            </div>
          </div>
          <div>
            <div className="text-2xl font-bold" style={{ color: "#DF9355" }}>
              {study.metrics.leads}
            </div>
            <div className="text-xs" style={{ color: "rgba(232,220,200,0.5)" }}>
              Leads Generated
            </div>
          </div>
          <div>
            <div className="text-2xl font-bold" style={{ color: "#DF9355" }}>
              {study.metrics.roas}x
            </div>
            <div className="text-xs" style={{ color: "rgba(232,220,200,0.5)" }}>
              ROAS
            </div>
          </div>
        </div>

        {/* Arrow */}
        <motion.div
          animate={{ x: isHovered ? 5 : 0, y: isHovered ? -5 : 0 }}
          className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center border border-white/20 group-hover:border-[#DF9355]/50 group-hover:bg-[#DF9355]/10 transition-all duration-300"
        >
          <ArrowUpRight size={18} style={{ color: "#DF9355" }} />
        </motion.div>
      </div>
    </motion.div>
  );
}

export function CaseStudiesSection() {
  const sectionRef = useRef(null);

  return (
    <section
      ref={sectionRef}
      className="py-32"
      style={{ background: "#094550" }}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm uppercase tracking-widest mb-4"
              style={{ color: "#DF9355" }}
            >
              Case Studies
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold"
              style={{ fontFamily: "Syne, sans-serif", color: "#e8dcc8" }}
            >
              Work that delivers
              <br />
              <span className="bg-gradient-to-r from-[#DF9355] to-[#D27321] bg-clip-text text-transparent">
                real results.
              </span>
            </motion.h2>
          </div>

          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-[#DF9355]"
            style={{ color: "rgba(232,220,200,0.7)" }}
          >
            View all projects
            <ArrowUpRight size={16} />
          </motion.a>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px] md:auto-rows-[260px]">
          {caseStudies.map((study, i) => (
            <CaseStudyCard
              key={study.id}
              study={study}
              index={i}
              size={i === 0 ? "large" : "normal"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
