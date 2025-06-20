"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => (
  <section
    id="home"
    className="relative flex flex-col items-center justify-center text-center min-h-[80vh] px-6 bg-gradient-to-b from-black via-zinc-900 to-background overflow-hidden"
  >
    {/* Subtle animated background pulse */}
    <motion.div
      className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-600/20 via-transparent to-transparent animate-pulse"
      aria-hidden="true"
    />

    <motion.h1
      className="text-4xl sm:text-6xl font-extrabold text-white mb-4 drop-shadow-lg"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      Automate Web3 Workflows Visually
    </motion.h1>

    <motion.p
      className="text-lg sm:text-xl text-muted-foreground max-w-2xl mb-8"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      Build, deploy, and monitor your blockchain workflows without writing a single line of code.
    </motion.p>

    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <Button size="lg" className="px-8 py-4">
        Get Early Access <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
    </motion.div>
  </section>
);
