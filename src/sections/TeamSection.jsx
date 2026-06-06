import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { gsap, ScrollTrigger } from "../animations/gsap";
import { teamMembers } from "../data";
import { Twitter, Linkedin } from "lucide-react";

function TeamMember({ member, index }) {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 85%",
          },
        }
      );
    });

    return () => ctx.revert();
  }, [index]);

  return (
    <motion.div
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group"
    >
      {/* Image container */}
      <div className="relative aspect-[3/4] overflow-hidden rounded-2xl mb-6">
        <motion.img
          src={member.image}
          alt={member.name}
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.6 }}
          className="w-full h-full object-cover"
          style={{
            filter: isHovered ? "grayscale(0%)" : "grayscale(100%)",
            transition: "filter 0.5s ease",
          }}
        />

        {/* Overlay */}
        <div
          className="absolute inset-0 transition-opacity duration-500"
          style={{
            background: isHovered
              ? "linear-gradient(180deg, transparent 40%, rgba(3,14,17,0.95) 100%)"
              : "linear-gradient(180deg, transparent 60%, rgba(3,14,17,0.8) 100%)",
          }}
        />

        {/* Gold accent on hover */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          className="absolute bottom-0 left-0 right-0 h-1 origin-left"
          style={{ background: "linear-gradient(90deg, #DF9355, #D27321)" }}
        />

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-6 left-6 flex gap-3"
        >
          <a
            href="#"
            className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
            style={{
              background: "rgba(223,147,85,0.2)",
              border: "1px solid rgba(223,147,85,0.3)",
              color: "#DF9355",
            }}
          >
            <Twitter size={16} />
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
            style={{
              background: "rgba(223,147,85,0.2)",
              border: "1px solid rgba(223,147,85,0.3)",
              color: "#DF9355",
            }}
          >
            <Linkedin size={16} />
          </a>
        </motion.div>
      </div>

      {/* Info */}
      <h3
        className="text-xl font-bold mb-1 group-hover:text-[#DF9355] transition-colors"
        style={{ fontFamily: "Syne, sans-serif", color: "#e8dcc8" }}
      >
        {member.name}
      </h3>
      <p
        className="text-sm mb-3"
        style={{ color: "#DF9355" }}
      >
        {member.title}
      </p>
      <p
        className="text-sm leading-relaxed"
        style={{ color: "rgba(232,220,200,0.6)" }}
      >
        {member.bio}
      </p>
    </motion.div>
  );
}

export function TeamSection() {
  const sectionRef = useRef(null);

  return (
    <section
      ref={sectionRef}
      className="py-32"
      style={{ background: "#226A76" }}
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
              The Team
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold"
              style={{ fontFamily: "Syne, sans-serif", color: "#e8dcc8" }}
            >
              The People Behind{" "}
              <span className="bg-gradient-to-r from-[#DF9355] to-[#D27321] bg-clip-text text-transparent">
                KAANTHA.
              </span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-md text-sm leading-relaxed"
            style={{ color: "rgba(232,220,200,0.6)" }}
          >
            A collective of strategists, designers, and developers obsessed 
            with crafting experiences that move markets.
          </motion.p>
        </div>

        {/* Co-founders section */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {teamMembers
              .filter((member) => member.isCofounder)
              .map((member, i) => (
                <TeamMember key={member.id} member={member} index={i} />
              ))}
          </div>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {teamMembers
            .filter((member) => !member.isCofounder)
            .map((member, i) => (
              <TeamMember key={member.id} member={member} index={i + 2} />
            ))}
        </div>

        {/* Join CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-lg mb-4" style={{ color: "rgba(232,220,200,0.7)" }}>
            Want to join our team?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-lg font-semibold transition-colors hover:opacity-80"
            style={{ color: "#DF9355" }}
          >
            View open positions
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
