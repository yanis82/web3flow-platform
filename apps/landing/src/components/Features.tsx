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
  <section
    id="features"
    className="py-20 px-4 sm:px-8 lg:px-16 bg-background"
    aria-label="Features section highlighting Web3 automation capabilities"
  >
    <div className="max-w-7xl mx-auto text-center">
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 leading-tight"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Powerful Features Built for Web3 Automation
      </motion.h2>

      <motion.p
        className="text-muted-foreground max-w-3xl mx-auto mb-14 sm:text-lg md:text-xl leading-relaxed"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Everything you need to build robust, scalable, and secure blockchain automations in one place.
      </motion.p>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <button
          type="button"
          className="
            inline-block
            bg-gradient-to-b from-transparent to-[#6769ff6b]
            border border-[#9b9cff91]
            rounded-full
            px-8 py-3
            text-white
            font-semibold
            text-base
            cursor-pointer
            transition
            hover:bg-[#6769ffcc]
            hover:backdrop-brightness-110
            backdrop-blur-md
            shadow-lg
            focus:outline-none focus:ring-4 focus:ring-indigo-500
            active:scale-95
            select-none
          "
          aria-label="Learn more about Node3x"
        >
          Qu'est-ce que Node3x ?
        </button>
      </motion.div>

      <div
        className="
          grid gap-10
          sm:grid-cols-1 sm:max-w-xl sm:mx-auto
          md:grid-cols-2 md:max-w-4xl md:mx-auto
          lg:grid-cols-4 lg:max-w-full
          px-2
        "
      >
        {features.map((feature, idx) => (
          <motion.article
            key={idx}
            className="
              relative
              bg-muted/20
              backdrop-blur-lg
              border border-[#9b9cff60]
              rounded-2xl
              p-8
              shadow-lg
              hover:shadow-2xl
              transition-shadow
              cursor-default
              overflow-hidden
              flex flex-col
              justify-start
              min-h-[200px]
              focus-within:ring-2 focus-within:ring-indigo-400
              outline-none
              select-text
            "
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: idx * 0.15, duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            tabIndex={0}
            aria-labelledby={`feature-title-${idx}`}
            aria-describedby={`feature-desc-${idx}`}
          >
            <motion.div
              className="absolute inset-0 rounded-2xl pointer-events-none border border-transparent"
              style={{
                boxShadow: "0 0 16px 4px rgba(103, 105, 255, 0.4)",
                maskImage: "linear-gradient(90deg, transparent 10%, white 50%, transparent 90%)",
                WebkitMaskImage:
                  "linear-gradient(90deg, transparent 10%, white 50%, transparent 90%)",
              }}
              animate={{ x: [-60, 160] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="relative z-10 flex items-center gap-4 mb-5 text-primary">
              <CheckCircle2 className="h-8 w-8 flex-shrink-0" aria-hidden="true" />
              <h3
                id={`feature-title-${idx}`}
                className="text-xl sm:text-2xl font-semibold"
              >
                {feature.title}
              </h3>
            </div>
            <p
              id={`feature-desc-${idx}`}
              className="relative z-10 text-muted-foreground text-base sm:text-lg leading-relaxed"
            >
              {feature.description}
            </p>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);
