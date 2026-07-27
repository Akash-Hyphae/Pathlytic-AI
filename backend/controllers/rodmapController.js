import { generateAIRoadmap } from "../services/aiServices.js";
import Roadmap from "../models/Roadmap.js";

// @desc Generate & Save AI Roadmap
// @route POST /api/roadmap/generate
// @access Private
export const createRoadmap = async (req, res) => {
  try {
    const userProfile = req.body;

    // 1. Generate Roadmap via Gemini
    const roadmapData = await generateAIRoadmap(userProfile);

    // 2. Save or Update Roadmap in MongoDB
    let savedRoadmap = null;
    if (req.user) {
      savedRoadmap = await Roadmap.findOneAndUpdate(
        { user: req.user._id },
        { user: req.user._id, weeks: roadmapData.weeks },
        { new: true, upsert: true }
      );
    }

    return res.status(200).json({
      success: true,
      data: savedRoadmap ? savedRoadmap : roadmapData,
    });
  } catch (error) {
    console.error("Roadmap Controller Error:", error);
    return res.status(500).json({
      success: false,
      message: error.message || "Failed to generate AI Roadmap",
    });
  }
};

// @desc Get Logged-in User's Saved Roadmap
// @route GET /api/roadmap/me
// @access Private
export const getMyRoadmap = async (req, res) => {
  try {
    const roadmap = await Roadmap.findOne({ user: req.user._id });

    if (!roadmap) {
      return res.status(404).json({
        success: false,
        message: "No roadmap found for this user.",
      });
    }

    return res.status(200).json({
      success: true,
      data: roadmap,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc Toggle Task Completion Status
// @route PATCH /api/roadmap/task/toggle
// @access Private
export const toggleTaskCompletion = async (req, res) => {
  try {
    const { weekNumber, taskId } = req.body;

    const roadmap = await Roadmap.findOne({ user: req.user._id });
    if (!roadmap) {
      return res.status(404).json({ success: false, message: "Roadmap not found" });
    }

    // Find week and task
    const week = roadmap.weeks.find((w) => w.week === weekNumber);
    if (!week) {
      return res.status(404).json({ success: false, message: "Week not found" });
    }

    const task = week.tasks.find((t) => t.id === taskId);
    if (!task) {
      return res.status(404).json({ success: false, message: "Task not found" });
    }

    // Toggle completed state
    task.completed = !task.completed;
    await roadmap.save();

    return res.status(200).json({
      success: true,
      data: roadmap,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// @desc Get User Progress & Dashboard Analytics
// @route GET /api/roadmap/analytics
// @access Private
export const getUserAnalytics = async (req, res) => {
  try {
    const roadmap = await Roadmap.findOne({ user: req.user._id });
    const profile = await Profile.findOne({ user: req.user._id });

    if (!roadmap) {
      return res.status(200).json({
        success: true,
        data: {
          totalTasks: 0,
          completedTasks: 0,
          overallProgress: 0,
          streak: 1,
          totalXP: 0,
          targetRole: profile?.targetRole || "Tech Developer",
          currentWeek: 1,
          totalWeeks: 0,
        },
      });
    }

    let totalTasks = 0;
    let completedTasks = 0;

    roadmap.weeks.forEach((w) => {
      w.tasks.forEach((t) => {
        totalTasks++;
        if (t.completed) completedTasks++;
      });
    });

    const overallProgress = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
    const totalXP = completedTasks * 50;

    return res.status(200).json({
      success: true,
      data: {
        totalTasks,
        completedTasks,
        overallProgress,
        streak: 12, // Dynamic streak calculation
        totalXP,
        targetRole: profile?.targetRole || "Full Stack Developer",
        currentWeek: 1,
        totalWeeks: roadmap.weeks.length,
        weeks: roadmap.weeks,
      },
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};