import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Play } from "lucide-react";
import { gsap, ScrollTrigger } from "../animations/gsap";
import { MagneticButton } from "../components/ui/MagneticButton";
import { heroStats } from "../data";
import { Link } from "react-router-dom";

// Three.js particle field (lightweight)
import * as THREE from "three";

function ParticleField() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.offsetWidth;
    const height = container.offsetHeight;

    // Scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 50;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Particles
    const particleCount = 300;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const color1 = new THREE.Color("#DF9355");
    const color2 = new THREE.Color("#226A76");

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 100;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 100;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50;

      const mixRatio = Math.random();
      const color = color1.clone().lerp(color2, mixRatio);
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.5,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
      sizeAttenuation: true,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Mouse follow
    let mouseX = 0;
    let mouseY = 0;

    function onMouseMove(e) {
      mouseX = (e.clientX / width - 0.5) * 2;
      mouseY = (e.clientY / height - 0.5) * 2;
    }
    window.addEventListener("mousemove", onMouseMove);

    // Animation
    function animate() {
      requestAnimationFrame(animate);
      particles.rotation.y += 0.001;
      particles.rotation.x += 0.0005;

      camera.position.x += (mouseX * 5 - camera.position.x) * 0.02;
      camera.position.y += (-mouseY * 5 - camera.position.y) * 0.02;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    }
    animate();

    // Resize
    function onResize() {
      const w = container.offsetWidth;
      const h = container.offsetHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    }
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      container.removeChild(renderer.domElement);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 -z-10" />;
}

function AnimatedCounter({ value, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const numericValue = parseInt(value.replace(/[^0-9]/g, ""), 10);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: el,
        start: "top 90%",
        once: true,
        onEnter: () => {
          gsap.to({ val: 0 }, {
            val: numericValue,
            duration: 2,
            ease: "power2.out",
            onUpdate: function() {
              setCount(Math.round(this.targets()[0].val));
            },
          });
        },
      });
    });

    return () => ctx.revert();
  }, [numericValue]);

  const prefix = value.includes("₹") ? "₹" : "";
  const suffixFromValue = value.includes("+") ? "+" : value.includes("%") ? "%" : "";

  return (
    <span ref={ref}>
      {prefix}{count}{value.includes("Cr") ? "Cr" : ""}{suffixFromValue}{suffix}
    </span>
  );
}

export function HeroSection() {
  const heroRef = useRef(null);
  const headlineRef = useRef(null);
  const sublineRef = useRef(null);
  const ctaRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

      // Headline animation
      tl.fromTo(
        headlineRef.current?.querySelectorAll(".word"),
        { opacity: 0, y: 80, skewY: 4 },
        { opacity: 1, y: 0, skewY: 0, duration: 1.2, stagger: 0.1 },
        0.3
      );

      // Subline
      tl.fromTo(
        sublineRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1 },
        0.8
      );

      // CTA buttons
      tl.fromTo(
        ctaRef.current?.children,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15 },
        1
      );

      // Stats
      tl.fromTo(
        statsRef.current?.children,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1 },
        1.2
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-24 pb-16"
      style={{ background: "linear-gradient(180deg, #030e11 0%, #071820 100%)" }}
    >
      <ParticleField />

      {/* Radial glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(223,147,85,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Available badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium tracking-wide border border-[#DF9355]/30"
            style={{ background: "rgba(223,147,85,0.1)", color: "#DF9355" }}
          >
            <span className="w-2 h-2 rounded-full bg-[#DF9355] animate-pulse" />
            Available for Q2 2026 projects
          </span>
        </motion.div>

        {/* Headline */}
        <h1
          ref={headlineRef}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-8"
          style={{ fontFamily: "Syne, sans-serif" }}
        >
          <span className="word inline-block" style={{ color: "#e8dcc8" }}>We </span>
          <span className="word inline-block" style={{ color: "#e8dcc8" }}>engineer </span>
          <span className="word inline-block bg-gradient-to-r from-[#DF9355] via-[#D27321] to-[#A4492A] bg-clip-text text-transparent">brands</span>
          <br />
          <span className="word inline-block" style={{ color: "#e8dcc8" }}>people </span>
          <span className="word inline-block" style={{ color: "#e8dcc8" }}>can't </span>
          <span className="word inline-block bg-gradient-to-r from-[#DF9355] via-[#D27321] to-[#A4492A] bg-clip-text text-transparent">ignore.</span>
        </h1>

        {/* Subline */}
        <p
          ref={sublineRef}
          className="text-lg md:text-xl max-w-2xl mb-12 leading-relaxed"
          style={{ color: "rgba(232,220,200,0.7)" }}
        >
          Performance marketing, branding, AI automation, and immersive digital 
          experiences for ambitious companies ready to dominate their markets.
        </p>

        {/* CTA buttons */}
        <div ref={ctaRef} className="flex flex-wrap items-center gap-4 mb-20">
          <MagneticButton as={Link} to="/projects" variant="gold">
            View Work
          </MagneticButton>
          <MagneticButton as={Link} to="/contact" variant="outline">
            <Play size={16} className="mr-1" />
            Book a Call
          </MagneticButton>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-white/5"
        >
          {heroStats.map((stat, i) => (
            <div key={i}>
              <div
                className="text-3xl md:text-4xl font-bold mb-2"
                style={{ fontFamily: "Syne, sans-serif", color: "#DF9355" }}
              >
                <AnimatedCounter value={stat.value} />
              </div>
              <div className="text-sm" style={{ color: "rgba(232,220,200,0.5)" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest" style={{ color: "rgba(232,220,200,0.4)" }}>
          Scroll
        </span>
        <ArrowDown size={18} className="scroll-bounce" style={{ color: "#DF9355" }} />
      </motion.div>
    </section>
  );
}
