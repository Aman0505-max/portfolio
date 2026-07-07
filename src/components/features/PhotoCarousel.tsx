"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const photos = [
  { src: "/experience/01-symplr-wall.jpg", alt: "At the symplr office" },
  { src: "/experience/02-podium.jpg", alt: "Presenting at symplr" },
  { src: "/experience/03-sunset-building.jpg", alt: "Office campus at sunset" },
  { src: "/experience/04-team.jpg", alt: "With the team" },
  { src: "/experience/05-campus.jpg", alt: "Office campus" },
  { src: "/experience/06-desk-coke.jpg", alt: "My workstation" },
  { src: "/experience/07-night-building.jpg", alt: "Office at night" },
  { src: "/experience/08-office-floor.jpg", alt: "Office floor" },
  { src: "/experience/09-triple-monitor.jpg", alt: "Triple monitor setup" },
  { src: "/experience/10-podium-wide.jpg", alt: "Speaking at event" },
  { src: "/experience/11-meeting-room.jpg", alt: "Meeting room" },
  { src: "/experience/12-medals-trophy.jpg", alt: "Badminton league runner trophy" },
  { src: "/experience/13-team-group.jpg", alt: "Team outing" },
];

export function PhotoCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % photos.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + photos.length) % photos.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 3500);
    return () => clearInterval(timer);
  }, [next]);

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
  };

  return (
    <div className="relative w-full h-[280px] sm:h-[360px] rounded-2xl overflow-hidden bg-background-card border border-border group">
      <AnimatePresence custom={direction} mode="wait">
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={photos[current].src}
            alt={photos[current].alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 600px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <p className="absolute bottom-4 left-4 right-4 text-sm text-white/80 font-medium">
            {photos[current].alt}
          </p>
        </motion.div>
      </AnimatePresence>

      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <ChevronLeft size={18} />
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <ChevronRight size={18} />
      </button>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {photos.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > current ? 1 : -1);
              setCurrent(i);
            }}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              i === current ? "bg-white w-4" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
