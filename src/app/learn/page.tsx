import Link from "next/link";
import { topics } from "@/lib/topics";

export default function LearnPage() {
  return (
    <main className="min-h-screen px-6 py-16 bg-[#F9FFF6] text-center">
      <h1 className="text-5xl font-bold text-green-700 mb-6">
        Learn Elections
      </h1>

      <p className="text-gray-500 mb-10">
        I’ll guide you step-by-step. Choose a topic to begin.
      </p>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {topics.map((t) => (
          <Link key={t.slug} href={`/learn/${t.slug}`}>
            <div className="bg-white p-6 rounded-xl shadow hover:scale-105 transition cursor-pointer">
              <h2 className="text-xl font-bold text-green-700 mb-2">
                {t.title}
              </h2>
              <p className="text-gray-600 text-sm">
                {t.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
