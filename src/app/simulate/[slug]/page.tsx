"use client";

import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { simulations } from "@/lib/simulations";
import { useAIStore } from "@/store/aiStore";

export default function SimulationPage() {
  const { slug } = useParams();
  const router = useRouter();
  const data = simulations[slug as string];

  const [step, setStep] = useState(0);

  if (!data) return <div className="p-10 text-center">No simulation available for this topic yet.</div>;

  const current = data[step];

  const handleClick = (opt: any) => {
    useAIStore.getState().ask(
      `[SIMULATION: ${slug}] Step: ${current.question}. User selected: "${opt.label}". Provide immediate feedback on this choice and explain the correct electoral procedure.`
    );

    if (opt.correct) {
      setTimeout(() => {
        setStep((s) => s + 1);
      }, 3500); // Wait longer so they can read AI response
    }
  };

  if (step >= data.length) {
    return (
      <div className="min-h-screen p-10 flex flex-col items-center justify-center bg-[#F9FFF6]">
        <h1 className="text-3xl font-bold text-green-700 mb-6">Simulation Completed 🎉</h1>
        <p className="text-gray-600 mb-8">You successfully navigated the scenario!</p>
        <button
          onClick={() => router.push(`/quiz/${slug}`)}
          className="bg-green-500 text-white px-6 py-3 rounded shadow hover:bg-green-600 transition"
        >
          Proceed to Quiz
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-10 flex flex-col items-center justify-center bg-[#F9FFF6] text-center">
      <div className="max-w-2xl bg-white p-8 rounded-xl shadow-lg w-full border border-gray-100">
        
        {/* Intro section as requested */}
        <h2 className="text-xl font-bold mb-4 text-gray-800">
          Experience Voting in India
        </h2>
        <p className="text-gray-600 mb-8">
          Go through the real-life steps a voter follows on election day.
        </p>

        <div className="bg-green-50 text-green-800 p-6 rounded-lg mb-8 shadow-inner border border-green-100">
          <h2 className="text-xl font-semibold">{current.question}</h2>
        </div>

        <div className="space-y-4">
          {current.options.map((opt: any, i: number) => (
            <button
              key={i}
              onClick={() => handleClick(opt)}
              className="block w-full mx-auto px-6 py-4 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-xl transition text-lg font-medium text-gray-700"
            >
              {opt.label}
            </button>
          ))}
        </div>

      </div>
    </div>
  );
}
