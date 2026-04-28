"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  FlaskConical,
  Users,
  Target,
  Rocket,
  Flame,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function AboutPurplePill() {
  const cards = [
    {
      title: "What is Purple Pill?",
      icon: FlaskConical,
      color: "from-purple-500 to-pink-500",
      text: `Purple Pill ($PILL) is a next-gen meme token blending creativity, culture, and decentralized energy. Built for the bold, it captures the spirit of viral internet movements while aiming for real utility.`,
    },
    {
      title: "Our Vision",
      icon: Sparkles,
      color: "from-pink-500 to-purple-600",
      text: `To build a powerful, community-driven ecosystem where memes meet innovation, empowering holders while driving long-term growth and cultural impact.`,
    },
    {
      title: "Our Mission",
      icon: Target,
      color: "from-indigo-500 to-purple-500",
      text: `We aim to push the boundaries of meme coins by combining storytelling, strong branding, and scalable Web3 infrastructure into one unstoppable force.`,
    },
    {
      title: "The Purple Gang",
      icon: Users,
      color: "from-purple-600 to-indigo-500",
      text: `A vibrant, fearless community leading the movement. Every holder has a voice, shaping the future through collaboration, energy, and shared vision.`,
    },
    {
      title: "Why Purple Pill?",
      icon: Rocket,
      color: "from-pink-600 to-purple-500",
      text: `🔥 Meme Power + Strategy  
🚀 Strong roadmap & tokenomics  
🌐 Scalable ecosystem  
💜 Community-first approach`,
    },
  ];

  return (
    <section className="relative w-full py-24 bg-black text-white overflow-hidden">
      
      {/* 🔮 Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[500px] h-[500px] bg-purple-700/20 blur-[120px] top-0 left-1/2 -translate-x-1/2" />
        <div className="absolute w-[400px] h-[400px] bg-pink-600/20 blur-[120px] bottom-0 right-1/3" />
      </div>

      {/* GRID DOTS */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,white_1px,transparent_1px)] [background-size:22px_22px]" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            About <span className="text-purple-400">Purple Pill</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Where meme culture meets powerful decentralized innovation.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="show"
                variants={fadeUp}
                className="group relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-purple-500/40 transition duration-300"
              >
                {/* Glow Hover */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-br ${card.color} rounded-2xl blur-xl transition`} />

                {/* Icon */}
                <div className={`w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br ${card.color} mb-4`}>
                  <Icon size={22} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-2">
                  {card.title}
                </h3>

                {/* Text */}
                <p className="text-gray-400 text-sm leading-relaxed whitespace-pre-line">
                  {card.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}