"use client";

import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";

function NetworkBackground() {
  const nodes = [
    { cx: 100, cy: 120, r: 6, color: "#7c3aed" },
    { cx: 200, cy: 180, r: 5, color: "#a78bfa" },
    { cx: 320, cy: 100, r: 7, color: "#7c3aed" },
    { cx: 450, cy: 200, r: 6, color: "#a78bfa" },
    { cx: 600, cy: 130, r: 5, color: "#7c3aed" },
  ];
  const connections = [[0, 1], [1, 2], [2, 3], [3, 4]];

  return (
    <motion.svg
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 700 300"
      initial={{ opacity: 0.1 }}
      animate={{ opacity: 0.4 }}
      transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
    >
      {connections.map(([f, t], i) => (
        <motion.line
          key={i}
          x1={nodes[f].cx}
          y1={nodes[f].cy}
          x2={nodes[t].cx}
          y2={nodes[t].cy}
          stroke={nodes[f].color}
          strokeWidth={2}
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            delay: i * 0.5,
          }}
        />
      ))}
      {nodes.map(({ cx, cy, r, color }, i) => (
        <motion.circle
          key={i}
          cx={cx}
          cy={cy}
          r={r}
          fill={color}
          initial={{ opacity: 0.3 }}
          animate={{ opacity: 0.8 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            delay: i * 0.6,
          }}
        />
      ))}
    </motion.svg>
  );
}

function TypedText({ strings }: { strings: string[] }) {
  const el = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!el.current) return;
    const typed = new Typed(el.current, {
      strings,
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 2000,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });
    return () => typed.destroy();
  }, [strings]);

  return <span ref={el} className="font-mono text-indigo-400" />;
}

const typedStrings = [
  "Smart Contract Automation",
  "Cross-Chain Workflows",
  "DAO Governance Triggers",
  "NFT Drops & Monitoring",
];

export function Hero() {
  return (
    <section className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-24 min-h-screen bg-[#050508] overflow-hidden">
      {/* Glassmorphism background layer */}
      <div className="absolute inset-0 m-4 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[inset_0_0_40px_rgba(255,255,255,0.05)] z-[-1]" />

      {/* Animated SVG background */}
      <NetworkBackground />

      {/* Left section: Text content */}
      <motion.div
        className="relative z-10 max-w-xl text-left space-y-6"
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
          Automate Every Chain.
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-500">
            Without Code.
          </span>
        </h1>

        <p className="text-lg text-gray-300 max-w-md">
          Orchestration visuelle. Connecteurs Web3. Sécurité militaire. Le tout, sans une ligne de code.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4">
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-xl px-6 py-3 shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 backdrop-blur-md border border-white/10"
          >
            Essayer maintenant
          </Button>
          <Button
            size="lg"
            variant="secondary"
            className="bg-white/10 text-gray-200 border border-white/10 rounded-xl px-6 py-3 shadow-md hover:bg-white/20 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105 backdrop-blur-md"
          >
            Voir une démo
          </Button>
        </div>

        <div className="mt-4 text-white">
          <TypedText strings={typedStrings} />
        </div>
      </motion.div>

      {/* Right section: Placeholder image */}
      <motion.div
        className="relative z-10 w-full md:w-1/2 max-w-lg mt-12 md:mt-0"
        initial={{ x: 40, opacity: 0, scale: 0.9 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
      >
        <div className="h-64 bg-gradient-to-br from-[#111] via-[#1c1c1c] to-[#111] rounded-2xl border border-white/10 shadow-xl flex items-center justify-center text-gray-400 text-center text-sm backdrop-blur-md">
          Aperçu du workflow NodeEx
        </div>
      </motion.div>

      {/* Glow elements */}
      <div className="absolute -top-16 -left-16 w-[350px] h-[350px] bg-purple-600 opacity-20 blur-3xl mix-blend-color-dodge animate-pulse pointer-events-none" />
      <div className="absolute -bottom-16 -right-16 w-[300px] h-[300px] bg-blue-600 opacity-20 blur-3xl mix-blend-color-dodge animate-pulse pointer-events-none" />
    </section>
  );
}

export default Hero;
