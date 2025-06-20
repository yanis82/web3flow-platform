// components/ThemeToggle.tsx
"use client";

import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";

export const ThemeToggle = () => {
  const [theme, setTheme] = useState<string>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = stored || (systemDark ? "dark" : "light");
    setTheme(initial);
    setMounted(true);
    document.documentElement.classList.toggle("dark", initial === "dark");
  }, []);

  if (!mounted) return null;

  const toggle = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.classList.toggle("dark", next === "dark");
  };
  const iconVariants: Variants = {
    hidden: { scale: 0.7, rotate: -45, opacity: 0 },
    visible: { scale: 1, rotate: 0, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 20 } },
    exit: { scale: 0.7, rotate: 45, opacity: 0, transition: { duration: 0.2 } },
  };
  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="p-2 rounded-full bg-white/10 dark:bg-black/10 hover:bg-white/20 dark:hover:bg-black/20 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
    >
      <AnimatePresence mode="wait">
        {theme === "light" ? (
          <motion.div
            key="sun"
            variants={iconVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Sun size={20} className="text-yellow-400" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            variants={iconVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Moon size={20} className="text-white" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
};
