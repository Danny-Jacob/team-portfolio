import { motion } from "framer-motion";
import { testimonials } from "../data";
import { TestimonialCard } from "../components/ui/TestimonialCard";
import { GradientBlobs } from "../components/ui/GradientBlobs";

export const Testimonials = () => {
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
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-sm uppercase tracking-widest mb-4"
                        style={{ color: "#DF9355" }}
                    >
                        Testimonials
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold mb-6"
                        style={{ fontFamily: "Syne, sans-serif", color: "#e8dcc8" }}
                    >
                        Client{" "}
                        <span className="bg-gradient-to-r from-[#DF9355] to-[#D27321] bg-clip-text text-transparent">
                            Stories
                        </span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg"
                        style={{ color: "rgba(232,220,200,0.7)" }}
                    >
                        Don't just take our word for it. Here's what our partners have to say about working with us.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard
                            key={testimonial.id}
                            testimonial={testimonial}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </motion.div>
    );
};
