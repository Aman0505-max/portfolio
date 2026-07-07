"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { skills } from "@/lib/constants";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

function SkillCategory({ title, items }: { title: string; items: { name: string }[] }) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="space-y-4"
    >
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((skill) => (
          <motion.span
            key={skill.name}
            variants={itemVariants}
            className="px-4 py-2 text-sm font-medium text-foreground-secondary bg-background-card border border-border rounded-lg hover:border-foreground/30 hover:text-foreground transition-all duration-200"
          >
            {skill.name}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

function Skills() {
  return (
    <section id="skills" className="section-padding bg-background-secondary">
      <div className="container-custom">
        <SectionHeader
          title="Tech Stack"
          subtitle="Technologies I work with"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <SkillCategory title="Languages" items={skills.languages} />
          <SkillCategory title="Frameworks" items={skills.frameworks} />
          <SkillCategory title="Cloud & Tools" items={skills.cloud} />
          <SkillCategory title="Concepts" items={skills.concepts} />
        </div>
      </div>
    </section>
  );
}

export { Skills };
