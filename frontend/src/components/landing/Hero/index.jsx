import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Sparkles, CheckCircle2, Circle, Clock, Flame, ArrowRight, Zap } from "lucide-react";
import axios from "axios";

function Hero() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [tasks, setTasks] = useState([
    { id: "demo-1", name: "Master Execution Context & Call Stack", time: "2 hrs", completed: true },
    { id: "demo-2", name: "Promises, Async/Await & Event Loop", time: "4 hrs", completed: false },
    { id: "demo-3", name: "Build a Mini Async Dashboard", time: "3 hrs", completed: false },
  ]);
  const [currentWeekNum, setCurrentWeekNum] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchLiveTasks();
  }, []);

  const fetchLiveTasks = async () => {
    try {
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));
      if (!userInfo || !userInfo.token) return;

      setIsLoggedIn(true);
      setLoading(true);

      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.get("http://localhost:5000/api/roadmap/me", config);

      if (data.success && data.data?.weeks?.length) {
        const activeWeek = data.data.weeks[0];
        setCurrentWeekNum(activeWeek.week);
        if (activeWeek.tasks?.length) {
          setTasks(activeWeek.tasks);
        }
      }
    } catch (err) {
      console.log("Using default hero daily tasks preview:", err);
    } finally {
      setLoading(false);
    }
  };

  const toggleTask = async (taskId) => {
    // If not logged in, just toggle demo state in UI
    if (!isLoggedIn) {
      setTasks((prev) =>
        prev.map((t) => (t.id === taskId ? { ...t, completed: !t.completed } : t))
      );
      return;
    }

    try {
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      // Optimistic UI update
      setTasks((prev) =>
        prev.map((t) => (t.id === taskId ? { ...t, completed: !t.completed } : t))
      );

      // Save live check to MongoDB
      await axios.patch(
        "http://localhost:5000/api/roadmap/task/toggle",
        { weekNumber: currentWeekNum, taskId },
        config
      );
    } catch (err) {
      console.error("Task toggle failed:", err);
      fetchLiveTasks();
    }
  };

  const completedCount = tasks.filter((t) => t.completed).length;

  return (
    <section className="relative overflow-hidden bg-[#09090F] min-h-[90vh] flex items-center py-20">
      {/* Glow Effects */}
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-violet-700/20 blur-[140px]" />
      <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-cyan-500/15 blur-[160px]" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center px-8 relative z-10">
        {/* Left Column: Hero Text */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-500/40 bg-violet-500/10 px-4 py-2 text-xs font-semibold text-violet-300">
            <Sparkles size={14} className="text-violet-400" />
            AI-Powered Personalized Learning Path
          </span>

          <h1 className="mt-8 text-5xl sm:text-6xl font-extrabold leading-tight text-white">
            Learn{" "}
            <span className="bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">
              Smarter
            </span>
            <br />
            Build Faster
          </h1>

          <p className="mt-6 text-lg leading-8 text-zinc-400 max-w-xl">
            Custom deadline roadmaps, skill confidence evaluations, and weekly pathways generated dynamically using AI to land your target tech role.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            {isLoggedIn ? (
              <Link
                to="/dashboard"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 px-8 py-4 font-bold text-white transition-all duration-200 hover:opacity-95 hover:shadow-lg hover:shadow-violet-500/25 active:scale-95"
              >
                Go to Dashboard <ArrowRight size={18} />
              </Link>
            ) : (
              <>
                <Link
                  to="/register"
                  className="rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 px-8 py-4 font-bold text-white transition-all duration-200 hover:opacity-95 hover:shadow-lg hover:shadow-violet-500/25 active:scale-95"
                >
                  Start Learning
                </Link>

                <Link
                  to="/login"
                  className="rounded-xl border border-zinc-800 bg-[#11111A] px-8 py-4 font-semibold text-zinc-300 transition hover:border-cyan-400 hover:text-white"
                >
                  Login
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Right Column: Live Daily Tasks Widget */}
        <div className="relative">
          <div className="rounded-3xl border border-zinc-800/90 bg-[#11111A]/90 p-7 shadow-2xl backdrop-blur-xl">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-zinc-800/80 pb-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                  <Zap size={22} />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Today's Focus Tasks</h4>
                  <p className="text-xs text-zinc-400">
                    Week {currentWeekNum} Active Schedule • {completedCount} of {tasks.length} Completed
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-1 text-xs font-semibold text-orange-400">
                <Flame size={14} /> 12-Day Streak
              </div>
            </div>

            {/* Daily Tasks List */}
            <div className="mt-6 space-y-3">
              {loading ? (
                <div className="p-6 text-center text-xs text-zinc-500">
                  Loading active tasks...
                </div>
              ) : tasks.length === 0 ? (
                <div className="p-6 text-center text-xs text-zinc-500">
                  No tasks available. Complete onboarding to generate tasks!
                </div>
              ) : (
                tasks.map((task) => (
                  <div
                    key={task.id}
                    onClick={() => toggleTask(task.id)}
                    className={`flex cursor-pointer items-center justify-between rounded-xl border p-3.5 transition duration-200 ${
                      task.completed
                        ? "border-emerald-500/20 bg-emerald-500/5 text-zinc-500"
                        : "border-zinc-800 bg-[#09090F] text-zinc-200 hover:border-zinc-700"
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      {task.completed ? (
                        <CheckCircle2 size={18} className="text-emerald-400 shrink-0" />
                      ) : (
                        <Circle size={18} className="text-zinc-600 shrink-0" />
                      )}
                      <span className={`text-sm font-medium ${task.completed ? "line-through text-zinc-500" : "text-zinc-200"}`}>
                        {task.name}
                      </span>
                    </div>

                    <div className="flex items-center space-x-1 text-xs text-zinc-500 shrink-0 ml-2">
                      <Clock size={12} />
                      <span>{task.time || "30 mins"}</span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;