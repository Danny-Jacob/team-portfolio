import { Link } from "react-router-dom";
import { Twitter, Linkedin, Instagram, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Work", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

const services = [
  "Branding",
  "Performance Marketing",
  "Web Design",
  "AI Automation",
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative pt-32 pb-12" style={{ background: "#030e11" }}>
      {/* Top border glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-[#DF9355]/40 to-transparent" />

      <div className="container mx-auto px-6 max-w-7xl">
        {/* Large CTA text */}
        <div className="mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-8"
            style={{ fontFamily: "Syne, sans-serif", color: "#e8dcc8" }}
          >
            Let's build something
            <br />
            <span className="bg-gradient-to-r from-[#DF9355] via-[#D27321] to-[#A4492A] bg-clip-text text-transparent">
              legendary.
            </span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 text-lg font-semibold transition-all duration-300 group"
              style={{ color: "#DF9355" }}
            >
              Start a conversation
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-[#DF9355]/40 group-hover:bg-[#DF9355] group-hover:border-[#DF9355] transition-all duration-300">
                <ArrowUpRight size={18} className="group-hover:text-white transition-colors" />
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <span
                className="text-2xl font-bold tracking-tight"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                <span style={{ color: "#DF9355" }}>Aura</span>
                <span style={{ color: "#e8dcc8" }}>Studio</span>
              </span>
            </Link>
            <p className="text-[#e8dcc8]/60 text-sm leading-relaxed max-w-xs">
              We engineer brands people can't ignore. Performance marketing, branding, and immersive digital experiences for ambitious companies.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest mb-6" style={{ color: "#DF9355" }}>
              Navigation
            </h4>
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-[#e8dcc8]/70 hover:text-[#e8dcc8] transition-colors text-sm font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest mb-6" style={{ color: "#DF9355" }}>
              Services
            </h4>
            <ul className="flex flex-col gap-4">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-[#e8dcc8]/70 text-sm font-medium">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest mb-6" style={{ color: "#DF9355" }}>
              Get in Touch
            </h4>
            <ul className="flex flex-col gap-4 text-sm font-medium text-[#e8dcc8]/70">
              <li>
                <a href="mailto:hello@aurastudio.in" className="hover:text-[#e8dcc8] transition-colors">
                  hello@aurastudio.in
                </a>
              </li>
              <li>
                <a href="tel:+918074535783" className="hover:text-[#e8dcc8] transition-colors">
                  +91 8074 535 783
                </a>
              </li>
              <li className="text-[#e8dcc8]/50">
                Mumbai, India
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[#e8dcc8]/40 text-sm">
            © {currentYear} Aura Studio. All rights reserved.
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ y: -3 }}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-[#e8dcc8]/50 hover:text-[#DF9355] border border-white/10 hover:border-[#DF9355]/40 hover:shadow-[0_0_20px_rgba(223,147,85,0.2)] transition-all duration-300"
                  aria-label={social.label}
                >
                  <Icon size={16} />
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};
