"use client";

import { motion } from "framer-motion";
import { ArrowRight, Lock } from "lucide-react";
import { track } from "@vercel/analytics";
import Image from "next/image";
import { useState } from "react";
import DownloadModal from "./DownloadModal";

export default function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-screen gradient-bg">
        <div className="container mx-auto px-6 pt-32 pb-20">
          <div className="max-w-5xl mx-auto">
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-semibold text-[#0a0a0a] tracking-[-0.02em] leading-[1.1] mb-6">
                  Nutrition intelligence,
                  <br />
                  <span className="text-gradient">not guesswork</span>
                </h1>

                <p className="text-lg md:text-xl text-[#525252] max-w-2xl mx-auto mb-10 leading-relaxed">
                  AI-powered label analysis using OCR, NOVA classification, calorie estimation, meal planning, recipe generation, personal nutritionist agent and
                  explainable nutrition insights.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                  <button
                    onClick={() => {
                      track("click_download");
                      setOpen(true);
                    }}
                    className="px-8 py-4 rounded-full text-white font-medium flex items-center gap-2 hover:opacity-90 transition-opacity shadow-lg"
                    style={{ backgroundColor: "#0a0a0a" }}
                  >
                    Click to Download
                    <ArrowRight size={18} />
                  </button>
                </div>

                <div className="flex items-center justify-center gap-6 text-sm text-[#737373]">
                  <div className="flex items-center gap-2">
                    <Lock size={14} className="text-emerald-600" />
                    <span>Privacy-first</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>Explainable AI</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>Deterministic scoring</span>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-16 flex justify-center"
            >
              <div className="relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] bg-emerald-500/10 rounded-full blur-[60px]" />
                <div className="relative w-[260px] md:w-[300px] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-black/20">
                  <Image
                    src="/phone-mockup.png"
                    alt="Nutrify AI Analysis"
                    width={300}
                    height={620}
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <DownloadModal
        open={open}
        onClose={() => setOpen(false)}
        source="hero"
      />
    </>
  );
}
