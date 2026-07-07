"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Briefcase, GraduationCap, Code, Target } from "lucide-react";
import { personalInfo } from "@/lib/constants";

const highlights = [
  {
    icon: Briefcase,
    title: "Software Developer",
    description: "Building enterprise SaaS at Symplr with 10K+ daily users",
  },
  {
    icon: Code,
    title: "Full Stack",
    description: "ASP.NET Core, Angular, React, Node.js, TypeScript",
  },
  {
    icon: Target,
    title: "Production Expert",
    description: "Resolved 30+ production issues, reduced API response by 25%",
  },
  {
    icon: GraduationCap,
    title: "VIT Vellore",
    description: "B.Tech IT • 7.2 CGPA • 2021–2025",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <SectionHeader
          title="About Me"
          subtitle="Building scalable software that solves real problems"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          <motion.div variants={itemVariants}>
            <Card className="p-8 h-full">
              <p className="text-foreground-secondary text-lg leading-relaxed mb-6">
                {personalInfo.summary}
              </p>
              <p className="text-foreground-secondary text-lg leading-relaxed">
                Currently working at{" "}
                <span className="text-foreground font-medium">Symplr</span> as
                a Software Developer, building enterprise Talent Management
                solutions. Previously interned at{" "}
                <span className="text-foreground font-medium">
                  Horizon Industrial Parks
                </span>
                , where I built data analytics dashboards and analyzed IoT
                telemetry data.
              </p>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="p-8 h-full">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Education
              </h3>
              <div className="space-y-5">
                <div className="border-l-2 border-accent-from pl-4">
                  <h4 className="font-medium text-foreground">B.Tech in Information Technology</h4>
                  <p className="text-sm text-foreground-secondary">VIT Vellore, Tamil Nadu</p>
                  <div className="flex items-center gap-3 mt-1 text-xs text-foreground-muted">
                    <span>2021 – 2025</span>
                    <span>•</span>
                    <span>CGPA: 7.2</span>
                  </div>
                </div>
                <div className="border-l-2 border-accent-via pl-4">
                  <h4 className="font-medium text-foreground">12th Standard</h4>
                  <p className="text-sm text-foreground-secondary">Delhi Public School Gurgaon 122001</p>
                  <div className="flex items-center gap-3 mt-1 text-xs text-foreground-muted">
                    <span>Score: 79%</span>
                  </div>
                </div>
                <div className="border-l-2 border-accent-to pl-4">
                  <h4 className="font-medium text-foreground">10th Standard</h4>
                  <p className="text-sm text-foreground-secondary">Delhi Public School Gurgaon 122001</p>
                  <div className="flex items-center gap-3 mt-1 text-xs text-foreground-muted">
                    <span>Score: 75%</span>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {highlights.map((item) => (
            <motion.div key={item.title} variants={itemVariants}>
              <Card className="p-6 text-center h-full">
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-accent-from/10 flex items-center justify-center">
                  <item.icon className="text-accent-from" size={24} />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-foreground-secondary">{item.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export { About };
