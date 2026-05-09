import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export const CustomCursor = () => {
    const cursorRef = useRef(null);
    const cursorDotRef = useRef(null);
    const cursorTextRef = useRef(null);
    const [cursorState, setCursorState] = useState("default");
    const [cursorText, setCursorText] = useState("");
    const [isVisible, setIsVisible] = useState(true);
    const pos = useRef({ x: 0, y: 0 });
    const mouse = useRef({ x: 0, y: 0 });

    useEffect(() => {
        // Check for touch device
        const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
        if (isTouchDevice) {
            setIsVisible(false);
            return;
        }

        const cursor = cursorRef.current;
        const cursorDot = cursorDotRef.current;

        // Mouse move handler
        const onMouseMove = (e) => {
            mouse.current = { x: e.clientX, y: e.clientY };
        };

        // Animation loop for smooth follow
        const animate = () => {
            // Smooth interpolation
            pos.current.x += (mouse.current.x - pos.current.x) * 0.15;
            pos.current.y += (mouse.current.y - pos.current.y) * 0.15;

            if (cursor) {
                cursor.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`;
            }
            if (cursorDot) {
                cursorDot.style.transform = `translate(${mouse.current.x}px, ${mouse.current.y}px)`;
            }

            requestAnimationFrame(animate);
        };

        // Element hover handlers
        const handleMouseEnter = (e) => {
            const target = e.target;
            
            // Check for data-cursor attribute
            const cursorType = target.dataset.cursor || target.closest("[data-cursor]")?.dataset.cursor;
            
            if (cursorType === "project") {
                setCursorState("project");
                setCursorText("View");
            } else if (cursorType === "video") {
                setCursorState("video");
                setCursorText("Play");
            } else if (cursorType === "drag") {
                setCursorState("drag");
                setCursorText("Drag");
            } else if (
                target.tagName === "A" ||
                target.tagName === "BUTTON" ||
                target.closest("a") ||
                target.closest("button") ||
                target.classList.contains("magnetic")
            ) {
                setCursorState("link");
                setCursorText("");
            }
        };

        const handleMouseLeave = () => {
            setCursorState("default");
            setCursorText("");
        };

        // Hide cursor on input focus
        const handleFocusIn = (e) => {
            if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") {
                setIsVisible(false);
            }
        };

        const handleFocusOut = () => {
            setIsVisible(true);
        };

        // Hide cursor when leaving window
        const handleMouseLeaveWindow = () => {
            setIsVisible(false);
        };

        const handleMouseEnterWindow = () => {
            setIsVisible(true);
        };

        // Add event listeners
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseenter", handleMouseEnterWindow);
        document.addEventListener("mouseleave", handleMouseLeaveWindow);
        document.addEventListener("focusin", handleFocusIn);
        document.addEventListener("focusout", handleFocusOut);

        // Add hover listeners to interactive elements
        const interactiveElements = document.querySelectorAll(
            "a, button, [data-cursor], .magnetic, input, textarea, [role='button']"
        );
        
        interactiveElements.forEach((el) => {
            el.addEventListener("mouseenter", handleMouseEnter);
            el.addEventListener("mouseleave", handleMouseLeave);
        });

        // Start animation
        animate();

        // MutationObserver to handle dynamically added elements
        const observer = new MutationObserver(() => {
            const newElements = document.querySelectorAll(
                "a, button, [data-cursor], .magnetic, input, textarea, [role='button']"
            );
            newElements.forEach((el) => {
                el.removeEventListener("mouseenter", handleMouseEnter);
                el.removeEventListener("mouseleave", handleMouseLeave);
                el.addEventListener("mouseenter", handleMouseEnter);
                el.addEventListener("mouseleave", handleMouseLeave);
            });
        });

        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mouseenter", handleMouseEnterWindow);
            document.removeEventListener("mouseleave", handleMouseLeaveWindow);
            document.removeEventListener("focusin", handleFocusIn);
            document.removeEventListener("focusout", handleFocusOut);
            interactiveElements.forEach((el) => {
                el.removeEventListener("mouseenter", handleMouseEnter);
                el.removeEventListener("mouseleave", handleMouseLeave);
            });
            observer.disconnect();
        };
    }, []);

    // Animate cursor state changes
    useEffect(() => {
        const cursor = cursorRef.current;
        if (!cursor) return;

        const sizes = {
            default: { width: 40, height: 40 },
            link: { width: 60, height: 60 },
            project: { width: 100, height: 100 },
            video: { width: 100, height: 100 },
            drag: { width: 80, height: 80 },
        };

        const size = sizes[cursorState] || sizes.default;

        gsap.to(cursor, {
            width: size.width,
            height: size.height,
            duration: 0.3,
            ease: "power2.out",
        });
    }, [cursorState]);

    // Don't render on touch devices
    if (!isVisible) {
        return null;
    }

    return (
        <>
            {/* Main cursor circle */}
            <div
                ref={cursorRef}
                className="custom-cursor"
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: 40,
                    height: 40,
                    marginLeft: -20,
                    marginTop: -20,
                    borderRadius: "50%",
                    border: "1px solid rgba(223, 147, 85, 0.5)",
                    pointerEvents: "none",
                    zIndex: 9999,
                    mixBlendMode: "difference",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "opacity 0.3s",
                    opacity: isVisible ? 1 : 0,
                    background: cursorState !== "default" ? "rgba(223, 147, 85, 0.1)" : "transparent",
                }}
            >
                {/* Cursor text */}
                <span
                    ref={cursorTextRef}
                    style={{
                        color: "#DF9355",
                        fontSize: 12,
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        opacity: cursorText ? 1 : 0,
                        transition: "opacity 0.2s",
                        fontFamily: "Syne, sans-serif",
                    }}
                >
                    {cursorText}
                </span>
            </div>

            {/* Small dot */}
            <div
                ref={cursorDotRef}
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: 6,
                    height: 6,
                    marginLeft: -3,
                    marginTop: -3,
                    borderRadius: "50%",
                    background: "#DF9355",
                    pointerEvents: "none",
                    zIndex: 10000,
                    opacity: isVisible ? 1 : 0,
                    transition: "opacity 0.3s",
                }}
            />
        </>
    );
};
