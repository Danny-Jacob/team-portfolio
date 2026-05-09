import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export const TestimonialCard = ({ testimonial, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700 relative overflow-hidden group hover:shadow-md transition-shadow"
        >
            <div className="absolute -top-4 -right-4 text-slate-100 dark:text-slate-700/50 transform rotate-12 transition-transform group-hover:rotate-6 group-hover:scale-110">
                <Quote size={120} />
            </div>

            <div className="relative z-10 flex flex-col h-full">
                <div className="flex gap-1 mb-6 text-primary">
                    {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                    ))}
                </div>

                <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-8 flex-grow font-medium">
                    "{testimonial.reviewText}"
                </p>

                <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">
                        {testimonial.clientName}
                    </h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                        {testimonial.company}
                    </p>
                </div>
            </div>
        </motion.div>
    );
};
