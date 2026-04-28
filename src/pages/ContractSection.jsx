"use client";

import { useEffect } from "react";
import AOS from "aos";

import {
  FaTwitter,
  FaTelegramPlane,
} from "react-icons/fa";

import {
  FiCopy,
  FiUsers,
  FiZap,
  FiBookOpen,
} from "react-icons/fi";

export default function ContractSection() {
  const contractAddress = "Coming soon...";

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress);
    alert("Copied!");
  };

  return (
    <section className="relative w-full py-20 bg-[#05010a] text-white overflow-hidden">

      {/* GRID */}
      <div className="absolute inset-0 bg-[linear-gradient(#a855f722_1px,transparent_1px),linear-gradient(90deg,#a855f722_1px,transparent_1px)] bg-[size:30px_30px]" />

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">

        {/* LEFT SIDE */}
        <div data-aos="fade-right">

          <h2 className="text-3xl font-bold text-purple-400 mb-6">
            Contract Address
          </h2>

          {/* CONTRACT BOX */}
          <div className="flex items-center justify-between bg-white/5 border border-purple-500/20 rounded-xl p-4 backdrop-blur-lg hover:border-purple-400 transition">

            <div className="flex items-center gap-3 text-gray-300">
              <FiCopy className="text-purple-400" />
              <span>{contractAddress}</span>
            </div>

            <button
              onClick={handleCopy}
              className="px-4 py-2 bg-purple-500 text-black rounded-full text-sm font-semibold hover:bg-purple-400 transition"
            >
              COPY
            </button>
          </div>

          {/* TOKEN METRICS */}
          <div className="mt-8 bg-white/5 border border-purple-500/20 rounded-xl p-6 backdrop-blur-lg hover:border-purple-400 transition">

            <h3 className="text-lg text-purple-300 mb-4">
              Token Metrics
            </h3>

            <div className="bg-black/40 rounded-lg p-4 flex justify-between items-center">
              <div>
                <p className="text-gray-400 text-sm">Initial Price</p>
                <p className="text-purple-400 font-bold text-lg">
                  Coming Soon
                </p>
              </div>

              <div className="text-purple-400 text-sm">
                Deflationary 🔥
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div data-aos="fade-left">

          <h2 className="text-3xl font-bold text-purple-400 mb-4">
            Join Our Community
          </h2>

          <p className="text-gray-400 mb-8">
            Become part of the fastest-growing meme coin community on Solana.
          </p>

          {/* SOCIAL CARDS */}
          <div className="flex gap-6 mb-8 flex-wrap">

            {/* TELEGRAM */}
            <a
              href="https://t.me/+1CG7RDGMr50wYjdh"
              target="_blank"
              className="flex flex-col items-center justify-center w-36 h-32 bg-blue-500/20 border border-blue-400/30 rounded-xl hover:scale-105 transition"
            >
              <FaTelegramPlane size={30} />
              <span className="mt-2">Telegram</span>
            </a>

            {/* TWITTER */}
            <a
              href="https://x.com/purplepillcoin"
              target="_blank"
              className="flex flex-col items-center justify-center w-36 h-32 bg-white/5 border border-purple-500/20 rounded-xl hover:scale-105 hover:border-purple-400 transition"
            >
              <FaTwitter size={30} />
              <span className="mt-2">Twitter</span>
            </a>
          </div>

          {/* COMMUNITY HIGHLIGHTS */}
          <div className="bg-white/5 border border-purple-500/20 rounded-xl p-6 backdrop-blur-lg">

            <h3 className="text-lg text-purple-300 mb-4">
              Community Highlights
            </h3>

            <div className="space-y-4">

              <div className="flex gap-3 items-start">
                <FiUsers className="text-purple-400 mt-1" />
                <div>
                  <p className="font-semibold">Active Community</p>
                  <p className="text-gray-400 text-sm">
                    24/7 global engagement
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <FiZap className="text-purple-400 mt-1" />
                <div>
                  <p className="font-semibold">Governance Voting</p>
                  <p className="text-gray-400 text-sm">
                    Shape the future of $PILL
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <FiBookOpen className="text-purple-400 mt-1" />
                <div>
                  <p className="font-semibold">Educational Content</p>
                  <p className="text-gray-400 text-sm">
                    Learn and grow in crypto
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}