"use client";

import { useState } from "react";
import { useAIStore } from "@/store/aiStore";

export default function TimelineFlow() {
  const ask = useAIStore((s) => s.ask);

  const steps = [
    {
      title: "Election Announced",
      desc: "Election Commission releases schedule including dates for nomination, polling, and counting."
    },
    {
      title: "Candidate Nomination",
      desc: "Candidates file nomination papers and submit affidavits declaring assets and background."
    },
    {
      title: "Campaigning",
      desc: "Political parties and candidates hold rallies, distribute manifestos, and reach out to voters."
    },
    {
      title: "Voting Day",
      desc: "Citizens visit polling booths to cast their votes securely using EVMs."
    },
    {
      title: "Counting & Results",
      desc: "Votes are counted under strict security and the winning candidates are officially declared."
    }
  ];

  const [active, setActive] = useState<any>(null);

  return (
    <div className="text-center mt-10 mb-12 max-w-5xl mx-auto px-4">

      {/* TITLE */}
      <p className="text-gray-600 mb-6 text-sm font-medium">
        Elections follow a structured process:
      </p>

      {/* FLOW */}
      <div className="flex justify-center items-center flex-wrap gap-4 mb-8">
        {steps.map((step, i) => (
          <div key={i} className="flex items-center gap-3">

            <div 
              onClick={() => {
                setActive(step);
                ask(`Explain this election stage in simple terms: ${step.title}. ${step.desc}`);
              }}
              className={`px-5 py-2.5 rounded-full text-sm font-bold shadow-sm border transition cursor-pointer hover:scale-105 ${
                active?.title === step.title 
                  ? "bg-green-600 text-white border-green-700 shadow-md" 
                  : "bg-green-50 text-green-700 border-green-200 hover:bg-green-100"
              }`}
            >
              {step.title}
            </div>

            {i !== steps.length - 1 && (
              <span className="text-gray-400 font-bold hidden md:block">→</span>
            )}

          </div>
        ))}
      </div>

      {/* DETAIL PANEL */}
      {active && (
        <div className="bg-white border border-green-100 rounded-xl p-6 shadow-sm max-w-2xl mx-auto min-h-[120px] flex flex-col justify-center transition-all">
          <h3 className="text-xl font-bold text-green-700 mb-2">{active.title}</h3>
          <p className="text-gray-600">{active.desc}</p>
        </div>
      )}

    </div>
  );
}
