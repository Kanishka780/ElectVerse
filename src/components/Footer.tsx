"use client";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0B1F3A] text-white border-t border-gray-700 mt-auto shadow-inner">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

        <div className="flex items-center gap-2">
          <span className="text-[#22C55E] font-bold text-lg">✔</span>
          <span className="font-semibold text-white">ElectVerse AI</span>
        </div>

        <div className="text-gray-300 text-sm font-medium">
          © 2026 Built with purpose • Election Education Platform
        </div>

      </div>
    </footer>
  );
}
