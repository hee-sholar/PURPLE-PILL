"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "ABOUT", id: "about" },
    { name: "TOKENOMICS", id: "tokenomics" },
    { name: "ROADMAP", id: "roadmap" },
    { name: "COMMUNITY", id: "community" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between relative">

        {/* LOGO */}
        <a href="/" className="text-purple-400 cursor-pointer tracking-[0.3em] text-sm font-semibold">
          PURPLEPILL
        </a>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-10 text-gray-300 text-xs tracking-widest">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.id === "/" ? "/" : `#${link.id}`}
              className="relative group hover:text-purple-400 transition"
            >
              {link.name}

              {/* subtle underline */}
              <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* CTA BUTTON */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block px-5 py-2 cursor-pointer rounded-full border border-purple-500 text-purple-300 text-xs tracking-widest hover:bg-purple-600/20 transition shadow-[0_0_10px_rgba(168,85,247,0.5)]"
        >
          JOIN US
        </motion.button>

        {/* MOBILE TOGGLE */}
        <button onClick={() => setOpen(!open)} className="md:hidden z-10">
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
                <h2 className="text-purple-300 font-bold text-lg tracking-widest">
                  MENU
                </h2>
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
                className="mt-auto px-5 py-3 cursor-pointer border border-purple-500 rounded-full text-purple-300 font-semibold tracking-widest shadow-[0_0_15px_rgba(168,85,247,0.6)]"
              >
                JOIN US
              </motion.button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}