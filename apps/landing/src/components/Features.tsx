"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const features = [
  {
    title: "No-Code Editor",
    description: "Design complex blockchain workflows with a drag-and-drop interface.",
  },
  {
    title: "Multi-Chain Support",
    description: "Integrate with Ethereum, Polygon, Solana, and more out of the box.",
  },
  {
    title: "Event Triggers",
    description: "React to smart contract events and automate actions instantly.",
  },
  {
    title: "Secure Key Management",
    description: "Your private keys are encrypted and never leave your device.",
  },
];

export const Features = () => (
  <section id="features" className="py-24 px-6 bg-background">
    <div className="max-w-6xl mx-auto text-center">
      <motion.h2
        className="text-4xl font-bold mb-4"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Powerful Features Built for Web3 Automation
      </motion.h2>

      <motion.p
        className="text-muted-foreground mb-12 max-w-2xl mx-auto"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Everything you need to build robust, scalable, and secure blockchain automations in one place.
      </motion.p>

      <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-2">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            className="text-left bg-muted/10 p-6 rounded-xl shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-2 text-primary">
              <CheckCircle2 className="h-6 w-6" />
              <h3 className="text-lg font-semibold">{feature.title}</h3>
            </div>
            <p className="text-muted-foreground text-sm">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
