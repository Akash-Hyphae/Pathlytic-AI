import express from "express";
import { saveProfile, getMyProfile } from "../controllers/profileController.js";
import { protect } from "../middleware/authmiddleware.js";

const router = express.Router();

router.post("/", protect, saveProfile);
router.get("/me", protect, getMyProfile);

export default router;