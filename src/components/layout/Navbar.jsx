import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "../../utils/cn";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Work", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "py-4 backdrop-blur-[30px] border-b border-white/5"
            : "py-7"
        )}
        style={isScrolled ? { background: "rgba(3,14,17,0.85)" } : {}}
      >
        <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 z-50"
          >
            <span
              className="text-xl font-bold tracking-tight"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              <span style={{ color: "#DF9355" }}>Aura</span>
              <span style={{ color: "#e8dcc8" }}>Studio</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={cn(
                      "text-sm font-medium tracking-wide transition-all duration-300 relative py-1",
                      location.pathname === link.path
                        ? "text-[#DF9355]"
                        : "text-[#e8dcc8]/70 hover:text-[#e8dcc8]"
                    )}
                  >
                    {link.name}
                    {location.pathname === link.path && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute -bottom-0.5 left-0 right-0 h-px"
                        style={{ background: "#DF9355" }}
                        initial={false}
                        transition={{ type: "spring", stiffness: 400, damping: 35 }}
                      />
                    )}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 hover:shadow-[0_0_25px_rgba(223,147,85,0.4)]"
              style={{ background: "linear-gradient(135deg,#DF9355,#D27321)", color: "#fff" }}
            >
              Book a Call
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex md:hidden items-center justify-center w-10 h-10 rounded-full z-50 border border-white/10"
            style={{ background: "rgba(9,69,80,0.4)" }}
            aria-label="Toggle Menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isMobileMenuOpen ? (
                <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <X size={18} color="#DF9355" />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Menu size={18} color="#e8dcc8" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col pt-28 px-8 md:hidden"
            style={{ background: "#030e11" }}
          >
            <ul className="flex flex-col gap-8">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.path}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <Link
                    to={link.path}
                    className="text-4xl font-bold"
                    style={{
                      fontFamily: "Syne, sans-serif",
                      color: location.pathname === link.path ? "#DF9355" : "#e8dcc8",
                    }}
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="mt-12"
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center w-full py-4 rounded-full text-lg font-bold"
                style={{ background: "linear-gradient(135deg,#DF9355,#D27321)", color: "#fff" }}
              >
                Book a Call
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
