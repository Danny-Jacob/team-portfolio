import { motion } from "framer-motion";
import { teamMembers } from "../data";
import { MoveRight } from "lucide-react";
import { GradientBlobs } from "../components/ui/GradientBlobs";

export const About = () => {
    return (
        <motion.div 
            className="w-full pt-24 relative" 
            style={{ background: "#094550" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
        >
            <GradientBlobs variant="minimal" />
            
            {/* Hero Section */}
            <section className="py-24 border-b border-white/5">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="max-w-4xl">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-sm uppercase tracking-widest mb-6"
                            style={{ color: "#DF9355" }}
                        >
                            About KAANTHA
                        </motion.p>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-4xl md:text-6xl font-bold mb-8 leading-tight"
                            style={{ fontFamily: "Syne, sans-serif", color: "#e8dcc8" }}
                        >
                            Building brands that{" "}
                            <span className="bg-gradient-to-r from-[#DF9355] via-[#D27321] to-[#A4492A] bg-clip-text text-transparent">
                                refuse to be ignored.
                            </span>
                        </motion.h1>
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-24" style={{ background: "#226A76" }}>
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="max-w-4xl">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5 }}
                            className="text-lg leading-relaxed mb-8"
                            style={{ color: "rgba(232,220,200,0.85)" }}
                        >
                            KAANTHA was founded on a simple belief: most businesses deserve better than generic websites, forgettable branding, and marketing that promises everything but delivers nothing.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-lg leading-relaxed mb-8"
                            style={{ color: "rgba(232,220,200,0.75)" }}
                        >
                            We started KAANTHA because we saw talented businesses being held back by poor digital experiences, outdated design, and agencies that treated creativity like a commodity. We believed there was a better way—one where design, technology, and strategy work together to create meaningful business impact.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg leading-relaxed mb-12"
                            style={{ color: "rgba(232,220,200,0.75)" }}
                        >
                            Today, KAANTHA is a boutique creative and growth agency helping ambitious brands build stronger identities, better digital experiences, and deeper connections with their audiences.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="p-8 rounded-2xl border"
                            style={{ 
                                background: "rgba(9,69,80,0.3)", 
                                backdropFilter: "blur(20px)",
                                borderColor: "rgba(223,147,85,0.15)" 
                            }}
                        >
                            <p className="text-lg mb-6" style={{ color: "rgba(232,220,200,0.85)" }}>
                                Our philosophy is simple:
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-4">
                                    <span style={{ color: "#DF9355" }} className="font-bold text-xl mt-1">•</span>
                                    <span style={{ color: "rgba(232,220,200,0.8)" }}>Create work that people remember.</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span style={{ color: "#DF9355" }} className="font-bold text-xl mt-1">•</span>
                                    <span style={{ color: "rgba(232,220,200,0.8)" }}>Create work that performs.</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span style={{ color: "#DF9355" }} className="font-bold text-xl mt-1">•</span>
                                    <span style={{ color: "rgba(232,220,200,0.8)" }}>Create work that lasts.</span>
                                </li>
                            </ul>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="text-lg leading-relaxed mt-12 mb-8"
                            style={{ color: "rgba(232,220,200,0.75)" }}
                        >
                            We don't believe in templates. We don't believe in shortcuts. Every brand has a unique story, and our job is to bring that story to life through thoughtful design, compelling content, and strategic execution.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="text-lg font-semibold"
                            style={{ color: "#DF9355" }}
                        >
                            Led directly by its founders, KAANTHA combines creativity, technology, and marketing expertise to deliver work that feels premium, purposeful, and distinctly human.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* What We Do Section */}
            <section className="py-24 border-b border-white/5" style={{ background: "#094550" }}>
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
                            What We Do
                        </h2>
                        <div className="w-20 h-1 rounded-full" style={{ background: "linear-gradient(90deg, #DF9355, #D27321)" }} />
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Brand Identity & Strategy",
                                desc: "We help brands define who they are, how they are perceived, and what makes them impossible to ignore. Through positioning, visual identity, and strategic thinking, we build brands designed to stand the test of time.",
                            },
                            {
                                title: "Digital Experiences",
                                desc: "From corporate websites to e-commerce platforms, we design and develop immersive digital experiences that blend aesthetics, usability, and performance.",
                            },
                            {
                                title: "Social Media & Growth Marketing",
                                desc: "We create content, campaigns, and growth strategies that help brands build visibility, engage audiences, and create meaningful business opportunities across digital channels.",
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
                                    background: "rgba(34,106,118,0.4)", 
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
                                <p className="leading-relaxed" style={{ color: "rgba(232,220,200,0.7)" }}>
                                    {service.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why KAANTHA Section */}
            <section className="py-24" style={{ background: "#226A76" }}>
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
                            Why Choose KAANTHA
                        </h2>
                        <div className="w-20 h-1 rounded-full" style={{ background: "linear-gradient(90deg, #DF9355, #D27321)" }} />
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            { label: "Founder-Led Agency" },
                            { label: "Multi-Industry Experience" },
                            { label: "End-to-End Creative Solutions" },
                            { label: "Design-First Approach" },
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="flex items-center gap-4 p-6 rounded-xl border"
                                style={{ 
                                    background: "rgba(9,69,80,0.2)", 
                                    borderColor: "rgba(223,147,85,0.15)" 
                                }}
                            >
                                <div 
                                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                                    style={{ background: "linear-gradient(135deg, #DF9355, #D27321)" }}
                                >
                                    <span className="text-white font-bold">✓</span>
                                </div>
                                <span 
                                    className="text-lg font-semibold"
                                    style={{ color: "#e8dcc8" }}
                                >
                                    {item.label}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tagline Section */}
            <section className="py-24 border-t border-white/5" style={{ background: "#094550" }}>
                <div className="container mx-auto px-6 max-w-7xl">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-center"
                        style={{ fontFamily: "Syne, sans-serif", color: "#DF9355" }}
                    >
                        Where Creativity Awakens.
                    </motion.p>
                </div>
            </section>
        </motion.div>
    );
};
