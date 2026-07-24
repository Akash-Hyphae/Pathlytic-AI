import { Link } from "react-router-dom";
import { Brain, Sparkles, CheckCircle2, Clock, Flame, Target } from "lucide-react";

function Hero() {
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

          <div className="mt-10 flex gap-4">
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
          </div>
        </div>

        {/* Right Column: Synced Dashboard Live Preview */}
        <div className="relative">
          <div className="rounded-3xl border border-zinc-800/90 bg-[#11111A]/90 p-7 shadow-2xl backdrop-blur-xl">

            {/* Dashboard Mini-Header */}
            <div className="flex items-center justify-between border-b border-zinc-800/80 pb-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
                  <Brain size={22} />
                </div>
                <div>
                  <p className="text-xs text-zinc-400">Target Role</p>
                  <h4 className="text-base font-bold text-white">Full Stack Developer</h4>
                </div>
              </div>

              <div className="flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-1 text-xs font-semibold text-orange-400">
                <Flame size={14} /> 12-Day Streak
              </div>
            </div>

            {/* Synced Roadmap Progress & Active Week */}
            <div className="mt-6 space-y-4">

              {/* Progress Metric */}
              <div className="rounded-2xl border border-zinc-800 bg-[#09090F] p-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-medium text-zinc-400">90-Day Roadmap Progress</span>
                  <span className="font-bold text-cyan-400">48% Completed</span>
                </div>
                <div className="mt-3 h-2.5 rounded-full bg-zinc-800 overflow-hidden">
                  <div className="h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 w-[48%]" />
                </div>
              </div>

              {/* Active Week Focus Card */}
              <div className="rounded-2xl border border-violet-500/30 bg-violet-500/5 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-violet-400">
                    Week 1 Pathway Focus
                  </span>
                  <span className="flex items-center gap-1 text-[11px] text-zinc-400">
                    <Clock size={12} /> 15 hrs left
                  </span>
                </div>
                <h5 className="mt-1.5 text-sm font-bold text-white">
                  Core JavaScript Engine & Async Mastery
                </h5>

                {/* Synced Mini Checklist */}
                <ul className="mt-3 space-y-2 text-xs">
                  <li className="flex items-center gap-2 text-zinc-400">
                    <CheckCircle2 size={14} className="text-emerald-400" />
                    <span className="line-through text-zinc-500">Execution Context & Closures</span>
                  </li>
                  <li className="flex items-center gap-2 text-zinc-200">
                    <Target size={14} className="text-cyan-400" />
                    <span>Event Loop, Promises & Async/Await</span>
                  </li>
                </ul>
              </div>

            </div>

          </div>
        </div>

      </div>

    </section>
  );
}

export default Hero;