"use client";

import { useRouter } from "next/navigation";

export default function NextActions() {
  const router = useRouter();

  return (
    <div className="mt-10 flex flex-col gap-3 items-center w-full">
      <p className="text-sm text-gray-600 font-medium">What would you like to do next?</p>

      <div className="flex gap-4">
        <button onClick={() => router.push("/")} className="px-4 py-2 border rounded-md hover:bg-gray-100 transition">
          Home
        </button>
        <button onClick={() => router.push("/explore")} className="px-4 py-2 border rounded-md hover:bg-gray-100 transition">
          Explore
        </button>
        <button onClick={() => router.push("/simulate")} className="px-4 py-2 border rounded-md hover:bg-gray-100 transition">
          Simulate
        </button>
      </div>
    </div>
  );
}
