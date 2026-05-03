"use client";

export default function HorizontalTimeline() {
  const steps = [
    { title: "Announcement", desc: "Election dates declared" },
    { title: "Campaign", desc: "Parties promote candidates" },
    { title: "Voting", desc: "Citizens cast votes" },
    { title: "Counting", desc: "Votes are counted" },
    { title: "Results", desc: "Winners announced" },
  ];

  return (
    <div className="overflow-x-auto py-6">
      <div className="flex gap-6 min-w-max px-4">
        {steps.map((step, i) => (
          <div
            key={i}
            className="min-w-[200px] bg-white dark:bg-[#0F2A4A] p-4 rounded-xl shadow text-center"
          >
            <h3 className="font-bold text-green-600">{step.title}</h3>
            <p className="text-sm text-gray-500">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
