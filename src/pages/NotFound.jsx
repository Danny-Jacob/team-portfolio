import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "../components/ui/Button";

export const NotFound = () => {
    return (
        <div className="w-full min-h-[80vh] flex items-center justify-center p-6 text-center">
            <div className="max-w-md">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, type: "spring" }}
                    className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600 mb-8"
                >
                    404
                </motion.div>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-3xl font-bold text-slate-900 dark:text-white mb-4"
                >
                    Page not found
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-slate-600 dark:text-slate-400 font-medium mb-8"
                >
                    Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <Link to="/">
                        <Button size="lg" className="w-full sm:w-auto">
                            <ArrowLeft className="mr-2 w-5 h-5" /> Back to Home
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};
