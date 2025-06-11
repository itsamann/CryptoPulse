export default function Footer({ darkMode }) {
  return (
    <footer
      className={`py-6 text-center text-sm font-mono ${
        darkMode ? "bg-zinc-900 text-gray-400" : "bg-gray-100 text-gray-600"
      }`}
    >
      &copy; {new Date().getFullYear()} CryptoPulse. All rights reserved.
    </footer>
  );
}
