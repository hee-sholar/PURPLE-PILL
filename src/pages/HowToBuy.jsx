"use client";

import {
  Wallet,
  TrendingUp,
  Users,
} from "lucide-react";

import {
  FaTwitter,
  FaInstagram,
  FaTelegramPlane,
} from "react-icons/fa";

import { FiGlobe } from "react-icons/fi";

export default function HowToBuy() {
  return (
    <section id="how-to-buy" className="relative w-full py-20 bg-[#05010a] text-white overflow-hidden">

      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(#a855f722_1px,transparent_1px),linear-gradient(90deg,#a855f722_1px,transparent_1px)] bg-[size:30px_30px]" />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-purple-400">
            How To Buy $PILL
          </h1>
          <p className="mt-4 text-gray-400">
            Ready to join the Purple Pill? Follow these simple steps to get your $PILL tokens 💊
          </p>
        </div>

        {/* STEPS */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* STEP 1 */}
          <div className="relative bg-white/5 border border-purple-500/20 backdrop-blur-xl rounded-2xl p-6 hover:border-purple-400 hover:shadow-purple-500/20 hover:shadow-lg transition">
            <div className="absolute -top-3 -left-3 bg-purple-500 text-black font-bold px-3 py-1 rounded-full">
              01
            </div>

            <h2 className="text-xl font-semibold text-purple-300 mb-3">
              Set Up Wallet
            </h2>

            <p className="text-gray-400 text-sm">
              Download Phantom or any Solana wallet and fund it with SOL.
            </p>

            <Wallet className="mt-6 text-purple-400" size={32} />
          </div>

          {/* STEP 2 */}
          <div className="relative bg-white/5 border border-purple-500/20 backdrop-blur-xl rounded-2xl p-6 hover:border-purple-400 hover:shadow-purple-500/20 hover:shadow-lg transition">
            <div className="absolute -top-3 -left-3 bg-purple-500 text-black font-bold px-3 py-1 rounded-full">
              02
            </div>

            <h2 className="text-xl font-semibold text-purple-300 mb-3">
              Connect to DEX
            </h2>

            <p className="text-gray-400 text-sm">
              Connect your wallet to Raydium or Orca and swap SOL for $PILL.
            </p>

            <TrendingUp className="mt-6 text-purple-400" size={32} />
          </div>

          {/* STEP 3 */}
          <div className="relative bg-white/5 border border-purple-500/20 backdrop-blur-xl rounded-2xl p-6 hover:border-purple-400 hover:shadow-purple-500/20 hover:shadow-lg transition">
            <div className="absolute -top-3 -left-3 bg-purple-500 text-black font-bold px-3 py-1 rounded-full">
              03
            </div>

            <h2 className="text-xl font-semibold text-purple-300 mb-3">
              HODL & Participate
            </h2>

            <p className="text-gray-400 text-sm">
              Hold your $PILL tokens and be part of the community 🚀
            </p>

            <Users className="mt-6 text-purple-400" size={32} />
          </div>
        </div>

        {/* SOCIAL MEDIA */}
        <div className="mt-16 text-center">
          <h3 className="text-lg text-gray-400 mb-6">
            Join the community
          </h3>

          <div className="flex justify-center gap-6 flex-wrap">

            {/* Twitter */}
            <a
              href="https://twitter.com/pilltoken"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-full bg-white/5 border border-purple-500/20 hover:border-purple-400 hover:bg-purple-500/10 transition"
            >
              <FaTwitter size={18} />
              <span>Twitter</span>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/purplepillcoin?igsh=NTc4MTIwNjQ2YQ%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-full bg-white/5 border border-purple-500/20 hover:border-purple-400 hover:bg-purple-500/10 transition"
            >
              <FaInstagram size={18} />
              <span>Instagram</span>
            </a>

            {/* Telegram */}
            <a
              href="https://t.me/pilltoken"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-full bg-white/5 border border-purple-500/20 hover:border-purple-400 hover:bg-purple-500/10 transition"
            >
              <FaTelegramPlane size={18} />
              <span>Telegram</span>
            </a>

            {/* Website */}
            <a
              href="https://pilltoken.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-full bg-white/5 border border-purple-500/20 hover:border-purple-400 hover:bg-purple-500/10 transition"
            >
              <FiGlobe size={18} />
              <span>Website</span>
            </a>

          </div>
        </div>

      </div>
    </section>
  );
}