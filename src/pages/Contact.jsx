import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Mail, Phone } from "lucide-react";
import { Button } from "../components/ui/Button";
import { cn } from "../utils/cn";

export const Contact = () => {
    const [isFocused, setIsFocused] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Dummy submit
        alert("Message sent successfully!");
    };

    return (
        <div className="w-full min-h-screen py-24 bg-slate-50 dark:bg-slate-900/50">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight"
                    >
                        Let's <span className="text-primary">Talk</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-lg text-slate-600 dark:text-slate-400 font-medium"
                    >
                        Have a project in mind? We'd love to hear about it. Fill out the form below and we'll get back to you within 24 hours.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
                            Contact Information
                        </h3>
                        <div className="flex flex-col gap-8">
                            {[
                                {
                                    icon: Mail,
                                    title: "Email",
                                    content: "sru50069@gmail.com",
                                    sub: "We're here to help.",
                                },
                                // {
                                //     icon: MapPin,
                                //     title: "Office",
                                //     content: "100 Innovation Drive",
                                //     sub: "San Francisco, CA 94105",
                                // },
                                {
                                    icon: Phone,
                                    title: "Phone",
                                    content: "+91 8074 535 783",
                                    sub: "Mon-Fri from 9am to 6pm.",
                                },
                            ].map((item, idx) => (
                                <div key={idx} className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-2xl bg-white dark:bg-slate-800 text-primary border border-slate-100 dark:border-slate-700 shadow-sm">
                                        <item.icon size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                                            {item.title}
                                        </h4>
                                        <p className="text-slate-600 dark:text-slate-300 font-medium">
                                            {item.content}
                                        </p>
                                        <p className="text-sm text-slate-500 dark:text-slate-500">
                                            {item.sub}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="bg-white dark:bg-slate-900 p-8 md:p-10 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800"
                    >
                        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                            <div>
                                <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                                    Name
                                </label>
                                <div
                                    className={cn(
                                        "flex px-4 py-3 rounded-xl border transition-colors bg-slate-50 dark:bg-slate-800/50",
                                        isFocused === "name"
                                            ? "border-primary ring-1 ring-primary/20"
                                            : "border-slate-200 dark:border-slate-700"
                                    )}
                                >
                                    <input
                                        type="text"
                                        required
                                        onFocus={() => setIsFocused("name")}
                                        onBlur={() => setIsFocused(null)}
                                        className="w-full bg-transparent border-none outline-none text-slate-900 dark:text-white placeholder:text-slate-400"
                                        placeholder="John Doe"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                                    Email
                                </label>
                                <div
                                    className={cn(
                                        "flex px-4 py-3 rounded-xl border transition-colors bg-slate-50 dark:bg-slate-800/50",
                                        isFocused === "email"
                                            ? "border-primary ring-1 ring-primary/20"
                                            : "border-slate-200 dark:border-slate-700"
                                    )}
                                >
                                    <input
                                        type="email"
                                        required
                                        onFocus={() => setIsFocused("email")}
                                        onBlur={() => setIsFocused(null)}
                                        className="w-full bg-transparent border-none outline-none text-slate-900 dark:text-white placeholder:text-slate-400"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                                    Message
                                </label>
                                <div
                                    className={cn(
                                        "flex px-4 py-3 rounded-xl border transition-colors bg-slate-50 dark:bg-slate-800/50",
                                        isFocused === "message"
                                            ? "border-primary ring-1 ring-primary/20"
                                            : "border-slate-200 dark:border-slate-700"
                                    )}
                                >
                                    <textarea
                                        required
                                        rows={4}
                                        onFocus={() => setIsFocused("message")}
                                        onBlur={() => setIsFocused(null)}
                                        className="w-full bg-transparent border-none outline-none text-slate-900 dark:text-white placeholder:text-slate-400 resize-none"
                                        placeholder="Tell us about your project..."
                                    />
                                </div>
                            </div>

                            <Button type="submit" className="w-full mt-2" size="lg">
                                Send Message <Send className="ml-2 w-4 h-4" />
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};
