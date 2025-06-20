// components/Faq.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    q: "How do I connect my wallet?",
    a: "Click the Connect Wallet button and select your preferred wallet (MetaMask, WalletConnect, etc.).",
  },
  {
    q: "Which blockchains are supported?",
    a: "We support Ethereum, Polygon, Solana, BNB Chain and more via plugin architecture.",
  },
  {
    q: "Can I add custom code to workflows?",
    a: "Yes, Pro and Enterprise plans allow you to inject custom scripts into any step.",
  },
  {
    q: "Is there a free tier?",
    a: "Our Free plan includes up to 100 workflow runs per month with community support.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 px-6 bg-background text-foreground">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="border-b border-muted/20">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex justify-between items-center py-4 text-left"
                >
                  <span className="text-lg font-medium">{item.q}</span>
                  {isOpen ? <ChevronUp /> : <ChevronDown />}
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="py-2 text-muted-foreground">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
