"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full flex justify-between items-center px-8 py-4 bg-white shadow-md z-50">
      <h1 className="text-xl font-bold text-green-700">ElectVerse</h1>

      <div className="flex gap-6 text-sm font-medium items-center">
        <Link href="/">Home</Link>
        <Link href="/learn">Story</Link>
        <Link href="/timeline">Timeline</Link>
        <Link href="/explore">Explore</Link>
        <Link href="/simulate">Simulation</Link>
        <Link href="/quiz">Quiz</Link>
      </div>
    </nav>
  );
}
