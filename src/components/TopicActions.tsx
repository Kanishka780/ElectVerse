"use client";

import { useEffect } from "react";
import { useAIStore } from "@/lib/useAIStore";
import { useSectionStore } from "@/lib/useSectionStore";
import NextActions from "./NextActions";
import { useRouter } from "next/navigation";

export default function TopicActions({ topicTitle, topicKey }: { topicTitle: string, topicKey: string }) {
  const setOpen = useAIStore((state: any) => state.setOpen);
  const setSection = useSectionStore((state: any) => state.setSection);
  const router = useRouter();

  useEffect(() => {
    setSection(topicTitle);
  }, [topicTitle, setSection]);

  return (
    <>
      <div className="mt-12 flex flex-wrap justify-center items-center gap-6">
        <button 
          onClick={() => router.push("/simulate")}
          className="bg-green-500 text-white px-6 py-2 rounded font-medium hover:bg-green-600 transition"
        >
          Start Simulation
        </button>

        <button 
          onClick={() => router.push("/quiz")}
          className="border border-gray-300 px-6 py-2 rounded font-medium hover:bg-gray-50 transition"
        >
          Take Quiz
        </button>

        <button 
          onClick={() => setOpen(true)}
          className="underline text-green-700 font-medium hover:text-green-800 transition"
        >
          Ask AI
        </button>
      </div>

      <div className="mt-16 border-t pt-8">
        <NextActions />
      </div>
    </>
  );
}
