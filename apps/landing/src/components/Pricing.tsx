"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Check } from "lucide-react";
import { useRouter } from "next/navigation";

const tiers = [
  {
    name: "Free",
    monthly: 0,
    annually: 0,
    description: "Ideal to get started and test the platform",
    features: [
      "Up to 100 workflow runs",
      "Access to public templates",
      "Community support",
    ],
    cta: "Get Started",
    action: "/signup?plan=free",
  },
  {
    name: "Pro",
    monthly: 29,
    annually: 24,
    description: "Perfect for growing teams and creators",
    features: [
      "1,000 workflow runs",
      "3 supported blockchains",
      "Premium templates",
      "Priority email support",
    ],
    popular: true,
    cta: "Upgrade to Pro",
    action: "/checkout?plan=pro",
  },
  {
    name: "Business",
    monthly: 99,
    annually: 79,
    description: "Advanced automations & multi-chain access",
    features: [
      "5,000 workflow runs",
      "Multi-chain & cross-chain workflows",
      "DAO & NFT modules",
      "Team workspace & role management",
    ],
    cta: "Start Business Plan",
    action: "/checkout?plan=business",
  },
  {
    name: "Enterprise",
    monthly: 199,
    annually: 159,
    description: "Unlimited scalability for Web3 platforms",
    features: [
      "Unlimited workflow runs",
      "All blockchains & advanced modules",
      "Dedicated support & onboarding",
      "Custom SLAs & enterprise security",
    ],
    cta: "Contact Sales",
    action: "/contact",
  },
];

export function Pricing() {
  const [isYearly, setIsYearly] = useState(false);
  const router = useRouter();

  const handleCryptoPayment = (plan: string) => {
    alert(`Redirecting to crypto payment for plan: ${plan}`);
    router.push(`/crypto-payment?plan=${plan}`);
  };

  return (
    <section id="pricing" className="py-24 px-6 bg-black/80 text-white backdrop-blur-xl">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Simple, Transparent Pricing
        </motion.h2>

        <motion.p
          className="text-white/70 max-w-2xl mx-auto text-lg mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          No contracts. No surprise fees. Cancel anytime.
        </motion.p>

        {/* Switch billing cycle */}
        <div className="flex justify-center items-center gap-4 mb-6">
          <span className={`text-sm font-medium transition-colors ${!isYearly ? "text-white" : "text-white/50"}`}>
            Monthly
          </span>
          <div
            onClick={() => setIsYearly(!isYearly)}
            className="relative inline-flex h-6 w-11 cursor-pointer rounded-full bg-white/20 transition-colors duration-300"
          >
            <motion.div
              layout
              className="absolute h-5 w-5 top-0.5 left-0.5 rounded-full bg-white shadow-md"
              animate={{ x: isYearly ? 20 : 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          </div>
          <span className={`text-sm font-medium transition-colors ${isYearly ? "text-white" : "text-white/50"}`}>
            Yearly
          </span>
        </div>
        {isYearly && (
          <p className="text-sm text-primary font-medium mb-10">Save 20% with yearly billing</p>
        )}

        {/* Pricing grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 relative">
          {tiers.map((tier, index) => {
            const price = isYearly ? tier.annually : tier.monthly;
            const suffix = isYearly ? "/yr" : "/mo";

            return (
              <motion.div
                key={tier.name}
                className={`relative flex flex-col p-6 rounded-3xl border backdrop-blur-md bg-white/5 transition-all ${
                  tier.popular
                    ? "border-primary/70 shadow-xl ring-1 ring-primary/50 scale-[1.02]"
                    : "border-white/10"
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
              >
                {/* Badge INSIDE the card above Pro title */}
                {tier.popular && (
                  <div className="mb-2">
                    <span className="inline-block text-xs px-3 py-1 bg-gradient-to-r from-primary to-indigo-600 text-white rounded-full font-semibold shadow">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-1">{tier.name}</h3>
                <p className="text-white/70 mb-4 text-sm">{tier.description}</p>
                <div className="text-5xl font-extrabold mb-2">
                  ${price}
                  <span className="text-lg font-medium text-white/50">{suffix}</span>
                </div>
                {isYearly && tier.monthly > 0 && (
                  <p className="text-xs text-primary font-medium mb-4">
                    Save {Math.round((1 - tier.annually / tier.monthly) * 100)}%
                  </p>
                )}
                <ul className="space-y-3 text-left mb-6 text-sm text-white/70">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto space-y-2">
                  <button
                    onClick={() => router.push(tier.action)}
                    className={`w-full inline-flex items-center justify-center gap-1 py-2 px-4 rounded-lg text-sm font-semibold transition-all ${
                      tier.popular
                        ? "bg-primary text-white hover:bg-primary/90"
                        : "bg-white/10 text-white hover:bg-white/20"
                    }`}
                  >
                    {tier.cta}
                  </button>
                  {/* Crypto payment button for all except Pro and Free */}
                  {tier.name !== "Free" && tier.name !== "Pro" && (
                    <button
                      onClick={() => handleCryptoPayment(tier.name.toLowerCase())}
                      className="w-full inline-flex items-center justify-center gap-1 py-2 px-4 rounded-lg text-sm font-semibold border border-white/20 hover:bg-white/10"
                    >
                      Pay with Crypto
                    </button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
