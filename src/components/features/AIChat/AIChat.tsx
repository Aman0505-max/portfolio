"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User, Sparkles } from "lucide-react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  suggested?: string[];
}

const API_URL = "http://localhost:8000/api/v1/ai/chat";

function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content:
        "Hey there! 👋 I'm Aman's AI assistant. Ask me anything about his skills, projects, experience, or education.",
      suggested: [
        "What are his skills?",
        "Tell me about his projects",
        "What's his experience?",
      ],
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: text,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });

      const data = await response.json();

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: data.response,
        suggested: data.suggested_questions,
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content:
          "Sorry, I couldn't connect to the backend. Make sure the FastAPI server is running on port 8000.",
        suggested: ["What are his skills?"],
      };
      setMessages((prev) => [...prev, errorMessage]);
    }

    setIsLoading(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <>
      {!isOpen && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="fixed bottom-6 right-6 z-[60] w-14 h-14 rounded-full bg-gradient-to-r from-accent-from via-accent-via to-accent-to shadow-glow flex items-center justify-center"
        >
          <MessageCircle size={24} className="text-white" />
        </motion.button>
      )}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-6 right-6 z-[60] w-[380px] h-[540px] rounded-2xl overflow-hidden glass shadow-glow flex flex-col"
          >
            <div className="flex items-center justify-between px-5 py-4 bg-gradient-to-r from-accent-from/20 via-accent-via/20 to-accent-to/20 border-b border-border">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-accent-from to-accent-via flex items-center justify-center">
                  <Sparkles size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm">
                    AI Assistant
                  </h3>
                  <p className="text-xs text-foreground-muted">
                    Ask about Aman
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-lg hover:bg-white/10 flex items-center justify-center transition-colors"
              >
                <X size={18} className="text-foreground-secondary" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-2.5 ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {message.role === "assistant" && (
                    <div className="w-7 h-7 rounded-full bg-accent-from/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <Bot size={14} className="text-accent-from" />
                    </div>
                  )}
                  <div className="max-w-[80%]">
                    <div
                      className={`rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                        message.role === "user"
                          ? "bg-gradient-to-r from-accent-from to-accent-via text-white rounded-br-md"
                          : "bg-background-card text-foreground-secondary border border-border rounded-bl-md"
                      }`}
                    >
                      {message.content}
                    </div>
                    {message.suggested && message.suggested.length > 0 && (
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {message.suggested.map((q, i) => (
                          <button
                            key={i}
                            onClick={() => sendMessage(q)}
                            className="text-xs px-3 py-1.5 rounded-full bg-accent-from/10 text-accent-from hover:bg-accent-from/20 transition-colors border border-accent-from/20"
                          >
                            {q}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                  {message.role === "user" && (
                    <div className="w-7 h-7 rounded-full bg-background-card flex items-center justify-center flex-shrink-0 mt-1 border border-border">
                      <User size={14} className="text-foreground-muted" />
                    </div>
                  )}
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-accent-from/20 flex items-center justify-center">
                    <Bot size={14} className="text-accent-from" />
                  </div>
                  <div className="bg-background-card rounded-2xl rounded-bl-md px-4 py-3 border border-border">
                    <div className="flex gap-1.5">
                      <div className="w-2 h-2 bg-accent-from rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-accent-via rounded-full animate-bounce [animation-delay:0.1s]" />
                      <div className="w-2 h-2 bg-accent-to rounded-full animate-bounce [animation-delay:0.2s]" />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <form
              onSubmit={handleSubmit}
              className="flex items-center gap-2 px-4 py-3 border-t border-border bg-background-secondary/50"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask a question..."
                className="flex-1 bg-background-card rounded-xl px-4 py-2.5 text-sm text-foreground outline-none border border-border focus:border-accent-from/50 transition-colors"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="w-10 h-10 rounded-xl bg-gradient-to-r from-accent-from to-accent-via flex items-center justify-center disabled:opacity-40 transition-opacity"
              >
                <Send size={16} className="text-white" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export { AIChat };
