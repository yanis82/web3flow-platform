"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Free",
    price: "0",
    description: "Ideal to get started and test the platform",
    features: [
      "Up to 100 workflow runs",
      "Access to public templates",
      "Community support",
    ],
    cta: "Get Started",
  },
  {
    name: "Pro",
    price: "29",
    description: "Perfect for teams that need more power",
    features: [
      "1,000 workflow runs",
      "Priority email support",
      "Premium templates",
    ],
    popular: true,
    cta: "Upgrade to Pro",
  },
  {
    name: "Enterprise",
    price: "99",
    description: "Full features for large scale operations",
    features: [
      "Unlimited workflow runs",
      "Dedicated support",
      "Custom SLAs & onboarding",
    ],
    cta: "Contact Sales",
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Simple, Transparent Pricing
        </motion.h2>
        <motion.p
          className="text-muted-foreground mb-12 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          No contracts. No surprise fees. Cancel anytime.
        </motion.p>

        <div className="grid gap-8 md:grid-cols-3">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              className={`flex flex-col p-6 rounded-2xl border shadow-md transition-all ${
                tier.popular
                  ? "border-primary bg-primary/10 scale-105"
                  : "border-muted/20 bg-background"
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
            >
              {tier.popular && (
                <span className="self-center mb-4 px-3 py-1 text-sm font-medium bg-primary text-white rounded-full">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-semibold mb-2">{tier.name}</h3>
              <p className="text-muted-foreground mb-4">{tier.description}</p>
              <div className="text-5xl font-bold mb-4">
                ${tier.price}
                <span className="text-lg font-normal text-muted-foreground">/mo</span>
              </div>
              <ul className="space-y-3 text-left mb-6">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`mt-auto py-2 px-4 rounded-lg text-sm font-medium transition ${
                  tier.popular
                    ? "bg-primary text-white hover:bg-primary/90"
                    : "bg-muted text-foreground hover:bg-muted/80"
                }`}
              >
                {tier.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
