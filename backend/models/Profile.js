import mongoose from "mongoose";

const profileSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    college: {
      type: String,
      required: true,
    },
    degree: {
      type: String,
      required: true,
    },
    currentYear: {
      type: String,
      required: true,
    },
    targetRole: {
      type: String,
      required: true,
    },
    targetCompanies: {
      type: [String],
      default: [],
    },
    timeline: {
      type: String,
      required: true,
    },
    dailyHours: {
      type: String,
      required: true,
    },
    selectedSkills: {
      type: [String],
      default: [],
    },
    skillConfidence: {
      type: mongoose.Schema.Types.Mixed, // Accepts { JavaScript: 4, React: 3 } directly
      default: {},
    },
  },
  { timestamps: true }
);

export default mongoose.model("Profile", profileSchema);