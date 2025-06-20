"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Web3Flow saved us 80% of manual work!",
    author: "Alice, DAO Manager",
  },
  {
    quote: "Our NFT drops never ran smoother.",
    author: "Bob, NFT Creator",
  },
  {
    quote: "Game-changing for DeFi strategies.",
    author: "Carol, DeFi Developer",
  },
];

export const Testimonials = () => (
  <section className="py-24 px-6 bg-muted text-foreground">
    <div className="max-w-4xl mx-auto text-center">
      <motion.h2
        className="text-4xl font-bold mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Trusted by Web3 Builders
      </motion.h2>

      <div className="space-y-12">
        {testimonials.map(({ quote, author }, i) => (
          <motion.blockquote
            key={i}
            className="italic text-lg max-w-xl mx-auto"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          >
            “{quote}”
            <footer className="mt-4 font-semibold text-sm text-muted-foreground">
              — {author}
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </div>
  </section>
);
