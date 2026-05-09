import { Moon, Sun } from "lucide-react";
import { useTheme } from "../hooks/useTheme";
import { motion, AnimatePresence } from "framer-motion";

export const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="relative p-2 rounded-full bg-gray-100 dark:bg-slate-800 text-gray-800 dark:text-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50"
            aria-label="Toggle Dark Mode"
        >
            <div className="relative w-5 h-5 flex items-center justify-center overflow-hidden">
                <AnimatePresence mode="wait" initial={false}>
                    {theme === "dark" ? (
                        <motion.div
                            key="moon"
                            initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                            animate={{ opacity: 1, rotate: 0, scale: 1 }}
                            exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                            transition={{ duration: 0.2 }}
                            className="absolute inset-0 flex items-center justify-center"
                        >
                            <Moon size={20} />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="sun"
                            initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                            animate={{ opacity: 1, rotate: 0, scale: 1 }}
                            exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                            transition={{ duration: 0.2 }}
                            className="absolute inset-0 flex items-center justify-center"
                        >
                            <Sun size={20} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </button>
    );
};
