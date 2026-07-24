import { BrainCircuit } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const steps = [
  "Analyzing your assessment...",
  "Identifying strengths...",
  "Finding weak topics...",
  "Creating personalized roadmap...",
  "Preparing dashboard..."
];

function AIAnalysisCard() {
  const navigate = useNavigate();

  const [step, setStep] = useState(0);

  useEffect(() => {

    if (step === steps.length) {
      navigate("/dashboard");
      return;
    }

    const timer = setTimeout(() => {
      setStep(prev => prev + 1);
    }, 1800);

    return () => clearTimeout(timer);

  }, [step]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#09090F] px-6">

      <div className="w-full max-w-xl rounded-3xl border border-zinc-800 bg-[#11111A] p-10">

        <div className="flex justify-center">

          <div className="animate-pulse rounded-full bg-violet-500/10 p-6">

            <BrainCircuit
              size={60}
              className="text-violet-400"
            />

          </div>

        </div>

        <h1 className="mt-8 text-center text-3xl font-bold text-white">
          Pathlytic AI
        </h1>

        <p className="mt-4 text-center text-zinc-400">
          {step < steps.length ? steps[step] : "Almost Done..."}
        </p>

        <div className="mt-10 h-3 overflow-hidden rounded-full bg-zinc-800">

          <div
            className="h-full bg-gradient-to-r from-violet-500 to-cyan-400 transition-all duration-700"
            style={{
              width: `${((step + 1) / steps.length) * 100}%`,
            }}
          />

        </div>

      </div>

    </div>
  );
}

export default AIAnalysisCard;