import { motion } from "framer-motion";

export default function Hero({ darkMode }) {
  return (
    <section
      className={`relative text-center py-28 px-6 ${
        darkMode
          ? "bg-zinc-900 text-white"
          : "bg-gradient-to-br from-white via-gray-100 to-gray-200 text-gray-900"
      } transition-all duration-300 overflow-hidden`}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-6xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
          Explore Real-Time Crypto Trends
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-400 dark:text-gray-300">
          Live data, sleek design, and interactive insights — all in one place.
          Stay ahead with a modern crypto dashboard.
        </p>
      </motion.div>
      <div className="absolute inset-0 -z-10 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-400 via-cyan-300 to-transparent animate-pulse" />
    </section>
  );
}
