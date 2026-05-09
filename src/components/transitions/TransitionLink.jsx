import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useMagnetic } from "../../hooks/useMagnetic";

/**
 * Link component that handles page transitions
 * Wraps navigation to work with AnimatePresence
 */
export const TransitionLink = ({ 
    to, 
    children, 
    className = "", 
    magnetic = false,
    onClick,
    ...props 
}) => {
    const navigate = useNavigate();
    const magneticRef = useMagnetic({ strength: magnetic ? 0.2 : 0 });

    const handleClick = (e) => {
        e.preventDefault();
        
        // Call any additional onClick handler
        if (onClick) onClick(e);

        // Navigate after a tiny delay to allow exit animation to start
        setTimeout(() => {
            navigate(to);
            // Scroll to top
            window.scrollTo(0, 0);
        }, 10);
    };

    return (
        <motion.a
            ref={magnetic ? magneticRef : null}
            href={to}
            onClick={handleClick}
            className={`transition-link ${className}`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            {...props}
        >
            {children}
        </motion.a>
    );
};

/**
 * Button variant of TransitionLink
 */
export const TransitionButton = ({ 
    to, 
    children, 
    className = "",
    variant = "primary",
    ...props 
}) => {
    const navigate = useNavigate();
    const magneticRef = useMagnetic({ strength: 0.15 });

    const handleClick = (e) => {
        e.preventDefault();
        setTimeout(() => {
            navigate(to);
            window.scrollTo(0, 0);
        }, 10);
    };

    const variants = {
        primary: "bg-gradient-to-r from-[#DF9355] to-[#D27321] text-white hover:shadow-[0_0_30px_rgba(223,147,85,0.4)]",
        outline: "border-2 border-[rgba(223,147,85,0.3)] text-[#DF9355] hover:bg-[rgba(223,147,85,0.1)] hover:border-[#DF9355]",
        ghost: "text-[#e8dcc8] hover:text-[#DF9355]",
    };

    return (
        <motion.a
            ref={magneticRef}
            href={to}
            onClick={handleClick}
            className={`
                inline-flex items-center justify-center px-8 py-4 rounded-full 
                font-semibold transition-all cursor-pointer
                ${variants[variant]}
                ${className}
            `}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            {...props}
        >
            {children}
        </motion.a>
    );
};
