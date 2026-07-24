import { Star, CheckCircle } from "lucide-react";

function Step4({ data, updateProfile }) {
  const updateConfidence = (skill, rating) => {
    updateProfile({
      skillConfidence: {
        ...data.skillConfidence,
        [skill]: rating,
      },
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
          <CheckCircle size={14} /> Final Step
        </div>
        <h2 className="mt-2 text-2xl font-extrabold text-white">
          Rate Skill Confidence
        </h2>
        <p className="text-xs text-zinc-400">
          Rate your current confidence in each selected skill (1 = Beginner, 5 = Master).
        </p>
      </div>

      <div className="max-h-[260px] space-y-3 overflow-y-auto pr-1">
        {data.selectedSkills.map((skill) => (
          <div
            key={skill}
            className="flex items-center justify-between rounded-xl border border-zinc-800 bg-[#09090F] p-4"
          >
            <span className="text-sm font-semibold text-white">{skill}</span>

            <div className="flex items-center gap-1.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => updateConfidence(skill, star)}
                  className="transition hover:scale-110"
                >
                  <Star
                    size={20}
                    fill={
                      star <= (data.skillConfidence[skill] || 0)
                        ? "#22D3EE"
                        : "transparent"
                    }
                    className={
                      star <= (data.skillConfidence[skill] || 0)
                        ? "text-cyan-400"
                        : "text-zinc-700"
                    }
                  />
                </button>
              ))}
            </div>
          </div>
        ))}

        {data.selectedSkills.length === 0 && (
          <div className="rounded-xl border border-dashed border-zinc-800 p-8 text-center text-xs text-zinc-500">
            No technologies selected. Please go back and select skills.
          </div>
        )}
      </div>
    </div>
  );
}

export default Step4;