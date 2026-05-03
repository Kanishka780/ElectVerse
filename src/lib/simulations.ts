export const simulations: any = {
  "voting-process": [
    {
      question: "You wake up on election day. Today is your first time voting. What do you check first?",
      options: [
        { label: "Voter List online", correct: true },
        { label: "My Facebook feed", correct: false },
      ],
      correctMsg: "Correct! Always ensure your name is on the electoral roll.",
      wrongMsg: "Social media can wait. You must verify your voter registration first.",
    },
    {
      question: "You reach the polling booth. The officer asks for identification.",
      options: [
        { label: "Show Voter ID (EPIC)", correct: true },
        { label: "Show Gym Membership Card", correct: false },
      ],
      correctMsg: "Yes! Valid government ID is strictly required.",
      wrongMsg: "Invalid ID. You must provide a recognized government document like EPIC or Aadhaar.",
    },
    {
      question: "The officer verifies your ID. What happens next?",
      options: [
        { label: "Get indelible ink on finger", correct: true },
        { label: "Go directly to the machine", correct: false },
      ],
      correctMsg: "Correct. The ink mark prevents double voting.",
      wrongMsg: "Incorrect. The polling officer must mark your finger with indelible ink first.",
    },
    {
      question: "You enter the voting compartment. You see the EVM. What do you do?",
      options: [
        { label: "Press the button next to my candidate", correct: true },
        { label: "Take a selfie with the machine", correct: false },
      ],
      correctMsg: "Good choice. You press the button and hear a beep—your vote is recorded.",
      wrongMsg: "Photography is strictly prohibited inside the voting compartment! Your vote is cancelled.",
    },
    {
      question: "After pressing the button, how do you verify your vote?",
      options: [
        { label: "Look at the VVPAT slip", correct: true },
        { label: "Ask the officer if it worked", correct: false },
      ],
      correctMsg: "Exactly. The VVPAT displays a printed slip for 7 seconds to confirm your choice.",
      wrongMsg: "Voting is a secret process. You should verify it yourself using the VVPAT.",
    }
  ],
  "democracy": [
    {
      question: "You are forming a new club at school. How should the leader be chosen to make it democratic?",
      options: [
        { label: "Hold a vote where every member gets one choice", correct: true },
        { label: "The strongest person becomes the leader", correct: false },
      ],
      correctMsg: "Yes! A core principle of democracy is that leaders are elected by the people.",
      wrongMsg: "That is dictatorship, not democracy.",
    }
  ],
  "election-commission": [
    {
      question: "It is election time. A political party is distributing cash to voters. As an official, what do you do?",
      options: [
        { label: "Report it as a Model Code of Conduct violation", correct: true },
        { label: "Ignore it, it's normal", correct: false },
      ],
      correctMsg: "Correct. The ECI enforces strict rules to ensure free and fair elections.",
      wrongMsg: "Incorrect. This is bribery and a severe violation of election laws.",
    }
  ]
};
