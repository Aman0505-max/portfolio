"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/constants";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useTheme } from "@/lib/theme";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      )}
    >
      <nav className="container-custom h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold gradient-text"
        >
          aman.
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {siteConfig.navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm text-foreground-secondary hover:text-foreground transition-colors"
            >
              {item.label}
            </Link>
          ))}

          <button
            onClick={toggle}
            className="w-9 h-9 rounded-lg bg-background-card border border-border flex items-center justify-center text-foreground-secondary hover:text-foreground hover:border-border-hover transition-all"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <Button variant="primary" size="sm">
            Resume
          </Button>
        </div>

        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={toggle}
            className="w-9 h-9 rounded-lg bg-background-card border border-border flex items-center justify-center text-foreground-secondary hover:text-foreground transition-all"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            className="text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden bg-background-secondary border-b border-border">
          <div className="container-custom py-4 flex flex-col gap-4">
            {siteConfig.navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-foreground-secondary hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button variant="primary" size="sm" className="w-full">
              Resume
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

export { Navbar };
