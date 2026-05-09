import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";

export const Preloader = ({ onComplete }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);
    const counterRef = useRef(null);
    const logoRef = useRef(null);

    useEffect(() => {
        // Check if preloader was already shown this session
        const hasShown = sessionStorage.getItem("preloader_shown");
        if (hasShown) {
            setIsLoading(false);
            onComplete?.();
            return;
        }

        // Animate progress counter
        const duration = 2000; // 2 seconds
        const startTime = Date.now();

        const updateProgress = () => {
            const elapsed = Date.now() - startTime;
            const newProgress = Math.min(Math.floor((elapsed / duration) * 100), 100);
            setProgress(newProgress);

            if (newProgress < 100) {
                requestAnimationFrame(updateProgress);
            } else {
                // Animation complete
                setTimeout(() => {
                    setIsLoading(false);
                    sessionStorage.setItem("preloader_shown", "true");
                    onComplete?.();
                }, 500);
            }
        };

        // GSAP animations
        const tl = gsap.timeline();

        tl.fromTo(
            logoRef.current,
            { opacity: 0, scale: 0.8 },
            { opacity: 1, scale: 1, duration: 0.6, ease: "power2.out" }
        )
        .to(logoRef.current, {
            scale: 1.05,
            duration: 0.8,
            ease: "power1.inOut",
            yoyo: true,
            repeat: 1,
        });

        requestAnimationFrame(updateProgress);

        return () => {
            tl.kill();
        };
    }, [onComplete]);

    // Allow click to skip after 1 second
    const handleSkip = () => {
        if (progress > 30) {
            setIsLoading(false);
            sessionStorage.setItem("preloader_shown", "true");
            onComplete?.();
        }
    };

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    className="preloader"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    onClick={handleSkip}
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        background: "#030e11",
                        zIndex: 10000,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: progress > 30 ? "pointer" : "default",
                    }}
                >
                    {/* Gradient glow behind logo */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 0.5, scale: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        style={{
                            position: "absolute",
                            width: 300,
                            height: 300,
                            background: "radial-gradient(circle, rgba(223,147,85,0.3) 0%, transparent 70%)",
                            borderRadius: "50%",
                            filter: "blur(60px)",
                        }}
                    />

                    {/* Logo/Brand */}
                    <motion.div
                        ref={logoRef}
                        style={{
                            marginBottom: 60,
                            position: "relative",
                            zIndex: 1,
                        }}
                    >
                        <h1
                            style={{
                                fontFamily: "Syne, sans-serif",
                                fontSize: "3rem",
                                fontWeight: 700,
                                background: "linear-gradient(135deg, #DF9355, #D27321)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            LUCENT
                        </h1>
                        <p
                            style={{
                                color: "rgba(232,220,200,0.5)",
                                fontSize: "0.875rem",
                                letterSpacing: "0.3em",
                                textTransform: "uppercase",
                                textAlign: "center",
                                marginTop: 8,
                            }}
                        >
                            Studios
                        </p>
                    </motion.div>

                    {/* Progress bar */}
                    <div
                        style={{
                            width: 200,
                            height: 2,
                            background: "rgba(223,147,85,0.1)",
                            borderRadius: 1,
                            overflow: "hidden",
                            position: "relative",
                        }}
                    >
                        <motion.div
                            initial={{ width: "0%" }}
                            animate={{ width: `${progress}%` }}
                            transition={{ duration: 0.1, ease: "linear" }}
                            style={{
                                height: "100%",
                                background: "linear-gradient(90deg, #DF9355, #D27321)",
                                borderRadius: 1,
                            }}
                        />
                    </div>

                    {/* Counter */}
                    <motion.div
                        ref={counterRef}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        style={{
                            marginTop: 20,
                            fontFamily: "Syne, sans-serif",
                            fontSize: "0.875rem",
                            color: "#DF9355",
                            fontWeight: 600,
                        }}
                    >
                        {progress}%
                    </motion.div>

                    {/* Skip hint */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: progress > 30 ? 0.5 : 0 }}
                        style={{
                            position: "absolute",
                            bottom: 40,
                            color: "rgba(232,220,200,0.3)",
                            fontSize: "0.75rem",
                            letterSpacing: "0.1em",
                        }}
                    >
                        Click anywhere to skip
                    </motion.p>

                    {/* Exit animation overlay */}
                    <motion.div
                        className="preloader-exit-left"
                        initial={{ x: 0 }}
                        exit={{ x: "-100%" }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "50%",
                            height: "100%",
                            background: "#030e11",
                            zIndex: -1,
                        }}
                    />
                    <motion.div
                        className="preloader-exit-right"
                        initial={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                        style={{
                            position: "absolute",
                            top: 0,
                            right: 0,
                            width: "50%",
                            height: "100%",
                            background: "#030e11",
                            zIndex: -1,
                        }}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
};
