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

          <motion.img
            src="/background.jpeg"
            alt="bg"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 8, ease: "easeOut" }}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/60 to-black/95" />

          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/30 blur-[140px] opacity-60" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[400px] bg-pink-500/20 blur-[120px] opacity-50" />

          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,white_1px,transparent_1px)] [background-size:22px_22px]" />
        </div>

        {/* ================= HERO CONTENT ================= */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center min-h-screen px-5">

          {/* HERO WRAPPER (NO BORDER, NO BOX FEEL) */}
          <div className="max-w-2xl w-full flex flex-col items-center">

            {/* WELCOME TEXT */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="tracking-[0.4em] text-gray-300 text-[10px] md:text-sm mb-4"
            >
              WELCOME TO
            </motion.p>

            {/* LOGO + TITLE ROW */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-center gap-3 mb-3"
            >
              <img
                src="/logo.jpeg"
                alt="PurplePill Logo"
                className="h-10 w-10 md:h-14 md:w-14 object-contain"
              />

              <h1 className="text-4xl md:text-7xl font-bold bg-gradient-to-b from-purple-200 to-purple-500 bg-clip-text text-transparent">
                PURPLEPILL
              </h1>
            </motion.div>

            {/* SUBTITLE */}
            <p className="text-gray-300 tracking-[0.25em] text-[10px] md:text-sm">
              EQUILIBRIUM IN A WORLD OF EXTREMES
            </p>

            {/* DESCRIPTION */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-6 text-gray-300 text-sm leading-relaxed space-y-3 px-2 md:px-0"
            >
              <p>Welcome to a movement built on perception, balance, and belief.</p>
              <p>PurplePill is more than a meme coin. It is a symbol for clarity beyond noise.</p>
              <p>Community becomes power. Awareness becomes strategy. Belief becomes signal.</p>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 w-full flex flex-col items-center"
            >
              <button className="px-7 py-3 rounded-full border border-purple-500 text-purple-200 
              bg-purple-600/20 backdrop-blur-md 
              hover:bg-purple-600/40 hover:shadow-[0_0_35px_rgba(168,85,247,0.8)] 
              transition duration-300 w-full md:w-auto">
                TAKE THE PURPLEPILL
              </button>

              <p className="mt-4 text-purple-300 text-[10px] md:text-xs tracking-widest">
                SEE THE SHIFT.
              </p>
            </motion.div>

          </div>

        </div>
      </section>

      {/* ================= OTHER SECTIONS ================= */}
      <div id="about"><AboutPurplePill /></div>
      <Movement />
      <Tokenomics />
      <Roadmap />
      <HowToBuy />
      <Community />
      <ContractSection />
    </>
  );
}