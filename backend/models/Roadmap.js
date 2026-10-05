import mongoose from "mongoose";

// Sub-task schema (e.g. Task 1.1, Task 1.2)
const subTaskSchema = new mongoose.Schema({
  id: String,
  name: String,
  day: Number, // 1 to 6
  completed: {
    type: Boolean,
    default: false,
  },
  time: String,
});

// Weekly main task schema (e.g. Task 1, Task 2)
const taskSchema = new mongoose.Schema({
  id: String,
  name: String,
  completed: {
    type: Boolean,
    default: false,
  },
  time: String,
  subTasks: [subTaskSchema], // <--- Holds Task 1.1, Task 1.2, Task 1.3...
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