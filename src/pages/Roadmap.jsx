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
    title: "Stage 1: Community Kickstart",
    date: "May 2025",
    icon: Users,
    points: [
      "Launch social channels (Twitter, Telegram, Discord)",
      "Meme contests & viral campaigns",
      "Core community formation",
    ],
  },
  {
    title: "Stage 2: Website & Branding",
    date: "June 2025",
    icon: Globe,
    points: [
      "Official website launch",
      "Brand identity & visuals",
      "Community onboarding",
    ],
  },
  {
    title: "Stage 3: Token Launch",
    date: "July 2025",
    icon: Coins,
    points: [
      "Smart contract deployment",
      "Liquidity pool creation",
      "Initial token distribution",
    ],
  },
  {
    title: "Stage 4: Marketing Push",
    date: "August 2025",
    icon: Megaphone,
    points: [
      "Influencer collaborations",
      "Aggressive social campaigns",
      "Listings on tracking platforms",
    ],
  },
  {
    title: "Stage 5: Utility Rollout",
    date: "September 2025",
    icon: Sparkles,
    points: [
      "Staking system launch",
      "NFT integration",
      "Community reward system",
    ],
  },
  {
    title: "Stage 6: Security & Scaling",
    date: "October 2025",
    icon: ShieldCheck,
    points: [
      "Smart contract audit",
      "Partnership integrations",
      "Infrastructure scaling",
    ],
  },
  {
    title: "Stage 7: Growth Expansion",
    date: "November 2025",
    icon: TrendingUp,
    points: [
      "Exchange listings",
      "Global community expansion",
      "DAO governance introduction",
    ],
  },
  {
    title: "Stage 8: Ecosystem Domination",
    date: "December 2025",
    icon: Rocket,
    points: [
      "Full ecosystem launch",
      "Mass adoption campaigns",
      "Long-term sustainability strategy",
    ],
  },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="relative py-28 bg-black text-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[600px] h-[600px] bg-purple-700/20 blur-[140px] top-0 left-1/2 -translate-x-1/2 animate-pulse" />
      </div>

      {/* Grid */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,white_1px,transparent_1px)] [background-size:22px_22px]" />

      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl font-bold">
            $PILL <span className="text-purple-400">Roadmap</span>
          </h2>
          <p className="text-gray-400 mt-4">
            Our journey to building a powerful decentralized ecosystem.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 w-[2px] h-full bg-purple-500/30 -translate-x-1/2" />

          {roadmap.map((item, i) => {
            const Icon = item.icon;
            const isLeft = i % 2 === 0;

            return (
              <motion.div
                key={i}
                initial={{
                  opacity: 0,
                  x: isLeft ? -100 : 100,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.15,
                  type: "spring",
                }}
                className={`relative mb-20 flex ${
                  isLeft ? "justify-start" : "justify-end"
                }`}
              >

                {/* Card */}
                <div className="w-full md:w-[45%] bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl hover:border-purple-500/40 transition hover:-translate-y-2">

                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-purple-500/20">
                      <Icon size={20} className="text-purple-400" />
                    </div>
                    <h3 className="font-semibold text-lg">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-sm text-purple-300 mb-4">
                    {item.date}
                  </p>

                  <ul className="text-sm text-gray-400 space-y-2">
                    {item.points.map((point, idx) => (
                      <li key={idx}>• {point}</li>
                    ))}
                  </ul>
                </div>

                {/* Circle */}
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