// components/Pricing.tsx
"use client";

import { motion } from "framer-motion";

const tiers = [
  {
    name: "Free",
    price: "0",
    description: "Up to 100 workflow runs per month",
    features: ["100 workflow runs", "Community support", "Public templates"],
  },
  {
    name: "Pro",
    price: "29",
    description: "Advanced features for growing teams",
    features: ["1,000 workflow runs", "Priority email support", "Premium templates"],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "99",
    description: "All features for large organizations",
    features: ["Unlimited runs", "24/7 support", "Custom SLAs"],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 px-6 bg-background">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-4"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Choose Your Plan
        </motion.h2>
        <motion.p
          className="text-muted-foreground mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Flexible pricing for projects of any size. No hidden fees.
        </motion.p>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              className={`flex flex-col p-6 rounded-2xl border shadow-lg ${
                tier.popular
                  ? "border-primary bg-primary/10"
                  : "border-muted/20 bg-background"
              }`}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              {tier.popular && (
                <span className="self-center px-3 py-1 bg-primary text-white rounded-full text-sm mb-4">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-semibold mb-2">{tier.name}</h3>
              <p className="text-muted-foreground mb-4 flex-1">
                {tier.description}
              </p>
              <div className="text-5xl font-bold mb-4">
                ${tier.price}
                <span className="text-lg font-normal">/mo</span>
              </div>
              <ul className="space-y-2 mb-6 text-left">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center">
                    <svg
                      className="h-5 w-5 text-primary mr-2 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414L8.414 15 4 10.586a1 1 0 111.414-1.414L8.414 12.172l7.879-7.879a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <button className="mt-auto bg-primary text-primary-foreground py-2 px-4 rounded-lg hover:bg-primary/90 transition">
                {tier.name === "Free" ? "Get Started" : "Upgrade"}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
