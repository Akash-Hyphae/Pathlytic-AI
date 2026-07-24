const tasks = [
  "Complete Java OOP",
  "Solve 3 Array Problems",
  "Watch React Hooks",
  "Revise DBMS Notes",
];

function DailyTasks() {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-[#11111A] p-6">
      <h2 className="mb-6 text-2xl font-bold">
        Today's Tasks
      </h2>

      <div className="space-y-4">
        {tasks.map((task) => (
          <label
            key={task}
            className="flex items-center gap-3 rounded-xl bg-[#18181F] p-4"
          >
            <input
              type="checkbox"
              className="h-5 w-5"
            />

            <span>{task}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

export default DailyTasks;