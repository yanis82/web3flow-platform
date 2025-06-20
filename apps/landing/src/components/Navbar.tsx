// components/Navbar.tsx
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { MobileMenu } from "./MobileMenu";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Use Cases", href: "#usecases" },
  { label: "Integrations", href: "#integrations" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Login", href: "/login" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handle);
    return () => window.removeEventListener("scroll", handle);
  }, []);

  const toggle = () => setOpen((v) => !v);
  const close = () => setOpen(false);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 backdrop-blur-lg transition-colors duration-300 border-b ${{
          true: "bg-black/70 border-white/10",
          false: "bg-transparent border-transparent",
        }[scrolled.toString()]}`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 text-2xl font-bold text-white">
            
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
              Node3x
            </motion.span>
          </Link>

          <nav className="hidden md:flex space-x-8">
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              scroll={false}
              className="relative group text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              {label}
              {/* Animated underline */}
              <span
                className="absolute left-0 -bottom-1 h-0.5 bg-gradient-to-r from-purple-400 to-indigo-400 w-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
              />
            </Link>
          ))}
        </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/signup"
              className="px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl hover:scale-105 transition"
            >
              Get Started
            </Link>
            <ThemeToggle />
          </div>

          <button
            onClick={toggle}
            className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <AnimatePresence>{open && <MobileMenu onClose={close} />}</AnimatePresence>
    </>
  );
};
