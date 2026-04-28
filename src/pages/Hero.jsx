"use client";

import { motion } from "framer-motion";
import { Pill, Sparkles } from "lucide-react";
import AboutPurplePill from "./AboutPurplePill";
import Tokenomics from "./Tokenomics";
import Roadmap from "./Roadmap";
import HowToBuy from "./HowToBuy";
import ContractSection from "./ContractSection";
import Community from "./Community";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-[#05010a] text-white overflow-hidden mt-16">

      {/* GRID */}
      <div className="absolute inset-0 bg-[linear-gradient(#a855f722_1px,transparent_1px),linear-gradient(90deg,#a855f722_1px,transparent_1px)] bg-[size:30px_30px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-12 py-12 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT */}
        <div className="text-center md:text-left">

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight"
          >
            <span className="text-purple-400 drop-shadow-[0_0_15px_#a855f7]">
              Purple
            </span>
            <br />
            <span className="text-pink-400">$PILL</span>
          </motion.h1>

          <p className="mt-5 text-gray-300 text-sm sm:text-base max-w-md mx-auto md:mx-0">
            Join the Purple Pill! Enter a new dimension of decentralized power and explosive growth.
          </p>

          {/* FEATURES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-start gap-3 p-4 rounded-xl bg-[#12071f] border border-purple-500/20 hover:shadow-[0_0_20px_#a855f7]"
            >
              <Pill className="text-purple-400 mt-1" size={18} />
              <p className="text-xs sm:text-sm text-gray-300">
                Community-driven with deflationary tokenomics.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-start gap-3 p-4 rounded-xl bg-[#12071f] border border-purple-500/20 hover:shadow-[0_0_20px_#a855f7]"
            >
              <Sparkles className="text-purple-400 mt-1" size={18} />
              <p className="text-xs sm:text-sm text-gray-300">
                Built for speed, scalability & low fees.
              </p>
            </motion.div>

          </div>

          {/* BUTTON */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            className="mt-6 w-full sm:w-auto px-6 py-3 bg-purple-500 text-black rounded-full font-semibold shadow-[0_0_20px_#a855f7] hover:shadow-[0_0_35px_#c084fc]"
          >
            💊 BUY $PILL
          </motion.button>

          {/* STATS */}
          <div className="grid grid-cols-3 gap-3 mt-8 p-4 bg-[#12071f] border border-purple-500/20 rounded-xl text-center">
            <div>
              <h2 className="text-purple-400 text-sm font-bold">100M</h2>
              <p className="text-[10px] text-gray-400">Supply</p>
            </div>
            <div>
              <h2 className="text-purple-400 text-sm font-bold">Fast</h2>
              <p className="text-[10px] text-gray-400">Chain</p>
            </div>
            <div>
              <h2 className="text-purple-400 text-sm font-bold">Deflation</h2>
              <p className="text-[10px] text-gray-400">Token</p>
            </div>
          </div>

          {/* 📈 LIVE CHART SECTION */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 p-4 bg-[#12071f] border border-purple-500/20 rounded-xl"
          >
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-sm font-semibold text-purple-300">
                📈 Live $PILL Chart
              </h3>
              <span className="text-xs text-green-400 animate-pulse">
                ● Live
              </span>
            </div>

            {/* SVG Chart */}
            <svg viewBox="0 0 300 80" className="w-full h-24">
              <defs>
                <linearGradient id="lineGlow" x1="0" x2="1">
                  <stop offset="0%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>
              </defs>

              <motion.path
                d="M0 60 L40 50 L80 55 L120 30 L160 40 L200 20 L240 35 L300 10"
                fill="none"
                stroke="url(#lineGlow)"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2 }}
              />

              {/* Glow effect */}
              <motion.path
                d="M0 60 L40 50 L80 55 L120 30 L160 40 L200 20 L240 35 L300 10"
                fill="none"
                stroke="#a855f7"
                strokeWidth="6"
                opacity="0.15"
              />
            </svg>

            <div className="flex justify-between text-[10px] text-gray-400 mt-2">
              <span>24h Low</span>
              <span className="text-purple-300">$0.0123</span>
              <span>24h High</span>
            </div>
          </motion.div>

        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex justify-center"
        >
          <div className="relative">

            {/* GLOW */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
              }}
              className="absolute w-[260px] h-[260px] bg-purple-500 blur-[100px]"
            />

            {/* IMAGE */}
            <motion.img
              src="/purple.jpeg"
              alt="Purple Pill"
              className="relative w-[220px] sm:w-[280px] md:w-[380px] rounded-xl border border-purple-400 shadow-[0_0_40px_#a855f7]"
              animate={{
                y: [0, -15, 0],
                rotate: [0, 2, -2, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

          </div>
        </motion.div>

      </div>
      <AboutPurplePill />
      <Tokenomics />
      <Roadmap />
      <HowToBuy />
      <Community />
      <ContractSection />
    </section>
  );
}