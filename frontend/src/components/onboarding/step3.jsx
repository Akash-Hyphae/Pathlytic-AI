import { Code2, Check, Sparkles } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    skills: ["JavaScript", "Java", "Python", "C++", "SQL"],
  },
  {
    title: "Frontend & Backend",
    skills: ["HTML/CSS", "React", "Node.js", "Express.js", "MongoDB"],
  },
  {
    title: "Core Computer Science",
    skills: ["DSA", "OOP Concepts", "DBMS", "Operating Systems"],
  },
];

function Step3({ data, updateProfile }) {
  const toggleSkill = (skill) => {
    if (data.selectedSkills.includes(skill)) {
      updateProfile({
        selectedSkills: data.selectedSkills.filter((s) => s !== skill),
      });
    } else {
      updateProfile({
        selectedSkills: [...data.selectedSkills, skill],
      });
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-xs font-semibold text-violet-400">
          <Code2 size={14} /> Step 3 of 4
        </div>
        <h2 className="mt-2 text-2xl font-extrabold text-white">
          Current Technology Stack
        </h2>
        <p className="text-xs text-zinc-400">
          Select technologies you are familiar with. The AI quiz will test your proficiency in these.
        </p>
      </div>

      <div className="space-y-4">
        {skillCategories.map((cat) => (
          <div
            key={cat.title}
            className="rounded-2xl border border-zinc-800/80 bg-[#09090F] p-4"
          >
            <p className="mb-2.5 text-xs font-semibold uppercase tracking-wider text-zinc-400">
              {cat.title}
            </p>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => {
                const selected = data.selectedSkills.includes(skill);
                return (
                  <button
                    key={skill}
                    type="button"
                    onClick={() => toggleSkill(skill)}
                    className={`flex items-center gap-1.5 rounded-xl border px-3.5 py-2 text-xs font-semibold transition ${
                      selected
                        ? "border-cyan-400 bg-cyan-400/10 text-cyan-400 shadow-sm"
                        : "border-zinc-800 bg-[#11111A] text-zinc-400 hover:border-zinc-700 hover:text-white"
                    }`}
                  >
                    {selected && <Check size={14} />} {skill}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Counter summary */}
      <div className="flex items-center justify-between rounded-xl bg-violet-500/10 px-4 py-2.5 border border-violet-500/20">
        <span className="text-xs font-semibold text-violet-300">
          Selected Technologies
        </span>
        <span className="rounded-full bg-violet-500/20 px-2.5 py-0.5 text-xs font-bold text-violet-400">
          {data.selectedSkills.length} Selected
        </span>
      </div>
    </div>
  );
}

export default Step3;