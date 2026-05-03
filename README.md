# 🗳️ ElectVerse

### AI-Powered Election Learning Platform

ElectVerse is an interactive web platform designed to help students understand how elections work in India through **guided learning, simulations, quizzes, and an AI-powered mentor**.

---

## 🚀 Live Idea

> Learn elections not just by reading — but by **experiencing, practicing, and interacting with AI**.

---

## ✨ Features

### 📚 Learn Elections

* Step-by-step structured topics
* Covers fundamentals like:

  * Democracy
  * Election Process
  * Voter Eligibility
  * Political Parties
  * Electoral Roll
* Easy-to-understand explanations

---

### 🧠 AI Election Mentor

* Interactive AI assistant powered by **Google Gemini API**
* Helps users:

  * Understand concepts
  * Ask doubts in real-time
  * Get guided learning suggestions
* Context-aware responses for election topics

---

### 🎮 Simulation Mode

* Experience a **real-life election scenario**
* Make decisions as a voter
* Understand the impact of choices

---

### ❓ Quiz Yourself

* Gamified quiz system
* Instant feedback
* XP-based engagement system

---

### 🧭 Structured Timeline

* Visual representation of election process:

  * Election Announcement
  * Candidate Nomination
  * Campaigning
  * Voting Day
  * Counting & Results

---

## 🛠️ Tech Stack

### Frontend & Standards
* **Next.js (App Router)**
* **Tailwind CSS**
* **TypeScript** (Strict Typing - No `any`)
* **Accessibility**: WCAG 2.1 Compliant (ARIA roles, Screen Reader support)
* **Security**: Strict Content Security Policy (CSP), HSTS, and XSS Protection headers.
* **Testing**: Integration suite for AI routes and navigation flows.

### AI Integration
* **Google Gemini API (1.5 Flash)**
* **Google Cloud Run** (Optimized Container Deployment)
* **Google Maps API** (Polling Station Integration)

---

## 📂 Project Structure

```bash
electverse/
│── src/
│   ├── app/            # Pages & routing
│   ├── components/     # UI components (Atomic design)
│   ├── store/          # Zustand State management
│   ├── lib/            # Google Cloud Service Layer
│   ├── __tests__/      # Integration testing suite
│
│── public/             # Static assets
│── .env.local          # Environment variables
│── next.config.ts      # Security headers & CSP
│── Dockerfile          # Multi-stage production build
```

---

## ⚙️ Setup & Installation

### 1. Clone the repository

```bash
git clone https://github.com/Kanishka780/ElectVerse.git
cd ElectVerse
```

### 2. Install dependencies

```bash
npm install
```

### 3. Add environment variables

Create a `.env.local` file:

```env
GEMINI_API_KEY=your_api_key_here
```

---

### 4. Run the development server

```bash
npm run dev
```

Visit:

```
http://localhost:3000
```

---

## 🔐 Environment Variables

| Variable       | Description           |
| -------------- | --------------------- |
| GEMINI_API_KEY | Google Gemini API key |

---

## 🧪 Key Functionalities

* Real-time AI chat using Gemini API
* Dynamic topic-based learning
* Interactive UI with structured navigation
* Responsive design for accessibility

---

## 🎯 Problem Solved

Most students:

* Memorize civics
* Don’t *understand* elections

👉 ElectVerse solves this by:

* Making learning **interactive**
* Adding **AI guidance**
* Simulating **real-world scenarios**

---

## 🌟 Future Enhancements

* Personalized learning paths
* Voice-enabled AI mentor
* Regional language support
* Real election data integration
* Leaderboard & achievements

---

## 🤝 Contributing

Contributions are welcome!

```bash
fork → clone → create branch → commit → push → PR
```

---

## 📜 License

This project is open-source and available under the **MIT License**.

---

## ⭐ Support

If you like this project:

* ⭐ Star the repo
* 🍴 Fork it
* 🧠 Share feedback

---

### 🚀 “Learn. Experience. Participate.”

### — ElectVerse
