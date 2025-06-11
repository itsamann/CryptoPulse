import { useEffect, useState } from "react";
import { fetchCoins } from "./api/coinGecko";
import Header from "./components/Header";
import CoinCard from "./components/CoinCard";
import Loader from "./components/Loader";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";

export default function App() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(
    () => window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  const [favorites, setFavorites] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("favorites")) || [];
    } catch {
      return [];
    }
  });

  // Sync dark mode class on html element
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [darkMode]);

  // Fetch coins on mount
  useEffect(() => {
    const getCoins = async () => {
      try {
        const data = await fetchCoins();
        setCoins(data);
      } catch (error) {
        console.error("Failed to fetch coins:", error);
      } finally {
        setLoading(false);
      }
    };
    getCoins();
  }, []);

  // Persist favorites to localStorage
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen font-sans transition-colors duration-300 bg-gray-100 dark:bg-zinc-900 text-gray-900 dark:text-white flex flex-col">
      <Header
        darkMode={darkMode}
        toggleDarkMode={() => setDarkMode((d) => !d)}
        search={search}
        setSearch={setSearch}
      />

      <Hero darkMode={darkMode} />

      <main className="px-6 py-12 max-w-7xl mx-auto flex-grow">
        {loading ? (
          <Loader />
        ) : filteredCoins.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredCoins.map((coin) => (
              <CoinCard
                key={coin.id}
                coin={coin}
                isFavorite={favorites.includes(coin.id)}
                toggleFavorite={toggleFavorite}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-lg font-medium mt-10">
            No coins found for "{search}"
          </p>
        )}
      </main>

      <About darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
}
