import DashboardLayout from "../../components/layout/DashboardLayout";
import TopNavbar from "../../components/dashboard/topNavBar";
import WelcomeCard from "../../components/dashboard/welcomeCard";
import StateCard from "../../components/dashboard/stateCard";
import { ArrowRight, Brain, Sparkles, Target } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <DashboardLayout>
      <TopNavbar />

      <div className="mt-8 space-y-8">
        {/* Welcome Banner */}
        <WelcomeCard />

        {/* Stats Grid */}
        <StateCard />

        {/* Current Pathway Summary (Replaces Daily Tasks) */}
        <div className="rounded-3xl border border-zinc-800 bg-[#11111A] p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-violet-500/10 p-3 text-violet-400">
                <Brain size={24} />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase text-violet-400 tracking-wider">
                  Current Active Week
                </span>
                <h3 className="text-xl font-bold text-white">
                  Week 1: Core JavaScript Engine & Async Mastery
                </h3>
              </div>
            </div>

            <button
              onClick={() => navigate("/roadmap")}
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90 self-start sm:self-auto"
            >
              View Roadmap <ArrowRight size={16} />
            </button>
          </div>

          <div className="mt-6 border-t border-zinc-800/80 pt-6">
            <div className="flex items-center justify-between text-sm">
              <span className="text-zinc-400">Week 1 Pathway Progress</span>
              <span className="font-semibold text-cyan-400">40% Completed</span>
            </div>
            <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-zinc-800">
              <div
                className="h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-400"
                style={{ width: "40%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;