import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  console.error("⚠️ GEMINI_API_KEY is missing from .env file!");
}

const ai = new GoogleGenAI({ apiKey });

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
          },
          {
            "id": "w1-t2",
            "name": "Weekly Task 2: Core JavaScript Concepts",
            "completed": false,
            "time": "3 hrs",
            "subTasks": [
              { "id": "w1-t2-d1", "name": "Task 2.1: Closures & Scopes", "day": 1, "completed": false, "time": "30 mins" },
              { "id": "w1-t2-d2", "name": "Task 2.2: Promises & Event Loop", "day": 2, "completed": false, "time": "30 mins" },
              { "id": "w1-t2-d3", "name": "Task 2.3: Async / Await Engine", "day": 3, "completed": false, "time": "30 mins" },
              { "id": "w1-t2-d4", "name": "Task 2.4: Prototypes & OOP in JS", "day": 4, "completed": false, "time": "30 mins" },
              { "id": "w1-t2-d5", "name": "Task 2.5: ES6+ Features In-depth", "day": 5, "completed": false, "time": "30 mins" },
              { "id": "w1-t2-d6", "name": "Task 2.6: JS Execution Context Quiz", "day": 6, "completed": false, "time": "30 mins" }
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

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      },
    });

    return JSON.parse(response.text);
  } catch (error) {
    console.error("DETAILED GEMINI ERROR:", error);
    throw new Error(error.message || "Failed to generate AI Roadmap");
  }
};