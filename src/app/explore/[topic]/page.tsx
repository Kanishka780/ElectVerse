import Navbar from "@/components/Navbar";
import { knowledgeBase } from "@/lib/knowledgeBase";
import TopicActions from "@/components/TopicActions";

export default async function TopicPage({ params }: any) {
  const resolvedParams = await params;
  const topicKey = resolvedParams.topic;

  const topic = knowledgeBase[topicKey];

  if (!topic) {
    return (
      <main className="p-10">
        <Navbar />
        <h1 className="text-2xl text-red-500 text-center mt-20">Topic not found</h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F9FFF6] text-[#1A1A1A] flex flex-col">
      <Navbar />

      <div className="max-w-3xl mx-auto px-6 py-24 flex-1 w-full">
        <h1 className="text-4xl font-bold text-[#2E7D32] mb-10 text-center">
          {topic.title}
        </h1>

        <div className="space-y-8">
          {topic.modules.map((module: any, i: number) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow mb-6">
              <h2 className="text-xl font-bold text-green-700 mb-3">
                {module.heading}
              </h2>

              {Array.isArray(module.content) ? (
                <ul className="space-y-2 text-gray-700">
                  {module.content.map((item: string, idx: number) => (
                    <li key={idx}>• {item}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-700">{module.content}</p>
              )}
            </div>
          ))}
        </div>

        <TopicActions topicTitle={topic.title} topicKey={topicKey} />
      </div>
    </main>
  );
}
