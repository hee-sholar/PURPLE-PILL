"use client";

import { motion, useInView } from "framer-motion";
import {
  Flame,
  TrendingUp,
  Lock,
  Shield,
} from "lucide-react";
import { useEffect, useState, useRef } from "react";

/* ================= COUNT UP ================= */
function useCountUp(end, duration = 1000, startWhen = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startWhen) return;

    let startTime = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;

      const easeOut = 1 - Math.pow(1 - progress / duration, 3);
      const current = Math.min(end * easeOut, end);

      setCount(Math.floor(current));

      if (progress < duration) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, startWhen]);

  return count;
}

function Counter({ value, isInView }) {
  const count = useCountUp(value, 2000, isInView);
  return <>{count}%</>;
}

export default function Tokenomics() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const supply = useCountUp(100000000, 2000, isInView);

  const features = [
    {
      title: "Token Burns",
      desc: "Scheduled burns permanently remove tokens.",
      icon: Flame,
      color: "from-pink-500 to-purple-600",
    },
    {
      title: "Price Growth",
      desc: "Scarcity creates upward pressure.",
      icon: TrendingUp,
      color: "from-purple-500 to-indigo-500",
    },
    {
      title: "Holding Rewards",
      desc: "Long-term holders benefit.",
      icon: Lock,
      color: "from-indigo-500 to-purple-600",
    },
    {
      title: "Anti-Inflation",
      desc: "Controlled supply resists inflation.",
      icon: Shield,
      color: "from-purple-600 to-pink-500",
    },
  ];

  const distributions = [
    { value: 45, label: "Public Sale" },
    { value: 60, label: "Liquidity" },
    { value: 80, label: "Marketing & Dev" },
  ];

  return (
    <section
      ref={ref}
      id="tokenomics"
      className="relative py-20 md:py-28 bg-black text-white overflow-hidden"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[500px] h-[500px] bg-purple-700/20 blur-[120px] top-0 left-1/2 -translate-x-1/2" />
        <div className="absolute w-[300px] h-[300px] bg-pink-600/20 blur-[100px] bottom-0 right-1/4" />
      </div>

      {/* GRID */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,white_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-3xl md:text-5xl font-bold">
            $PILL <span className="text-purple-400">Tokenomics</span>
          </h2>
          <p className="text-gray-400 mt-3 text-sm md:text-base">
            Built for scarcity, growth, and long-term dominance.
          </p>
        </motion.div>

        {/* FEATURES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 mb-16 md:mb-24">
          {features.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                className="group"
              >
                <div className="relative rounded-2xl bg-white/5 border border-white/10 p-6 md:p-8 text-center backdrop-blur-xl hover:border-purple-500/40 transition hover:-translate-y-2">

                  {/* Glow */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-br ${item.color} blur-2xl transition`} />

                  {/* Icon */}
                  <div className={`w-12 h-12 md:w-14 md:h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-gradient-to-br ${item.color}`}>
                    <Icon size={22} />
                  </div>

                  <h3 className="font-semibold text-base md:text-lg mb-1">
                    {item.title}
                  </h3>

                  <p className="text-xs md:text-sm text-gray-400">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* SUPPLY */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="flex justify-center mb-16 md:mb-24"
        >
          <div className="px-6 md:px-12 py-3 md:py-5 rounded-full border border-purple-500/40 bg-purple-500/10 text-purple-300 text-sm md:text-lg font-semibold text-center">
            Total Supply: {supply.toLocaleString()} $PILL
          </div>
        </motion.div>

        {/* DISTRIBUTION */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-10 text-center">
          {distributions.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="rounded-2xl bg-white/5 border border-white/10 py-8 md:py-12 backdrop-blur-xl hover:border-purple-500/40 transition hover:-translate-y-2"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-purple-400">
                <Counter value={item.value} isInView={isInView} />
              </h3>

              <p className="text-gray-400 mt-2 text-xs md:text-sm">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}