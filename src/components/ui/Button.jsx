import { cn } from "../../utils/cn";
import { motion } from "framer-motion";

export const Button = ({
    children,
    className,
    variant = "primary",
    size = "md",
    icon: Icon,
    ...props
}) => {
    const baseStyles =
        "inline-flex items-center justify-center rounded-full font-semibold transition-all focus:outline-none disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
        primary:
            "bg-gradient-to-r from-[#DF9355] to-[#D27321] text-white hover:shadow-[0_0_30px_rgba(223,147,85,0.4)]",
        secondary:
            "bg-[#226A76] text-[#e8dcc8] border border-[rgba(223,147,85,0.2)] hover:border-[#DF9355]/50",
        outline:
            "border-2 border-[rgba(223,147,85,0.3)] text-[#DF9355] hover:bg-[rgba(223,147,85,0.1)] hover:border-[#DF9355]",
        ghost:
            "text-[#e8dcc8] hover:bg-[rgba(223,147,85,0.1)] hover:text-[#DF9355]",
    };

    const sizes = {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-base",
        lg: "h-14 px-8 text-lg",
    };

    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={cn(baseStyles, variants[variant], sizes[size], className)}
            {...props}
        >
            {children}
            {Icon && <Icon className="ml-2 w-5 h-5" />}
        </motion.button>
    );
};
