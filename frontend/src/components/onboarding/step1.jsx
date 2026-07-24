import { GraduationCap, Building2, BookMarked } from "lucide-react";

const degrees = ["B.Tech", "BCA", "MCA", "B.Sc", "M.Tech", "Other"];
const years = ["1st Year", "2nd Year", "3rd Year", "4th Year", "Graduate"];

function Step1({ data, updateProfile }) {
  return (
    <div className="space-y-6">
      <div>
        <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-xs font-semibold text-violet-400">
          <GraduationCap size={14} /> Step 1 of 4
        </div>
        <h2 className="mt-2 text-2xl font-extrabold text-white">
          Academic Profile
        </h2>
        <p className="text-xs text-zinc-400">
          Pathlytic needs your education timeline to set realistic daily study expectations.
        </p>
      </div>

      <div className="space-y-4">
        {/* College Name */}
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-zinc-400">
            College / University
          </label>
          <div className="relative">
            <Building2
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
            />
            <input
              type="text"
              placeholder="e.g. JECRC University"
              value={data.college}
              onChange={(e) => updateProfile({ college: e.target.value })}
              className="w-full rounded-xl border border-zinc-800 bg-[#09090F] py-3.5 pl-11 pr-4 text-sm text-white placeholder-zinc-600 outline-none transition focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
            />
          </div>
        </div>

        {/* Degree Selection */}
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-zinc-400">
            Degree Program
          </label>
          <div className="grid grid-cols-3 gap-2.5">
            {degrees.map((degree) => (
              <button
                key={degree}
                type="button"
                onClick={() => updateProfile({ degree })}
                className={`rounded-xl border py-2.5 text-xs font-semibold transition ${
                  data.degree === degree
                    ? "border-cyan-400 bg-cyan-400/10 text-cyan-400 shadow-sm"
                    : "border-zinc-800 bg-[#09090F] text-zinc-400 hover:border-zinc-700 hover:text-white"
                }`}
              >
                {degree}
              </button>
            ))}
          </div>
        </div>

        {/* Current Year Selection */}
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-zinc-400">
            Current Academic Year
          </label>
          <div className="grid grid-cols-3 gap-2.5 sm:grid-cols-5">
            {years.map((year) => (
              <button
                key={year}
                type="button"
                onClick={() => updateProfile({ currentYear: year })}
                className={`rounded-xl border py-2.5 text-xs font-semibold transition ${
                  data.currentYear === year
                    ? "border-violet-500 bg-violet-500/10 text-violet-400 shadow-sm"
                    : "border-zinc-800 bg-[#09090F] text-zinc-400 hover:border-zinc-700 hover:text-white"
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Step1;