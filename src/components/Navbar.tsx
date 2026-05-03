"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full flex justify-between items-center px-8 py-4 bg-white shadow-md z-50">
      <h1 className="text-xl font-bold text-green-700">ElectVerse</h1>

      <div className="flex gap-6 text-sm font-semibold items-center text-gray-800">
        <Link href="/" className="hover:text-green-700 transition-colors">Home</Link>
        <Link href="/learn" className="hover:text-green-700 transition-colors">Story</Link>
        <Link href="/timeline" className="hover:text-green-700 transition-colors">Timeline</Link>
        <Link href="/explore" className="hover:text-green-700 transition-colors">Explore</Link>
        <Link href="/simulate" className="hover:text-green-700 transition-colors">Simulation</Link>
        <Link href="/quiz" className="hover:text-green-700 transition-colors">Quiz</Link>
      </div>
    </nav>
  );
}
