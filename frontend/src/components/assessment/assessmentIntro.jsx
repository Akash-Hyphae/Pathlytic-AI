import { BrainCircuit, Clock3, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

function AssessmentIntro() {
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-3xl rounded-3xl border border-zinc-800 bg-[#11111A]/90 p-10 backdrop-blur-xl">

      <div className="flex justify-center">
        <div className="rounded-2xl bg-violet-500/10 p-5">
          <BrainCircuit
            size={50}
            className="text-violet-400"
          />
        </div>
      </div>

      <h1 className="mt-8 text-center text-4xl font-bold text-white">
        Skill Assessment
      </h1>

      <p className="mt-4 text-center text-zinc-400">
        We'll evaluate your current skills and generate a personalized AI
        learning roadmap based on your performance.
      </p>

      <div className="mt-10 space-y-4">

        <div className="flex items-center gap-4 rounded-2xl border border-zinc-800 bg-[#09090F] p-5">
          <Clock3 className="text-cyan-400" />
          <div>
            <h3 className="font-semibold text-white">
              Around 15 Minutes
            </h3>
            <p className="text-sm text-zinc-400">
              Take your time and answer honestly.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 rounded-2xl border border-zinc-800 bg-[#09090F] p-5">
          <BrainCircuit className="text-violet-400" />
          <div>
            <h3 className="font-semibold text-white">
              Adaptive Questions
            </h3>
            <p className="text-sm text-zinc-400">
              The difficulty adjusts based on your answers.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 rounded-2xl border border-zinc-800 bg-[#09090F] p-5">
          <Sparkles className="text-yellow-400" />
          <div>
            <h3 className="font-semibold text-white">
              Personalized Roadmap
            </h3>
            <p className="text-sm text-zinc-400">
              Your study plan will be generated automatically.
            </p>
          </div>
        </div>

      </div>

      <button
        onClick={() => navigate("/assessment/questions")}
        className="mt-10 w-full rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 py-4 font-semibold text-white transition hover:opacity-90"
      >
        Start Assessment
      </button>

    </div>
  );
}

export default AssessmentIntro;