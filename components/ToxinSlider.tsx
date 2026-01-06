"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GripVertical, Check } from "lucide-react";

export default function ToxinSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPosition((x / rect.width) * 100);
  };

  useEffect(() => {
    const handleMouseUp = () => {
      isDragging.current = false;
    };
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging.current) handleMove(e.clientX);
    };

    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
              See the difference
            </h2>
            <p className="text-lg text-slate-500">
              Drag to compare standard labels vs Nutrify analysis.
            </p>
          </motion.div>

          {/* Comparison Container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            ref={containerRef}
            onMouseDown={() => {
              isDragging.current = true;
            }}
            onTouchMove={(e) => handleMove(e.touches[0].clientX)}
            className="relative rounded-2xl overflow-hidden border border-slate-200 cursor-ew-resize select-none"
            style={{ aspectRatio: "3/2" }}
          >
            {/* RIGHT SIDE: Nutrify View (Full Background) */}
            <div className="absolute inset-0 bg-emerald-50 flex items-center justify-center p-8">
              <div className="w-full max-w-xs">
                <div className="text-center mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-semibold">
                    <Check size={12} />
                    Nutrify
                  </span>
                </div>
                <div className="bg-white rounded-xl p-5 shadow-sm border border-emerald-100">
                  <h4 className="text-lg font-bold text-slate-900 text-center mb-4">
                    Greek Yogurt
                  </h4>
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    <div className="text-center p-2 bg-slate-50 rounded-lg">
                      <div className="font-bold text-slate-900">18g</div>
                      <div className="text-xs text-slate-500">Protein</div>
                    </div>
                    <div className="text-center p-2 bg-emerald-50 rounded-lg">
                      <div className="font-bold text-emerald-600">0g</div>
                      <div className="text-xs text-slate-500">Sugar</div>
                    </div>
                    <div className="text-center p-2 bg-slate-50 rounded-lg">
                      <div className="font-bold text-slate-900">120</div>
                      <div className="text-xs text-slate-500">Calories</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-emerald-50 rounded-lg">
                    <Check size={14} className="text-emerald-600" />
                    <span className="text-xs font-medium text-emerald-700">
                      Clean ingredients
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* LEFT SIDE: Standard Label (Clipped) */}
            <div
              className="absolute inset-0 bg-slate-100 flex items-center justify-center p-8"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <div className="w-full max-w-xs">
                <div className="text-center mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200 text-slate-600 text-xs font-semibold">
                    Standard
                  </span>
                </div>
                <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-200">
                  <h4 className="text-lg font-bold text-slate-700 text-center mb-4">
                    Greek Yogurt
                  </h4>
                  <div className="font-mono text-[10px] text-slate-600 leading-relaxed space-y-0.5">
                    <p className="font-bold border-b pb-1 mb-1">
                      Nutrition Facts
                    </p>
                    <p>Serving Size 1 cup (227g)</p>
                    <p>Calories 120</p>
                    <p>Total Fat 0g</p>
                    <p>Sodium 65mg</p>
                    <p>Total Carbs 7g</p>
                    <p>Protein 18g</p>
                    <p className="mt-2 text-[8px] text-slate-400 border-t pt-1">
                      INGREDIENTS: CULTURED PASTEURIZED...
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Slider Handle */}
            <div
              className="absolute top-0 bottom-0 z-10"
              style={{
                left: `${sliderPosition}%`,
                transform: "translateX(-50%)",
              }}
            >
              <div className="h-full w-1 bg-white shadow-lg" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg border border-slate-200 flex items-center justify-center">
                <GripVertical size={16} className="text-slate-400" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
