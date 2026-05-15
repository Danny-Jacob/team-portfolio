import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";

export const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative flex flex-col rounded-2xl overflow-hidden border transition-all hover:shadow-[0_0_40px_rgba(223,147,85,0.15)]"
            style={{ 
                background: "rgba(9,69,80,0.15)", 
                backdropFilter: "blur(20px)",
                borderColor: "rgba(223,147,85,0.1)" 
            }}
        >
            <div className="relative aspect-[4/3] overflow-hidden">
                <div className="absolute inset-0 bg-[#094550]/30 z-10 transition-opacity group-hover:opacity-0" />
                <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 z-20">
                    <span 
                        className="px-3 py-1 rounded-full text-xs font-semibold tracking-wide backdrop-blur-md"
                        style={{ background: "rgba(9,69,80,0.8)", color: "#DF9355" }}
                    >
                        {project.category}
                    </span>
                </div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <h3 
                    className="text-xl font-bold mb-2 transition-colors group-hover:text-[#DF9355]"
                    style={{ fontFamily: "Syne, sans-serif", color: "#e8dcc8" }}
                >
                    {project.title}
                </h3>
                <p className="text-sm mb-6 flex-grow leading-relaxed" style={{ color: "rgba(232,220,200,0.6)" }}>
                    {project.description}
                </p>

                <div className="flex items-center gap-4 mt-auto pt-4 border-t" style={{ borderColor: "rgba(223,147,85,0.1)" }}>
                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-[#DF9355]"
                            style={{ color: "#e8dcc8" }}
                        >
                            Live Site <ExternalLink className="w-4 h-4" />
                        </a>
                    )}
                    {project.behanceUrl && (
                        <a
                            href={project.behanceUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-[#e8dcc8]"
                            style={{ color: "rgba(232,220,200,0.5)" }}
                        >
                            Branding <ArrowUpRight className="w-4 h-4" />
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};
