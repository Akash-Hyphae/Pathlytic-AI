import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#09090F] min-h-[90vh] flex items-center">

      {/* Glow Effects */}
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-violet-700/25 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-cyan-500/20 blur-[150px]" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center px-8">

        {/* Left */}
        <div>

          <span className="inline-block rounded-full border border-violet-500/40 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
            🚀 AI Powered Learning Platform
          </span>

          <h1 className="mt-8 text-6xl font-extrabold leading-tight text-white">

            Learn

            <span className="bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">
              {" "}Smarter
            </span>

            <br />

            Build Faster

          </h1>

          <p className="mt-8 text-xl leading-9 text-gray-400">

            Personalized learning roadmaps generated using AI,
            adaptive assessments and machine learning.

          </p>

          <div className="mt-12 flex gap-6">

            <Link
              to="/register"
              className="rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 px-8 py-4 font-semibold text-white transition hover:scale-105"
            >
              Start Learning
            </Link>

            <Link
              to="/login"
              className="rounded-xl border border-zinc-700 px-8 py-4 text-gray-300 hover:border-cyan-400"
            >
              Login
            </Link>

          </div>

        </div>

        {/* Right */}
        <div className="relative">

          <div className="rounded-3xl border border-zinc-800 bg-[#11111A] p-8 shadow-2xl">

            <h3 className="text-2xl font-bold text-white">
              AI Learning Dashboard
            </h3>

            <div className="mt-8 space-y-5">

              <div className="rounded-xl bg-zinc-900 p-4">
                <p className="text-gray-400">Goal</p>
                <h4 className="text-xl font-semibold text-white">
                  MERN Stack Developer
                </h4>
              </div>

              <div className="rounded-xl bg-zinc-900 p-4">
                <p className="text-gray-400">Roadmap Progress</p>

                <div className="mt-3 h-3 rounded-full bg-zinc-800">

                  <div className="h-3 w-[65%] rounded-full bg-gradient-to-r from-violet-500 to-cyan-400"></div>

                </div>

                <p className="mt-2 text-cyan-400">
                  65% Completed
                </p>

              </div>

              <div className="rounded-xl bg-zinc-900 p-4">

                <p className="text-gray-400">
                  Today's Tasks
                </p>

                <ul className="mt-3 space-y-2 text-white">

                  <li>✅ React Hooks</li>
                  <li>✅ Arrays</li>
                  <li>⬜ Express API</li>

                </ul>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;