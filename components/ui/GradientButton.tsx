"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";
import { ArrowRight } from "lucide-react";

interface GradientButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
}

export default function GradientButton({
  children,
  className,
  variant = "primary",
  size = "md",
  ...props
}: GradientButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "relative px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 overflow-hidden group flex items-center justify-center gap-2",
        variant === "primary" && [
          "bg-gradient-to-r from-emerald-800 via-emerald-700 to-emerald-800 bg-[length:200%_100%]",
          "text-white",
          "shadow-[0_4px_14px_0_rgba(5,150,105,0.4)]",
          "hover:shadow-[0_6px_20px_0_rgba(5,150,105,0.5)]",
          "hover:bg-[position:100%_0]",
        ],
        variant === "secondary" && [
          "bg-white/80 backdrop-blur-sm",
          "text-slate-800",
          "border border-slate-200/80",
          "shadow-sm",
          "hover:bg-white",
          "hover:border-emerald-200",
          "hover:shadow-md",
        ],
        size === "sm" && "px-4 py-2 text-xs",
        size === "md" && "px-6 py-3 text-sm",
        size === "lg" && "px-8 py-4 text-base",
        className
      )}
      {...props}
    >
      {/* Shine effect */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.button>
  );
}
