import { motion } from "framer-motion";
import { testimonials } from "../data";
import { TestimonialCard } from "../components/ui/TestimonialCard";

export const Testimonials = () => {
    return (
        <div className="w-full min-h-screen py-24 bg-white dark:bg-slate-900">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight"
                    >
                        Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Stories</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-lg text-slate-600 dark:text-slate-400 font-medium"
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
        </div>
    );
};
