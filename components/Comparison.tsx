"use client";

import { motion } from "framer-motion";
import { Check, X, AlertTriangle } from "lucide-react";

export default function Comparison() {
  return (
    <section className="py-24 lg:py-32 bg-[#fafafa]">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-sm font-medium text-emerald-600 mb-3">
              WHY NUTRIFY
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#0a0a0a] tracking-tight mb-4">
              What labels don&apos;t tell you
            </h2>
            <p className="text-lg text-[#525252] max-w-xl mx-auto">
              Standard nutrition labels are designed for compliance, not
              clarity. We translate the science into actionable insights.
            </p>
          </motion.div>

          {/* Comparison Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Standard Label */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 border border-[#e5e5e5]"
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#f5f5f5] flex items-center justify-center">
                  <X size={16} className="text-[#737373]" />
                </div>
                <span className="text-sm font-medium text-[#737373]">
                  Standard Label
                </span>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-[#fafafa] rounded-xl">
                  <p className="font-mono text-sm text-[#525252]">
                    <span className="text-[#0a0a0a] font-semibold">
                      Ingredients:
                    </span>{" "}
                    Sugar, Partially Hydrogenated Vegetable Oil, Maltodextrin,
                    Natural Flavors, Sodium Caseinate...
                  </p>
                </div>

                <ul className="space-y-3 text-sm text-[#525252]">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4d4d4] mt-2" />
                    Raw ingredient data with no context
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4d4d4] mt-2" />
                    Complex chemical names you can&apos;t decode
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4d4d4] mt-2" />
                    No health impact information
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Nutrify Analysis */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-8 border border-emerald-100 shadow-lg shadow-emerald-500/5"
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center">
                  <Check size={16} className="text-emerald-600" />
                </div>
                <span className="text-sm font-medium text-emerald-600">
                  Nutrify Analysis
                </span>
              </div>

              <div className="space-y-4">
                {/* Alerts */}
                <div className="p-4 bg-amber-50 border border-amber-100 rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle size={14} className="text-amber-600" />
                    <span className="text-sm font-medium text-amber-700">
                      2 Concerns Found
                    </span>
                  </div>
                  <p className="text-sm text-amber-600">
                    Contains trans fats and high-fructose corn syrup
                  </p>
                </div>

                {/* Clear insights */}
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <Check size={14} className="text-emerald-600 mt-0.5" />
                    <span className="text-[#0a0a0a]">
                      Plain language ingredient breakdown
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={14} className="text-emerald-600 mt-0.5" />
                    <span className="text-[#0a0a0a]">
                      Health impact scoring (A+ to F)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={14} className="text-emerald-600 mt-0.5" />
                    <span className="text-[#0a0a0a]">
                      Personalized to your dietary goals
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
