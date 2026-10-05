import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  console.error("⚠️ GEMINI_API_KEY is missing from .env file!");
}

const ai = new GoogleGenAI({ apiKey });

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const generateFallbackRoadmap = (userProfile) => {
  const { targetRole = "Full Stack Developer", selectedSkills = [] } = userProfile;
  const primarySkill = selectedSkills[0] || "Core Programming";
  const secondarySkill = selectedSkills[1] || "Frameworks & Architecture";

  return {
    weeks: [
      {
        week: 1,
        title: `Foundations of ${primarySkill} & Problem Solving`,
        timeCommitment: "12 hrs",
        aiSummary: `Tailored pathway focused on solidifying ${primarySkill} fundamentals for ${targetRole}.`,
        tasks: [
          {
            id: "w1-t1",
            name: `Core ${primarySkill} Mastery`,
            completed: false,
            time: "6 hrs",
            subTasks: [
              { id: "w1-t1-d1", name: "Language syntax & runtime environment", day: 1, completed: false, time: "45 mins" },
              { id: "w1-t1-d2", name: "Data structures: Arrays, Objects, & HashMaps", day: 2, completed: false, time: "45 mins" },
              { id: "w1-t1-d3", name: "Algorithmic thinking & Two-pointer approach", day: 3, completed: false, time: "45 mins" },
              { id: "w1-t1-d4", name: "Memory management & complexity analysis", day: 4, completed: false, time: "45 mins" },
              { id: "w1-t1-d5", name: "Solving 5 core LeetCode-style problems", day: 5, completed: false, time: "60 mins" },
              { id: "w1-t1-d6", name: "Weekly code review & knowledge recap", day: 6, completed: false, time: "30 mins" }
            ]
          },
          {
            id: "w1-t2",
            name: "Modern Development Workflow",
            completed: false,
            time: "6 hrs",
            subTasks: [
              { id: "w1-t2-d1", name: "Git branch workflows & GitHub actions", day: 1, completed: false, time: "45 mins" },
              { id: "w1-t2-d2", name: "Setting up modern linting, prettier, & configs", day: 2, completed: false, time: "45 mins" },
              { id: "w1-t2-d3", name: "API testing using Postman/Thunder Client", day: 3, completed: false, time: "45 mins" },
              { id: "w1-t2-d4", name: "Writing structured unit tests", day: 4, completed: false, time: "45 mins" },
              { id: "w1-t2-d5", name: "Debugging via DevTools & Node inspector", day: 5, completed: false, time: "60 mins" },
              { id: "w1-t2-d6", name: "Weekly milestone assessment", day: 6, completed: false, time: "30 mins" }
            ]
          }
        ],
        materials: [
          { title: "Foundations & Roadmap Guide", type: "Reading", link: "#" },
          { title: "Data Structures Practice Set", type: "Exercises", link: "#" }
        ]
      },
      {
        week: 2,
        title: `Advanced ${secondarySkill} & System Design`,
        timeCommitment: "14 hrs",
        aiSummary: `Expanding into scalable architecture and practical application development for ${targetRole}.`,
        tasks: [
          {
            id: "w2-t1",
            name: `${secondarySkill} Deep Dive`,
            completed: false,
            time: "7 hrs",
            subTasks: [
              { id: "w2-t1-d1", name: "Architecture design patterns & modules", day: 1, completed: false, time: "60 mins" },
              { id: "w2-t1-d2", name: "State management & asynchronous flows", day: 2, completed: false, time: "60 mins" },
              { id: "w2-t1-d3", name: "Building reusable UI/API components", day: 3, completed: false, time: "60 mins" },
              { id: "w2-t1-d4", name: "Database schemas & indexing strategies", day: 4, completed: false, time: "60 mins" },
              { id: "w2-t1-d5", name: "Integration testing & edge cases", day: 5, completed: false, time: "60 mins" },
              { id: "w2-t1-d6", name: "Deploying prototype to staging", day: 6, completed: false, time: "45 mins" }
            ]
          }
        ],
        materials: [
          { title: "System Design Essentials", type: "Documentation", link: "#" }
        ]
      }
    ]
  };
};

export const generateAIRoadmap = async (userProfile) => {
  const {
    targetRole = "Full Stack Developer",
    timeline = "3 Months",
    dailyHours = "2 Hours",
    selectedSkills = [],
    skillConfidence = {},
    targetCompanies = [],
  } = userProfile;

  const prompt = `
  You are an elite Tech Career & AI Learning Mentor. 
  Generate a week-by-week personalized learning pathway for a student.

  Student Profile:
  - Target Role: ${targetRole}
  - Target Timeframe: ${timeline}
  - Daily Commitment: ${dailyHours}
  - Target Companies: ${targetCompanies.join(", ")}
  - Current Known Skills & Self Confidence (1-5 scale): ${JSON.stringify(skillConfidence)}

  Architecture Requirement:
  - Each week contains major Weekly Tasks (Goal 1, Goal 2, Goal 3, Goal 4).
  - Each Weekly Task MUST contain a "subTasks" array divided across Days 1 to 6 (Task 1.1 for Day 1, Task 1.2 for Day 2, etc.).

  Respond strictly in valid JSON matching the exact structure below:

  {
    "weeks": [
      {
        "week": 1,
        "title": "Title of Week 1 Focus",
        "timeCommitment": "Total Estimated Hours",
        "aiSummary": "AI insight explaining why this focus was chosen",
        "tasks": [
          {
            "id": "w1-t1",
            "name": "Weekly Task 1: Arrays & Memory Management",
            "completed": false,
            "time": "4 hrs",
            "subTasks": [
              { "id": "w1-t1-d1", "name": "Task 1.1: Two Pointers Basics", "day": 1, "completed": false, "time": "45 mins" },
              { "id": "w1-t1-d2", "name": "Task 1.2: Sliding Window Pattern", "day": 2, "completed": false, "time": "45 mins" },
              { "id": "w1-t1-d3", "name": "Task 1.3: Prefix Sum Techniques", "day": 3, "completed": false, "time": "45 mins" },
              { "id": "w1-t1-d4", "name": "Task 1.4: Fast & Slow Pointers", "day": 4, "completed": false, "time": "45 mins" },
              { "id": "w1-t1-d5", "name": "Task 1.5: Array In-place Mutations", "day": 5, "completed": false, "time": "45 mins" },
              { "id": "w1-t1-d6", "name": "Task 1.6: Array Problem Set Revision", "day": 6, "completed": false, "time": "45 mins" }
            ]
          }
        ],
        "materials": [
          { "title": "Resource title", "type": "Video Lesson", "link": "#" }
        ]
      }
    ]
  }
  `;

  const candidateModels = ["gemini-3.8-flash", "gemini-2.5-pro"];

  for (const model of candidateModels) {
    for (let attempt = 1; attempt <= 2; attempt++) {
      try {
        console.log(`[AI] Attempt ${attempt} calling ${model}...`);
        const response = await ai.models.generateContent({
          model: model,
          contents: prompt,
          config: {
            responseMimeType: "application/json",
          },
        });

        if (response && response.text) {
          console.log(`[AI] Generation succeeded with ${model}!`);
          return JSON.parse(response.text);
        }
      } catch (err) {
        console.warn(`[AI] ${model} attempt ${attempt} failed: ${err.message}`);
        if (err.message && err.message.includes("503")) {
          await sleep(2000);
        }
      }
    }
  }

  console.warn("[AI] Gemini servers are heavily overloaded. Using fallback personalized roadmap.");
  return generateFallbackRoadmap(userProfile);
};