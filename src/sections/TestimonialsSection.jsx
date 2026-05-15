import { useRef, useEffect, useState } from "react";
import { motion, useAnimationFrame } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials } from "../data";

function TestimonialCard({ testimonial, style }) {
  return (
    <motion.div
      className="flex-shrink-0 w-[400px] p-8 rounded-2xl relative"
      style={{
        background: "rgba(9,69,80,0.15)",
        backdropFilter: "blur(20px)",
        border: "1px solid rgba(223,147,85,0.1)",
        ...style,
      }}
    >
      {/* Quote icon */}
      <div className="absolute -top-4 -right-4 opacity-10">
        <Quote size={80} style={{ color: "#DF9355" }} />
      </div>

      {/* Stars */}
      <div className="flex gap-1 mb-6">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className="w-5 h-5"
            viewBox="0 0 20 20"
            fill="#DF9355"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Review text */}
      <p
        className="text-lg leading-relaxed mb-8"
        style={{ color: "rgba(232,220,200,0.9)" }}
      >
        "{testimonial.reviewText}"
      </p>

      {/* Client info */}
      <div className="flex items-center gap-4">
        {/* Avatar placeholder */}
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold"
          style={{ background: "linear-gradient(135deg, #DF9355, #D27321)", color: "#fff" }}
        >
          {testimonial.clientName.charAt(0)}
        </div>
        <div>
          <h4
            className="font-bold"
            style={{ color: "#e8dcc8" }}
          >
            {testimonial.clientName}
          </h4>
          <p
            className="text-sm"
            style={{ color: "rgba(232,220,200,0.5)" }}
          >
            {testimonial.company}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export function TestimonialsSection() {
  const trackRef = useRef(null);
  const [offset, setOffset] = useState(0);

  // Duplicate testimonials for infinite scroll
  const allTestimonials = [...testimonials, ...testimonials, ...testimonials];

  // Animate scroll
  useAnimationFrame((time, delta) => {
    setOffset((prev) => {
      const newOffset = prev + delta * 0.03;
      // Reset when we've scrolled one set of testimonials
      const singleSetWidth = testimonials.length * 432; // 400px card + 32px gap
      if (newOffset >= singleSetWidth) {
        return newOffset - singleSetWidth;
      }
      return newOffset;
    });
  });

  return (
    <section
      className="py-32 overflow-hidden"
      style={{ background: "#094550" }}
    >
      <div className="container mx-auto px-6 max-w-7xl mb-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm uppercase tracking-widest mb-4"
              style={{ color: "#DF9355" }}
            >
              Testimonials
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold"
              style={{ fontFamily: "Syne, sans-serif", color: "#e8dcc8" }}
            >
              What our clients{" "}
              <span className="bg-gradient-to-r from-[#DF9355] to-[#D27321] bg-clip-text text-transparent">
                say about us.
              </span>
            </motion.h2>
          </div>
        </div>
      </div>

      {/* Scrolling testimonials */}
      <div className="relative">
        {/* Gradient edges */}
        <div
          className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: "linear-gradient(90deg, #094550 0%, transparent 100%)" }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: "linear-gradient(270deg, #094550 0%, transparent 100%)" }}
        />

        <div
          ref={trackRef}
          className="flex gap-8"
          style={{ transform: `translateX(-${offset}px)` }}
        >
          {allTestimonials.map((testimonial, i) => (
            <TestimonialCard key={i} testimonial={testimonial} />
          ))}
        </div>
      </div>

      {/* Bottom quote */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container mx-auto px-6 max-w-3xl mt-20 text-center"
      >
        <p
          className="text-xl md:text-2xl font-medium leading-relaxed"
          style={{ color: "rgba(232,220,200,0.6)" }}
        >
          "Working with KAANTHA wasn't just a transaction—it was a transformation. 
          They don't just meet expectations; they redefine them."
        </p>
        <p className="mt-6 text-sm" style={{ color: "#DF9355" }}>
          — Rajesh Sharma, CEO at TechVista India
        </p>
      </motion.div>
    </section>
  );
}
