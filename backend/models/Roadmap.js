import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  id: String,
  name: String,
  completed: {
    type: Boolean,
    default: false,
  },
  time: String,
});

const materialSchema = new mongoose.Schema({
  title: String,
  type: String,
  link: String,
});

const weekSchema = new mongoose.Schema({
  week: Number,
  title: String,
  timeCommitment: String,
  aiSummary: String,
  tasks: [taskSchema],
  materials: [materialSchema],
});

const roadmapSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    weeks: [weekSchema],
  },
  { timestamps: true }
);

export default mongoose.model("Roadmap", roadmapSchema);