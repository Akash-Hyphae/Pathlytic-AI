import ModuleCard from "./ModuleCard";

function RoadmapTimeline({ roadmap }) {
  return (
    <section className="rounded-3xl border border-slate-800 bg-[#111827] p-8">

      <div>

        <h2 className="text-3xl font-bold text-white">
          AI Learning Path
        </h2>

        <p className="mt-2 text-gray-400">
          Complete each module to unlock the next stage of your roadmap.
        </p>

      </div>

      <div className="mt-10 space-y-8">

        {roadmap.map((module, index) => (
          <ModuleCard
            key={module.week}
            module={module}
            index={index}
          />
        ))}

      </div>

    </section>
  );
}

export default RoadmapTimeline;