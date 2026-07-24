import { useState } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";
import TopNavbar from "../../components/dashboard/topNavBar";
import {
  Brain,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Clock,
  CheckCircle2,
  BookOpen,
  Code2,
  Video,
  ExternalLink,
  Target,
  Flame,
} from "lucide-react";
import roadmapData from "./roadmapData";

// AI Generated Weekly Pathways
const weeklyPathways = [
  {
    week: 1,
    title: "Core JavaScript Engine & Async Mastery",
    status: "Current Week",
    timeCommitment: "15 Hours Total",
    aiSummary:
      "Focuses on strengthening JavaScript concepts required by top companies like Google & Amazon before jumping into React.",
    tasks: [
      { id: "w1-1", name: "Master Execution Context & Call Stack", completed: true, time: "2 hrs" },
      { id: "w1-2", name: "Closures & Higher-Order Functions", completed: true, time: "3 hrs" },
      { id: "w1-3", name: "Promises, Async/Await & Event Loop", completed: false, time: "4 hrs" },
      { id: "w1-4", name: "Prototypal Inheritance & ES6 Modules", completed: false, time: "3 hrs" },
      { id: "w1-5", name: "Build a Mini Async Weather Dashboard", completed: false, time: "3 hrs" },
    ],
    materials: [
      {
        title: "Event Loop & Call Stack Animated Guide",
        type: "AI Interactive Doc",
        icon: BookOpen,
        link: "#",
      },
      {
        title: "Async/Await Interview Masterclass",
        type: "Video Lesson",
        icon: Video,
        link: "#",
      },
      {
        title: "Practice: 10 Closure & Scope Code Snippets",
        type: "AI Code Sandbox",
        icon: Code2,
        link: "#",
      },
    ],
  },
  {
    week: 2,
    title: "React Core Architecture & Hooks Internal Mechanics",
    status: "Upcoming",
    timeCommitment: "18 Hours Total",
    aiSummary:
      "Targeting your weak spots in React state management and rendering behaviors.",
    tasks: [
      { id: "w2-1", name: "Virtual DOM & Reconciliation Algorithm", completed: false, time: "3 hrs" },
      { id: "w2-2", name: "useState, useEffect & Memory Leaks", completed: false, time: "4 hrs" },
      { id: "w2-3", name: "Custom Hooks Design Pattern", completed: false, time: "4 hrs" },
      { id: "w2-4", name: "useMemo, useCallback & Performance", completed: false, time: "3 hrs" },
      { id: "w2-5", name: "Build Custom Form Hook Library", completed: false, time: "4 hrs" },
    ],
    materials: [
      {
        title: "React Virtual DOM In-Depth Breakdown",
        type: "AI Interactive Doc",
        icon: BookOpen,
        link: "#",
      },
      {
        title: "Custom Hooks Architecture Pattern",
        type: "Video Lesson",
        icon: Video,
        link: "#",
      },
    ],
  },
  {
    week: 3,
    title: "Full Stack Integration: Express APIs & MongoDB",
    status: "Upcoming",
    timeCommitment: "16 Hours Total",
    aiSummary:
      "Connecting frontend React state with RESTful microservices and backend database schemas.",
    tasks: [
      { id: "w3-1", name: "RESTful API Best Practices & Status Codes", completed: false, time: "3 hrs" },
      { id: "w3-2", name: "Express Middleware & JWT Authentication", completed: false, time: "4 hrs" },
      { id: "w3-3", name: "MongoDB Schema Design & Mongoose Models", completed: false, time: "4 hrs" },
      { id: "w3-4", name: "Connecting React Frontend to Node Backend", completed: false, time: "5 hrs" },
    ],
    materials: [
      {
        title: "JWT Authentication Flow Diagram & Implementation",
        type: "AI Interactive Doc",
        icon: BookOpen,
        link: "#",
      },
      {
        title: "Full Stack REST API Integration Demo",
        type: "Video Lesson",
        icon: Video,
        link: "#",
      },
    ],
  },
];

function AIRoadmap() {
  const [currentWeekIndex, setCurrentWeekIndex] = useState(0);
  const [weeksData, setWeeksData] = useState(weeklyPathways);

  const activeWeek = weeksData[currentWeekIndex];

  const handleNextWeek = () => {
    if (currentWeekIndex < weeksData.length - 1) {
      setCurrentWeekIndex((prev) => prev + 1);
    }
  };

  const handlePrevWeek = () => {
    if (currentWeekIndex > 0) {
      setCurrentWeekIndex((prev) => prev - 1);
    }
  };

  const toggleTask = (taskId) => {
    setWeeksData((prevData) =>
      prevData.map((week, idx) => {
        if (idx !== currentWeekIndex) return week;
        const updatedTasks = week.tasks.map((t) =>
          t.id === taskId ? { ...t, completed: !t.completed } : t
        );
        return { ...week, tasks: updatedTasks };
      })
    );
  };

  const completedCount = activeWeek.tasks.filter((t) => t.completed).length;
  const progressPercent = Math.round(
    (completedCount / activeWeek.tasks.length) * 100
  );

  return (
    <DashboardLayout>
      <TopNavbar />

      <div className="mt-8 space-y-8">
        {/* Banner Section */}
        <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-[#11111A] p-8 shadow-2xl">
          <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-violet-600/15 blur-3xl" />
          <div className="absolute -left-24 -bottom-24 h-64 w-64 rounded-full bg-cyan-500/15 blur-3xl" />

          <div className="relative z-10 flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-3.5 py-1.5 text-xs font-semibold text-violet-300">
                <Brain size={15} /> AI Custom Timeline Path
              </div>
              <h1 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
                {roadmapData.hero.targetRole} Roadmap
              </h1>
              <p className="mt-2 max-w-2xl text-sm text-zinc-400">
                Tailored path generated for your target timeframe. Complete each week step-by-step to reach job readiness.
              </p>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-zinc-800 bg-[#09090F] p-4">
              <Flame className="text-orange-400" size={28} />
              <div>
                <p className="text-xs text-zinc-400">Target Pace</p>
                <p className="text-lg font-bold text-white">2 Topics / Day</p>
              </div>
            </div>
          </div>
        </div>

        {/* Swipe Navigation Header */}
        <div className="flex flex-col gap-4 rounded-2xl border border-zinc-800 bg-[#11111A] p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-bold text-cyan-400 uppercase tracking-wider">
                Week {activeWeek.week} of {weeksData.length}
              </span>
              {currentWeekIndex === 0 && (
                <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-400">
                  Current Active Week
                </span>
              )}
            </div>
            <h2 className="mt-2 text-2xl font-bold text-white">
              {activeWeek.title}
            </h2>
          </div>

          {/* Previous / Next Swiper Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrevWeek}
              disabled={currentWeekIndex === 0}
              className="flex items-center gap-2 rounded-xl border border-zinc-700 bg-[#09090F] px-4 py-2.5 text-sm font-semibold text-zinc-200 transition hover:border-cyan-400 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronLeft size={18} /> Previous Week
            </button>

            <button
              onClick={handleNextWeek}
              disabled={currentWeekIndex === weeksData.length - 1}
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Next Week <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Active Week Details Card */}
        <div className="rounded-3xl border border-zinc-800 bg-[#11111A] p-8 shadow-xl">
          {/* Progress Overview */}
          <div className="mb-8">
            <div className="flex items-center justify-between text-sm">
              <span className="text-zinc-400">
                Week {activeWeek.week} Progress:{" "}
                <strong className="text-white">
                  {completedCount} of {activeWeek.tasks.length} Steps Completed
                </strong>
              </span>
              <span className="font-semibold text-cyan-400">
                {progressPercent}%
              </span>
            </div>
            <div className="mt-3 h-2.5 w-full overflow-hidden rounded-full bg-zinc-800">
              <div
                className="h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          <div className="mb-8 rounded-2xl border border-violet-500/20 bg-violet-500/5 p-5">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase text-violet-400">
              <Sparkles size={16} /> AI Focus Note
            </div>
            <p className="mt-1 text-sm text-zinc-300">{activeWeek.aiSummary}</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Left 2 Cols: Checklist */}
            <div className="lg:col-span-2">
              <h3 className="mb-4 text-lg font-bold text-white flex items-center gap-2">
                <Target size={18} className="text-cyan-400" /> What to Complete
                This Week
              </h3>

              <div className="space-y-3">
                {activeWeek.tasks.map((task) => (
                  <div
                    key={task.id}
                    onClick={() => toggleTask(task.id)}
                    className={`flex cursor-pointer items-center justify-between rounded-xl border p-4 transition ${
                      task.completed
                        ? "border-zinc-800/60 bg-[#09090F]/60"
                        : "border-zinc-800 bg-[#09090F] hover:border-zinc-700"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => {}}
                        className="h-5 w-5 rounded border-zinc-700 bg-zinc-900 accent-cyan-500 cursor-pointer"
                      />
                      <span
                        className={`text-sm font-medium ${
                          task.completed
                            ? "text-zinc-500 line-through"
                            : "text-zinc-200"
                        }`}
                      >
                        {task.name}
                      </span>
                    </div>

                    <span className="flex items-center gap-1 text-xs text-zinc-500">
                      <Clock size={13} /> {task.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Col: AI Learning Material */}
            <div>
              <h3 className="mb-4 text-lg font-bold text-white flex items-center gap-2">
                <BookOpen size={18} className="text-violet-400" /> AI Recommended
                Materials
              </h3>

              <div className="space-y-3">
                {activeWeek.materials.map((mat, i) => {
                  const IconComponent = mat.icon;
                  return (
                    <a
                      key={i}
                      href={mat.link}
                      className="block rounded-xl border border-zinc-800 bg-[#09090F] p-4 transition hover:border-violet-500/50"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-semibold uppercase text-violet-400">
                          {mat.type}
                        </span>
                        <ExternalLink size={14} className="text-zinc-500" />
                      </div>
                      <h4 className="mt-2 text-sm font-bold text-white">
                        {mat.title}
                      </h4>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default AIRoadmap;