import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function GlassCard({
  children,
  className,
  as: Component = "div",
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  as?: any;
  [key: string]: any;
}) {
  return (
    <Component
      className={cn(
        "bg-white/5 backdrop-blur-xl",
        "border border-white/10",
        "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]",
        "rounded-2xl overflow-hidden",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
