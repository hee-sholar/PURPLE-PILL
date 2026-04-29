"use client";

import { motion } from "framer-motion";
import AboutPurplePill from "./AboutPurplePill";
import Movement from "./Movement";
import Tokenomics from "./Tokenomics";
import Roadmap from "./Roadmap";
import HowToBuy from "./HowToBuy";
import Community from "./Community";
import ContractSection from "./ContractSection";

export default function Hero() {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full min-h-screen text-white overflow-hidden">

        {/* 🖼 BACKGROUND */}
        <div className="absolute inset-0 -z-10 overflow-hidden">

          {/* Image with cinematic zoom */}
          <motion.img
            src="/background.jpeg"
            alt="bg"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 8, ease: "easeOut" }}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />

          {/* Purple glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/30 blur-[140px] opacity-60" />

          {/* Bottom glow */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[400px] bg-pink-500/20 blur-[120px] opacity-50" />

          {/* Grid texture */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,white_1px,transparent_1px)] [background-size:22px_22px]" />
        </div>

        {/* ================= HERO CONTENT ================= */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center min-h-screen px-6">

          {/* Glass effect wrapper */}
          <div className="bg-black/20 px-6 py-10 max-w-2xl">

            {/* Small title */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="tracking-[0.4em] text-gray-300 text-xs md:text-sm mb-4"
            >
              WELCOME TO
            </motion.p>

            {/* Big Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-7xl font-bold bg-gradient-to-b from-purple-200 to-purple-500 bg-clip-text text-transparent"
            >
              PURPLEPILL
            </motion.h1>

            {/* Subtitle */}
            <p className="mt-4 text-gray-300 tracking-[0.25em] text-xs md:text-sm">
              EQUILIBRIUM IN A WORLD OF EXTREMES
            </p>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-6 text-gray-300 text-sm leading-relaxed space-y-3"
            >
              <p>
                Welcome to a movement built on perception, balance, and belief.
              </p>
              <p>
                PurplePill is more than a meme coin. It is a symbol for those who
                see beyond the noise and move with clarity.
              </p>
              <p>
                Community becomes power. Awareness becomes strategy. Belief becomes signal.
              </p>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-8"
            >
              <button className="px-8 py-3 rounded-full border border-purple-500 text-purple-200 
              bg-purple-600/20 backdrop-blur-md 
              hover:bg-purple-600/40 hover:shadow-[0_0_40px_rgba(168,85,247,0.8)] 
              transition duration-300">
                TAKE THE PURPLEPILL
              </button>

              <p className="mt-4 text-purple-300 text-xs tracking-widest">
                SEE THE SHIFT.
              </p>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-6 animate-bounce text-purple-400 text-xl">
            ˅
          </div>
        </div>
      </section>

      {/* ================= OTHER SECTIONS ================= */}
      <div id="about">
        <AboutPurplePill />
      </div>

      <Movement />
      <Tokenomics />
      <Roadmap />
      <HowToBuy />
      <Community />
      <ContractSection />
    </>
  );
}