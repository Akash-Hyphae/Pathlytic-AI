import {
  UserPlus,
  ClipboardCheck,
  Sparkles,
  Trophy,
} from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Create Your Profile",
    description:
      "Tell us your career goal, study hours, experience and target timeline.",
  },
  {
    icon: ClipboardCheck,
    title: "Take AI Assessment",
    description:
      "Answer adaptive questions that accurately evaluate your current skill level.",
  },
  {
    icon: Sparkles,
    title: "Get AI Roadmap",
    description:
      "Receive a personalized learning roadmap generated specifically for you.",
  },
  {
    icon: Trophy,
    title: "Track & Improve",
    description:
      "Complete daily tasks, monitor progress and continuously improve your skills.",
  },
];

function HowItWorks() {
  return (
    <section className="bg-[#09090F] py-28">

      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-center text-5xl font-bold text-white">
          How Pathlytic Works
        </h2>

        <p className="text-center text-gray-400 mt-5 max-w-2xl mx-auto">
          Your complete learning journey in four simple steps.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                className="relative rounded-2xl border border-zinc-800 bg-[#11111A] p-8 hover:border-violet-500 transition duration-300"
              >
                {/* Step Number */}
                <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>

                <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 flex items-center justify-center">
                  <Icon className="text-white" size={30} />
                </div>

                <h3 className="text-2xl font-semibold text-white mt-6">
                  {step.title}
                </h3>

                <p className="text-gray-400 mt-4 leading-7">
                  {step.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}

export default HowItWorks;