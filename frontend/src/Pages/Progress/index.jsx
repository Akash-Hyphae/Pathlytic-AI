import { useState, useEffect } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";
import TopNavbar from "../../components/dashboard/topNavBar";
import {
  TrendingUp,
  Target,
  Trophy,
  Loader2,
  Zap,
} from "lucide-react";
import axios from "axios";

function Progress() {
  const [analytics, setAnalytics] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProgressData();
  }, []);

  const fetchProgressData = async () => {
    try {
      // Check all possible token storage patterns
      const rawUser = localStorage.getItem("user");
      const rawUserInfo = localStorage.getItem("userInfo");
      const directToken = localStorage.getItem("token");

      let token = directToken;
      if (!token && rawUser) {
        try {
          token = JSON.parse(rawUser)?.token;
        } catch (_) {}
      }
      if (!token && rawUserInfo) {
        try {
          token = JSON.parse(rawUserInfo)?.token;
        } catch (_) {}
      }

      if (!token) {
        setLoading(false);
        return;
      }

      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      // Fetch both Analytics and Profile from MongoDB
      const [analyticsRes, profileRes] = await Promise.allSettled([
        axios.get("http://localhost:5000/api/roadmap/analytics", config),
        axios.get("http://localhost:5000/api/profile/me", config),
      ]);

      if (analyticsRes.status === "fulfilled" && analyticsRes.value.data.success) {
        setAnalytics(analyticsRes.value.data.data);
      }
      if (profileRes.status === "fulfilled" && profileRes.value.data.success) {
        setProfile(profileRes.value.data.data);
      }
    } catch (err) {
      console.error("Progress Fetch Error:", err);
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
          <span>Calculating live progress metrics...</span>
        </div>
      </DashboardLayout>
    );
  }

  // Generate dynamic skill matrix from user's selected skills and confidence ratings
  const skillConfidenceMap = profile?.skillConfidence || {};
  const selectedSkills = profile?.selectedSkills && profile.selectedSkills.length > 0
    ? profile.selectedSkills
    : [];

  const dynamicSkillMatrix = selectedSkills.map((skill) => {
    const confidenceRating = Number(skillConfidenceMap[skill]) || 3; // 1 to 5
    const levelPercent = Math.min(Math.max(confidenceRating * 20, 10), 100);

    let status = "Intermediate";
    let color = "bg-cyan-500";

    if (levelPercent >= 80) {
      status = "Strong";
      color = "bg-emerald-500";
    } else if (levelPercent >= 60) {
      status = "Proficient";
      color = "bg-cyan-400";
    } else if (levelPercent <= 40) {
      status = "Needs Practice";
      color = "bg-amber-400";
    }

    return {
      skill,
      level: levelPercent,
      status,
      color,
    };
  });

  return (
    <DashboardLayout>
      <TopNavbar />

      <div className="mt-8 space-y-8">
        {/* Banner */}
        <div className="flex flex-col gap-6 rounded-3xl border border-zinc-800 bg-[#11111A] p-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-300">
              <TrendingUp size={14} /> Analytics Engine Active
            </div>
            <h1 className="mt-3 text-3xl font-extrabold text-white">
              Skill & Job Readiness Progress
            </h1>
            <p className="mt-1 text-sm text-zinc-400">
              Target Role: <strong className="text-cyan-400">{profile?.targetRole || analytics?.targetRole || "Tech Developer"}</strong> • Live tracking across your roadmap.
            </p>
          </div>

          <div className="flex items-center gap-6 rounded-2xl border border-zinc-800 bg-[#09090F] p-5">
            <div className="text-center">
              <p className="text-xs text-zinc-400">Roadmap Progress</p>
              <p className="text-3xl font-extrabold text-cyan-400">
                {analytics?.overallProgress || 0}%
              </p>
            </div>
            <div className="h-10 w-[1px] bg-zinc-800" />
            <div className="text-center">
              <p className="text-xs text-zinc-400">Completed Tasks</p>
              <p className="text-3xl font-extrabold text-violet-400">
                {analytics?.completedTasks || 0} / {analytics?.totalTasks || 0}
              </p>
            </div>
          </div>
        </div>

        {/* Dynamic Skill Matrix */}
        <div className="rounded-3xl border border-zinc-800 bg-[#11111A] p-8">
          <h2 className="text-xl font-bold text-white">Your Skill Confidence Matrix</h2>
          <p className="mt-1 text-xs text-zinc-400">
            Real-time evaluation based on your onboarding ratings and technology stack
          </p>

          {dynamicSkillMatrix.length === 0 ? (
            <p className="mt-6 text-sm text-zinc-500">
              No skills selected yet. Complete your onboarding profile to view your skill matrix.
            </p>
          ) : (
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {dynamicSkillMatrix.map((item) => (
                <div
                  key={item.skill}
                  className="rounded-2xl border border-zinc-800/80 bg-[#09090F] p-5"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-white">{item.skill}</h3>
                    <span className="text-xs font-semibold text-zinc-400">
                      {item.level}%
                    </span>
                  </div>

                  <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-zinc-800">
                    <div
                      className={`h-full rounded-full ${item.color} transition-all duration-500`}
                      style={{ width: `${item.level}%` }}
                    />
                  </div>

                  <div className="mt-3 flex items-center justify-between text-xs">
                    <span className="text-zinc-500">Status</span>
                    <span className="font-medium text-zinc-300">{item.status}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Overall Engagement Summary */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-zinc-800 bg-[#11111A] p-5 flex items-center gap-4">
            <div className="p-3 rounded-xl bg-orange-500/10 text-orange-400">
              <Zap size={24} />
            </div>
            <div>
              <p className="text-xs text-zinc-400">Total XP Earned</p>
              <p className="text-2xl font-bold text-white">+{analytics?.totalXP || 0} XP</p>
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-[#11111A] p-5 flex items-center gap-4">
            <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400">
              <Target size={24} />
            </div>
            <div>
              <p className="text-xs text-zinc-400">Current Week</p>
              <p className="text-2xl font-bold text-white">
                Week {analytics?.currentWeek || 1} of {analytics?.totalWeeks || 1}
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-[#11111A] p-5 flex items-center gap-4">
            <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400">
              <Trophy size={24} />
            </div>
            <div>
              <p className="text-xs text-zinc-400">Active Streak</p>
              <p className="text-2xl font-bold text-white">{analytics?.streak || 1} Days</p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Progress;