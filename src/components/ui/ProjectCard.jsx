import { motion } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { cn } from "../../utils/cn";

export const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative flex flex-col rounded-3xl overflow-hidden bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50 hover:border-primary/50 dark:hover:border-primary/50 transition-colors"
        >
            <div className="relative aspect-[4/3] overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/10 dark:bg-slate-900/20 z-10 mix-blend-multiply transition-opacity group-hover:opacity-0" />
                <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-white/90 dark:bg-slate-900/90 text-slate-900 dark:text-white backdrop-blur-md">
                        {project.category}
                    </span>
                </div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                    {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm mb-6 flex-grow leading-relaxed">
                    {project.description}
                </p>

                <div className="flex items-center gap-3 mt-auto pt-4 border-t border-slate-200 dark:border-slate-700">
                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn(
                                "inline-flex items-center gap-1.5 text-sm font-medium transition-colors",
                                "text-slate-900 dark:text-white hover:text-primary dark:hover:text-primary"
                            )}
                        >
                            Live Site <ExternalLink className="w-4 h-4" />
                        </a>
                    )}
                    {project.behanceUrl && (
                        <a
                            href={project.behanceUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn(
                                "inline-flex items-center gap-1.5 text-sm font-medium transition-colors",
                                "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                            )}
                        >
                            Branding <ArrowUpRight className="w-4 h-4" />
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};
