export const triggerAI = (action: string) => {
  window.dispatchEvent(new CustomEvent("ai-action", { detail: action }));
};
