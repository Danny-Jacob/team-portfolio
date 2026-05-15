import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Palette, TrendingUp, Bot, Search, 
  Monitor, Share2, Video, Target 
} from "lucide-react";
import { gsap, ScrollTrigger } from "../animations/gsap";
import { GlassCard } from "../components/ui/GlassCard";
import { services } from "../data";

const iconMap = {
  Palette,
  TrendingUp,
  Bot,
  Search,
  Monitor,
  Share2,
  Video,
  Target,
};

function ServiceCard({ service, index }) {
  const cardRef = useRef(null);
  const Icon = iconMap[service.icon] || Monitor;

  // 3D tilt effect
  function handleMouseMove(e) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 15;
    const rotateY = (centerX - x) / 15;

    gsap.to(cardRef.current, {
      rotateX,
      rotateY,
      duration: 0.3,
      ease: "power2.out",
      transformPerspective: 1000,
    });
  }

  function handleMouseLeave() {
    if (!cardRef.current) return;
    gsap.to(cardRef.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.5,
      ease: "elastic.out(1,0.5)",
    });
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
    >
      <Link to={`/services/${service.slug}`} className="block h-full">
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="h-full"
          style={{ transformStyle: "preserve-3d" }}
        >
          <GlassCard className="p-8 h-full group cursor-pointer">
          {/* Icon with gradient background */}
          <div
            className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-br ${service.gradient} shadow-lg`}
            style={{ transform: "translateZ(20px)" }}
          >
            <Icon size={24} className="text-white" />
          </div>

          <h3
            className="text-xl font-bold mb-3 group-hover:text-[#DF9355] transition-colors"
            style={{ fontFamily: "Syne, sans-serif", color: "#e8dcc8" }}
          >
            {service.title}
          </h3>

          <p className="text-sm leading-relaxed" style={{ color: "rgba(232,220,200,0.6)" }}>
            {service.description}
          </p>

          {/* Hover arrow */}
          <div
            className="mt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300"
            style={{ color: "#DF9355" }}
          >
            <span className="text-sm font-medium">Learn more</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8H13M13 8L8 3M13 8L8 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          </GlassCard>
        </div>
      </Link>
    </motion.div>
  );
}

export function ServicesSection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current?.querySelectorAll(".char"),
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.03,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
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
      style={{ background: "#094550" }}
    >
      {/* Background accent */}
      <div
        className="absolute top-0 right-0 w-1/2 h-1/2 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at top right, rgba(34,106,118,0.1) 0%, transparent 60%)",
        }}
      />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section header */}
        <div className="max-w-3xl mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm uppercase tracking-widest mb-6"
            style={{ color: "#DF9355" }}
          >
            What We Do
          </motion.p>

          <h2
            ref={headingRef}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            style={{ fontFamily: "Syne, sans-serif", color: "#e8dcc8" }}
          >
            {"Full-spectrum marketing for the digital age.".split("").map((char, i) => (
              <span key={i} className="char inline-block">
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h2>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
