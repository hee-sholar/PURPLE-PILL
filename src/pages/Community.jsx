"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { FaCrown } from "react-icons/fa";
import { FiShield } from "react-icons/fi";

export default function Community() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="community" className="relative w-full py-24 bg-[#05010a] text-white overflow-hidden">

      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(#a855f722_1px,transparent_1px),linear-gradient(90deg,#a855f722_1px,transparent_1px)] bg-[size:30px_30px]" />

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div data-aos="fade-right">

          {/* TAG */}
          <div className="inline-block px-4 py-1 mb-6 text-sm rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-300">
            PILL GANG 💊
          </div>

          {/* TITLE */}
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Join Our <br />
            Community <span className="text-purple-400 inline-flex items-center gap-2">
              <FaCrown /> Today
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-6 text-gray-400 max-w-lg">
            The $PILL ecosystem is powered by its vibrant community. 
            Every member has a voice and helps shape the future of the project.
          </p>

          <p className="mt-4 text-gray-500 max-w-lg">
            Join thousands of holders as we build the next generation of meme finance on Solana 🚀
          </p>

          {/* GOVERNANCE CARD */}
          <div className="mt-8 flex items-center gap-4 bg-white/5 border border-purple-500/20 rounded-xl p-4 backdrop-blur-lg hover:border-purple-400 transition">

            <div className="p-3 rounded-full bg-purple-500/20">
              <FiShield className="text-purple-400" size={22} />
            </div>

            <div>
              <p className="font-semibold text-purple-300">
                Community Governance
              </p>
              <p className="text-gray-400 text-sm">
                Holders participate in key decisions
              </p>
            </div>
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div
          data-aos="fade-left"
          className="relative flex justify-center"
        >

          {/* GLOW */}
          <div className="absolute w-[300px] h-[300px] bg-purple-600/30 blur-3xl rounded-full animate-pulse" />

          {/* IMAGE CARD */}
          <div className="relative rounded-2xl overflow-hidden border border-purple-500/30 shadow-[0_0_40px_rgba(168,85,247,0.5)] hover:scale-105 transition duration-500">

            <img
              src="/pill1.jpeg" // 🔥 replace with your actual image path
              alt="PILL Frog"
              className="w-[320px] h-[380px] object-cover"
            />

            {/* FLOATING BADGE */}
            <div className="absolute top-3 right-3 bg-black/70 px-3 py-1 rounded-full text-sm border border-purple-400/30">
              💊 830
            </div>

          </div>

          {/* FLOATING DOTS */}
          <div className="absolute -top-4 right-6 w-8 h-8 border border-purple-400 rounded-full animate-bounce" />
          <div className="absolute bottom-0 left-6 w-6 h-6 border border-purple-400 rounded-full animate-ping" />

        </div>

      </div>
    </section>
  );
}