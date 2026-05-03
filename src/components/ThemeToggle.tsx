"use client";

import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
      className="px-3 py-1 rounded bg-green-500 text-white"
    >
      Toggle Theme
    </button>
  );
}
