import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export const TestimonialCard = ({ testimonial, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-8 rounded-2xl relative overflow-hidden group hover:shadow-[0_0_40px_rgba(223,147,85,0.1)] transition-all border"
            style={{ 
                background: "rgba(9,69,80,0.15)", 
                backdropFilter: "blur(20px)",
                borderColor: "rgba(223,147,85,0.1)" 
            }}
        >
            <div className="absolute -top-4 -right-4 transform rotate-12 transition-transform group-hover:rotate-6 group-hover:scale-110" style={{ color: "rgba(223,147,85,0.1)" }}>
                <Quote size={120} />
            </div>

            <div className="relative z-10 flex flex-col h-full">
                <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5" viewBox="0 0 24 24" fill="#DF9355">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                    ))}
                </div>

                <p className="text-lg leading-relaxed mb-8 flex-grow" style={{ color: "rgba(232,220,200,0.9)" }}>
                    "{testimonial.reviewText}"
                </p>

                <div>
                    <h4 className="font-bold" style={{ color: "#e8dcc8" }}>
                        {testimonial.clientName}
                    </h4>
                    <p className="text-sm" style={{ color: "rgba(232,220,200,0.5)" }}>
                        {testimonial.company}
                    </p>
                </div>
            </div>
        </motion.div>
    );
};
