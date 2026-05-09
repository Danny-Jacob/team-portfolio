import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, ArrowRight } from "lucide-react";
import { GradientBlobs } from "../components/ui/GradientBlobs";
import { cn } from "../utils/cn";

export const Contact = () => {
    const [isFocused, setIsFocused] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Message sent successfully!");
    };

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
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-sm uppercase tracking-widest mb-4"
                        style={{ color: "#DF9355" }}
                    >
                        Contact
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold mb-6"
                        style={{ fontFamily: "Syne, sans-serif", color: "#e8dcc8" }}
                    >
                        Let's{" "}
                        <span className="bg-gradient-to-r from-[#DF9355] to-[#D27321] bg-clip-text text-transparent">
                            Talk
                        </span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg"
                        style={{ color: "rgba(232,220,200,0.7)" }}
                    >
                        Have a project in mind? We'd love to hear about it. Fill out the form below and we'll get back to you within 24 hours.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <h3 
                            className="text-2xl font-bold mb-8"
                            style={{ fontFamily: "Syne, sans-serif", color: "#e8dcc8" }}
                        >
                            Contact Information
                        </h3>
                        <div className="flex flex-col gap-8">
                            {[
                                {
                                    icon: Mail,
                                    title: "Email",
                                    content: "hello@aurastudio.in",
                                    sub: "We're here to help.",
                                },
                                {
                                    icon: Phone,
                                    title: "Phone",
                                    content: "+91 8074 535 783",
                                    sub: "Mon-Fri from 9am to 6pm.",
                                },
                            ].map((item, idx) => (
                                <div key={idx} className="flex gap-4">
                                    <div 
                                        className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl border"
                                        style={{ 
                                            background: "rgba(223,147,85,0.1)", 
                                            borderColor: "rgba(223,147,85,0.2)",
                                            color: "#DF9355" 
                                        }}
                                    >
                                        <item.icon size={22} />
                                    </div>
                                    <div>
                                        <h4 
                                            className="text-lg font-bold mb-1"
                                            style={{ color: "#e8dcc8" }}
                                        >
                                            {item.title}
                                        </h4>
                                        <p style={{ color: "rgba(232,220,200,0.8)" }}>
                                            {item.content}
                                        </p>
                                        <p className="text-sm" style={{ color: "rgba(232,220,200,0.5)" }}>
                                            {item.sub}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Additional info */}
                        <div className="mt-12 p-6 rounded-2xl border" style={{ background: "rgba(9,69,80,0.15)", borderColor: "rgba(223,147,85,0.1)" }}>
                            <h4 className="font-bold mb-2" style={{ color: "#DF9355" }}>Office Location</h4>
                            <p style={{ color: "rgba(232,220,200,0.6)" }}>
                                Mumbai, Maharashtra<br />
                                India
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="p-8 md:p-10 rounded-2xl border"
                        style={{ 
                            background: "rgba(9,69,80,0.15)", 
                            backdropFilter: "blur(20px)",
                            borderColor: "rgba(223,147,85,0.1)" 
                        }}
                    >
                        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                            <div>
                                <label className="block text-sm font-semibold mb-2" style={{ color: "#e8dcc8" }}>
                                    Name
                                </label>
                                <div
                                    className={cn(
                                        "flex px-4 py-3 rounded-xl border transition-all",
                                    )}
                                    style={{
                                        background: "rgba(7,24,32,0.5)",
                                        borderColor: isFocused === "name" ? "#DF9355" : "rgba(223,147,85,0.2)",
                                        boxShadow: isFocused === "name" ? "0 0 0 2px rgba(223,147,85,0.1)" : "none",
                                    }}
                                >
                                    <input
                                        type="text"
                                        required
                                        onFocus={() => setIsFocused("name")}
                                        onBlur={() => setIsFocused(null)}
                                        className="w-full bg-transparent border-none outline-none"
                                        style={{ color: "#e8dcc8" }}
                                        placeholder="John Doe"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold mb-2" style={{ color: "#e8dcc8" }}>
                                    Email
                                </label>
                                <div
                                    className={cn(
                                        "flex px-4 py-3 rounded-xl border transition-all",
                                    )}
                                    style={{
                                        background: "rgba(7,24,32,0.5)",
                                        borderColor: isFocused === "email" ? "#DF9355" : "rgba(223,147,85,0.2)",
                                        boxShadow: isFocused === "email" ? "0 0 0 2px rgba(223,147,85,0.1)" : "none",
                                    }}
                                >
                                    <input
                                        type="email"
                                        required
                                        onFocus={() => setIsFocused("email")}
                                        onBlur={() => setIsFocused(null)}
                                        className="w-full bg-transparent border-none outline-none"
                                        style={{ color: "#e8dcc8" }}
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold mb-2" style={{ color: "#e8dcc8" }}>
                                    Message
                                </label>
                                <div
                                    className={cn(
                                        "flex px-4 py-3 rounded-xl border transition-all",
                                    )}
                                    style={{
                                        background: "rgba(7,24,32,0.5)",
                                        borderColor: isFocused === "message" ? "#DF9355" : "rgba(223,147,85,0.2)",
                                        boxShadow: isFocused === "message" ? "0 0 0 2px rgba(223,147,85,0.1)" : "none",
                                    }}
                                >
                                    <textarea
                                        required
                                        rows={4}
                                        onFocus={() => setIsFocused("message")}
                                        onBlur={() => setIsFocused(null)}
                                        className="w-full bg-transparent border-none outline-none resize-none"
                                        style={{ color: "#e8dcc8" }}
                                        placeholder="Tell us about your project..."
                                    />
                                </div>
                            </div>

                            <button 
                                type="submit" 
                                className="w-full mt-2 py-4 rounded-full font-semibold flex items-center justify-center gap-2 transition-all hover:shadow-[0_0_30px_rgba(223,147,85,0.4)]"
                                style={{ background: "linear-gradient(135deg, #DF9355, #D27321)", color: "#fff" }}
                            >
                                Send Message <Send className="w-4 h-4" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};
