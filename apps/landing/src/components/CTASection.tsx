"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";

export const CTASection = () => (
  <section className="py-24 px-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-primary-foreground text-center rounded-lg mx-4 sm:mx-0">
    <motion.h2
      className="text-4xl font-bold mb-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      Ready to Build the Future of Web3?
    </motion.h2>
    <motion.p
      className="text-lg sm:text-xl mb-8 max-w-xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.6 }}
      viewport={{ once: true }}
    >
      Start automating your blockchain workflows today. No code required.
    </motion.p>
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Button size="lg" className="shadow-lg shadow-black/30 hover:shadow-black/50 px-10 py-4">
        Get Early Access
      </Button>
    </motion.div>
  </section>
);
