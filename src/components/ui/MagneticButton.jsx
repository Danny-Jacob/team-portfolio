import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

/**
 * Magnetic button — cursor repels/attracts on hover for premium feel.
 */
export const MagneticButton = ({
  children,
  className,
  strength = 0.4,
  variant = "gold",
  as: Tag = "button",
  ...props
}) => {
  const ref = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const variants = {
    gold: "bg-gradient-to-br from-brand-gold to-brand-orange text-white border border-brand-gold/30",
    outline: "bg-transparent border border-brand-gold/50 text-brand-gold hover:border-brand-gold",
    teal: "bg-brand-teal text-white border border-brand-teal/30",
    dark: "bg-bg-elevated text-[#e8dcc8] border border-white/10",
  };

  function handleMouseMove(e) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    setOffset({
      x: (e.clientX - cx) * strength,
      y: (e.clientY - cy) * strength,
    });
  }

  function handleMouseLeave() {
    setOffset({ x: 0, y: 0 });
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: "spring", stiffness: 300, damping: 20, mass: 0.5 }}
      className="inline-block"
    >
      <Tag
        className={cn(
          "inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-sm tracking-wide cursor-pointer transition-all duration-300",
          "hover:shadow-[0_0_30px_rgba(223,147,85,0.4)] active:scale-95",
          variants[variant],
          className
        )}
        {...props}
      >
        {children}
      </Tag>
    </motion.div>
  );
};
