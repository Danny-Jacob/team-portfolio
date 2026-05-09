import { motion } from "framer-motion";
import { teamMembers } from "../data";
import { MoveRight } from "lucide-react";
import { GradientBlobs } from "../components/ui/GradientBlobs";

export const About = () => {
    return (
        <motion.div 
            className="w-full pt-24 relative" 
            style={{ background: "#030e11" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
        >
            <GradientBlobs variant="minimal" />
            
            {/* Hero Section */}
            <section className="py-24 border-b border-white/5">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="max-w-3xl">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-sm uppercase tracking-widest mb-6"
                            style={{ color: "#DF9355" }}
                        >
                            About Us
                        </motion.p>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-4xl md:text-6xl font-bold mb-8 leading-tight"
                            style={{ fontFamily: "Syne, sans-serif", color: "#e8dcc8" }}
                        >
                            Building digital{" "}
                            <span className="bg-gradient-to-r from-[#DF9355] via-[#D27321] to-[#A4492A] bg-clip-text text-transparent">
                                futures together.
                            </span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg md:text-xl leading-relaxed"
                            style={{ color: "rgba(232,220,200,0.7)" }}
                        >
                            Our mission is to bridge the gap between human intuition and digital interaction. 
                            We are a collective of designers, engineers, and strategists constantly pushing 
                            the boundaries of what is possible on the web.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-24" style={{ background: "#071820" }}>
                <div className="container mx-auto px-6 max-w-7xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5 }}
                        className="mb-16"
                    >
                        <h2 
                            className="text-3xl md:text-4xl font-bold mb-4"
                            style={{ fontFamily: "Syne, sans-serif", color: "#e8dcc8" }}
                        >
                            Our Expertise
                        </h2>
                        <div className="w-20 h-1 rounded-full" style={{ background: "linear-gradient(90deg, #DF9355, #D27321)" }} />
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "UI/UX Design",
                                desc: "Wireframing, prototyping, user research, and stunning visual interfaces.",
                            },
                            {
                                title: "Front-End Engineering",
                                desc: "High-performance React & Vite applications with modern state management and animations.",
                            },
                            {
                                title: "Brand Strategy",
                                desc: "Developing cohesive digital identities that resonate with your target audience.",
                            },
                        ].map((service, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="p-8 rounded-2xl group hover:shadow-[0_0_40px_rgba(223,147,85,0.1)] transition-all border"
                                style={{ 
                                    background: "rgba(9,69,80,0.15)", 
                                    backdropFilter: "blur(20px)",
                                    borderColor: "rgba(223,147,85,0.1)" 
                                }}
                            >
                                <h3 
                                    className="text-xl font-bold mb-4 transition-colors group-hover:text-[#DF9355]"
                                    style={{ fontFamily: "Syne, sans-serif", color: "#e8dcc8" }}
                                >
                                    {service.title}
                                </h3>
                                <p className="mb-6 leading-relaxed" style={{ color: "rgba(232,220,200,0.6)" }}>
                                    {service.desc}
                                </p>
                                <div className="flex items-center text-sm font-medium" style={{ color: "#DF9355" }}>
                                    Learn more <MoveRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-24 border-t border-white/5" style={{ background: "#030e11" }}>
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                        {[
                            { value: "7+", label: "Years Experience" },
                            { value: "150+", label: "Projects Delivered" },
                            { value: "50+", label: "Happy Clients" },
                            { value: "12", label: "Industry Awards" },
                        ].map((stat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="text-center"
                            >
                                <div 
                                    className="text-4xl md:text-5xl font-bold mb-2"
                                    style={{ fontFamily: "Syne, sans-serif", color: "#DF9355" }}
                                >
                                    {stat.value}
                                </div>
                                <div className="text-sm" style={{ color: "rgba(232,220,200,0.5)" }}>
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </motion.div>
    );
};
