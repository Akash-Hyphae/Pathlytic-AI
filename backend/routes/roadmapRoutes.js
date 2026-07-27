import express from "express";
import {
  createRoadmap,
  getMyRoadmap,
  toggleTaskCompletion,
  getUserAnalytics,
} from "../controllers/rodmapController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/generate", protect, createRoadmap);
router.get("/me", protect, getMyRoadmap);
router.patch("/task/toggle", protect, toggleTaskCompletion);
router.get("/analytics", protect, getUserAnalytics);

export default router;