import React from "react";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-transparent text-white px-4 py-12 font-mono relative z-10">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-4 flex justify-center"
        >
          <img src="/images/dev.png" alt="Dev.Dat Logo" className="h-24 md:h-32" />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-bold mb-6 text-green-400"
        >
          dev.dat
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-lg md:text-xl text-gray-300 mb-10"
        >
          Join Parzival's realm. Stream your code. Let the AI fix it.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <a href="https://discord.gg/YOUR_INVITE" target="_blank" rel="noopener noreferrer">
            <button className="bg-green-500 hover:bg-green-400 text-black text-lg px-6 py-3 rounded-xl shadow-lg">
              Join the Discord <span className="ml-2">→</span>
            </button>
          </a>
        </motion.div>
      </div>

      <div className="mt-24 grid md:grid-cols-2 gap-8 max-w-5xl mx-auto relative z-10">
        <div className="bg-gray-900 border border-green-600 rounded-lg relative z-10">
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-green-400 mb-2">What is dev.dat?</h2>
            <p className="text-gray-300">
              dev.dat is an AI-powered Discord bot that watches your code stream and helps fix bugs, errors, and logical problems in real time — a true digital companion for developers.
            </p>
          </div>
        </div>

        <div className="bg-gray-900 border border-green-600 rounded-lg relative z-10">
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-green-400 mb-2">How it works</h2>
            <p className="text-gray-300">
              Join the Discord → Start your screen share → Our Parzival-themed AI watches, extracts code & errors, and suggests real-time solutions — all privately, all smart.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
