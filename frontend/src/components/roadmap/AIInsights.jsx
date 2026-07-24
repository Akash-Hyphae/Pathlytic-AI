import { Brain, TrendingUp, AlertCircle, Sparkles } from "lucide-react";

function AIInsights({ recommendations }) {
  return (
    <section className="rounded-3xl border border-slate-800 bg-[#111827] p-8">

      {/* Header */}
      <div className="flex items-center justify-between">

        <div>

          <div className="flex items-center gap-2 text-violet-400 font-medium">

            <Brain size={18} />

            AI Mentor Insights

          </div>

          <h2 className="mt-2 text-3xl font-bold text-white">
            Smart Recommendations
          </h2>

          <p className="mt-2 text-gray-400">
            Based on your assessment, learning progress and target companies.
          </p>

        </div>

        <Sparkles className="text-violet-400" size={28} />

      </div>

      {/* Recommendation Cards */}

      <div className="mt-8 grid gap-6 lg:grid-cols-3">

        {recommendations.map((item) => (

          <div
            key={item.id}
            className="rounded-2xl border border-slate-700 bg-slate-900 p-6 transition-all duration-300 hover:border-violet-500 hover:-translate-y-1"
          >

            {/* Priority */}

            <div className="flex items-center justify-between">

              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  item.priority === "High"
                    ? "bg-red-500/20 text-red-400"
                    : item.priority === "Medium"
                    ? "bg-yellow-500/20 text-yellow-400"
                    : "bg-green-500/20 text-green-400"
                }`}
              >
                {item.priority} Priority
              </span>

              <AlertCircle className="text-violet-400" size={20} />

            </div>

            {/* Title */}

            <h3 className="mt-5 text-2xl font-bold text-white">
              {item.title}
            </h3>

            {/* Reason */}

            <p className="mt-4 text-sm leading-7 text-gray-400">
              {item.reason}
            </p>

            {/* Impact */}

            <div className="mt-6 flex items-center gap-3 rounded-xl bg-slate-800 p-4">

              <TrendingUp className="text-green-400" size={20} />

              <div>

                <p className="text-sm text-gray-400">
                  Expected Improvement
                </p>

                <p className="font-semibold text-white">
                  {item.impact}
                </p>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default AIInsights;