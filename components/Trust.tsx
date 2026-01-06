"use client";

import { motion } from "framer-motion";
import { Shield, Eye, Gauge, Server } from "lucide-react";

const signals = [
  {
    icon: Shield,
    title: "Privacy-first",
    description: "Your food data stays on your device. No selling, no sharing.",
  },
  {
    icon: Eye,
    title: "Explainable AI",
    description: "Every score comes with a clear explanation. No black boxes.",
  },
  {
    icon: Gauge,
    title: "Deterministic scoring",
    description:
      "Same food, same score. Consistent NOVA classification every time.",
  },
  {
    icon: Server,
    title: "Production-grade",
    description: "ONNX-optimized inference. Built for speed and reliability.",
  },
];

export default function Trust() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-sm font-medium text-emerald-600 tracking-wide mb-3">
              TRUST & PERFORMANCE
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#0a0a0a] tracking-tight mb-4">
              Built for reliability
            </h2>
            <p className="text-lg text-[#525252] max-w-xl mx-auto">
              Production-grade infrastructure with privacy at its core.
            </p>
          </motion.div>

          {/* Trust Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {signals.map((signal, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#f5f5f5] mb-4">
                  <signal.icon className="w-5 h-5 text-[#0a0a0a]" />
                </div>
                <h3 className="text-base font-semibold text-[#0a0a0a] mb-2">
                  {signal.title}
                </h3>
                <p className="text-sm text-[#525252] leading-relaxed">
                  {signal.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
