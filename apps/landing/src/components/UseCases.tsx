"use client";

import { motion } from "framer-motion";
import { Rocket, Wallet, Code } from "lucide-react";

const useCases = [
  {
    title: "DAO Automation",
    description: "Automate proposals, votes, and treasury transactions across multiple chains.",
    icon: <Rocket className="w-6 h-6 text-primary" />,
  },
  {
    title: "NFT Launches",
    description: "Schedule minting, manage allowlists, and automate airdrops with no code.",
    icon: <Wallet className="w-6 h-6 text-primary" />,
  },
  {
    title: "DeFi Workflows",
    description: "Build cross-chain DeFi strategies with automated bridges and swaps.",
    icon: <Code className="w-6 h-6 text-primary" />,
  },
];

export const UseCases = () => (
  <section id="usecases" className="py-24 px-6 bg-background text-foreground">
    <div className="max-w-5xl mx-auto text-center">
      <motion.h2
        className="text-4xl font-bold mb-4"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Real-World Use Cases
      </motion.h2>

      <motion.p
        className="text-muted-foreground mb-12 max-w-xl mx-auto"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        viewport={{ once: true }}
      >
        Web3Flow powers dozens of production-grade automations across industries and ecosystems.
      </motion.p>

      <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 text-left">
        {useCases.map((item, idx) => (
          <motion.div
            key={idx}
            className="bg-muted/10 p-6 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-3">
              {item.icon}
              <h3 className="text-lg font-semibold">{item.title}</h3>
            </div>
            <p className="text-muted-foreground text-sm">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
