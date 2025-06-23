"use client";

import { motion } from "framer-motion";
import { useState } from "react";

type SwitchProps = {
  enabled: boolean;
  setEnabled: (value: boolean) => void;
  labelLeft?: string;
  labelRight?: string;
};

export function Switch({
  enabled,
  setEnabled,
  labelLeft = "Monthly",
  labelRight = "Yearly",
}: SwitchProps) {
  return (
    <div className="flex items-center gap-4 text-sm font-medium text-white">
      <span className={enabled ? "opacity-60" : "font-semibold"}>{labelLeft}</span>
      <button
        onClick={() => setEnabled(!enabled)}
        className="relative w-14 h-8 bg-white/20 border border-white/30 backdrop-blur-md rounded-full p-1 transition-all duration-300 focus:outline-none"
      >
        <motion.div
          className="w-6 h-6 bg-white rounded-full shadow-lg"
          layout
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          style={{ x: enabled ? "100%" : "0%" }}
        />
      </button>
      <span className={enabled ? "font-semibold" : "opacity-60"}>{labelRight}</span>
    </div>
  );
}
export function PricingSwitch() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <Switch
      enabled={isYearly}
      setEnabled={setIsYearly}
      labelLeft="Monthly"
      labelRight="Yearly"
    />
  );
}