import { useState, useEffect } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";
import TopNavbar from "../../components/dashboard/topNavBar";
import {
  Brain,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Clock,
  BookOpen,
  Code2,
  Video,
  ExternalLink,
  Target,
  Flame,
  Loader2,
} from "lucide-react";
import axios from "axios";

function AIRoadmap() {
  const [currentWeekIndex, setCurrentWeekIndex] = useState(0);
  const [weeksData, setWeeksData] = useState([]);
  const [targetRole, setTargetRole] = useState("Full Stack Developer");
  const [loading, setLoading] = useState(true);

  // Fetch Live Roadmap from Backend
  useEffect(() => {
    fetchRoadmap();
  }, []);

  const fetchRoadmap = async () => {
    try {
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));
      if (!userInfo || !userInfo.token) {
        setLoading(false);
        return;
      }

      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.get("http://localhost:5000/api/roadmap/me", config);

      if (data.success && data.data?.weeks?.length) {
        setWeeksData(data.data.weeks);
      }

      // Fetch user profile for hero title
      const profileRes = await axios.get("http://localhost:5000/api/profile/me", config);
      if (profileRes.data?.data?.targetRole) {
        setTargetRole(profileRes.data.data.targetRole);
      }
    } catch (err) {
      console.error("Fetch Roadmap Error:", err);
    } finally {
      setLoading(false);
    }
  };

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

  const toggleTask = async (taskId) => {
    const activeWeek = weeksData[currentWeekIndex];

    try {
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      // Optimistic UI state update
      setWeeksData((prevData) =>
        prevData.map((week, idx) => {
          if (idx !== currentWeekIndex) return week;
          const updatedTasks = week.tasks.map((t) =>
            t.id === taskId ? { ...t, completed: !t.completed } : t
          );
          return { ...week, tasks: updatedTasks };
        })
      );

      // Save to Mongo DB
      await axios.patch(
        "http://localhost:5000/api/roadmap/task/toggle",
        { weekNumber: activeWeek.week, taskId },
        config
      );
    } catch (err) {
      console.error("Toggle Task Error:", err);
      fetchRoadmap(); // Revert on failure
    }
  };

  if (loading) {
    return (
      <DashboardLayout>
        <TopNavbar />
        <div className="flex h-96 w-full items-center justify-center space-x-3 text-zinc-400">
          <Loader2 className="animate-spin text-cyan-400" size={28} />
          <span className="text-sm font-medium">Loading AI Roadmap from database...</span>
        </div>
      </DashboardLayout>
    );
  }

  if (!weeksData.length) {
    return (
      <DashboardLayout>
        <TopNavbar />
        <div className="mt-8 rounded-3xl border border-zinc-800 bg-[#11111A] p-8 text-center text-zinc-400">
          <h2 className="text-xl font-bold text-white">No active roadmap found</h2>
          <p className="mt-2 text-sm text-zinc-500">
            Please complete the profile onboarding wizard to generate your personalized AI learning path.
          </p>
        </div>
      </DashboardLayout>
    );
  }

  const activeWeek = weeksData[currentWeekIndex];
  const completedCount = activeWeek.tasks.filter((t) => t.completed).length;
  const progressPercent = Math.round(
    (completedCount / activeWeek.tasks.length) * 100
  ) || 0;

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
                {targetRole} Roadmap
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

          {activeWeek.aiSummary && (
            <div className="mb-8 rounded-2xl border border-violet-500/20 bg-violet-500/5 p-5">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase text-violet-400">
                <Sparkles size={16} /> AI Focus Note
              </div>
              <p className="mt-1 text-sm text-zinc-300">{activeWeek.aiSummary}</p>
            </div>
          )}

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
                      <Clock size={13} /> {task.time || "2 hrs"}
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
                {activeWeek.materials?.map((mat, i) => (
                  <a
                    key={i}
                    href={mat.link || "#"}
                    target="_blank"
                    rel="noreferrer"
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
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default AIRoadmap;