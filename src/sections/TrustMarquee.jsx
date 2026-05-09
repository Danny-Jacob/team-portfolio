import { trustLogos } from "../data";

export function TrustMarquee() {
  // Duplicate logos for seamless loop
  const logos = [...trustLogos, ...trustLogos];

  return (
    <section className="py-20 overflow-hidden" style={{ background: "#030e11" }}>
      <div className="container mx-auto px-6 max-w-7xl mb-12">
        <p
          className="text-center text-sm uppercase tracking-widest"
          style={{ color: "rgba(232,220,200,0.4)" }}
        >
          Trusted by industry leaders
        </p>
      </div>

      {/* Marquee container */}
      <div className="relative">
        {/* Gradient fade edges */}
        <div
          className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: "linear-gradient(90deg, #030e11 0%, transparent 100%)" }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: "linear-gradient(270deg, #030e11 0%, transparent 100%)" }}
        />

        {/* Scrolling track */}
        <div className="flex marquee-track whitespace-nowrap">
          {logos.map((logo, i) => (
            <div
              key={i}
              className="flex-shrink-0 mx-12 flex items-center justify-center"
            >
              <span
                className="text-2xl md:text-3xl font-bold tracking-tight opacity-30 hover:opacity-60 transition-opacity duration-300"
                style={{ fontFamily: "Syne, sans-serif", color: "#e8dcc8" }}
              >
                {logo}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Secondary row (opposite direction) */}
      <div className="relative mt-8">
        <div
          className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: "linear-gradient(90deg, #030e11 0%, transparent 100%)" }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: "linear-gradient(270deg, #030e11 0%, transparent 100%)" }}
        />

        <div
          className="flex whitespace-nowrap"
          style={{ animation: "marquee 30s linear infinite reverse" }}
        >
          {logos.map((logo, i) => (
            <div
              key={i}
              className="flex-shrink-0 mx-12 flex items-center justify-center"
            >
              <span
                className="text-xl md:text-2xl font-medium tracking-tight opacity-20 hover:opacity-50 transition-opacity duration-300"
                style={{ color: "#DF9355" }}
              >
                {logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
