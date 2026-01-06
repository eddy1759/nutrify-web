"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";
import { track } from "@vercel/analytics";

type Platform = "ios" | "android";

export default function DownloadModal({
  open,
  onClose,
  source = "unknown",
}: {
  open: boolean;
  onClose: () => void;
  source?: string;
}) {
  const [email, setEmail] = useState("");
  const [platform, setPlatform] = useState<Platform>("ios");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  if (!open) return null;

  const handleSubmit = async () => {
    setLoading(true);
    track("waitlist_submit", { platform, source });

    try {
      await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, platform, source }),
      });

      setSuccess(true);
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm flex items-center justify-center px-4"
      >
        <motion.div
          initial={{ scale: 0.96, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.96, opacity: 0 }}
          className="w-full max-w-md rounded-2xl bg-white shadow-2xl p-6 relative"
        >
          <button
            title="waitlist modal close"
            onClick={onClose}
            className="absolute right-4 top-4 text-neutral-400 hover:text-neutral-600"
          >
            <X size={18} />
          </button>

          {success ? (
            <>
              <h3 className="text-xl font-semibold mb-2">
                You&apos;re on the list 🎉
              </h3>
              <p className="text-sm text-neutral-600">
                We&apos;ll notify you when Nutrify is ready.
              </p>
            </>
          ) : (
            <>
              <h3 className="text-xl font-semibold mb-2">
                Nutrify is launching soon
              </h3>

              <p className="text-sm text-neutral-600 mb-6">
                Nutrify is currently in private development.
                Join the waitlist to get early access and launch updates.
              </p>

              {/* Platform */}
              <div className="flex gap-2 mb-4">
                {(["ios", "android"] as Platform[]).map((p) => (
                  <button
                    key={p}
                    onClick={() => setPlatform(p)}
                    className={`flex-1 rounded-lg border px-3 py-2 text-sm font-medium ${
                      platform === p
                        ? "border-emerald-500 bg-emerald-50 text-emerald-700"
                        : "border-neutral-200 text-neutral-600"
                    }`}
                  >
                    {p === "ios" ? "iOS" : "Android"}
                  </button>
                ))}
              </div>

              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border px-4 py-2.5 text-sm focus:ring-2 focus:ring-emerald-500 mb-4"
              />

              <button
                onClick={handleSubmit}
                disabled={!email || loading}
                className="w-full rounded-full bg-neutral-900 text-white py-3 text-sm font-medium disabled:opacity-40"
              >
                {loading ? "Joining..." : "Join the waitlist"}
              </button>
            </>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
