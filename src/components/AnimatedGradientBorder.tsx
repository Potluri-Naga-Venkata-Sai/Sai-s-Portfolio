import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

const AnimatedGradientBorder = ({ children, className = "" }: Props) => (
  <div className={`relative group ${className}`}>
    <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-primary via-purple-500 to-pink-500 opacity-20 group-hover:opacity-60 blur-sm transition-all duration-500 animate-gradient-rotate" />
    <div className="relative rounded-xl">{children}</div>
  </div>
);

export default AnimatedGradientBorder;
