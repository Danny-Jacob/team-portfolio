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
        "inline-flex items-center justify-center rounded-full font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
        primary:
            "bg-primary text-white hover:bg-blue-600 focus:ring-primary dark:focus:ring-offset-slate-900",
        secondary:
            "bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-800 dark:text-gray-100 dark:hover:bg-slate-700 focus:ring-slate-500",
        outline:
            "border-2 border-slate-200 text-slate-900 hover:bg-slate-50 dark:border-slate-700 dark:text-gray-100 dark:hover:bg-slate-800 focus:ring-slate-500",
        ghost:
            "text-slate-700 hover:bg-slate-100 dark:text-gray-300 dark:hover:bg-slate-800 focus:ring-slate-500",
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
