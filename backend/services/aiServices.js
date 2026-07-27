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

  Instructions:
  1. Calculate a realistic week-by-week plan based on their target timeframe.
  2. Identify key skill gaps needed for their target companies.
  3. Respond strictly in valid JSON matching the exact structure below. Do not wrap in markdown or add prose outside the JSON.

  JSON Structure:
  {
    "weeks": [
      {
        "week": 1,
        "title": "Title of Week 1 Focus",
        "timeCommitment": "Total Estimated Hours",
        "aiSummary": "AI insight explaining why this week focus was chosen",
        "tasks": [
          { "id": "w1-1", "name": "Task action item", "completed": false, "time": "2 hrs" }
        ],
        "materials": [
          { "title": "Resource title", "type": "AI Interactive Doc | Video Lesson | Practice", "link": "#" }
        ]
      }
    ]
  }
  `;

  try {
    const response = await ai.models.generateContent({
  model: "gemini-3.6-flash", // Or "gemini-3.5-flash" / "gemini-1.5-flash" depending on your API key access
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