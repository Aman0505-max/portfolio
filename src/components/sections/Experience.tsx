"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { Building2, Calendar, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { experiences } from "@/lib/constants";

const experiencePhotos: Record<string, string[]> = {
  symplr: [
    "/experience/01-symplr-wall.jpg",
    "/experience/02-podium.jpg",
    "/experience/06-desk-coke.jpg",
    "/experience/09-triple-monitor.jpg",
    "/experience/12-medals-trophy.jpg",
    "/experience/10-podium-wide.jpg",
  ],
  horizon: [
    "/experience/04-team.jpg",
    "/experience/11-meeting-room.jpg",
    "/experience/13-team-group.jpg",
  ],
};

function PhotoBackground({ photos }: { photos: string[] }) {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % photos.length);
  }, [photos.length]);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="absolute inset-0 z-0">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <Image
            src={photos[current]}
            alt=""
            fill
            className="object-cover"
            sizes="600px"
          />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-background-card/85 backdrop-blur-sm" />
    </div>
  );
}

function Experience() {
  return (
    <section id="experience" className="section-padding bg-background-secondary">
      <div className="container-custom">
        <SectionHeader
          title="Experience"
          subtitle="My professional journey"
        />

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const photos = experiencePhotos[exp.id] || experiencePhotos.symplr;
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className={`relative flex flex-col md:flex-row ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  } gap-8`}
                >
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-accent-from rounded-full border-4 border-background transform -translate-x-[7px] md:-translate-x-[9px] z-10" />

                  <div className={`flex-1 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}>
                    <div className="relative rounded-2xl border border-border overflow-hidden p-6">
                      <PhotoBackground photos={photos} />

                      <div className="relative z-10">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-semibold text-foreground">
                              {exp.title}
                            </h3>
                            <div className="flex items-center gap-2 text-foreground-secondary mt-1">
                              <Building2 size={16} />
                              <span>{exp.company}</span>
                            </div>
                          </div>
                          {exp.isCurrent && (
                            <Badge variant="success">Current</Badge>
                          )}
                        </div>

                        <div className="flex flex-wrap items-center gap-4 text-sm text-foreground-muted mb-4">
                          <span className="flex items-center gap-1">
                            <Calendar size={14} />
                            {exp.startDate} – {exp.endDate}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin size={14} />
                            {exp.location}
                          </span>
                        </div>

                        <p className="text-foreground-secondary mb-4">{exp.description}</p>

                        <ul className="space-y-2 mb-4">
                          {exp.highlights.map((highlight, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-sm text-foreground-secondary"
                            >
                              <span className="w-1.5 h-1.5 bg-accent-from rounded-full mt-2 flex-shrink-0" />
                              {highlight}
                            </li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <Badge key={tech} variant="default" size="sm">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="hidden md:block flex-1" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export { Experience };
