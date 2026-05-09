import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioProjects } from "../data";
import { ProjectCard } from "../components/ui/ProjectCard";
import { GradientBlobs } from "../components/ui/GradientBlobs";
import { cn } from "../utils/cn";

const categories = ["All", "UI/UX Design", "Live Website", "Full Stack"];

export const Projects = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects = useMemo(() => {
        if (activeCategory === "All") return portfolioProjects;
        return portfolioProjects.filter((p) => p.category === activeCategory);
    }, [activeCategory]);

    return (
        <motion.div 
            className="w-full min-h-screen pt-24 py-24 relative" 
            style={{ background: "#030e11" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
        >
            <GradientBlobs variant="minimal" />
            
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div className="max-w-2xl">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-sm uppercase tracking-widest mb-4"
                            style={{ color: "#DF9355" }}
                        >
                            Portfolio
                        </motion.p>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-4xl md:text-6xl font-bold mb-6"
                            style={{ fontFamily: "Syne, sans-serif", color: "#e8dcc8" }}
                        >
                            Our Selected Work
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg"
                            style={{ color: "rgba(232,220,200,0.7)" }}
                        >
                            A showcase of our recent projects, highlighting our expertise in design and engineering.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-wrap items-center gap-2"
                    >
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={cn(
                                    "px-4 py-2 rounded-full text-sm font-medium transition-all border",
                                    activeCategory === category
                                        ? "shadow-[0_0_20px_rgba(223,147,85,0.3)]"
                                        : "hover:border-[#DF9355]/50"
                                )}
                                style={{
                                    background: activeCategory === category 
                                        ? "linear-gradient(135deg, #DF9355, #D27321)" 
                                        : "rgba(9,69,80,0.2)",
                                    color: activeCategory === category ? "#fff" : "rgba(232,220,200,0.7)",
                                    borderColor: activeCategory === category 
                                        ? "transparent" 
                                        : "rgba(223,147,85,0.2)",
                                }}
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
                        <p className="text-lg" style={{ color: "rgba(232,220,200,0.5)" }}>
                            No projects found in this category.
                        </p>
                    </div>
                )}
            </div>
        </motion.div>
    );
};
