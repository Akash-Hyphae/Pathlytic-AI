import { useState, useEffect } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";
import TopNavbar from "../../components/dashboard/topNavBar";
import DailyTasks from "../../Pages/DailyTasks";
import { Flame, Target, Trophy, Zap, ArrowUpRight, Loader2 } from "lucide-react";
import axios from "axios";
import { Link } from "react-router-dom";

function Dashboard() {
  const [stats, setStats] = useState(null);
  const [user, setUser] = useState(null);
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
      }
    } catch (err) {
      console.error("Dashboard Fetch Error:", err);
    } finally {
      setLoading(false);
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

  return (
    <DashboardLayout>
      <TopNavbar />

      <div className="mt-8 space-y-8">
        {/* Welcome Banner */}
        <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-[#11111A] p-8 shadow-2xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1.5 text-xs font-semibold text-cyan-300">
                <Flame size={15} className="text-orange-400" /> {stats?.streak || 1}-Day Learning Streak!
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

        {/* Daily Tasks Component */}
        <DailyTasks />
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;