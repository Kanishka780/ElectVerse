import { create } from "zustand";

type Message = { role: "user" | "ai"; text: string };

type AIState = {
  messages: Message[];
  loading: boolean;
  ask: (input: string) => Promise<void>;
  clearMessages: () => void;
};

export const useAIStore = create<AIState>((set, get) => ({
  messages: [
    {
      role: "ai",
      text: "Hey 👋 I'm your Election Guide.\n\nI'll help you understand how elections work in India step by step.\n\nWhat do you want to do first?\n• Learn Elections\n• Try Simulation\n• Take Quiz",
    },
  ],
  loading: false,

  clearMessages: () => {
    set({
      messages: [
        {
          role: "ai",
          text: "Chat cleared! How can I help you now? 🇮🇳",
        },
      ],
    });
  },

  ask: async (input: string) => {
    const state = get();
    if (state.loading) return;
    
    // Safety check: Empty or too long input
    if (!input.trim() || input.length > 500) {
      set({
        messages: [...get().messages, { role: "ai", text: "❌ Please keep your question under 500 characters." }]
      });
      return;
    }

    set({ loading: true });

    try {
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: input }),
      });

      const data = (await res.json()) as { text?: string; error?: string };

      if (!res.ok) {
        if (res.status === 429) throw new Error("Quota exceeded. Please wait a moment.");
        throw new Error(data.error || "AI request failed");
      }

      if (!data.text) throw new Error("Empty response from AI");

      set({
        messages: [
          ...get().messages,
          { role: "user", text: input },
          { role: "ai", text: data.text },
        ],
        loading: false,
      });

    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      console.error("[AI ERROR]:", errorMessage);
      set({
        messages: [
          ...get().messages,
          { role: "user", text: input },
          { role: "ai", text: `⚠️ ${errorMessage}` },
        ],
        loading: false,
      });
    }
  },
}));
