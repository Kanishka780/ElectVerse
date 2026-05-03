import NextActions from "@/components/NextActions";

export default function TimelinePage() {
  const steps = [
    "Election Announced",
    "Candidate Nomination",
    "Campaigning",
    "Voting Day",
    "Counting Votes",
    "Results Declared",
  ];

  return (
    <main className="min-h-screen bg-[#F9FFF6] text-[#1A1A1A] flex flex-col">
      <div className="p-10 flex-1 max-w-3xl mx-auto w-full text-center">
        <h1 className="text-4xl font-bold text-green-700 mb-8">
          Election Timeline
        </h1>

        <div className="space-y-6 text-left max-w-xl mx-auto border-l-4 border-green-500 pl-6">
          {steps.map((s, i) => (
            <div key={i} className="bg-white p-5 rounded-xl shadow-md border border-gray-100 hover:scale-105 transition">
              <span className="font-bold text-green-700 text-lg mr-2">{i+1}.</span> {s}
            </div>
          ))}
        </div>

        <div className="mt-16">
          <NextActions />
        </div>
      </div>
    </main>
  );
}
