import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { GradientBlobs } from "../components/ui/GradientBlobs";

export const NotFound = () => {
    return (
        <motion.div 
            className="w-full min-h-screen flex items-center justify-center p-6 text-center pt-24 relative"
            style={{ background: "#094550" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
        >
            <GradientBlobs variant="minimal" />
            
            <div className="max-w-md relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, type: "spring" }}
                    className="text-9xl font-bold bg-gradient-to-r from-[#DF9355] via-[#D27321] to-[#A4492A] bg-clip-text text-transparent mb-8"
                    style={{ fontFamily: "Syne, sans-serif" }}
                >
                    404
                </motion.div>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-3xl font-bold mb-4"
                    style={{ fontFamily: "Syne, sans-serif", color: "#e8dcc8" }}
                >
                    Page not found
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mb-8"
                    style={{ color: "rgba(232,220,200,0.6)" }}
                >
                    Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <Link 
                        to="/"
                        className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold transition-all hover:shadow-[0_0_30px_rgba(223,147,85,0.4)]"
                        style={{ background: "linear-gradient(135deg, #DF9355, #D27321)", color: "#fff" }}
                    >
                        <ArrowLeft className="mr-2 w-5 h-5" /> Back to Home
                    </Link>
                </motion.div>
            </div>
        </motion.div>
    );
};
