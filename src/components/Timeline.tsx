"use client";

export default function Timeline() {
  const steps = [
    "Election Announced",
    "Campaign Begins",
    "Voting Day",
    "Counting Votes",
    "Results Declared",
  ];

  return (
    <div className="flex flex-col items-start gap-6 my-10 max-w-sm mx-auto border-l-2 border-green-200 pl-4">
      {steps.map((step, i) => (
        <div key={i} className="flex items-center gap-4 -ml-[25px]">
          <div className="w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-sm" />
          <p className="text-lg font-medium text-gray-800">{step}</p>
        </div>
      ))}
    </div>
  );
}
