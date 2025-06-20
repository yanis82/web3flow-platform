"use client";

import { motion } from "framer-motion";

const integrations = [
  { name: "Ethereum", logo: "/logos/ethereum.svg" },
  { name: "Solana", logo: "/logos/solana.svg" },
  { name: "Polygon", logo: "/logos/polygon.svg" },
  { name: "WalletConnect", logo: "/logos/walletconnect.svg" },
  { name: "Chainlink", logo: "/logos/chainlink.svg" },
  { name: "IPFS", logo: "/logos/ipfs.svg" },
];

export const Integrations = () => (
  <section id="integrations" className="py-24 px-6 bg-background">
    <div className="max-w-6xl mx-auto text-center">
      <motion.h2
        className="text-4xl font-bold mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Seamless Integrations
      </motion.h2>

      <motion.div
        className="flex flex-wrap justify-center items-center gap-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {integrations.map((integration, idx) => (
          <motion.div
            key={integration.name}
            className="w-24 h-24 flex items-center justify-center p-4 bg-muted/20 rounded-lg shadow-sm"
            variants={{
              hidden: { opacity: 0, scale: 0.85 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{ delay: idx * 0.15, duration: 0.4 }}
          >
            <img
              src={integration.logo}
              alt={`${integration.name} logo`}
              className="max-h-12 max-w-full object-contain"
              loading="lazy"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);
