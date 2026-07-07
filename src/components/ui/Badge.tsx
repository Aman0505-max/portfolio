"use client";

import { cn } from "@/lib/utils";

interface BadgeProps {
  variant?: "default" | "accent" | "success" | "warning" | "error";
  size?: "sm" | "md";
  children: React.ReactNode;
  className?: string;
}

function Badge({
  variant = "default",
  size = "sm",
  children,
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center font-medium rounded-full",
        {
          "bg-background-card text-foreground-secondary border border-border":
            variant === "default",
          "bg-accent-from/10 text-accent-from border border-accent-from/20":
            variant === "accent",
          "bg-green-500/10 text-green-500 border border-green-500/20":
            variant === "success",
          "bg-yellow-500/10 text-yellow-500 border border-yellow-500/20":
            variant === "warning",
          "bg-red-500/10 text-red-500 border border-red-500/20":
            variant === "error",
        },
        {
          "text-xs px-2 py-0.5": size === "sm",
          "text-sm px-3 py-1": size === "md",
        },
        className
      )}
    >
      {children}
    </span>
  );
}

export { Badge };
