"use client";

import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "glass" | "gradient";
  hover?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", hover = true, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-xl transition-all duration-300",
          {
            "bg-background-card border border-border": variant === "default",
            "glass-card": variant === "glass",
            "bg-gradient-to-br from-background-card to-background-tertiary border border-border":
              variant === "gradient",
          },
          {
            "hover:border-border-hover hover:shadow-glass hover:-translate-y-1":
              hover,
          },
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export { Card };
