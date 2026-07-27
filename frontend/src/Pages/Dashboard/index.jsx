import { useState, useEffect } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";
import TopNavbar from "../../components/dashboard/topNavBar";
import { Flame, Target, Trophy, Zap, ArrowUpRight, Loader2, CheckCircle2, Circle, Clock } from "lucide-react";
import axios from "axios";
import { Link } from "react-router-dom";

function Dashboard() {
  const [stats, setStats] = useState(null);
  const [user, setUser] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));
      if (!userInfo || !userInfo.token) return;
      setUser(userInfo);

      const config = {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      };

      const { data } = await axios.get("http://localhost:5000/api/roadmap/analytics", config);
      if (data.success) {
        setStats(data.data);
        if (data.data.weeks?.length) {
          setTasks(data.data.weeks[0].tasks || []);
        }
      }
    } catch (err) {
      console.error("Dashboard Fetch Error:", err);
    } finally {
      setLoading(false);
    }
  };

  const toggleDashboardTask = async (taskId) => {
    try {
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));
      const config = { headers: { Authorization: `Bearer ${userInfo.token}` } };

      setTasks((prev) =>
        prev.map((t) => (t.id === taskId ? { ...t, completed: !t.completed } : t))
      );

      await axios.patch(
        "http://localhost:5000/api/roadmap/task/toggle",
        { weekNumber: 1, taskId },
        config
      );
    } catch (err) {
      console.error("Toggle error:", err);
    }
  };

  if (loading) {
    return (
      <DashboardLayout>
        <TopNavbar />
        <div className="flex h-96 w-full items-center justify-center space-x-3 text-zinc-400">
          <Loader2 className="animate-spin text-cyan-400" size={28} />
          <span>Loading Dashboard Metrics...</span>
        </div>
      </DashboardLayout>
    );
  }

  const completedCount = tasks.filter((t) => t.completed).length;

  return (
    <DashboardLayout>
      <TopNavbar />

      <div className="mt-8 space-y-8">
        {/* Welcome Banner */}
        <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-[#11111A] p-8 shadow-2xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1.5 text-xs font-semibold text-cyan-300">
                <Flame size={15} className="text-orange-400" /> {stats?.streak || 12}-Day Learning Streak!
              </div>
              <h1 className="mt-3 text-3xl font-extrabold text-white">
                Welcome back, {user?.name || "Developer"} 👋
              </h1>
              <p className="mt-1 text-sm text-zinc-400">
                Target Role: <strong className="text-cyan-400">{stats?.targetRole}</strong> • Your AI roadmap is updated.
              </p>
            </div>

            <Link
              to="/roadmap"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:opacity-95"
            >
              View Full Roadmap <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-zinc-800 bg-[#11111A] p-5">
            <div className="flex items-center justify-between text-zinc-400">
              <span className="text-xs font-semibold uppercase">Overall Progress</span>
              <Target size={18} className="text-cyan-400" />
            </div>
            <p className="mt-2 text-2xl font-bold text-white">{stats?.overallProgress || 0}%</p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-[#11111A] p-5">
            <div className="flex items-center justify-between text-zinc-400">
              <span className="text-xs font-semibold uppercase">Completed Tasks</span>
              <Trophy size={18} className="text-emerald-400" />
            </div>
            <p className="mt-2 text-2xl font-bold text-white">
              {stats?.completedTasks || 0} / {stats?.totalTasks || 0}
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-[#11111A] p-5">
            <div className="flex items-center justify-between text-zinc-400">
              <span className="text-xs font-semibold uppercase">Total XP</span>
              <Zap size={18} className="text-violet-400" />
            </div>
            <p className="mt-2 text-2xl font-bold text-white">+{stats?.totalXP || 0} XP</p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-[#11111A] p-5">
            <div className="flex items-center justify-between text-zinc-400">
              <span className="text-xs font-semibold uppercase">Active Week</span>
              <Flame size={18} className="text-orange-400" />
            </div>
            <p className="mt-2 text-2xl font-bold text-white">
              Week {stats?.currentWeek || 1} of {stats?.totalWeeks || 1}
            </p>
          </div>
        </div>

        {/* Today's Focus Section */}
        <div className="rounded-3xl border border-zinc-800 bg-[#11111A] p-6 shadow-xl">
          <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
            <div>
              <h2 className="text-lg font-bold text-white">Today's Focus Tasks</h2>
              <p className="mt-0.5 text-xs text-zinc-400">
                {completedCount} of {tasks.length} completed
              </p>
            </div>
          </div>

          <div className="mt-4 space-y-3">
            {tasks.length === 0 ? (
              <p className="text-xs text-zinc-500">No active tasks found.</p>
            ) : (
              tasks.map((task) => (
                <div
                  key={task.id}
                  onClick={() => toggleDashboardTask(task.id)}
                  className={`flex cursor-pointer items-center justify-between rounded-xl border p-3.5 transition duration-200 ${
                    task.completed
                      ? "border-emerald-500/20 bg-emerald-500/5 text-zinc-500"
                      : "border-zinc-800 bg-[#09090F] text-zinc-200 hover:border-zinc-700"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    {task.completed ? (
                      <CheckCircle2 size={18} className="text-emerald-400" />
                    ) : (
                      <Circle size={18} className="text-zinc-600" />
                    )}
                    <span className={`text-sm font-medium ${task.completed ? "line-through" : ""}`}>
                      {task.name}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1 text-xs text-zinc-500">
                    <Clock size={12} />
                    <span>{task.time || "30 mins"}</span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;