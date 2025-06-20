// components/MobileMenu.tsx
"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Use Cases", href: "#usecases" },
  { label: "Integrations", href: "#integrations" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export const MobileMenu: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = "unset"; };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { when: "beforeChildren", staggerChildren: 0.1 } },
    exit: { opacity: 0, transition: { when: "afterChildren" } },
  };

  const itemVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: "spring" as const, stiffness: 300, damping: 30 } },
    exit: { x: 50, opacity: 0, transition: { duration: 0.2 } },
  };

  return (
    <AnimatePresence>
      <motion.div
        key="overlay"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          key="drawer"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ delayChildren: 0.2 }}
          className="absolute top-0 right-0 w-4/5 h-full bg-black/60 backdrop-blur-xl border-l border-white/10 p-6 space-y-6 text-white"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex justify-between items-center">
            <motion.span variants={itemVariants} className="text-lg font-semibold">
              Menu
            </motion.span>
            <motion.button variants={itemVariants} onClick={onClose}>
              <X size={24} />
            </motion.button>
          </div>

          {/* Navigation Links */}
          <motion.nav variants={containerVariants} className="flex flex-col space-y-4">
            {navLinks.map(({ label, href }) => (
              <motion.div key={href} variants={itemVariants}>
                <Link
                  href={href}
                  onClick={onClose}
                  className="text-white/80 hover:text-white text-lg transition"
                >
                  {label}
                </Link>
              </motion.div>
            ))}
          </motion.nav>

          {/* CTA */}
          <motion.div variants={itemVariants} className="mt-auto">
            <Link
              href="/signup"
              onClick={onClose}
              className="block w-full text-center bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 rounded-xl text-sm font-medium hover:scale-105 transition"
            >
              Get Started
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
