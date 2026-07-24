import {
  Brain,
  Route,
  ChartColumnIncreasing,
} from "lucide-react";

const features = [
  {
    title: "Adaptive Skill Assessment",
    description:
      "Take AI-powered assessments that automatically evaluate your strengths and weaknesses instead of relying on self-rating.",
    icon: Brain,
    reverse: false,
  },
  {
    title: "Personalized Learning Roadmap",
    description:
      "Pathlytic generates a structured roadmap based on your career goal, available study time and assessment results.",
    icon: Route,
    reverse: true,
  },
  {
    title: "Progress Analytics",
    description:
      "Track your learning streak, completed topics, weak skills and overall roadmap completion with beautiful analytics.",
    icon: ChartColumnIncreasing,
    reverse: false,
  },
];

function Features() {
  return (
    <section className="bg-[#09090F] py-28">
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-center text-5xl font-bold text-white">
          Why Choose Pathlytic?
        </h2>

        <p className="text-center text-gray-400 mt-5 max-w-2xl mx-auto">
          Everything you need to prepare smarter, stay consistent and
          achieve your learning goals.
        </p>

        <div className="mt-24 space-y-28">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-16 items-center ${
                  feature.reverse ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Text */}
                <div>

                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 flex items-center justify-center">

                    <Icon className="text-white" size={30} />

                  </div>

                  <h3 className="text-4xl font-bold text-white mt-8">
                    {feature.title}
                  </h3>

                  <p className="text-gray-400 text-lg leading-9 mt-6">
                    {feature.description}
                  </p>

                </div>

                {/* Illustration */}
                <div className="rounded-3xl border border-zinc-800 bg-[#11111A] p-8 h-80 flex items-center justify-center">

                  <div className="w-40 h-40 rounded-full bg-gradient-to-r from-violet-600/30 to-cyan-500/30 blur-xl absolute" />

                  <Icon
                    size={120}
                    className="text-cyan-400 z-10"
                  />

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default Features;