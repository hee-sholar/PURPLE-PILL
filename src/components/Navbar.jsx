"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", id: "/" },
    { name: "Tokenomics", id: "tokenomics" },
    { name: "Roadmap", id: "roadmap" },
    { name: "Community", id: "community" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-[#05010a]/70 border-b border-purple-500/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative">

        {/* LOGO */}
        <a href="/" className="flex items-center gap-2 z-10">
          <div className="relative">
            <img
              src="/purple.jpeg"
              alt="Purple Pill"
              className="w-9 h-9 rounded-full border border-purple-500"
            />
            <div className="absolute inset-0 rounded-full blur-md bg-purple-500/40 -z-10"></div>
          </div>

          <div className="leading-tight">
            <h1 className="text-purple-300 font-bold text-sm md:text-base">
              Purple Pill
            </h1>
            <p className="text-[10px] text-gray-400">$PILL</p>
          </div>
        </a>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-8 text-gray-400 text-sm">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.id === "/" ? "/" : `#${link.id}`}
              className="relative group hover:text-purple-400 transition"
            >
              {link.name}

              {/* underline glow */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-purple-400 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* CTA BUTTON */}
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block cursor-pointer px-5 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-black text-sm font-semibold shadow-[0_0_20px_#a855f7]"
        >
          BUY $PILL
        </motion.button>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden z-10"
        >
          {open ? (
            <X className="text-purple-400" />
          ) : (
            <Menu className="text-purple-400" />
          )}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <>
            {/* OVERLAY */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* DRAWER */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 80 }}
              className="fixed top-0 right-0 w-[80%] h-full bg-[#07020f] border-l border-purple-500/20 p-6 flex flex-col"
            >
              <div className="flex justify-between items-center mb-10">
                <h2 className="text-purple-300 font-bold text-lg">Menu</h2>
                <X
                  onClick={() => setOpen(false)}
                  className="text-purple-400 cursor-pointer"
                />
              </div>

              {/* LINKS */}
              <div className="flex flex-col gap-6 text-gray-300 text-lg">
                {links.map((link) => (
                  <a
                    key={link.id}
                    href={link.id === "/" ? "/" : `#${link.id}`}
                    onClick={() => setOpen(false)}
                    className="hover:text-purple-400 transition"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              {/* CTA */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="mt-auto cursor-pointer px-5 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-black font-semibold shadow-[0_0_25px_#a855f7]"
              >
                BUY $PILL
              </motion.button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}