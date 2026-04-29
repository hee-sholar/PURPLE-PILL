"use client";

import { FaTwitter, FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="relative bg-[#05010a] text-white pt-16 pb-8 border-t border-purple-500/20">

      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(#a855f722_1px,transparent_1px),linear-gradient(90deg,#a855f722_1px,transparent_1px)] bg-[size:30px_30px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* TOP SECTION */}
        <div className="grid md:grid-cols-3 gap-10 mb-12">

          {/* BRAND */}
          {/* BRAND */}
<div>
  <div className="flex items-center gap-3">

    {/* LOGO */}
    <img
      src="/logo.jpeg" // 🔥 replace with your logo path
      alt="PILL Logo"
      className="w-10 h-10 object-contain"
    />

    {/* NAME */}
    <h2 className="text-2xl font-bold text-purple-400">
      $PILL
    </h2>
  </div>

  <p className="mt-4 text-gray-400 text-sm max-w-sm">
    The next generation meme token powered by community, 
    innovation, and pure vibes 💊
  </p>
</div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-lg font-semibold text-purple-300 mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-purple-400 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#how-to-buy" className="hover:text-purple-400 transition">
                  How to Buy
                </a>
              </li>
              <li>
                <a href="#tokenomics" className="hover:text-purple-400 transition">
                  Tokenomics
                </a>
              </li>
              <li>
                <a href="#community" className="hover:text-purple-400 transition">
                  Community
                </a>
              </li>
            </ul>
          </div>

          {/* SOCIAL */}
          <div>
            <h3 className="text-lg font-semibold text-purple-300 mb-4">
              Connect
            </h3>

            <div className="flex gap-4">

              <a
                href="https://x.com/purplepillcoin"
                target="_blank"
                className="p-3 rounded-full bg-white/5 border border-purple-500/20 hover:border-purple-400 hover:bg-purple-500/10 transition"
              >
                <FaTwitter size={18} />
              </a>

              <a
                href="https://instagram.com/pilltoken"
                target="_blank"
                className="p-3 rounded-full bg-white/5 border border-purple-500/20 hover:border-purple-400 hover:bg-purple-500/10 transition"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="https://t.me/+1CG7RDGMr50wYjdh"
                target="_blank"
                className="p-3 rounded-full bg-white/5 border border-purple-500/20 hover:border-purple-400 hover:bg-purple-500/10 transition"
              >
                <FaTelegramPlane size={18} />
              </a>

              <a
                href="https://pilltoken.com"
                target="_blank"
                className="p-3 rounded-full bg-white/5 border border-purple-500/20 hover:border-purple-400 hover:bg-purple-500/10 transition"
              >
                <FiGlobe size={18} />
              </a>

            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-purple-500/20 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">

          <p>© {new Date().getFullYear()} $PILL. All rights reserved.</p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-purple-400 transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-purple-400 transition">
              Terms
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}