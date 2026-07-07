"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Users, Code, Bug, Zap } from "lucide-react";

interface StatProps {
  icon: React.ReactNode;
  value: number;
  suffix: string;
  label: string;
  description: string;
}

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

const stats: StatProps[] = [
  {
    icon: <Users className="text-accent-from" size={28} />,
    value: 10000,
    suffix: "+",
    label: "Daily Active Users",
    description: "Supported at Symplr Talent Management",
  },
  {
    icon: <Code className="text-accent-via" size={28} />,
    value: 15,
    suffix: "+",
    label: "API Endpoints",
    description: "Designed and integrated RESTful APIs",
  },
  {
    icon: <Bug className="text-accent-to" size={28} />,
    value: 30,
    suffix: "+",
    label: "Production Issues",
    description: "Debugged and resolved in production",
  },
  {
    icon: <Zap className="text-yellow-500" size={28} />,
    value: 25,
    suffix: "%",
    label: "Faster APIs",
    description: "Reduced average response time",
  },
];

function Stats() {
  return (
    <section className="py-16 border-y border-border bg-background-secondary/50">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-background-card border border-border flex items-center justify-center">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm font-medium text-foreground mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-foreground-muted">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { Stats };
