import { GraduationCap } from "lucide-react";

const degrees = [
  "B.Tech",
  "BCA",
  "MCA",
  "B.Sc",
  "M.Tech",
  "Other",
];

const years = [
  "1st Year",
  "2nd Year",
  "3rd Year",
  "4th Year",
  "Graduate",
];

function Step1({ data, updateProfile }) {
  return (
    <div>
      {/* Header */}

      <div className="flex items-center gap-4">
        <div className="rounded-2xl bg-violet-500/15 p-4">
          <GraduationCap
            size={30}
            className="text-violet-400"
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold text-white">
            Academic Information
          </h2>

          <p className="mt-1 text-zinc-400">
            Tell us about your education so we can personalize your learning
            journey.
          </p>
        </div>
      </div>

      {/* Form */}

      <div className="mt-10 space-y-7">
        {/* College */}

        <div>
          <label className="mb-2 block text-sm font-medium text-zinc-300">
            College / University
          </label>

          <input
            type="text"
            placeholder="JECRC University"
            value={data.college}
            onChange={(e) =>
              updateProfile({
                college: e.target.value,
              })
            }
            className="w-full rounded-xl border border-zinc-800 bg-[#09090F] px-5 py-4 text-white outline-none transition-all focus:border-cyan-400"
          />
        </div>

        {/* Degree */}

        <div>
          <label className="mb-2 block text-sm font-medium text-zinc-300">
            Degree
          </label>

          <select
            value={data.degree}
            onChange={(e) =>
              updateProfile({
                degree: e.target.value,
              })
            }
            className="w-full rounded-xl border border-zinc-800 bg-[#09090F] px-5 py-4 text-white outline-none transition-all focus:border-cyan-400"
          >
            <option value="">Select Degree</option>

            {degrees.map((degree) => (
              <option key={degree}>{degree}</option>
            ))}
          </select>
        </div>

        {/* Current Year */}

        <div>
          <label className="mb-3 block text-sm font-medium text-zinc-300">
            Current Year
          </label>

          <div className="grid grid-cols-2 gap-4">
            {years.map((year) => (
              <button
                key={year}
                type="button"
                onClick={() =>
                  updateProfile({
                    currentYear: year,
                  })
                }
                className={`rounded-xl border p-4 text-sm font-medium transition-all

                ${
                  data.currentYear === year
                    ? "border-cyan-400 bg-cyan-400/10 text-cyan-400"
                    : "border-zinc-800 bg-[#09090F] text-zinc-300 hover:border-zinc-600"
                }
                `}
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