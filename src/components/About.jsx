export default function About({ darkMode }) {
  return (
    <section
      className={`px-6 py-16 text-center ${
        darkMode ? "bg-zinc-800 text-gray-300" : "bg-gray-50 text-gray-700"
      }`}
    >
      <h2 className="text-4xl font-bold mb-4">What is CryptoPulse?</h2>
      <p className="max-w-3xl mx-auto text-lg">
        CryptoPulse is a sleek, real-time crypto tracker built with React and
        Tailwind CSS. It provides up-to-the-minute market data powered by
        CoinGecko’s API, with beautiful UI, theme toggling, favorites, and
        responsive design.
      </p>
    </section>
  );
}
