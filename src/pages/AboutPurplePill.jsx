"use client";

import { motion } from "framer-motion";
import {
  Scale,
  Brain,
  Eye,
  Target,
} from "lucide-react";

const features = [
  {
    title: "Equilibrium",
    desc: "PurplePill represents the space between chaos and control.",
    icon: Scale,
  },
  {
    title: "Awareness",
    desc: "Narratives move markets. Communities create momentum.",
    icon: Brain,
  },
  {
    title: "Clarity",
    desc: "A meme coin powered by awareness and early conviction.",
    icon: Eye,
  },
  {
    title: "Purpose",
    desc: "We build with timing, clarity, and collective conviction.",
    icon: Target,
  },
];

export default function AboutPurplePill() {
  return (
    <section className="relative w-full py-24 px-6 bg-black text-white overflow-hidden">
      
      {/* 🌌 Background Glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.15),transparent_70%)]" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* 🖼 Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-full"
        >
          <div className="relative rounded-3xl overflow-hidden border border-purple-500/20 shadow-[0_0_40px_rgba(168,85,247,0.2)]">
            <img
              src="/pill1.jpeg"
              alt="PurplePill Vision"
              width={600}
              height={700}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Glow ring */}
          <div className="absolute inset-0 rounded-3xl border border-purple-500/10 blur-xl" />
        </motion.div>

        {/* 📄 Content */}
        <div className="space-y-10">
          
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              About{" "}
              <span className="bg-gradient-to-r from-purple-400 to-purple-500 bg-clip-text text-transparent">
                PurplePill
              </span>
            </h2>

            <p className="mt-4 text-gray-400 text-lg">
              Equilibrium in a world of extremes — where clarity beats chaos.
            </p>
          </motion.div>

          {/* Features */}
          <div className="space-y-6">
            {features.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="flex items-start gap-4 group"
                >
                  {/* Icon */}
                  <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 group-hover:bg-purple-500/20 transition">
                    <Icon className="text-purple-400 w-6 h-6" />
                  </div>

                  {/* Text */}
                  <div>
                    <h4 className="text-lg font-semibold">
                      {item.title}
                    </h4>
                    <p className="text-gray-400 text-sm">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom tagline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="pt-6 border-t border-purple-500/10"
          >
            <p className="text-sm text-purple-300 tracking-wide">
              🧠 Enhanced Mind • ⚖️ Balanced Heart • 🤝 United Community
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}