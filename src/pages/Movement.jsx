"use client";

import { motion } from "framer-motion";
import { Users, Flame, ShieldCheck } from "lucide-react";

export default function Movement() {
  return (
    <section className="relative w-full py-28 px-6 bg-black text-white overflow-hidden">
      
      {/* 🌌 Background Glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.2),transparent_70%)]" />

      <div className="max-w-5xl mx-auto text-center">
        
        {/* 🧠 Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-bold"
        >
          The{" "}
          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400 bg-clip-text text-transparent">
            Movement
          </span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-gray-400 text-lg"
        >
          Not everyone will understand it — and that’s the point.
        </motion.p>

        {/* 🖼 Image Centerpiece */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-16 relative"
        >
          <div className="rounded-3xl overflow-hidden border border-purple-500/20 shadow-[0_0_80px_rgba(168,85,247,0.25)]">
            <img
              src="/background.jpeg"
              alt="PurplePill Movement"
              width={900}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Glow ring */}
          <div className="absolute inset-0 rounded-3xl border border-purple-500/10 blur-2xl" />
        </motion.div>

        {/* 🔥 Core Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-14 space-y-4 text-gray-300"
        >
          <p>
            PurplePill is for those who see patterns before they become obvious.
          </p>
          <p className="text-gray-500">
            While others hesitate, observe — we move with intent.
          </p>
        </motion.div>

        {/* ⚡ Feature Blocks */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          
          {[
            {
              title: "Signal Over Noise",
              desc: "We filter distractions and focus only on what truly matters.",
              icon: Flame,
            },
            {
              title: "Collective Energy",
              desc: "Ideas become stronger when a community moves as one.",
              icon: Users,
            },
            {
              title: "Built to Last",
              desc: "We’re not here for moments — we’re building a legacy.",
              icon: ShieldCheck,
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="p-6 rounded-2xl border border-purple-500/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition"
              >
                <div className="mb-4 flex justify-center">
                  <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20">
                    <Icon className="text-purple-400 w-6 h-6" />
                  </div>
                </div>

                <h4 className="text-lg font-semibold">{item.title}</h4>
                <p className="text-gray-400 text-sm mt-2">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* 🧬 Closing Line */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16"
        >
          <p className="text-purple-300 text-sm tracking-widest">
            STAY AWARE • STAY IN CONTROL • PROTECT THE FUTURE
          </p>
        </motion.div>

      </div>
    </section>
  );
}