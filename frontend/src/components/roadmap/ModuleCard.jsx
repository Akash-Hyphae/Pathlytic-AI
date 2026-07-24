import {
  CheckCircle2,
  Lock,
  PlayCircle,
} from "lucide-react";

function ModuleCard({ module, index }) {

  const completed = module.progress === 100;

  const current =
    module.progress > 0 && module.progress < 100;

  const locked = module.progress === 0;

  return (
    <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6">

      <div className="flex items-center justify-between">

        <div>

          <div className="flex items-center gap-3">

            {completed && (
              <CheckCircle2 className="text-green-500" />
            )}

            {current && (
              <PlayCircle className="text-violet-500" />
            )}

            {locked && (
              <Lock className="text-gray-500" />
            )}

            <h3 className="text-2xl font-semibold text-white">

              Module {index + 1}

            </h3>

          </div>

          <p className="mt-2 text-lg text-gray-300">

            {module.title}

          </p>

        </div>

        <span
          className={`rounded-full px-3 py-1 text-sm font-medium
          ${
            completed
              ? "bg-green-500/20 text-green-400"
              : current
              ? "bg-violet-500/20 text-violet-400"
              : "bg-gray-700 text-gray-300"
          }`}
        >
          {completed
            ? "Completed"
            : current
            ? "In Progress"
            : "Locked"}
        </span>

      </div>

      <div className="mt-6 h-3 overflow-hidden rounded-full bg-slate-800">

        <div
          className="h-full rounded-full bg-violet-500 transition-all duration-500"
          style={{
            width: `${module.progress}%`,
          }}
        />

      </div>

      <p className="mt-2 text-sm text-gray-400">

        {module.progress}% Completed

      </p>

      <div className="mt-6 flex flex-wrap gap-3">

        {module.topics.map((topic) => (

          <span
            key={topic.name}
            className={`rounded-full px-3 py-2 text-sm
            ${
              topic.completed
                ? "bg-green-500/20 text-green-400"
                : "bg-slate-800 text-gray-300"
            }`}
          >
            {topic.completed ? "✔ " : ""}
            {topic.name}
          </span>

        ))}

      </div>

      {current && (
        <button
          className="mt-6 rounded-xl bg-violet-600 px-6 py-3 font-medium text-white transition hover:bg-violet-500"
        >
          Continue Learning
        </button>
      )}

    </div>
  );
}

export default ModuleCard;