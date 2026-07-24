import DashboardLayout from "../../components/layout/DashboardLayout";
import TopNavbar from "../../components/dashboard/topNavBar";
import {
  BarChart3,
  TrendingUp,
  Target,
  BrainCircuit,
  Award,
  CheckCircle,
} from "lucide-react";

const skillMatrix = [
  { skill: "HTML & CSS", level: 95, status: "Mastered", color: "bg-emerald-500" },
  { skill: "JavaScript", level: 85, status: "Strong", color: "bg-cyan-400" },
  { skill: "React Basics", level: 75, status: "Proficient", color: "bg-violet-500" },
  { skill: "React Hooks", level: 45, status: "Needs Practice", color: "bg-amber-400" },
  { skill: "Node.js & Express", level: 60, status: "Intermediate", color: "bg-cyan-500" },
  { skill: "System Design", level: 30, status: "Weak Point", color: "bg-red-400" },
];

function Progress() {
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
              Evaluated using your quiz scores, daily consistency, and target company requirements.
            </p>
          </div>

          <div className="flex items-center gap-6 rounded-2xl border border-zinc-800 bg-[#09090F] p-5">
            <div className="text-center">
              <p className="text-xs text-zinc-400">Target Readiness</p>
              <p className="text-3xl font-extrabold text-cyan-400">68%</p>
            </div>
            <div className="h-10 w-[1px] bg-zinc-800" />
            <div className="text-center">
              <p className="text-xs text-zinc-400">Assessment Score</p>
              <p className="text-3xl font-extrabold text-violet-400">18 / 20</p>
            </div>
          </div>
        </div>

        {/* Skill Heatmap */}
        <div className="rounded-3xl border border-zinc-800 bg-[#11111A] p-8">
          <h2 className="text-xl font-bold text-white">AI Skill Matrix</h2>
          <p className="mt-1 text-xs text-zinc-400">
            Real-time evaluation of topics required for Full Stack Roles
          </p>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {skillMatrix.map((item) => (
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
                    className={`h-full rounded-full ${item.color}`}
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
        </div>

        {/* Weekly Activity */}
        <div className="rounded-3xl border border-zinc-800 bg-[#11111A] p-8">
          <h2 className="text-xl font-bold text-white">Weekly Study Hours</h2>
          <div className="mt-8 flex items-end justify-between gap-4 h-44 px-4">
            {[
              { day: "Mon", hrs: 3.5 },
              { day: "Tue", hrs: 2.0 },
              { day: "Wed", hrs: 4.0 },
              { day: "Thu", hrs: 3.0 },
              { day: "Fri", hrs: 2.5 },
              { day: "Sat", hrs: 5.0 },
              { day: "Sun", hrs: 1.5 },
            ].map((d) => (
              <div key={d.day} className="flex flex-col items-center flex-1 h-full justify-end">
                <span className="mb-2 text-xs text-cyan-400 font-semibold">{d.hrs}h</span>
                <div
                  className="w-full rounded-t-xl bg-gradient-to-t from-violet-600 to-cyan-400 transition-all duration-500"
                  style={{ height: `${(d.hrs / 5) * 100}%` }}
                />
                <span className="mt-2 text-xs text-zinc-400">{d.day}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Progress;