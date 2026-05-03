"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import NextActions from "@/components/NextActions";

import {
  Vote,
  UserCheck,
  FileText,
  Landmark,
  BarChart,
} from "lucide-react";

const steps = [
  {
    title: "Why Elections Matter",
    content:
      "Elections allow citizens to choose leaders and shape the future of the country.",
    icon: <Landmark size={28} />,
  },
  {
    title: "Who Can Vote",
    content:
      "Every Indian citizen aged 18 or above is eligible to vote.",
    icon: <UserCheck size={28} />,
  },
  {
    title: "Voter Registration",
    content:
      "You must register yourself and obtain a voter ID to participate.",
    icon: <FileText size={28} />,
  },
  {
    title: "Voting Process",
    content:
      "Voting is done using Electronic Voting Machines (EVMs) at polling booths.",
    icon: <Vote size={28} />,
  },
  {
    title: "Counting & Results",
    content:
      "Votes are counted and results are declared to form the government.",
    icon: <BarChart size={28} />,
  },
];

export default function Journey() {
  const [step, setStep] = useState(0);
  const router = useRouter();

  const isLast = step === steps.length - 1;

  return (
    <main className="min-h-screen bg-[#F9FFF6] text-[#1A1A1A] flex flex-col">
      <Navbar />

      <div className="flex flex-1">

        {/* SIDEBAR */}
        <div className="hidden md:flex flex-col w-64 border-r bg-white p-6 space-y-4">
          {steps.map((s, i) => (
            <button
              key={i}
              onClick={() => setStep(i)}
              className={`flex items-center gap-3 px-3 py-2 rounded-md transition ${
                step === i
                  ? "bg-[#E6F9DA] text-[#2E7D32] font-semibold"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {s.icon}
              <span>{s.title}</span>
            </button>
          ))}
        </div>

        {/* MAIN CONTENT */}
        <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">

          {/* PROGRESS */}
          <div className="w-full max-w-xl mb-6">
            <div className="h-2 bg-gray-200 rounded-full">
              <motion.div
                className="h-2 bg-[#7ED957] rounded-full"
                initial={{ width: 0 }}
                animate={{
                  width: `${((step + 1) / steps.length) * 100}%`,
                }}
                transition={{ duration: 0.4 }}
              />
            </div>
          </div>

          <div className="mb-4 text-sm text-gray-500">
            Step {step + 1} / {steps.length}
          </div>

          {/* CARD */}
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white shadow-xl rounded-2xl p-10 max-w-xl"
          >
            <div className="flex justify-center mb-4 text-[#2E7D32]">
              {steps[step].icon}
            </div>

            <h1 className="text-4xl font-bold mb-4 text-[#2E7D32]">
              {steps[step].title}
            </h1>

            <p className="text-lg text-gray-700 leading-relaxed">
              {steps[step].content}
            </p>
          </motion.div>

          {/* BUTTONS */}
          <div className="mt-10 flex gap-4">
            {!isLast ? (
              <>
                <button
                  onClick={() => setStep((prev) => Math.max(prev - 1, 0))}
                  className="px-5 py-2 border rounded-md hover:bg-gray-100"
                >
                  Previous
                </button>

                <button
                  onClick={() => setStep((prev) => prev + 1)}
                  className="px-5 py-2 bg-[#7ED957] text-white rounded-md hover:scale-105 transition"
                >
                  Next
                </button>
              </>
            ) : (
              <div className="flex flex-col items-center gap-4 w-full">
                <p className="text-green-700 font-medium text-lg">
                  🎉 You’ve completed the journey!
                </p>

                <button
                  onClick={() => setStep(0)}
                  className="px-5 py-2 border rounded-md hover:bg-gray-100"
                >
                  Restart Journey
                </button>

                <NextActions />
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
