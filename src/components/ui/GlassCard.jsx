import { cn } from "../../utils/cn";
import { motion } from "framer-motion";

/**
 * Glassmorphism card with brand-tinted glass and gold glow on hover.
 */
export const GlassCard = ({ children, className, hoverGlow = true, ...props }) => {
  return (
    <motion.div
      whileHover={hoverGlow ? { scale: 1.02 } : undefined}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={cn(
        "relative rounded-2xl overflow-hidden",
        "bg-[rgba(9,69,80,0.15)] backdrop-blur-[20px]",
        "border border-[rgba(223,147,85,0.1)]",
        hoverGlow && "hover:border-[rgba(223,147,85,0.3)] hover:shadow-[0_0_40px_rgba(223,147,85,0.12)] transition-all duration-500",
        className
      )}
      {...props}
    >
      {/* Inner top highlight */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />
      {children}
    </motion.div>
  );
};
