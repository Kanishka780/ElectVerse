"use client";

import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { quizzes } from "@/lib/quizzes";
import { useAIStore } from "@/store/aiStore";

export default function QuizPage() {
  const { slug } = useParams();
  const router = useRouter();
  const data = quizzes[slug as string];

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [xp, setXP] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [finished, setFinished] = useState(false);

  if (!data) return <div className="p-10 text-center">No quiz available for this topic yet.</div>;

  const q = data[current];

  const handleAnswer = (opt: string) => {
    if (selected) return;

    setSelected(opt);

    useAIStore.getState().ask(
      `The user answered "${opt}" to the question "${q.question}". The correct answer is "${q.answer}". Explain why briefly.`
    );

    if (opt === q.answer) {
      setScore((s) => s + 1);
      setXP((x) => x + 10);
    } else {
      setXP((x) => x - 5);
    }

    if (current < data.length - 1) {
      setCurrent((c) => c + 1);
      setSelected(null);
    } else {
      setFinished(true);
    }
  };

  if (finished) {
    return (
      <div className="min-h-screen p-10 flex flex-col items-center justify-center bg-[#F9FFF6]">
        <div className="bg-white p-10 rounded-xl shadow-lg border border-gray-100 text-center max-w-md w-full">
          <h1 className="text-3xl font-bold text-green-700 mb-4">Quiz Completed 🎉</h1>

          <div className="text-xl text-gray-700 mb-4 space-y-2">
            <p>Score: <span className="font-bold">{score}/{data.length}</span></p>
            <p>XP Earned: <span className="font-bold text-yellow-500">{xp}</span></p>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() => location.reload()}
              className="px-6 py-3 border border-gray-300 text-gray-600 font-semibold rounded hover:bg-gray-50 transition"
            >
              Restart
            </button>
            <button
              onClick={() => router.push('/learn')}
              className="px-6 py-3 bg-green-500 text-white font-semibold rounded hover:bg-green-600 transition"
            >
              Back to Topics
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-10 flex flex-col items-center justify-center bg-[#F9FFF6] text-center">
      <div className="max-w-2xl bg-white p-8 rounded-xl shadow-lg w-full border border-gray-100 relative">
        <div className="absolute top-4 right-6 bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full font-bold shadow-sm">
          XP: {xp}
        </div>
        
        <div className="text-sm text-gray-500 mb-6 text-left font-semibold">
          Question {current + 1} of {data.length}
        </div>

        <h2 className="text-2xl font-bold mb-8 text-gray-800">{q.question}</h2>

        <div className="space-y-4">
          {q.options.map((opt: string) => {
            let style = "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100";

            if (selected) {
              if (opt === q.answer) style = "bg-green-500 text-white border-green-600";
              else if (opt === selected) style = "bg-red-400 text-white border-red-500";
            }

            return (
              <button
                key={opt}
                onClick={() => handleAnswer(opt)}
                className={`block w-full mx-auto px-6 py-4 rounded-xl border transition text-lg font-medium shadow-sm ${style}`}
              >
                {opt}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
