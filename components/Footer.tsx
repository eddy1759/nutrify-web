"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-12 bg-white border-t border-[#e5e5e5]">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="relative w-7 h-7 rounded-lg overflow-hidden">
                <Image
                  src="/logo.jpg"
                  alt="Nutrify"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-semibold text-[#0a0a0a]">Nutrify</span>
            </Link>

            {/* Links */}
            <div className="flex items-center gap-8 text-sm text-[#525252]">
              <Link href="#" className="hover:text-[#0a0a0a] transition-colors">
                About
              </Link>
              <Link href="#" className="hover:text-[#0a0a0a] transition-colors">
                Privacy
              </Link>
              <Link href="#" className="hover:text-[#0a0a0a] transition-colors">
                Terms
              </Link>
              <Link href="#" className="hover:text-[#0a0a0a] transition-colors">
                Contact
              </Link>
            </div>

            {/* Copyright */}
            <p className="text-sm text-[#737373]">© 2026 Nutrify Inc.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
