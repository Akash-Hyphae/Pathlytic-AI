import { Check } from "lucide-react";

const steps = [
  "Academic",
  "Career",
  "Skills",
  "Confidence",
];

function StepIndicator({ currentStep }) {
  return (
    <div className="mb-12">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => {
          const stepNumber = index + 1;

          const isCompleted = currentStep > stepNumber;
          const isCurrent = currentStep === stepNumber;

          return (
            <div
              key={step}
              className="flex flex-1 items-center"
            >
              {/* Step */}

              <div className="flex flex-col items-center">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full border-2 font-semibold transition-all duration-300

                  ${
                    isCompleted
                      ? "border-cyan-400 bg-cyan-400 text-black"
                      : isCurrent
                      ? "border-violet-500 bg-violet-500 text-white"
                      : "border-zinc-700 bg-[#09090F] text-zinc-500"
                  }
                  `}
                >
                  {isCompleted ? (
                    <Check size={20} />
                  ) : (
                    stepNumber
                  )}
                </div>

                <span
                  className={`mt-3 text-sm font-medium

                  ${
                    isCompleted || isCurrent
                      ? "text-white"
                      : "text-zinc-500"
                  }
                  `}
                >
                  {step}
                </span>
              </div>

              {/* Connector */}

              {index !== steps.length - 1 && (
                <div className="mx-4 h-[2px] flex-1 rounded-full bg-zinc-800">
                  <div
                    className={`h-full rounded-full transition-all duration-500

                    ${
                      currentStep > stepNumber
                        ? "w-full bg-cyan-400"
                        : "w-0 bg-cyan-400"
                    }
                    `}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default StepIndicator;