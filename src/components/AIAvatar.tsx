"use client";

import { useState, useRef, useEffect } from "react";
import { useAIStore } from "@/store/aiStore";

export default function AIPanel() {
  const { messages, loading, ask } = useAIStore();
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to latest message
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const send = () => {
    if (!input.trim() || loading) return;
    ask(input.trim());
    setInput("");
  };

  return (
    <aside className="w-[300px] min-w-[300px] h-screen sticky top-0 border-r border-gray-200 bg-white flex flex-col shadow-sm z-40">

      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-4 border-b border-gray-100 bg-green-600">
        <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-lg shadow">
          🤖
        </div>
        <div>
          <h2 className="font-bold text-white text-sm leading-tight">ElectVerse AI</h2>
          <p className="text-green-200 text-xs">Your election guide</p>
        </div>
        <div className={`ml-auto w-2 h-2 rounded-full ${loading ? "bg-yellow-300 animate-pulse" : "bg-green-300"}`} />
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto px-3 py-4 space-y-3">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`text-sm rounded-xl px-3 py-2 leading-relaxed whitespace-pre-wrap max-w-[95%] ${
              msg.role === "ai"
                ? "bg-green-50 text-green-900 border border-green-100"
                : "bg-gray-100 text-gray-800 ml-auto text-right"
            }`}
          >
            {msg.text}
          </div>
        ))}
        {loading && (
          <div className="bg-green-50 text-green-700 text-sm px-3 py-2 rounded-xl border border-green-100 animate-pulse">
            🤔 Thinking...
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="px-3 py-3 border-t border-gray-100 flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => { if (e.key === "Enter") send(); }}
          placeholder="Ask anything..."
          className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-black placeholder-gray-400 text-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
        />
        <button
          onClick={send}
          disabled={loading || !input.trim()}
          className="bg-green-600 text-white px-3 py-2 rounded-lg text-sm font-semibold hover:bg-green-700 disabled:opacity-40 transition"
        >
          ➤
        </button>
      </div>
    </aside>
  );
}
