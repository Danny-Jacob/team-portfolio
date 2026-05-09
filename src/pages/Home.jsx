import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Layers, Zap } from "lucide-react";
import { Button } from "../components/ui/Button";

// Dummy data just for showcase on homepage
const features = [
    {
        icon: Sparkles,
        title: "Elite Craftsmanship",
        description: "Interfaces that captivate and convert, crafted with precision."
    },
    {
        icon: Layers,
        title: "Robust Architecture",
        description: "Scalable front-end systems built for performance and growth."
    },
    {
        icon: Zap,
        title: "Fluid Animations",
        description: "Micro-interactions that bring static pages to life."
    }
];

export const Home = () => {
    return (
        <div className="w-full">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-12 pb-24">
                {/* Background Decorative Elements */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 dark:bg-primary/10 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen opacity-70 animate-blob" />
                    <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-secondary/20 dark:bg-secondary/10 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen opacity-70 animate-blob animation-delay-2000" />
                    <div className="absolute -bottom-8 left-1/3 w-96 h-96 bg-purple-500/20 dark:bg-purple-500/10 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen opacity-70 animate-blob animation-delay-4000" />
                </div>

                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md mb-8"
                        >
                            <span className="flex w-2 h-2 rounded-full bg-secondary animate-pulse" />
                            <span className="text-sm font-medium text-slate-800 dark:text-slate-200">
                                Available for new projects
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight leading-tight"
                        >
                            We craft <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">digital experiences</span> that matter.
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl leading-relaxed font-medium"
                        >
                            Aura Studio is an Awwwards-winning digital product agency. We blend strategic design with cutting-edge engineering to elevate ambitious brands.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
                        >
                            <Link to="/contact" className="w-full sm:w-auto">
                                <Button size="lg" className="w-full">
                                    Start a Project <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </Link>
                            <Link to="/projects" className="w-full sm:w-auto">
                                <Button variant="outline" size="lg" className="w-full">
                                    View Our Work
                                </Button>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Feature Section snippet */}
            <section className="py-24 bg-slate-50 dark:bg-slate-800/20 border-t border-slate-100 dark:border-slate-800">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {features.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="flex flex-col items-center text-center p-8 rounded-3xl bg-white dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-slate-800"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-6 text-primary">
                                    <feature.icon size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};
