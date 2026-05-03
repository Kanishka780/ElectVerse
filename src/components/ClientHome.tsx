"use client";

import Link from "next/link";
import ElectionStats from "@/components/ElectionStats";
import TimelineFlow from "@/components/TimelineFlow";
import { useEffect } from "react";
import { useAIStore } from "@/store/aiStore";
import { useRouter } from "next/navigation";

export default function ClientHome() {
  const ask = useAIStore((s) => s.ask);
  const router = useRouter();

  useEffect(() => {
    // Already seeded with welcome message in the store — no API call needed
  }, []);

  return (
    <main className="min-h-full bg-[#F9FFF6] text-[#1A1A1A] flex flex-col">
      <ElectionStats />
      <div className="mt-8">
        <TimelineFlow />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center text-center px-6 mt-10 mb-20">
        <h1 className="text-6xl font-bold text-[#2E7D32] mb-6">ElectVerse</h1>

        <p className="text-lg text-gray-600 max-w-xl mb-10">
          Learn how elections work through guided stories, timelines, simulations, and AI assistance.
        </p>

        <div className="flex gap-6 justify-center flex-wrap max-w-4xl w-full">
          <div onClick={() => {
            ask("I want to learn about elections. Give me a quick overview of what I'll learn.");
            router.push("/learn");
          }} className="cursor-pointer flex-1 min-w-[250px]">
            <div className="p-6 bg-white rounded-xl shadow hover:scale-105 transition border border-gray-100 h-full">
              <div className="text-xl font-semibold mb-2">🧭 Learn Elections</div>
              <p className="text-sm text-gray-500">Start from basics and build understanding step-by-step.</p>
            </div>
          </div>

          <div onClick={() => {
            ask("I want to try the voting simulation. What should I know before I start?");
            router.push("/simulate/voting-process");
          }} className="cursor-pointer flex-1 min-w-[250px]">
            <div className="p-6 bg-white rounded-xl shadow hover:scale-105 transition border border-gray-100 h-full">
              <div className="text-xl font-semibold mb-2">🎮 Simulation</div>
              <p className="text-sm text-gray-500">Experience voting and practice your decisions.</p>
            </div>
          </div>

          <div onClick={() => {
            ask("I'm going to take an election quiz. Give me a quick tip to prepare.");
            router.push("/quiz/democracy");
          }} className="cursor-pointer flex-1 min-w-[250px]">
            <div className="p-6 bg-white rounded-xl shadow hover:scale-105 transition border border-gray-100 h-full">
              <div className="text-xl font-semibold mb-2">🧪 Quiz Yourself</div>
              <p className="text-sm text-gray-500">Test your knowledge with gamified questions.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
