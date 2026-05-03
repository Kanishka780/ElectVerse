import Link from "next/link";

const topics = [
  "What are Elections",
  "Election Commission",
  "Voting Process",
  "Election Timeline",
  "Political Parties",
  "Types of Elections",
  "Voter ID",
  "Election Rules",
];

export default function Explore() {
  return (
    <main className="min-h-screen bg-[#F9FFF6] text-[#1A1A1A] flex flex-col">

      <div className="px-10 py-10 flex-1">
        <h1 className="text-4xl font-bold text-[#2E7D32] mb-10 text-center">
          Explore Topics
        </h1>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {topics.map((topic, i) => (
            <Link key={i} href={`/explore/${topic.toLowerCase().replace(/\s+/g, "-")}`}>
              <div
                className="p-6 bg-white rounded-xl shadow hover:scale-105 transition cursor-pointer border border-gray-100 h-full flex items-center justify-center"
              >
                <h2 className="text-xl font-semibold text-center">{topic}</h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
