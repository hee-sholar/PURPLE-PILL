"use client";

import { motion } from "framer-motion";
import {
  Rocket,
  Users,
  Megaphone,
  Coins,
  Globe,
  ShieldCheck,
  TrendingUp,
  Sparkles,
} from "lucide-react";

const roadmap = [
  {
    title: "Community Kickstart",
    date: "May 2026",
    icon: Users,
    points: [
      "Launch social channels",
      "Meme contests & campaigns",
      "Core community formation",
    ],
  },
  {
    title: "Website & Branding",
    date: "June 2026",
    icon: Globe,
    points: [
      "Official website launch",
      "Brand identity",
      "Community onboarding",
    ],
  },
  {
    title: "Token Launch",
    date: "July 2026",
    icon: Coins,
    points: [
      "Smart contract deployment",
      "Liquidity creation",
      "Token distribution",
    ],
  },
  {
    title: "Marketing Push",
    date: "August 2026",
    icon: Megaphone,
    points: ["Influencer campaigns", "Social growth", "Platform listings"],
  },
  {
    title: "Utility Rollout",
    date: "September 2026",
    icon: Sparkles,
    points: ["Staking system", "NFT integration", "Rewards system"],
  },
  {
    title: "Security & Scaling",
    date: "October 2026",
    icon: ShieldCheck,
    points: ["Contract audit", "Partnerships", "Infrastructure scaling"],
  },
  {
    title: "Growth Expansion",
    date: "November 2026",
    icon: TrendingUp,
    points: ["Exchange listings", "Global expansion", "DAO governance"],
  },
  {
    title: "Ecosystem Domination",
    date: "December 2026",
    icon: Rocket,
    points: ["Full ecosystem", "Mass adoption", "Long-term strategy"],
  },
];

export default function Roadmap() {
  return (
    <section
      id="roadmap"
      className="relative py-20 md:py-28 text-white overflow-hidden"
    >
      {/* ================= BACKGROUND IMAGE ================= */}
      <div className="absolute inset-0 -z-10">
        <img
          src="map.jpeg"
          alt="Purple Pill Energy Background"
          className="w-full h-full object-cover object-center"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/80" />

        {/* Purple glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-700/30 blur-[140px]" />
      </div>

      {/* Grid texture */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,white_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
        
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-3xl md:text-5xl font-bold">
            $PILL <span className="text-purple-400">Roadmap</span>
          </h2>
          <p className="text-gray-400 mt-3 text-sm md:text-base">
            Our journey to building a powerful ecosystem.
          </p>
        </motion.div>

        {/* ================= MOBILE ================= */}
        <div className="md:hidden relative border-l border-purple-500/30 pl-6 space-y-10">
          {roadmap.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                {/* Dot */}
                <div className="absolute -left-[30px] top-2 w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center text-black text-xs font-bold">
                  {i + 1}
                </div>

                {/* Card */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-md">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon size={18} className="text-purple-400" />
                    <h3 className="font-semibold text-sm">{item.title}</h3>
                  </div>

                  <p className="text-xs text-purple-300 mb-3">{item.date}</p>

                  <ul className="text-xs text-gray-400 space-y-1">
                    {item.points.map((p, idx) => (
                      <li key={idx}>• {p}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ================= DESKTOP ================= */}
        <div className="hidden md:block relative">
          <div className="absolute left-1/2 top-0 w-[2px] h-full bg-purple-500/30 -translate-x-1/2" />

          {roadmap.map((item, i) => {
            const Icon = item.icon;
            const isLeft = i % 2 === 0;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.15 }}
                className={`relative mb-20 flex ${
                  isLeft ? "justify-start" : "justify-end"
                }`}
              >
                <div className="w-[45%] bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon size={20} className="text-purple-400" />
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                  </div>

                  <p className="text-sm text-purple-300 mb-4">{item.date}</p>

                  <ul className="text-sm text-gray-400 space-y-2">
                    {item.points.map((point, idx) => (
                      <li key={idx}>• {point}</li>
                    ))}
                  </ul>
                </div>

                {/* Number */}
                <div className="absolute left-1/2 -translate-x-1/2 top-6 w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-black font-bold shadow-[0_0_20px_rgba(168,85,247,0.8)]">
                  {i + 1}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}