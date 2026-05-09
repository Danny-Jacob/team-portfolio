import { useEffect, useRef, memo } from "react";
import { motion } from "framer-motion";

/**
 * Animated gradient blobs for ambient background effect
 * Creates subtle, slowly moving color blobs for depth
 */
export const GradientBlobs = memo(({ 
    variant = "default",
    className = "",
}) => {
    const blobConfigs = {
        default: [
            { color: "rgba(223, 147, 85, 0.15)", size: 600, x: "10%", y: "20%", duration: 20 },
            { color: "rgba(34, 106, 118, 0.12)", size: 500, x: "70%", y: "60%", duration: 25 },
            { color: "rgba(164, 73, 42, 0.08)", size: 400, x: "50%", y: "80%", duration: 30 },
        ],
        hero: [
            { color: "rgba(223, 147, 85, 0.2)", size: 800, x: "80%", y: "20%", duration: 25 },
            { color: "rgba(34, 106, 118, 0.15)", size: 600, x: "20%", y: "70%", duration: 30 },
            { color: "rgba(210, 115, 33, 0.1)", size: 500, x: "60%", y: "50%", duration: 35 },
        ],
        minimal: [
            { color: "rgba(223, 147, 85, 0.08)", size: 500, x: "30%", y: "30%", duration: 30 },
            { color: "rgba(34, 106, 118, 0.06)", size: 400, x: "70%", y: "70%", duration: 35 },
        ],
        intense: [
            { color: "rgba(223, 147, 85, 0.25)", size: 700, x: "15%", y: "25%", duration: 18 },
            { color: "rgba(34, 106, 118, 0.2)", size: 600, x: "75%", y: "55%", duration: 22 },
            { color: "rgba(164, 73, 42, 0.15)", size: 550, x: "45%", y: "85%", duration: 26 },
            { color: "rgba(210, 115, 33, 0.12)", size: 450, x: "85%", y: "15%", duration: 28 },
        ],
    };

    const blobs = blobConfigs[variant] || blobConfigs.default;

    return (
        <div 
            className={`gradient-blobs ${className}`}
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                overflow: "hidden",
                pointerEvents: "none",
                zIndex: 0,
            }}
        >
            {blobs.map((blob, index) => (
                <motion.div
                    key={index}
                    initial={{ 
                        x: blob.x, 
                        y: blob.y,
                        scale: 1,
                    }}
                    animate={{ 
                        x: [blob.x, `calc(${blob.x} + 5%)`, `calc(${blob.x} - 3%)`, blob.x],
                        y: [blob.y, `calc(${blob.y} - 5%)`, `calc(${blob.y} + 3%)`, blob.y],
                        scale: [1, 1.1, 0.95, 1],
                    }}
                    transition={{
                        duration: blob.duration,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    style={{
                        position: "absolute",
                        width: blob.size,
                        height: blob.size,
                        background: `radial-gradient(circle, ${blob.color} 0%, transparent 70%)`,
                        borderRadius: "50%",
                        filter: "blur(80px)",
                        transform: `translate(-50%, -50%)`,
                    }}
                />
            ))}
        </div>
    );
});

GradientBlobs.displayName = "GradientBlobs";

/**
 * Single animated blob for specific placement
 */
export const GradientBlob = memo(({ 
    color = "rgba(223, 147, 85, 0.15)", 
    size = 500,
    blur = 80,
    x = "50%",
    y = "50%",
    duration = 20,
    className = "",
}) => {
    return (
        <motion.div
            className={`gradient-blob ${className}`}
            initial={{ scale: 1, opacity: 0.8 }}
            animate={{ 
                scale: [1, 1.15, 0.9, 1],
                opacity: [0.8, 1, 0.7, 0.8],
            }}
            transition={{
                duration,
                repeat: Infinity,
                ease: "easeInOut",
            }}
            style={{
                position: "absolute",
                left: x,
                top: y,
                width: size,
                height: size,
                background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
                borderRadius: "50%",
                filter: `blur(${blur}px)`,
                transform: "translate(-50%, -50%)",
                pointerEvents: "none",
            }}
        />
    );
});

GradientBlob.displayName = "GradientBlob";
