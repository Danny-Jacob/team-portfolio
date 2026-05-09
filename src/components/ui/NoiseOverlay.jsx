import { memo } from "react";

/**
 * Subtle film grain/noise overlay for premium tactile feel
 * Uses SVG filter for performant noise generation
 */
export const NoiseOverlay = memo(({ opacity = 0.04 }) => {
    return (
        <div
            className="noise-overlay"
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                pointerEvents: "none",
                zIndex: 9990,
                opacity,
            }}
        >
            {/* SVG noise filter definition */}
            <svg style={{ position: "absolute", width: 0, height: 0 }}>
                <defs>
                    <filter id="noise-filter">
                        <feTurbulence
                            type="fractalNoise"
                            baseFrequency="0.8"
                            numOctaves="4"
                            stitchTiles="stitch"
                        />
                        <feColorMatrix type="saturate" values="0" />
                    </filter>
                </defs>
            </svg>

            {/* Noise layer */}
            <div
                style={{
                    position: "absolute",
                    top: "-50%",
                    left: "-50%",
                    width: "200%",
                    height: "200%",
                    background: "transparent",
                    filter: "url(#noise-filter)",
                    opacity: 0.5,
                    mixBlendMode: "overlay",
                }}
            />
        </div>
    );
});

NoiseOverlay.displayName = "NoiseOverlay";

/**
 * Alternative CSS-based grain (fallback)
 */
export const CSSNoiseOverlay = memo(({ opacity = 0.03 }) => {
    return (
        <div
            className="css-noise-overlay"
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                pointerEvents: "none",
                zIndex: 9990,
                opacity,
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                backgroundRepeat: "repeat",
            }}
        />
    );
});

CSSNoiseOverlay.displayName = "CSSNoiseOverlay";
