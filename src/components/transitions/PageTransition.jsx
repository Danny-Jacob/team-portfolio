import { motion } from "framer-motion";

/**
 * Page transition overlay that slides in/out during navigation
 */
export const PageTransition = ({ children }) => {
    return (
        <>
            {/* Page content with fade animation */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                }}
            >
                {children}
            </motion.div>

            {/* Slide overlay - enters from bottom, exits to top */}
            <motion.div
                className="page-transition-overlay"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 1 }}
                transition={{
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "linear-gradient(135deg, #094550, #094550)",
                    transformOrigin: "bottom",
                    zIndex: 9998,
                    pointerEvents: "none",
                }}
            />

            {/* Second overlay for reveal effect */}
            <motion.div
                className="page-transition-overlay-2"
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 0 }}
                transition={{
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.1,
                }}
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "linear-gradient(135deg, #094550, #094550)",
                    transformOrigin: "top",
                    zIndex: 9998,
                    pointerEvents: "none",
                }}
            />
        </>
    );
};

/**
 * Simpler fade transition wrapper
 */
export const FadeTransition = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
        >
            {children}
        </motion.div>
    );
};

/**
 * Clip reveal transition (circle expand)
 */
export const ClipTransition = ({ children }) => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
            >
                {children}
            </motion.div>

            <motion.div
                initial={{ clipPath: "circle(150% at 50% 50%)" }}
                animate={{ clipPath: "circle(0% at 50% 50%)" }}
                exit={{ clipPath: "circle(150% at 50% 50%)" }}
                transition={{
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "#094550",
                    zIndex: 9998,
                    pointerEvents: "none",
                }}
            />
        </>
    );
};
