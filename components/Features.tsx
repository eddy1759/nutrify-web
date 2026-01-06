"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  {
    title: "Instant nutrition intelligence",
    description:
      "Point your camera at any food. Get a complete breakdown of macros, micros, and ingredients in seconds—not hours of manual logging.",
    image: "/food-scanning.jpg",
    badge: "Scanner",
  },
  {
    title: "Uncover hidden ingredients",
    description:
      "Processed foods hide additives behind complex names. We decode every label and flag what matters to your health.",
    badge: "Detection",
  },
  {
    title: "Meals that fit your life",
    description:
      "Tell us your goals and dietary needs. Get a personalized weekly plan with recipes you'll actually want to make.",
    image: "/ai-robot.jpg",
    badge: "Planner",
  },
  {
    title: "Track progress, not calories",
    description:
      "Beautiful insights that show how your nutrition impacts energy, sleep, and wellbeing over time.",
    badge: "Insights",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h1 className="text-center text-3xl font-medium text-emerald-600 mb-3">
              CAPABILITIES
            </h1>
            <h2 className="text-center text-3xl md:text-4xl font-semibold text-[#0a0a0a] tracking-tight mb-4">
              AI-powered nutrition capabilities
            </h2>
            <p className="text-center text-lg text-[#525252] max-w-xl">
              Built on OCR, machine learning, and large language models —
designed for real-world food decisions.

            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-elevated rounded-2xl p-6 group"
              >
                {/* Badge */}
                <span className="inline-block px-3 py-1 text-xs font-medium bg-[#f5f5f5] text-[#525252] rounded-full mb-4">
                  {feature.badge}
                </span>

                {/* Content */}
                <h3 className="text-xl font-semibold text-[#0a0a0a] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#525252] leading-relaxed mb-4">
                  {feature.description}
                </p>

                {/* Image if present */}
                {feature.image && (
                  <div className="relative h-48 rounded-xl overflow-hidden bg-[#f5f5f5]">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
