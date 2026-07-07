"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal as TerminalIcon, X, Minus, Maximize2 } from "lucide-react";

interface OutputLine {
  type: "command" | "output" | "error" | "success";
  text: string;
}

const commands: Record<string, () => OutputLine[]> = {
  help: () => [
    { type: "success", text: "Available commands:" },
    { type: "output", text: "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" },
    { type: "output", text: "  about      →  Learn about me" },
    { type: "output", text: "  projects   →  View my projects" },
    { type: "output", text: "  skills     →  See my tech stack" },
    { type: "output", text: "  experience →  My work experience" },
    { type: "output", text: "  education  →  Academic background" },
    { type: "output", text: "  contact    →  Get my contact info" },
    { type: "output", text: "  github     →  View GitHub profile" },
    { type: "output", text: "  linkedin   →  View LinkedIn profile" },
    { type: "output", text: "  resume     →  Download resume" },
    { type: "output", text: "  clear      →  Clear terminal" },
    { type: "output", text: "  help       →  Show this message" },
    { type: "output", text: "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" },
  ],

  about: () => [
    { type: "success", text: "👨‍💻 Aman Maan — Software Developer" },
    { type: "output", text: "" },
    { type: "output", text: "📍 Location:    Gurugram, Bengaluru" },
    { type: "output", text: "📧 Email:       maan.amanmaan@gmail.com" },
    { type: "output", text: "📱 Phone:       (+91) 8077781257" },
    { type: "output", text: "" },
    { type: "output", text: "Software Developer with hands-on experience in" },
    { type: "output", text: "ASP.NET Core, C#, Angular, TypeScript, REST APIs," },
    { type: "output", text: "SQL, Microservices, and Microsoft Azure." },
    { type: "output", text: "" },
    { type: "output", text: "🏢 Currently at Symplr building enterprise SaaS." },
    { type: "output", text: "🎓 B.Tech IT from VIT Vellore (7.38 CGPA)." },
  ],

  projects: () => [
    { type: "success", text: "🚀 Featured Projects" },
    { type: "output", text: "" },
    { type: "output", text: "1️⃣  DeepFake Audio Detection" },
    { type: "output", text: "    CNN + BiLSTM model • 94.2% accuracy" },
    { type: "output", text: "    Python, TensorFlow, Librosa, Flask" },
    { type: "output", text: "" },
    { type: "output", text: "2️⃣  Real-Time Collaborative Code Editor" },
    { type: "output", text: "    Browser-based IDE • WebSocket sync" },
    { type: "output", text: "    Node.js, React, Socket.io, Redis, Docker, AWS" },
    { type: "output", text: "" },
    { type: "output", text: "3️⃣  Symplr Talent Management" },
    { type: "output", text: "    Enterprise SaaS • 10K+ daily users" },
    { type: "output", text: "    ASP.NET Core, C#, Angular, TypeScript" },
  ],

  skills: () => [
    { type: "success", text: "🛠️  Tech Stack" },
    { type: "output", text: "" },
    { type: "output", text: "Languages:    Python · SQL · JavaScript · TypeScript · C#" },
    { type: "output", text: "Frameworks:   ASP.NET Core · Angular · React · Node.js · REST APIs" },
    { type: "output", text: "Cloud:        Git · Docker · AWS · Azure · CI/CD · Power BI" },
    { type: "output", text: "Concepts:     Microservices · DSA · OOPs · DBMS · Agile/Scrum" },
  ],

  experience: () => [
    { type: "success", text: "💼 Work Experience" },
    { type: "output", text: "" },
    { type: "output", text: "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" },
    { type: "output", text: "Software Developer | Symplr | Oct 2025 – Present" },
    { type: "output", text: "Bengaluru, India" },
    { type: "output", text: "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" },
    { type: "output", text: "  • Backend microservices (ASP.NET Core, C#, Node.js)" },
    { type: "output", text: "  • 10K+ daily active users" },
    { type: "output", text: "  • 15+ RESTful API endpoints" },
    { type: "output", text: "  • 30+ production issues resolved" },
    { type: "output", text: "  • 25% API response time improvement" },
    { type: "output", text: "" },
    { type: "output", text: "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" },
    { type: "output", text: "SWE Intern | Horizon Industrial Parks | Oct 2023" },
    { type: "output", text: "Gurgaon, India" },
    { type: "output", text: "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" },
    { type: "output", text: "  • Power BI dashboards (50+ APIs)" },
    { type: "output", text: "  • IoT telemetry analysis (SQL, Python)" },
    { type: "output", text: "  • 15% infrastructure reliability improvement" },
  ],

  education: () => [
    { type: "success", text: "🎓 Education" },
    { type: "output", text: "" },
    { type: "output", text: "B.Tech in Information Technology" },
    { type: "output", text: "VIT, Vellore | CGPA: 7.38 | 2021–2025" },
    { type: "output", text: "" },
    { type: "output", text: "Senior Secondary (XII) | DPS Ghaziabad | 79.8%" },
    { type: "output", text: "Secondary (X) | DPS Ghaziabad | 75.0%" },
  ],

  contact: () => [
    { type: "success", text: "📬 Contact Information" },
    { type: "output", text: "" },
    { type: "output", text: "📧 Email:    maan.amanmaan@gmail.com" },
    { type: "output", text: "📱 Phone:    (+91) 8077781257" },
    { type: "output", text: "🐙 GitHub:   github.com/Aman0505-max" },
    { type: "output", text: "💼 LinkedIn: linkedin.com/in/aman-maan-b11854277" },
    { type: "output", text: "📍 Location: Gurugram, Bengaluru, India" },
  ],

  github: () => [
    { type: "success", text: "🔗 Opening GitHub profile..." },
    { type: "output", text: "https://github.com/Aman0505-max" },
  ],

  linkedin: () => [
    { type: "success", text: "🔗 Opening LinkedIn profile..." },
    { type: "output", text: "https://linkedin.com/in/aman-maan-b11854277" },
  ],

  resume: () => [
    { type: "success", text: "📄 Resume" },
    { type: "output", text: "" },
    { type: "output", text: "Download coming soon!" },
    { type: "output", text: "Check the /resume page for preview." },
  ],
};

function Terminal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [output, setOutput] = useState<OutputLine[]>([
    { type: "success", text: "Welcome to Aman's Portfolio Terminal" },
    { type: "output", text: "Type 'help' to see available commands." },
    { type: "output", text: "" },
  ]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [output]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    setHistory((prev) => [...prev, cmd]);
    setHistoryIndex(-1);

    const newOutput: OutputLine[] = [
      ...output,
      { type: "command", text: `$ ${cmd}` },
    ];

    if (cmd === "clear") {
      setOutput([]);
    } else if (commands[cmd]) {
      newOutput.push(...commands[cmd]());
      setOutput(newOutput);
    } else {
      newOutput.push({
        type: "error",
        text: `command not found: ${cmd}. Type 'help' for available commands.`,
      });
      setOutput(newOutput);
    }

    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length > 0) {
        const newIndex = historyIndex < history.length - 1 ? historyIndex + 1 : historyIndex;
        setHistoryIndex(newIndex);
        setInput(history[history.length - 1 - newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(history[history.length - 1 - newIndex]);
      } else {
        setHistoryIndex(-1);
        setInput("");
      }
    }
  };

  return (
    <>
      {!isOpen && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(true)}
          className="fixed bottom-40 right-6 z-[60] flex items-center gap-2 px-4 py-3 rounded-xl glass text-foreground-secondary hover:text-foreground transition-colors shadow-glass"
        >
          <TerminalIcon size={18} />
          <span className="text-sm font-mono">Terminal</span>
        </motion.button>
      )}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              height: isMinimized ? 48 : 420,
            }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-40 right-6 z-[60] w-[420px] rounded-xl overflow-hidden glass shadow-glow"
          >
            <div className="flex items-center justify-between px-4 py-3 bg-background-secondary/80 border-b border-border cursor-move">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors"
                  />
                  <button
                    onClick={() => setIsMinimized(!isMinimized)}
                    className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-colors"
                  />
                  <button
                    onClick={() => setIsMinimized(false)}
                    className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 transition-colors"
                  />
                </div>
                <span className="ml-2 text-xs text-foreground-muted font-mono">
                  aman@portfolio ~
                </span>
              </div>
            </div>

            {!isMinimized && (
              <>
                <div
                  ref={outputRef}
                  className="h-[340px] overflow-y-auto p-4 font-mono text-sm scrollbar-thin"
                >
                  {output.map((line, i) => (
                    <div key={i} className="mb-0.5">
                      {line.type === "command" ? (
                        <span className="text-accent-from">{line.text}</span>
                      ) : line.type === "error" ? (
                        <span className="text-red-400">{line.text}</span>
                      ) : line.type === "success" ? (
                        <span className="text-green-400 font-semibold">{line.text}</span>
                      ) : (
                        <span className="text-foreground-secondary whitespace-pre-wrap">
                          {line.text}
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="flex items-center gap-2 px-4 py-3 border-t border-border bg-background-secondary/50"
                >
                  <span className="text-accent-from font-mono text-sm">$</span>
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="flex-1 bg-transparent outline-none font-mono text-sm text-foreground"
                    placeholder="Type a command..."
                  />
                </form>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export { Terminal };
