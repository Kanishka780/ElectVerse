export const getSuggestions = (section: string) => {
  if (section.includes("Vote")) {
    return [
      "How does voting work?",
      "What is EVM?",
      "What happens at polling booth?",
    ];
  }

  if (section.includes("Registration")) {
    return [
      "How to apply for voter ID?",
      "What documents are needed?",
      "Where can I register?",
    ];
  }

  if (section.includes("Results")) {
    return [
      "How are votes counted?",
      "What is majority?",
      "How is winner decided?",
    ];
  }

  return [
    "What are elections?",
    "Why are elections important?",
    "Who conducts elections?",
  ];
};
