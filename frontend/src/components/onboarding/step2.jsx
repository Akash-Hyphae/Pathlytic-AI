import { Briefcase, Target, Clock, Calendar } from "lucide-react";

const roles = [
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "Java Developer",
  "Software Engineer",
];

const companies = ["Google", "Microsoft", "Amazon", "Adobe", "TCS", "Infosys"];
const timelines = ["1 Month", "3 Months", "6 Months", "12 Months"];
const dailyHours = ["1 Hour", "2 Hours", "3 Hours", "4+ Hours"];

function Step2({ data, updateProfile }) {
  const toggleCompany = (company) => {
    if (data.targetCompanies.includes(company)) {
      updateProfile({
        targetCompanies: data.targetCompanies.filter((item) => item !== company),
      });
    } else {
      updateProfile({
        targetCompanies: [...data.targetCompanies, company],
      });
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-400">
          <Briefcase size={14} /> Step 2 of 4
        </div>
        <h2 className="mt-2 text-2xl font-extrabold text-white">
          Career Target & Deadlines
        </h2>
        <p className="text-xs text-zinc-400">
          Set your role target and study timeframe so the AI calculates your exact weekly pace.
        </p>
      </div>

      <div className="space-y-5">
        {/* Target Role */}
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-zinc-400">
            Target Job Role
          </label>
          <div className="flex flex-wrap gap-2">
            {roles.map((role) => (
              <button
                key={role}
                type="button"
                onClick={() => updateProfile({ targetRole: role })}
                className={`rounded-xl border px-3.5 py-2 text-xs font-semibold transition ${
                  data.targetRole === role
                    ? "border-cyan-400 bg-cyan-400/10 text-cyan-400"
                    : "border-zinc-800 bg-[#09090F] text-zinc-400 hover:border-zinc-700 hover:text-white"
                }`}
              >
                {role}
              </button>
            ))}
          </div>
        </div>

        {/* Dream Companies */}
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-zinc-400">
            Target Companies (Multi-Select)
          </label>
          <div className="flex flex-wrap gap-2">
            {companies.map((company) => {
              const selected = data.targetCompanies.includes(company);
              return (
                <button
                  key={company}
                  type="button"
                  onClick={() => toggleCompany(company)}
                  className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold transition ${
                    selected
                      ? "border-violet-500 bg-violet-500/10 text-violet-300"
                      : "border-zinc-800 bg-[#09090F] text-zinc-500 hover:text-zinc-300"
                  }`}
                >
                  {selected ? "✓ " : "+ "}
                  {company}
                </button>
              );
            })}
          </div>
        </div>

        {/* Timeline & Study Commitment in 2 Columns */}
        <div className="grid gap-4 sm:grid-cols-2">
          {/* Target Timeline */}
          <div>
            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-zinc-400">
              Target Timeframe
            </label>
            <div className="grid grid-cols-2 gap-2">
              {timelines.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => updateProfile({ timeline: t })}
                  className={`rounded-xl border py-2.5 text-xs font-semibold transition ${
                    data.timeline === t
                      ? "border-cyan-400 bg-cyan-400/10 text-cyan-400"
                      : "border-zinc-800 bg-[#09090F] text-zinc-400 hover:border-zinc-700"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Daily Commitment */}
          <div>
            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-zinc-400">
              Daily Study Hours
            </label>
            <div className="grid grid-cols-2 gap-2">
              {dailyHours.map((h) => (
                <button
                  key={h}
                  type="button"
                  onClick={() => updateProfile({ dailyHours: h })}
                  className={`rounded-xl border py-2.5 text-xs font-semibold transition ${
                    data.dailyHours === h
                      ? "border-violet-500 bg-violet-500/10 text-violet-400"
                      : "border-zinc-800 bg-[#09090F] text-zinc-400 hover:border-zinc-700"
                  }`}
                >
                  {h}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Step2;