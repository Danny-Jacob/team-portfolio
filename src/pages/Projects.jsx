import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioProjects } from "../data";
import { ProjectCard } from "../components/ui/ProjectCard";
import { cn } from "../utils/cn";

const categories = ["All", "UI/UX Design", "Live Website", "Full Stack"];

export const Projects = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects = useMemo(() => {
        if (activeCategory === "All") return portfolioProjects;
        return portfolioProjects.filter((p) => p.category === activeCategory);
    }, [activeCategory]);

    return (
        <div className="w-full min-h-screen py-24 bg-slate-50 dark:bg-slate-900/50">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div className="max-w-2xl">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight"
                        >
                            Our Selected Work
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-lg text-slate-600 dark:text-slate-400 font-medium"
                        >
                            A showcase of our recent projects, highlighting our expertise in design and engineering.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-wrap items-center gap-2"
                    >
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={cn(
                                    "px-4 py-2 rounded-full text-sm font-medium transition-all",
                                    activeCategory === category
                                        ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-md"
                                        : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700"
                                )}
                            >
                                {category}
                            </button>
                        ))}
                    </motion.div>
                </div>

                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                            >
                                <ProjectCard project={project} index={index} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredProjects.length === 0 && (
                    <div className="py-20 text-center">
                        <p className="text-slate-500 dark:text-slate-400 text-lg">
                            No projects found in this category.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};
