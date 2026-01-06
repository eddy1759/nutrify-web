"use client";

import { motion } from "framer-motion";
import { Scan, Layers, AlertTriangle, Sparkles, Check, X } from "lucide-react";

const capabilities = [
  {
    icon: Scan,
    title: "OCR Label Analysis",
    description:
      "Computer vision extracts every ingredient from food labels. No manual entry, no missed details.",
    color: "bg-blue-500",
  },
  {
    icon: Layers,
    title: "NOVA Classification",
    description:
      "BERT-based model classifies foods into processing levels 1-4. Know exactly how processed your food is.",
    color: "bg-emerald-500",
  },
  {
    icon: AlertTriangle,
    title: "Additive Detection",
    description:
      "Automatically flags preservatives, artificial colors, and ingredients linked to health concerns.",
    color: "bg-amber-500",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Insights",
    description:
      "LLM agents explain findings in plain language. Get personalized recommendations, not just data.",
    color: "bg-violet-500",
  },
];

// CSS-based NOVA Scale Visual
function NovaScale() {
  const levels = [
    {
      level: 1,
      label: "Unprocessed",
      color: "bg-emerald-500",
      example: "Fresh fruits",
    },
    {
      level: 2,
      label: "Ingredients",
      color: "bg-blue-500",
      example: "Olive oil",
    },
    {
      level: 3,
      label: "Processed",
      color: "bg-amber-500",
      example: "Canned food",
    },
    {
      level: 4,
      label: "Ultra-processed",
      color: "bg-red-500",
      example: "Soda, chips",
    },
  ];

  return (
    <div className="mt-4 p-4 bg-[#fafafa] rounded-xl">
      <p className="text-xs font-medium text-[#737373] mb-3">
        NOVA PROCESSING SCALE
      </p>
      <div className="space-y-2">
        {levels.map((item) => (
          <div key={item.level} className="flex items-center gap-3">
            <div
              className={`w-8 h-8 ${item.color} rounded-lg flex items-center justify-center text-white text-sm font-bold`}
            >
              {item.level}
            </div>
            <div className="flex-1">
              <span className="text-sm font-medium text-[#0a0a0a]">
                {item.label}
              </span>
              <span className="text-xs text-[#737373] ml-2">
                • {item.example}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// CSS-based OCR Visual
function OcrVisual() {
  return (
    <div className="mt-4 p-4 bg-[#fafafa] rounded-xl">
      <div className="flex items-start gap-3">
        <div className="flex-1 p-3 bg-white rounded-lg border border-dashed border-[#d4d4d4]">
          <p className="text-[10px] font-mono text-[#737373] leading-relaxed">
            INGREDIENTS: WATER, SUGAR,
            <br />
            MODIFIED CORN STARCH,
            <br />
            NATURAL FLAVORS...
          </p>
        </div>
        <div className="text-[#d4d4d4]">→</div>
        <div className="flex-1 p-3 bg-white rounded-lg border border-emerald-200">
          <div className="space-y-1">
            <div className="flex items-center gap-1 text-xs">
              <Check size={10} className="text-emerald-500" />
              <span>Water</span>
            </div>
            <div className="flex items-center gap-1 text-xs">
              <X size={10} className="text-red-500" />
              <span className="text-red-600">Sugar</span>
            </div>
            <div className="flex items-center gap-1 text-xs">
              <X size={10} className="text-amber-500" />
              <span className="text-amber-600">Modified starch</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// CSS-based Additive Visual
function AdditiveVisual() {
  const additives = [
    { name: "E621", concern: "high", label: "MSG" },
    { name: "E211", concern: "medium", label: "Benzoate" },
    { name: "E150d", concern: "low", label: "Caramel" },
  ];

  return (
    <div className="mt-4 p-4 bg-[#fafafa] rounded-xl">
      <div className="space-y-2">
        {additives.map((item) => (
          <div
            key={item.name}
            className="flex items-center justify-between p-2 bg-white rounded-lg"
          >
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-[#737373]">
                {item.name}
              </span>
              <span className="text-sm text-[#0a0a0a]">{item.label}</span>
            </div>
            <span
              className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                item.concern === "high"
                  ? "bg-red-100 text-red-600"
                  : item.concern === "medium"
                  ? "bg-amber-100 text-amber-600"
                  : "bg-emerald-100 text-emerald-600"
              }`}
            >
              {item.concern}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// CSS-based AI Insight Visual
function InsightVisual() {
  return (
    <div className="mt-4 p-4 bg-[#fafafa] rounded-xl">
      <div className="p-3 bg-white rounded-lg border border-violet-200">
        <div className="flex items-start gap-2">
          <Sparkles size={14} className="text-violet-500 mt-0.5" />
          <div className="text-sm text-[#525252]">
            <p className="font-medium text-[#0a0a0a] mb-1">AI Summary</p>
            <p className="text-xs leading-relaxed">
              &quot;This product is ultra-processed (NOVA 4) with 3 additives of
              concern. Consider switching to a whole-food alternative.&quot;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Capabilities() {
  return (
    <section id="features" className="py-24 lg:py-32 bg-white">
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
              CAPABILITIES
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#0a0a0a] tracking-tight mb-4">
              Built on real AI, not marketing
            </h2>
            <p className="text-lg text-[#525252] max-w-xl mx-auto">
              OCR, machine learning, and LLM agents—designed for real-world food
              decisions.
            </p>
          </motion.div>

          {/* Capabilities Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {capabilities.map((cap, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-elevated rounded-2xl p-6 group"
              >
                {/* Icon */}
                <div
                  className={`w-10 h-10 rounded-xl ${cap.color} flex items-center justify-center mb-4`}
                >
                  <cap.icon className="w-5 h-5 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-[#0a0a0a] mb-2">
                  {cap.title}
                </h3>
                <p className="text-[#525252] leading-relaxed">
                  {cap.description}
                </p>

                {/* Visual for each card */}
                {index === 0 && <OcrVisual />}
                {index === 1 && <NovaScale />}
                {index === 2 && <AdditiveVisual />}
                {index === 3 && <InsightVisual />}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
