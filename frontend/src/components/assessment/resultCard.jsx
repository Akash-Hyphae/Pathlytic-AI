import { Trophy, BrainCircuit } from "lucide-react";
import { useNavigate } from "react-router-dom";

function ResultCard() {
  const navigate = useNavigate();

  // Temporary
  const score = 18;
  const total = 20;

  const percentage = Math.round((score / total) * 100);

  return (
    <div className="min-h-screen bg-[#09090F] flex items-center justify-center px-6">

      <div className="w-full max-w-2xl rounded-3xl border border-zinc-800 bg-[#11111A] p-10">

        <div className="flex justify-center">

          <div className="rounded-full bg-violet-500/10 p-6">

            <Trophy
              size={60}
              className="text-yellow-400"
            />

          </div>

        </div>

        <h1 className="mt-8 text-center text-4xl font-bold text-white">
          Assessment Completed
        </h1>

        <p className="mt-3 text-center text-zinc-400">
          Great job! Here's your performance.
        </p>

        <div className="mt-10 rounded-2xl border border-zinc-800 bg-[#09090F] p-8">

          <h2 className="text-center text-6xl font-bold text-cyan-400">
            {percentage}%
          </h2>

          <p className="mt-3 text-center text-zinc-400">
            {score} Correct out of {total}
          </p>

        </div>

        <button
          onClick={() => navigate("/roadmap")}
          className="mt-10 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 py-4 font-semibold text-white"
        >
          <BrainCircuit size={20} />
          Generate AI Roadmap
        </button>

      </div>

    </div>
  );
}

export default ResultCard;