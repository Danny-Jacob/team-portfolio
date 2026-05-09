import { cn } from "../../utils/cn";

const gradients = {
  gold: "from-[#DF9355] via-[#D27321] to-[#A4492A]",
  teal: "from-[#226A76] via-[#42776F] to-[#226A76]",
  warm: "from-[#DF9355] to-[#D27321]",
  light: "from-[#e8dcc8] to-[#DF9355]",
};

/**
 * Gradient text component.
 * @param {"gold"|"teal"|"warm"|"light"} gradient
 */
export const GradientText = ({
  children,
  gradient = "gold",
  as: Tag = "span",
  className,
  ...props
}) => {
  return (
    <Tag
      className={cn(
        "bg-gradient-to-r bg-clip-text text-transparent",
        gradients[gradient],
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
};
