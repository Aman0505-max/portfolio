"use client";

import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  gradient?: boolean;
  className?: string;
}

function SectionHeader({
  title,
  subtitle,
  align = "center",
  gradient = true,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      <h2
        className={cn(
          "text-4xl md:text-5xl font-bold mb-4",
          gradient ? "gradient-text" : "text-foreground"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-foreground-secondary text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export { SectionHeader };
