"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";
import { projects } from "@/lib/constants";

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

function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <SectionHeader
          title="Featured Projects"
          subtitle="Building solutions that matter"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div key={project.slug} variants={itemVariants}>
              <Card className="p-6 h-full flex flex-col">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-foreground">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <Badge variant="accent">Featured</Badge>
                    )}
                  </div>

                  <p className="text-foreground-secondary text-sm mb-4">
                    {project.description}
                  </p>

                  {project.metrics && (
                    <div className="flex flex-wrap gap-3 mb-4">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div
                          key={key}
                          className="text-center px-3 py-2 bg-background-tertiary rounded-lg"
                        >
                          <div className="text-xs text-foreground-muted capitalize">
                            {key}
                          </div>
                          <div className="text-sm font-medium text-foreground">
                            {value}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="default" size="sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button variant="secondary" size="sm">
                    <a href={`/projects/${project.slug}`}>
                      <ExternalLink size={14} className="mr-2" />
                      Details
                    </a>
                  </Button>
                  <Button variant="ghost" size="sm">
                    <a
                      href={`https://github.com/Aman0505-max`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GithubIcon size={14} className="mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export { Projects };
