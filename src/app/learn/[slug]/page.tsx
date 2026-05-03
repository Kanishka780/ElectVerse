"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { knowledgeBase } from "@/lib/knowledgeBase";
import { motion } from "framer-motion";
import { useAIStore } from "@/store/aiStore";

export default function TopicPage() {
  const { slug } = useParams();
  const router = useRouter();
  const topic: any = knowledgeBase[slug as string];
  const [mode, setMode] = useState<"story" | "content">("story");
  const ask = useAIStore((s) => s.ask);

  useEffect(() => {
    if (topic) {
      ask(`I just started learning about "${topic.title}". Give me a one-line intro to motivate me.`);
    }
  }, [topic?.title]);

  if (!topic) return <div className="p-10 text-center">Topic not found</div>;

  return (
    <main className="min-h-screen px-6 py-16 bg-[#F9FFF6]">
      <h1 className="text-4xl font-bold text-green-700 mb-2 text-center">{topic.title}</h1>
      <p className="text-gray-600 text-center mb-10">
        Follow the story or explore content. Ask the AI on the left anytime!
      </p>

      {/* MODE SWITCH */}
      <div className="flex justify-center gap-4 mb-10">
        <button
          onClick={() => setMode("story")}
          className={`px-4 py-2 rounded transition ${mode === "story" ? "bg-green-500 text-white shadow" : "border bg-white text-gray-600"}`}
        >
          Story Mode
        </button>
        <button
          onClick={() => setMode("content")}
          className={`px-4 py-2 rounded transition ${mode === "content" ? "bg-green-500 text-white shadow" : "border bg-white text-gray-600"}`}
        >
          Content
        </button>
      </div>

      {/* STORY MODE */}
      {mode === "story" && (
        <div className="max-w-3xl mx-auto space-y-12 pb-10 mt-10">
          <div className="space-y-12 border-l-2 border-green-200 pl-8 ml-4">
            {topic.modules.map((module: any, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                onViewportEnter={() => {
                  ask(`Explain this section about "${topic.title}" in simple terms: ${module.heading}`);
                }}
                transition={{ duration: 0.5 }}
                className="bg-white p-6 rounded-xl shadow relative"
              >
                <div className="absolute -left-12 top-6 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold shadow">
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold text-green-700 mb-2">{module.heading}</h3>
                {Array.isArray(module.content) ? (
                  <ul className="space-y-1 text-gray-700">
                    {module.content.map((item: string, idx: number) => (
                      <li key={idx}>• {item}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-700">{module.content}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* CONTENT MODE */}
      {mode === "content" && (
        <div className="max-w-3xl mx-auto space-y-6">
          {topic.modules.map((module: any, i: number) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow border-t-4 border-green-500">
              <h3 className="text-xl font-bold text-green-700 mb-2">{module.heading}</h3>
              {Array.isArray(module.content) ? (
                <ul className="text-gray-700">
                  {module.content.map((item: string, idx: number) => (
                    <li key={idx} className="mb-1">• {item}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-700">{module.content}</p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* ACTIONS */}
      <div className="mt-16 flex justify-center gap-6">
        <button
          onClick={() => router.push(`/simulate/${slug}`)}
          className="bg-green-500 text-white font-semibold px-6 py-3 rounded shadow hover:bg-green-600 transition"
        >
          Start Simulation
        </button>
        <button
          onClick={() => router.push(`/quiz/${slug}`)}
          className="border-2 border-green-500 text-green-600 font-semibold px-6 py-3 rounded hover:bg-green-50 transition"
        >
          Take Quiz
        </button>
      </div>
    </main>
  );
}
