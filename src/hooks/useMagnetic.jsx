import { useEffect, useRef } from "react";
import { gsap } from "gsap";

/**
 * Hook to create magnetic effect on elements
 * Elements will slightly follow the cursor when hovered
 * 
 * @param {Object} options
 * @param {number} options.strength - Movement strength (0-1), default 0.3
 * @param {number} options.ease - GSAP ease strength, default 0.1
 * @returns {React.RefObject} - Ref to attach to the magnetic element
 */
export const useMagnetic = (options = {}) => {
    const { strength = 0.3, ease = 0.1 } = options;
    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        // Check for touch device - disable on touch
        const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
        if (isTouchDevice) return;

        let bounds;
        let animationFrame;

        const handleMouseMove = (e) => {
            bounds = element.getBoundingClientRect();
            
            const centerX = bounds.left + bounds.width / 2;
            const centerY = bounds.top + bounds.height / 2;
            
            const distanceX = e.clientX - centerX;
            const distanceY = e.clientY - centerY;

            gsap.to(element, {
                x: distanceX * strength,
                y: distanceY * strength,
                duration: 0.3,
                ease: "power2.out",
            });
        };

        const handleMouseLeave = () => {
            gsap.to(element, {
                x: 0,
                y: 0,
                duration: 0.5,
                ease: "elastic.out(1, 0.3)",
            });
        };

        element.addEventListener("mousemove", handleMouseMove);
        element.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            element.removeEventListener("mousemove", handleMouseMove);
            element.removeEventListener("mouseleave", handleMouseLeave);
            if (animationFrame) {
                cancelAnimationFrame(animationFrame);
            }
        };
    }, [strength, ease]);

    return ref;
};

/**
 * Magnetic wrapper component for simpler usage
 */
export const MagneticWrapper = ({ 
    children, 
    strength = 0.3, 
    className = "",
    as: Component = "div",
    ...props 
}) => {
    const magneticRef = useMagnetic({ strength });

    return (
        <Component 
            ref={magneticRef} 
            className={`magnetic ${className}`}
            {...props}
        >
            {children}
        </Component>
    );
};
