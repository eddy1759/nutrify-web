"use client";

import { motion } from "framer-motion";
import { Camera, FileText, Brain, Lightbulb, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Camera,
    title: "Capture",
    description: "Point at any food label or product",
    color: "bg-blue-500",
  },
  {
    icon: FileText,
    title: "Extract",
    description: "OCR reads and parses all ingredients",
    color: "bg-emerald-500",
  },
  {
    icon: Brain,
    title: "Classify",
    description: "BERT model scores processing level",
    color: "bg-violet-500",
  },
  {
    icon: Lightbulb,
    title: "Explain",
    description: "LLM agent provides clear insights",
    color: "bg-amber-500",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 lg:py-32 bg-[#fafafa]">
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
              HOW IT WORKS
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#0a0a0a] tracking-tight mb-4">
              From scan to insight in seconds
            </h2>
            <p className="text-lg text-[#525252] max-w-xl mx-auto">
              A real AI pipeline, not a lookup table.
            </p>
          </motion.div>

          {/* Pipeline Visual - CSS Based */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="bg-white rounded-2xl border border-[#e5e5e5] p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                {steps.map((step, index) => (
                  <div key={index} className="flex items-center gap-4">
                    {/* Step Node */}
                    <div className="flex flex-col items-center text-center">
                      <div
                        className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl ${step.color} flex items-center justify-center mb-3 shadow-lg`}
                      >
                        <step.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                      </div>
                      <h4 className="font-semibold text-[#0a0a0a] text-lg">
                        {step.title}
                      </h4>
                      <p className="text-sm text-[#737373] hidden md:block max-w-[120px]">
                        {step.description}
                      </p>
                    </div>

                    {/* Arrow (except last) */}
                    {index < steps.length - 1 && (
                      <ArrowRight className="hidden md:block w-6 h-6 text-[#d4d4d4] flex-shrink-0" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
