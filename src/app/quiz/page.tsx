"use client";
import { useState } from "react";
import NextActions from "@/components/NextActions";

const questions = [
  {
    question: "What is the minimum voting age in India?",
    options: ["16", "18", "21"],
    answer: "18",
  },
  {
    question: "Who conducts elections in India?",
    options: ["Supreme Court", "Election Commission", "Parliament"],
    answer: "Election Commission",
  },
  {
    question: "Which machine is used for casting votes?",
    options: ["ATM", "EVM", "Calculator"],
    answer: "EVM",
  }
];

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (option: string) => {
    if (selected) return; // prevent multiple clicks

    setSelected(option);

    if (option === questions[current].answer) {
      setScore((prev) => prev + 1);
    }

    setTimeout(() => {
      if (current < questions.length - 1) {
        setCurrent((prev) => prev + 1);
        setSelected(null);
      } else {
        setFinished(true);
      }
    }, 800);
  };

  const restart = () => {
    setCurrent(0);
    setScore(0);
    setSelected(null);
    setFinished(false);
  };

  if (finished) {
    return (
      <main className="min-h-screen bg-[#F9FFF6] text-[#1A1A1A] flex flex-col">
        <div className="flex-1 flex flex-col items-center justify-center p-10">
          <div className="bg-white p-10 rounded-2xl shadow-xl text-center max-w-md w-full">
            <h1 className="text-3xl font-bold text-green-700 mb-4">Quiz Completed!</h1>
            <p className="text-xl text-gray-700 font-semibold">Score: {score} / {questions.length}</p>

            <button
              onClick={restart}
              className="mt-8 px-6 py-3 bg-green-500 text-white font-bold rounded hover:bg-green-600 transition w-full"
            >
              Restart Quiz
            </button>
          </div>
          <div className="mt-12">
            <NextActions />
          </div>
        </div>
      </main>
    );
  }

  const q = questions[current];

  return (
    <main className="min-h-screen bg-[#F9FFF6] text-[#1A1A1A] flex flex-col">

      <div className="p-10 text-center flex-1 max-w-2xl mx-auto w-full flex flex-col justify-center">
        <div className="bg-white p-10 rounded-2xl shadow-xl">
          <h2 className="text-sm font-bold text-gray-400 mb-2 uppercase tracking-wide">Question {current + 1} of {questions.length}</h2>
          <h1 className="text-2xl font-bold mb-8 text-[#2E7D32]">{q.question}</h1>

          <div className="flex flex-col gap-4 max-w-xs mx-auto">
            {q.options.map((opt) => {
              let style = "bg-[#E6F9DA] hover:bg-[#C8F5B0] text-gray-800";

              if (selected) {
                if (opt === q.answer) style = "bg-green-500 text-white font-bold scale-105 transition-transform";
                else if (opt === selected) style = "bg-red-400 text-white opacity-70";
                else style = "bg-gray-100 text-gray-400 opacity-50";
              }

              return (
                <button
                  key={opt}
                  onClick={() => handleAnswer(opt)}
                  className={`block mx-auto my-2 px-6 py-4 rounded-xl text-lg font-medium transition w-full ${style}`}
                >
                  {opt}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
