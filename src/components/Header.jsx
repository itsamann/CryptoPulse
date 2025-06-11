import { useState, useEffect } from "react";
import { Search, Moon, Sun } from "lucide-react";

export default function Header({ darkMode, toggleDarkMode, search, setSearch }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 px-6 py-4 flex flex-col sm:flex-row justify-between items-center shadow-md backdrop-blur-md transition-all duration-300 ${
        darkMode ? "bg-zinc-900/90 border-b border-cyan-500" : "bg-white/90 border-b border-gray-200"
      }`}
    >
      <h1 className="text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text mb-3 sm:mb-0">
        CryptoPulse
      </h1>

      <div className="flex items-center gap-4">
        <div
          className={`relative rounded-full overflow-hidden ${
            darkMode ? "bg-zinc-800" : "bg-zinc-100"
          }`}
        >
          <input
            type="text"
            placeholder="Search coins..."
            className={`pl-10 pr-4 py-2 focus:outline-none w-48 ${
              darkMode ? "text-white bg-transparent" : "text-black bg-transparent"
            }`}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        </div>

        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full hover:scale-110 transition-transform"
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? (
            <Sun className="text-yellow-400" />
          ) : (
            <Moon className="text-gray-800" />
          )}
        </button>

        <div className="text-sm font-mono text-gray-500 dark:text-gray-300 text-right select-none">
          {time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" })}
          <br />
          <span className="text-xs">{time.toDateString()}</span>
        </div>
      </div>
    </header>
  );
}