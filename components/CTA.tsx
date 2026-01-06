"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 lg:py-32 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">
              Start making informed food decisions
            </h2>
            <p className="text-lg text-[#a3a3a3] mb-10 max-w-lg mx-auto">
              Free to download. No account required to scan. Premium features
              for power users.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="px-8 py-4 bg-white text-[#0a0a0a] rounded-full font-medium flex items-center gap-2 hover:bg-[#f5f5f5] transition-colors">
                Click to Download
                <ArrowRight size={18} />
              </button>
              <button className="px-8 py-4 text-white border border-[#404040] rounded-full font-medium hover:border-[#525252] transition-colors">
                View example analysis
              </button>
            </div>

            {/* Tech Stack Badge */}
            <p className="mt-12 text-sm text-[#525252]">
              Built with NestJS, FastAPI, ONNX, and PostgreSQL
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
