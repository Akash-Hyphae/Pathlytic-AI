import { Star, CheckCircle2 } from "lucide-react";

function Step4({ data, updateProfile }) {
  const updateConfidence = (skill, rating) => {
    updateProfile({
      skillConfidence: {
        ...data.skillConfidence,
        [skill]: rating,
      },
    });
  };

  const ratedSkills = data.selectedSkills.filter(
    (skill) => data.skillConfidence[skill]
  ).length;

  return (
    <div>
      {/* Header */}

      <div className="flex items-center gap-4">
        <div className="rounded-2xl bg-violet-500/15 p-4">
          <CheckCircle2
            size={30}
            className="text-violet-400"
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold text-white">
            Skill Confidence
          </h2>

          <p className="mt-1 text-zinc-400">
            Rate how confident you are in every selected skill.
            This helps Pathlytic compare your confidence with your
            assessment performance.
          </p>
        </div>
      </div>

      {/* Progress */}

      <div className="mt-8 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-5">
        <div className="flex items-center justify-between">
          <span className="text-zinc-300">
            Skills Rated
          </span>

          <span className="text-xl font-bold text-cyan-400">
            {ratedSkills} / {data.selectedSkills.length}
          </span>
        </div>

        <div className="mt-4 h-2 overflow-hidden rounded-full bg-zinc-800">
          <div
            className="h-full rounded-full bg-cyan-400 transition-all"
            style={{
              width:
                data.selectedSkills.length === 0
                  ? "0%"
                  : `${(ratedSkills / data.selectedSkills.length) * 100}%`,
            }}
          />
        </div>
      </div>

      {/* Skills */}

      <div className="mt-8 space-y-5">
        {data.selectedSkills.map((skill) => (
          <div
            key={skill}
            className="rounded-2xl border border-zinc-800 bg-[#09090F] p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-white">
                  {skill}
                </h3>

                <p className="mt-1 text-sm text-zinc-500">
                  Rate your confidence from 1 to 5.
                </p>
              </div>

              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((rating) => (
                  <button
                    key={rating}
                    type="button"
                    onClick={() =>
                      updateConfidence(skill, rating)
                    }
                    className="transition hover:scale-110"
                  >
                    <Star
                      size={30}
                      fill={
                        rating <=
                        (data.skillConfidence[skill] || 0)
                          ? "#22D3EE"
                          : "transparent"
                      }
                      className={
                        rating <=
                        (data.skillConfidence[skill] || 0)
                          ? "text-cyan-400"
                          : "text-zinc-600"
                      }
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}

      {data.selectedSkills.length === 0 && (
        <div className="mt-8 rounded-2xl border border-zinc-800 bg-[#09090F] p-8 text-center text-zinc-500">
          No skills selected.
        </div>
      )}
    </div>
  );
}

export default Step4;