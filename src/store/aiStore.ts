import { create } from "zustand";

type Message = { role: "user" | "ai"; text: string };

type AIState = {
  messages: Message[];
  loading: boolean;
  ask: (input: string) => Promise<void>;
};

export const useAIStore = create<AIState>((set, get) => ({
  messages: [
    {
      role: "ai",
      text: "Hey 👋 I'm your Election Guide.\n\nI'll help you understand how elections work in India step by step.\n\nWhat do you want to do first?\n• Learn Elections\n• Try Simulation\n• Take Quiz",
    },
  ],
  loading: false,

  ask: async (input: string) => {
    const state = get();
    if (state.loading) return;
    
    // Don't repeat the exact same request immediately
    const lastMsg = state.messages[state.messages.length - 1];
    if (lastMsg?.role === "user" && lastMsg.text === input) return;

    set({ loading: true });

    try {
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: input }),
      });

      const data = await res.json();

      if (!res.ok || data.error) {
        throw new Error(data.error || "AI request failed");
      }

      set({
        messages: [
          ...get().messages,
          { role: "user", text: input },
          { role: "ai", text: data.text },
        ],
        loading: false,
      });

    } catch (err: any) {
      console.error("[AI ERROR]:", err.message);
      set({
        messages: [
          ...get().messages,
          { role: "ai", text: "⚠️ AI not responding. Check API key and restart server." },
        ],
        loading: false,
      });
    }
  },
}));
