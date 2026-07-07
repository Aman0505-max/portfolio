"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ArrowRight, FileText, User, Briefcase, Code, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";

interface CommandItem {
  id: string;
  icon: React.ReactNode;
  label: string;
  description: string;
  action: () => void;
  keywords: string[];
}

function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const commands: CommandItem[] = [
    {
      id: "about",
      icon: <User size={18} />,
      label: "About",
      description: "Learn about Aman",
      action: () => { document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }); setIsOpen(false); },
      keywords: ["about", "me", "who", "bio"],
    },
    {
      id: "experience",
      icon: <Briefcase size={18} />,
      label: "Experience",
      description: "Work history",
      action: () => { document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" }); setIsOpen(false); },
      keywords: ["experience", "work", "job", "career", "symplr"],
    },
    {
      id: "projects",
      icon: <Code size={18} />,
      label: "Projects",
      description: "Featured projects",
      action: () => { document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); setIsOpen(false); },
      keywords: ["projects", "portfolio", "work", "deepfake", "collaborative"],
    },
    {
      id: "skills",
      icon: <FileText size={18} />,
      label: "Skills",
      description: "Technical skills",
      action: () => { document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" }); setIsOpen(false); },
      keywords: ["skills", "technologies", "tech", "stack", "languages"],
    },
    {
      id: "contact",
      icon: <Mail size={18} />,
      label: "Contact",
      description: "Get in touch",
      action: () => { document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); setIsOpen(false); },
      keywords: ["contact", "email", "phone", "reach", "hire"],
    },
    {
      id: "github",
      icon: <GithubIcon size={18} />,
      label: "GitHub",
      description: "View GitHub profile",
      action: () => { window.open("https://github.com/Aman0505-max", "_blank"); setIsOpen(false); },
      keywords: ["github", "code", "repos"],
    },
    {
      id: "linkedin",
      icon: <LinkedinIcon size={18} />,
      label: "LinkedIn",
      description: "View LinkedIn profile",
      action: () => { window.open("https://linkedin.com/in/aman-maan-b11854277", "_blank"); setIsOpen(false); },
      keywords: ["linkedin", "profile", "network"],
    },
  ];

  const filtered = query
    ? commands.filter(
        (cmd) =>
          cmd.label.toLowerCase().includes(query.toLowerCase()) ||
          cmd.description.toLowerCase().includes(query.toLowerCase()) ||
          cmd.keywords.some((kw) => kw.includes(query.toLowerCase()))
      )
    : commands;

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  return (
    <>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-20 left-6 z-[60] flex items-center gap-2 px-4 py-3 rounded-xl glass text-foreground-secondary hover:text-foreground transition-colors shadow-glass"
      >
        <Search size={16} />
        <span className="text-sm">Search</span>
        <kbd className="hidden md:inline-flex items-center gap-0.5 px-1.5 py-0.5 text-[10px] font-mono text-foreground-muted bg-background-card rounded border border-border">
          ⌘K
        </kbd>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[70] bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-[20%] left-1/2 -translate-x-1/2 z-[80] w-full max-w-lg"
            >
              <div className="rounded-2xl overflow-hidden glass shadow-glow border border-border">
                <div className="flex items-center gap-3 px-5 py-4 border-b border-border">
                  <Search size={20} className="text-foreground-muted" />
                  <input
                    ref={inputRef}
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Type a command or search..."
                    className="flex-1 bg-transparent outline-none text-foreground text-sm"
                  />
                  <kbd className="px-2 py-0.5 text-[10px] font-mono text-foreground-muted bg-background-card rounded border border-border">
                    ESC
                  </kbd>
                </div>

                <div className="max-h-[300px] overflow-y-auto p-2">
                  {filtered.length === 0 ? (
                    <div className="py-8 text-center text-foreground-muted text-sm">
                      No results found.
                    </div>
                  ) : (
                    filtered.map((cmd) => (
                      <button
                        key={cmd.id}
                        onClick={cmd.action}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left hover:bg-white/5 transition-colors group"
                      >
                        <div className="w-10 h-10 rounded-xl bg-background-card border border-border flex items-center justify-center text-foreground-secondary group-hover:text-foreground transition-colors">
                          {cmd.icon}
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-foreground">
                            {cmd.label}
                          </div>
                          <div className="text-xs text-foreground-muted">
                            {cmd.description}
                          </div>
                        </div>
                        <ArrowRight
                          size={16}
                          className="text-foreground-muted opacity-0 group-hover:opacity-100 transition-opacity"
                        />
                      </button>
                    ))
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export { CommandPalette };
