"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { track } from "@vercel/analytics";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import DownloadModal from "./DownloadModal";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div
          className={`transition-all duration-300 ${
            isScrolled
              ? "bg-white/80 backdrop-blur-xl border-b border-[#e5e5e5]/50"
              : ""
          }`}
        >
          <nav className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto flex items-center justify-between h-16">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-2">
                <div className="relative w-8 h-8 rounded-lg overflow-hidden">
                  <Image
                    src="/logo.jpg"
                    alt="Nutrify"
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="font-semibold text-[#0a0a0a]">Nutrify</span>
              </Link>

              {/* Desktop Nav */}
              <div className="hidden md:flex items-center gap-8">
                <Link
                  href="#features"
                  className="text-sm text-[#525252] hover:text-[#0a0a0a] transition-colors"
                >
                  Capabilities
                </Link>
                <Link
                  href="#how-it-works"
                  className="text-sm text-[#525252] hover:text-[#0a0a0a] transition-colors"
                >
                  How it Works
                </Link>
                <button
                  onClick={() => {
                    track("click_download");
                    setOpen(true);
                  }}
                  className="px-5 py-2.5 rounded-full text-white text-sm font-medium flex items-center gap-1.5 hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: "#0a0a0a" }}
                >
                  Download
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </nav>
        </div>
      </motion.header>

      <DownloadModal
        open={open}
        onClose={() => setOpen(false)}
        source="navbar"
      />
    </>
  );
}
