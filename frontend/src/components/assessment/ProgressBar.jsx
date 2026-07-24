function ProgressBar({ current, total }) {

  const progress = (current / total) * 100;

  return (
    <div>

      <div className="mb-2 flex justify-between text-sm">

        <span className="text-zinc-400">
          Progress
        </span>

        <span className="text-cyan-400">
          {Math.round(progress)}%
        </span>

      </div>

      <div className="h-3 overflow-hidden rounded-full bg-zinc-800">

        <div
          className="h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 transition-all duration-500"
          style={{
            width: `${progress}%`,
          }}
        />

      </div>

    </div>
  );
}

export default ProgressBar;