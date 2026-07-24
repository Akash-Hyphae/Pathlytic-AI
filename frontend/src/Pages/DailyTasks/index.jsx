import { useState } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";
import TopNavbar from "../../components/dashboard/topNavBar";
import {
  Flame,
  CheckCircle2,
  Clock,
  Zap,
  BookOpen,
  Code2,
  Video,
  Award,
} from "lucide-react";

const initialTasks = [
  {
    id: 1,
    title: "Watch React Custom Hooks Architecture",
    category: "Video Lesson",
    time: "30 mins",
    xp: 50,
    completed: false,
    icon: Video,
    color: "text-red-400",
  },
  {
    id: 2,
    title: "Solve 'Two Sum' & '3Sum' on LeetCode",
    category: "Coding Practice",
    time: "45 mins",
    xp: 80,
    completed: true,
    icon: Code2,
    color: "text-cyan-400",
  },
  {
    id: 3,
    title: "Implement JWT Refresh Tokens in Express",
    category: "Hands-on Project",
    time: "60 mins",
    xp: 100,
    completed: false,
    icon: Zap,
    color: "text-violet-400",
  },
  {
    id: 4,
    title: "Revise DBMS Indexing & B-Trees",
    category: "Revision Notes",
    time: "20 mins",
    xp: 40,
    completed: false,
    icon: BookOpen,
    color: "text-amber-400",
  },
];

function DailyTasks() {
  const [taskList, setTaskList] = useState(initialTasks);

  const toggleTask = (id) => {
    setTaskList((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const completedTasks = taskList.filter((t) => t.completed).length;
  const totalXP = taskList
    .filter((t) => t.completed)
    .reduce((sum, t) => sum + t.xp, 0);

  return (
    <DashboardLayout>
      <TopNavbar />

      <div className="mt-8 space-y-8">
        {/* Top Daily Banner */}
        <div className="flex flex-col gap-6 rounded-3xl border border-zinc-800 bg-[#11111A] p-8 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="flex items-center gap-2 text-orange-400 font-semibold text-sm">
              <Flame size={18} /> 12-Day Streak Active!
            </div>
            <h1 className="mt-2 text-3xl font-extrabold text-white">
              Today's Micro-Goals
            </h1>
            <p className="mt-1 text-sm text-zinc-400">
              AI calculated these 4 micro-tasks to keep you on schedule for your 90-day target.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <div className="text-center">
              <p className="text-xs text-zinc-400">Completed</p>
              <p className="text-2xl font-bold text-cyan-400">
                {completedTasks} / {taskList.length}
              </p>
            </div>
            <div className="h-10 w-[1px] bg-zinc-800" />
            <div className="text-center">
              <p className="text-xs text-zinc-400">XP Earned Today</p>
              <p className="text-2xl font-bold text-violet-400">+{totalXP} XP</p>
            </div>
          </div>
        </div>

        {/* Task List */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-white">Action Items</h2>

          {taskList.map((task) => {
            const Icon = task.icon;

            return (
              <div
                key={task.id}
                onClick={() => toggleTask(task.id)}
                className={`group flex cursor-pointer items-center justify-between rounded-2xl border p-5 transition duration-200 ${
                  task.completed
                    ? "border-zinc-800/60 bg-[#09090F]/50 opacity-70"
                    : "border-zinc-800 bg-[#11111A] hover:border-violet-500/50"
                }`}
              >
                <div className="flex items-center gap-4">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => {}}
                    className="h-5 w-5 rounded border-zinc-700 bg-zinc-900 accent-cyan-500 cursor-pointer"
                  />

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#09090F]">
                    <Icon className={task.color} size={22} />
                  </div>

                  <div>
                    <h3
                      className={`font-semibold ${
                        task.completed
                          ? "text-zinc-500 line-through"
                          : "text-white"
                      }`}
                    >
                      {task.title}
                    </h3>
                    <div className="mt-1 flex items-center gap-3 text-xs text-zinc-400">
                      <span className="rounded bg-zinc-800 px-2 py-0.5">
                        {task.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} /> {task.time}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-violet-500/10 px-3 py-1 text-xs font-semibold text-violet-400">
                    +{task.xp} XP
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tomorrow Preview */}
        <div className="rounded-2xl border border-zinc-800/80 bg-[#09090F] p-6">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-500">
            <Award size={16} className="text-cyan-400" /> Tomorrow's Focus Preview
          </div>
          <p className="mt-2 text-sm text-zinc-300">
            Tomorrow AI will focus on **React Context API State Optimization** and **Graph Breadth-First Search (BFS)**.
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default DailyTasks;