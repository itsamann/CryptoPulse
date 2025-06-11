import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, Star } from "lucide-react";

export default function CoinCard({ coin, isFavorite, toggleFavorite }) {
  const getTrendIcon = (value) => {
    return value > 0 ? (
      <TrendingUp className="inline w-4 h-4 ml-1 text-green-400" />
    ) : (
      <TrendingDown className="inline w-4 h-4 ml-1 text-red-400" />
    );
  };

  return (
    <motion.div
      key={coin.id}
      className="rounded-2xl shadow-md p-5 bg-white dark:bg-zinc-800 text-gray-900 dark:text-white flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex justify-between items-center mb-3">
        <img src={coin.image} alt={coin.name} className="w-10 h-10" />
        <button
          onClick={() => toggleFavorite(coin.id)}
          aria-label="Toggle Favorite"
        >
          <Star
            className={`w-6 h-6 transition-colors ${
              isFavorite
                ? "text-yellow-400"
                : "text-gray-400 dark:text-gray-500"
            }`}
          />
        </button>
      </div>
      <h3 className="text-lg font-bold">{coin.name}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        ${coin.current_price.toLocaleString()}
      </p>
      <p className="mt-2 text-sm">
        24h: {coin.price_change_percentage_24h?.toFixed(2)}%{" "}
        {getTrendIcon(coin.price_change_percentage_24h)}
      </p>
    </motion.div>
  );
}
