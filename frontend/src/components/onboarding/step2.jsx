import { Briefcase } from "lucide-react";

const roles = [
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "Java Developer",
  "Python Developer",
  "Software Engineer",
  "Data Analyst",
  "DevOps Engineer",
];

const companies = [
  "Google",
  "Microsoft",
  "Amazon",
  "Adobe",
  "Oracle",
  "TCS",
  "Infosys",
  "Accenture",
  "Wipro",
  "Cognizant",
];

const timelines = [
  "1 Month",
  "3 Months",
  "6 Months",
  "12 Months",
];

const dailyHours = [
  "1 Hour",
  "2 Hours",
  "3 Hours",
  "4+ Hours",
];

function Step2({ data, updateProfile }) {
  const toggleCompany = (company) => {
    if (data.targetCompanies.includes(company)) {
      updateProfile({
        targetCompanies: data.targetCompanies.filter(
          (item) => item !== company
        ),
      });
    } else {
      updateProfile({
        targetCompanies: [...data.targetCompanies, company],
      });
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="flex items-center gap-4">
        <div className="rounded-2xl bg-violet-500/15 p-4">
          <Briefcase size={30} className="text-violet-400" />
        </div>

        <div>
          <h2 className="text-3xl font-bold text-white">
            Career Goals
          </h2>

          <p className="mt-1 text-zinc-400">
            Tell us what you're aiming for so we can create the right roadmap.
          </p>
        </div>
      </div>

      <div className="mt-10 space-y-8">
        {/* Target Role */}

        <div>
          <label className="mb-2 block text-sm font-medium text-zinc-300">
            Target Role
          </label>

          <select
            value={data.targetRole}
            onChange={(e) =>
              updateProfile({
                targetRole: e.target.value,
              })
            }
            className="w-full rounded-xl border border-zinc-800 bg-[#09090F] px-5 py-4 text-white outline-none transition focus:border-cyan-400"
          >
            <option value="">Select Target Role</option>

            {roles.map((role) => (
              <option key={role}>{role}</option>
            ))}
          </select>
        </div>

        {/* Target Companies */}

        <div>
          <label className="mb-3 block text-sm font-medium text-zinc-300">
            Dream Companies
          </label>

          <div className="flex flex-wrap gap-3">
            {companies.map((company) => (
              <button
                key={company}
                type="button"
                onClick={() => toggleCompany(company)}
                className={`rounded-full border px-4 py-2 text-sm transition

                ${
                  data.targetCompanies.includes(company)
                    ? "border-cyan-400 bg-cyan-400/10 text-cyan-400"
                    : "border-zinc-800 bg-[#09090F] text-zinc-300 hover:border-zinc-600"
                }
                `}
              >
                {company}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline */}

        <div>
          <label className="mb-3 block text-sm font-medium text-zinc-300">
            Target Timeline
          </label>

          <div className="grid grid-cols-2 gap-4">
            {timelines.map((timeline) => (
              <button
                key={timeline}
                type="button"
                onClick={() =>
                  updateProfile({
                    timeline,
                  })
                }
                className={`rounded-xl border p-4 transition

                ${
                  data.timeline === timeline
                    ? "border-cyan-400 bg-cyan-400/10 text-cyan-400"
                    : "border-zinc-800 bg-[#09090F] text-zinc-300 hover:border-zinc-600"
                }
                `}
              >
                {timeline}
              </button>
            ))}
          </div>
        </div>

        {/* Daily Study Hours */}

        <div>
          <label className="mb-3 block text-sm font-medium text-zinc-300">
            Daily Study Hours
          </label>

          <div className="grid grid-cols-2 gap-4">
            {dailyHours.map((hour) => (
              <button
                key={hour}
                type="button"
                onClick={() =>
                  updateProfile({
                    dailyHours: hour,
                  })
                }
                className={`rounded-xl border p-4 transition

                ${
                  data.dailyHours === hour
                    ? "border-cyan-400 bg-cyan-400/10 text-cyan-400"
                    : "border-zinc-800 bg-[#09090F] text-zinc-300 hover:border-zinc-600"
                }
                `}
              >
                {hour}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Step2;