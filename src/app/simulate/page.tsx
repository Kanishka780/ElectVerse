"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import NextActions from "@/components/NextActions";

const steps = [
  {
    question: "Are you 18+?",
    options: [
      { label: "Yes", correct: true },
      { label: "No", correct: false },
    ],
    feedback: {
      correct: "You are eligible!",
      wrong: "You must be 18+.",
    },
  },
  {
    question: "Do you have a voter ID?",
    options: [
      { label: "Yes", correct: true },
      { label: "No", correct: false },
    ],
    feedback: {
      correct: "You're ready for the next step.",
      wrong: "You need to register to get a voter ID.",
    },
  },
  {
    question: "Have you checked your polling booth?",
    options: [
      { label: "Yes", correct: true },
      { label: "No", correct: false },
    ],
    feedback: {
      correct: "Perfect! You know where to vote.",
      wrong: "You can find it online via election portals.",
    },
  },
  {
    question: "You arrive at the polling booth. What do you do?",
    options: [
      { label: "Verify identity", correct: true },
      { label: "Leave", correct: false },
    ],
    feedback: {
      correct: "Correct! Identity verification is required.",
      wrong: "You must verify identity before voting.",
    },
  },
  {
    question: "You see the EVM. What next?",
    options: [
      { label: "Press candidate button", correct: true },
      { label: "Skip", correct: false },
    ],
    feedback: {
      correct: "Your vote is recorded successfully.",
      wrong: "You need to cast your vote.",
    },
  },
];

export default function Simulation() {
  const [step, setStep] = useState(0);
  const [message, setMessage] = useState("");

  const handleOption = (option: any) => {
    if (option.correct) {
      setMessage(steps[step].feedback.correct);

      setTimeout(() => {
        if (step < steps.length - 1) {
          setStep(step + 1);
        } else {
          setStep(step + 1); // trigger end state
        }
        setMessage("");
      }, 1000);
    } else {
      setMessage(steps[step].feedback.wrong);
    }
  };

  const isLast = step >= steps.length;

  return (
    <main className="min-h-screen bg-[#F9FFF6] text-[#1A1A1A] flex flex-col">
      <div className="flex flex-1 items-center justify-center px-6 text-center">
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white shadow-xl rounded-2xl p-10 max-w-xl w-full"
        >
          {!isLast ? (
            <>
              <h1 className="text-2xl font-bold mb-6 text-[#2E7D32]">
                {steps[step].question}
              </h1>

              {/* OPTIONS */}
              <div className="flex flex-col gap-4">
                {steps[step].options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleOption(opt)}
                    className="bg-[#E6F9DA] hover:bg-[#C8F5B0] px-4 py-3 rounded-lg transition"
                  >
                    {opt.label}
                  </button>
                ))}
              </div>

              {/* FEEDBACK */}
              {message && (
                <p className={`mt-6 font-medium ${message === steps[step].feedback.correct ? "text-green-700" : "text-red-600"}`}>
                  {message}
                </p>
              )}
            </>
          ) : (
            <div className="mt-8 flex flex-col items-center">
              <p className="text-green-700 font-semibold text-lg mb-6">
                🎉 You completed the voting simulation!
              </p>

              <button
                onClick={() => {
                  setStep(0);
                  setMessage("");
                }}
                className="mt-4 px-5 py-2 border rounded-md hover:bg-gray-100"
              >
                Restart Simulation
              </button>
              
              <NextActions />
            </div>
          )}
        </motion.div>
      </div>
    </main>
  );
}
