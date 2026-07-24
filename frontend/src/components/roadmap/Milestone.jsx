import { Flag, CalendarDays, TrendingUp, ArrowRight } from "lucide-react";

function MilestoneCard() {
  return (
    <section className="rounded-3xl border border-slate-800 bg-[#111827] p-8">

      <div className="flex items-center justify-between flex-wrap gap-8">

        {/* Left */}

        <div className="flex items-start gap-5">

          <div className="rounded-2xl bg-violet-500/20 p-4">
            <Flag className="text-violet-400" size={28} />
          </div>

          <div>

            <p className="text-violet-400 font-medium">
              Next Milestone
            </p>

            <h2 className="mt-2 text-3xl font-bold text-white">
              Complete React Development
            </h2>

            <p className="mt-3 max-w-2xl text-gray-400 leading-7">
              Finish the React module to unlock Backend Development
              and significantly improve your frontend interview readiness.
            </p>

          </div>

        </div>

        {/* Right */}

        <button className="flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-3 font-medium text-white transition hover:bg-violet-500">

          Continue

          <ArrowRight size={18} />

        </button>

      </div>

      {/* Stats */}

      <div className="mt-8 grid gap-5 md:grid-cols-3">

        <div className="rounded-2xl border border-slate-700 bg-slate-900 p-5">

          <div className="flex items-center gap-2 text-cyan-400">

            <CalendarDays size={18} />

            Estimated Time

          </div>

          <h3 className="mt-3 text-2xl font-bold text-white">

            7 Days

          </h3>

        </div>

        <div className="rounded-2xl border border-slate-700 bg-slate-900 p-5">

          <div className="flex items-center gap-2 text-green-400">

            <TrendingUp size={18} />

            Readiness Boost

          </div>

          <h3 className="mt-3 text-2xl font-bold text-white">

            +8%

          </h3>

        </div>

        <div className="rounded-2xl border border-slate-700 bg-slate-900 p-5">

          <div className="flex items-center gap-2 text-orange-400">

            <Flag size={18} />

            Unlocks

          </div>

          <h3 className="mt-3 text-xl font-bold text-white">

            Backend Development

          </h3>

        </div>

      </div>

    </section>
  );
}

export default MilestoneCard;