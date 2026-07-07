"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Mail, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { siteConfig, roles, technologies } from "@/lib/constants";

const heroPhotos = [
  "/experience/03-sunset-building.jpg",
  "/experience/07-night-building.jpg",
  "/experience/05-campus.jpg",
  "/experience/08-office-floor.jpg",
  "/experience/13-team-group.jpg",
  "/experience/01-symplr-wall.jpg",
];

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(currentRole.substring(0, displayText.length + 1));
          if (displayText === currentRole) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          setDisplayText(currentRole.substring(0, displayText.length - 1));
          if (displayText === "") {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const cyclePhoto = useCallback(() => {
    setPhotoIndex((prev) => (prev + 1) % heroPhotos.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(cyclePhoto, 5000);
    return () => clearInterval(timer);
  }, [cyclePhoto]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={photoIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.5, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0"
          >
            <Image
              src={heroPhotos[photoIndex]}
              alt=""
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/40 to-background-secondary" />
      </div>

      <div className="absolute inset-0 overflow-hidden z-[1]">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent-from/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container-custom relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
        >
          Hi, I&apos;m{" "}
          <span className="gradient-text">Aman Maan</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl md:text-3xl text-foreground-secondary mb-4 h-12"
        >
          <span>{displayText}</span>
          <span className="animate-pulse">|</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex items-center justify-center gap-4 text-foreground-muted text-sm mb-8"
        >
          <span className="flex items-center gap-1">
            <MapPin size={14} />
            Gurugram, Bengaluru
          </span>
          <span>•</span>
          <span>Symplr</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-foreground-secondary text-lg max-w-2xl mx-auto mb-12"
        >
          Software Developer with experience building enterprise SaaS applications.
          Skilled in ASP.NET Core, Angular, TypeScript, and cloud architectures.
          Passionate about solving real problems through scalable software.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          <Button variant="primary" size="lg">
            <a href="#projects">View Projects</a>
          </Button>
          <Button variant="secondary" size="lg">
            <a href="#contact">Contact Me</a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex justify-center gap-6 mb-16"
        >
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground-muted hover:text-foreground transition-colors"
          >
            <GithubIcon size={24} />
          </a>
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground-muted hover:text-foreground transition-colors"
          >
            <LinkedinIcon size={24} />
          </a>
          <a
            href={`mailto:${siteConfig.links.email}`}
            className="text-foreground-muted hover:text-foreground transition-colors"
          >
            <Mail size={24} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {technologies.slice(0, 6).map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 + i * 0.1 }}
              className="px-3 py-1 text-xs text-foreground-muted bg-background-card rounded-full border border-border"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export { Hero };
