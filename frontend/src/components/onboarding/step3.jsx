import {
  Code2,
  Database,
  Server,
  BookOpen,
  Brain,
} from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: ["Java", "Python", "C++", "JavaScript"],
  },
  {
    title: "Frontend",
    icon: Code2,
    skills: [
      "HTML",
      "CSS",
      "Tailwind CSS",
      "React",
      "Next.js",
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      "Node.js",
      "Express.js",
      "Spring Boot",
      "Django",
    ],
  },
  {
    title: "Database",
    icon: Database,
    skills: [
      "SQL",
      "MongoDB",
      "PostgreSQL",
      "MySQL",
    ],
  },
  {
    title: "Core CS",
    icon: BookOpen,
    skills: [
      "OOP",
      "DBMS",
      "Operating System",
      "Computer Networks",
    ],
  },
  {
    title: "DSA",
    icon: Brain,
    skills: [
      "Arrays",
      "Strings",
      "Linked List",
      "Stack",
      "Queue",
      "Trees",
      "Graphs",
      "Dynamic Programming",
    ],
  },
];

function Step3({ data, updateProfile }) {
  const toggleSkill = (skill) => {
    if (data.selectedSkills.includes(skill)) {
      updateProfile({
        selectedSkills: data.selectedSkills.filter(
          (item) => item !== skill
        ),
      });
    } else {
      updateProfile({
        selectedSkills: [...data.selectedSkills, skill],
      });
    }
  };

  return (
    <div>
      {/* Header */}

      <div className="flex items-center gap-4">
        <div className="rounded-2xl bg-violet-500/15 p-4">
          <Code2 size={30} className="text-violet-400" />
        </div>

        <div>
          <h2 className="text-3xl font-bold text-white">
            Current Skills
          </h2>

          <p className="mt-1 text-zinc-400">
            Select all the technologies and concepts you already know.
          </p>
        </div>
      </div>

      {/* Categories */}

      <div className="mt-10 space-y-8">
        {skillCategories.map((category) => {
          const Icon = category.icon;

          return (
            <div
              key={category.title}
              className="rounded-2xl border border-zinc-800 bg-[#09090F] p-6"
            >
              <div className="mb-5 flex items-center gap-3">
                <Icon
                  size={20}
                  className="text-cyan-400"
                />

                <h3 className="text-lg font-semibold text-white">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <button
                    key={skill}
                    type="button"
                    onClick={() => toggleSkill(skill)}
                    className={`rounded-full border px-4 py-2 text-sm font-medium transition-all

                    ${
                      data.selectedSkills.includes(skill)
                        ? "border-cyan-400 bg-cyan-400/10 text-cyan-400"
                        : "border-zinc-800 bg-[#11111A] text-zinc-300 hover:border-zinc-600"
                    }
                    `}
                  >
                    {skill}
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Summary */}

      <div className="mt-8 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-white">
              Selected Skills
            </h3>

            <p className="mt-1 text-sm text-zinc-400">
              These skills will be used to personalize your assessment.
            </p>
          </div>

          <div className="text-3xl font-bold text-cyan-400">
            {data.selectedSkills.length}
          </div>
        </div>

        {data.selectedSkills.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {data.selectedSkills.map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-cyan-500/10 px-3 py-1 text-sm text-cyan-400"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Step3;