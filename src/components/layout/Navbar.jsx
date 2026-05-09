import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2 } from "lucide-react";
import { ThemeToggle } from "../ThemeToggle";
import { cn } from "../../utils/cn";

const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    // { name: "Testimonials", path: "/testimonials" },
    { name: "Contact", path: "/contact" },
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location.pathname]);

    return (
        <>
            <header
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                    isScrolled
                        ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg shadow-sm border-b border-slate-200 dark:border-slate-800 py-4"
                        : "bg-transparent py-6"
                )}
            >
                <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
                    <Link
                        to="/"
                        className="flex items-center gap-2 text-xl font-bold tracking-tight text-slate-900 dark:text-white z-50 group"
                    >
                        <motion.div
                            whileHover={{ rotate: 180 }}
                            transition={{ duration: 0.3 }}
                            className="p-2 bg-primary text-white rounded-lg"
                        >
                            <Code2 size={24} />
                        </motion.div>
                        <span>
                            Aura<span className="text-primary">Studio</span>
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        <ul className="flex items-center gap-6">
                            {navLinks.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className={cn(
                                            "text-sm font-medium transition-colors relative py-2",
                                            location.pathname === link.path
                                                ? "text-primary"
                                                : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                                        )}
                                    >
                                        {link.name}
                                        {location.pathname === link.path && (
                                            <motion.div
                                                layoutId="navbar-indicator"
                                                className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                                                initial={false}
                                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                            />
                                        )}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div className="flex items-center gap-4 pl-6 border-l border-slate-200 dark:border-slate-700">
                            <ThemeToggle />
                            <Link
                                to="/contact"
                                className="hidden lg:inline-flex items-center justify-center h-10 px-6 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-medium hover:bg-slate-800 dark:hover:bg-gray-100 transition-colors"
                            >
                                Let's Talk
                            </Link>
                        </div>
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <div className="flex items-center gap-4 md:hidden z-50">
                        <ThemeToggle />
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2 text-slate-900 dark:text-white focus:outline-none"
                            aria-label="Toggle Menu"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-40 bg-white dark:bg-slate-900 pt-24 px-6 md:hidden"
                    >
                        <nav className="flex flex-col h-full">
                            <ul className="flex flex-col gap-6 text-2xl font-semibold mb-12">
                                {navLinks.map((link) => (
                                    <motion.li
                                        key={link.path}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.2, delay: 0.1 }}
                                    >
                                        <Link
                                            to={link.path}
                                            className={cn(
                                                "block transition-colors",
                                                location.pathname === link.path
                                                    ? "text-primary"
                                                    : "text-slate-900 dark:text-white"
                                            )}
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="mt-auto pb-12"
                            >
                                <Link
                                    to="/contact"
                                    className="flex items-center justify-center w-full h-14 rounded-full bg-primary text-white text-lg font-medium hover:bg-blue-600 transition-colors"
                                >
                                    Start a Project
                                </Link>
                            </motion.div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
