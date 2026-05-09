import { motion } from "framer-motion";
import { teamMembers } from "../data";
import { MoveRight } from "lucide-react";

export const About = () => {
    return (
        <div className="w-full">
            {/* Hero Section */}
            <section className="pt-24 pb-16 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="max-w-3xl">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight leading-tight"
                        >
                            Building digital <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
                                futures together.
                            </span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium"
                        >
                            Our mission is to bridge the gap between human intuition and digital interaction. We are a collective of designers, engineers, and strategists constantly pushing the boundaries of what is possible on the web.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-24 bg-slate-50 dark:bg-slate-800/20">
                <div className="container mx-auto px-6 max-w-7xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5 }}
                        className="mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                            Our Expertise
                        </h2>
                        <div className="w-20 h-1 bg-primary rounded-full" />
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
                                className="p-8 bg-white dark:bg-slate-900 rounded-3xl group hover:shadow-lg transition-all border border-slate-100 dark:border-slate-800"
                            >
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-primary transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed font-medium">
                                    {service.desc}
                                </p>
                                <div className="flex items-center text-primary font-medium text-sm">
                                    Learn more <MoveRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Meet the Team Section */}
            {/* <section className="py-24 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
                <div className="container mx-auto px-6 max-w-7xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5 }}
                        className="mb-16 text-center"
                    >
                        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
                            Meet the Team
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium">
                            The brilliant minds behind our award-winning projects.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {teamMembers.map((member, idx) => (
                            <motion.div
                                key={member.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="group relative"
                            >
                                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl mb-6 bg-slate-100 dark:bg-slate-800">
                                    <div className="absolute inset-0 bg-slate-900/20 z-10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <motion.img
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.5 }}
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                                    />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                                    {member.name}
                                </h3>
                                <p className="text-primary font-medium mb-4">{member.title}</p>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                                    {member.bio}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section> */}
        </div>
    );
};
