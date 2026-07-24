import {
  Brain,
  Briefcase,
  CalendarDays,
  Target,
  Sparkles,
} from "lucide-react";

function HeroSection({ hero }) {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-[#111827] p-8">

      {/* Background Glow */}
      <div className="absolute -right-32 -top-32 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />
      <div className="absolute -left-32 -bottom-32 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative">

        {/* Heading */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

          <div>

            <div className="flex items-center gap-2 text-violet-400 font-medium">

              <Brain size={18} />

              AI Learning Roadmap

            </div>

            <h1 className="mt-3 text-4xl font-bold text-white">

              {hero.targetRole}

            </h1>

            <p className="mt-3 max-w-2xl text-gray-400 leading-7">

              Your roadmap has been generated using your assessment,
              confidence level, learning goals, target companies and
              available study time.

            </p>

          </div>

          <div className="flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-5 py-2">

            <Sparkles size={16} className="text-violet-400" />

            <span className="text-violet-300 font-medium">

              AI Generated

            </span>

          </div>

        </div>

        {/* Stats */}
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">

          <div className="rounded-2xl border border-slate-700 bg-slate-900 p-5">

            <p className="text-sm text-gray-400">

              Overall Progress

            </p>

            <h2 className="mt-2 text-3xl font-bold text-white">

              {hero.progress}%

            </h2>

          </div>

          <div className="rounded-2xl border border-slate-700 bg-slate-900 p-5">

            <div className="flex items-center gap-2 text-cyan-400">

              <CalendarDays size={18} />

              Remaining

            </div>

            <h2 className="mt-2 text-3xl font-bold text-white">

              {hero.remainingDays}

            </h2>

            <p className="text-gray-400">

              Days

            </p>

          </div>

          <div className="rounded-2xl border border-slate-700 bg-slate-900 p-5">

            <div className="flex items-center gap-2 text-green-400">

              <Target size={18} />

              Current Level

            </div>

            <h2 className="mt-2 text-2xl font-bold text-white">

              {hero.currentLevel}

            </h2>

          </div>

          <div className="rounded-2xl border border-slate-700 bg-slate-900 p-5">

            <div className="flex items-center gap-2 text-orange-400">

              <Briefcase size={18} />

              Target Role

            </div>

            <h2 className="mt-2 text-2xl font-bold text-white">

              {hero.targetRole}

            </h2>

          </div>

        </div>

        {/* Companies */}

        <div className="mt-10">

          <p className="mb-4 text-sm uppercase tracking-wider text-gray-500">

            Target Companies

          </p>

          <div className="flex flex-wrap gap-3">

            {hero.targetCompanies.map((company) => (
              <span
                key={company}
                className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-300"
              >
                {company}
              </span>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default HeroSection;