"use client";

import { motion, useInView } from "framer-motion";
import {
  Flame,
  TrendingUp,
  Lock,
  Shield,
} from "lucide-react";
import { useEffect, useState, useRef } from "react";

/* ================= COUNT UP HOOK (SCROLL + SMOOTH) ================= */
function useCountUp(end, duration = 1000, startWhen = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startWhen) return;

    let startTime = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;

      // smooth ease-out
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

/* ================= COUNTER COMPONENT ================= */
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
      desc: "Scheduled burns permanently remove tokens, increasing scarcity.",
      icon: Flame,
      color: "from-pink-500 to-purple-600",
      direction: "left",
    },
    {
      title: "Price Growth",
      desc: "Reduced supply creates upward pressure on price over time.",
      icon: TrendingUp,
      color: "from-purple-500 to-indigo-500",
      direction: "right",
    },
    {
      title: "Holding Rewards",
      desc: "Long-term holders benefit from a deflationary model.",
      icon: Lock,
      color: "from-indigo-500 to-purple-600",
      direction: "left",
    },
    {
      title: "Anti-Inflation",
      desc: "Designed to resist inflation through controlled supply.",
      icon: Shield,
      color: "from-purple-600 to-pink-500",
      direction: "right",
    },
  ];

  const distributions = [
    { value: 45, label: "Public Sale" },
    { value: 60, label: "Liquidity" },
    { value: 80, label: "Marketing & Development" },
  ];

  return (
    <section
      ref={ref}
      id="tokenomics"
      className="relative py-28 bg-black text-white overflow-hidden"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[600px] h-[600px] bg-purple-700/20 blur-[140px] top-0 left-1/2 -translate-x-1/2 animate-pulse" />
        <div className="absolute w-[400px] h-[400px] bg-pink-600/20 blur-[120px] bottom-0 right-1/3" />
      </div>

      {/* GRID */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,white_1px,transparent_1px)] [background-size:22px_22px]" />

      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl font-bold">
            $PILL <span className="text-purple-400">Tokenomics</span>
          </h2>
          <p className="text-gray-400 mt-4">
            Built for scarcity, growth, and long-term dominance.
          </p>
        </motion.div>

        {/* FEATURES */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-24">
          {features.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                initial={{
                  opacity: 0,
                  x: item.direction === "left" ? -80 : 80,
                  filter: "blur(10px)",
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  filter: "blur(0px)",
                }}
                transition={{
                  delay: i * 0.15,
                  duration: 0.7,
                  type: "spring",
                }}
                className="group relative"
              >
                <div className="clip-hex bg-white/5 border border-white/10 p-8 text-center backdrop-blur-xl hover:border-purple-500/50 transition duration-300 hover:-translate-y-2">

                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-25 bg-gradient-to-br ${item.color} blur-2xl transition`} />

                  <div className={`w-14 h-14 mx-auto mb-5 flex items-center justify-center rounded-full bg-gradient-to-br ${item.color}`}>
                    <Icon size={24} />
                  </div>

                  <h3 className="font-semibold text-lg mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-400">
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
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-24"
        >
          <div className="px-12 py-5 rounded-full border border-purple-500/40 bg-purple-500/10 text-purple-300 text-lg font-semibold shadow-[0_0_40px_rgba(168,85,247,0.6)]">
            Total Supply: {supply.toLocaleString()} $PILL
          </div>
        </motion.div>

        {/* DISTRIBUTION */}
        <div className="grid md:grid-cols-3 gap-10 text-center">
          {distributions.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="clip-hex bg-white/5 border border-white/10 py-12 backdrop-blur-xl hover:border-purple-500/50 transition hover:-translate-y-2"
            >
              <h3 className="text-4xl font-bold text-purple-400">
                <Counter value={item.value} isInView={isInView} />
              </h3>

              <p className="text-gray-400 mt-3 text-sm">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* HEX SHAPE */}
      <style jsx>{`
        .clip-hex {
          clip-path: polygon(
            25% 5%, 
            75% 5%, 
            100% 50%, 
            75% 95%, 
            25% 95%, 
            0% 50%
          );
        }
      `}</style>
    </section>
  );
}