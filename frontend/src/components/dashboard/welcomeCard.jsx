import { ArrowRight } from "lucide-react";

function WelcomeCard() {
  return (
    <div className="rounded-3xl bg-gradient-to-r from-violet-600 to-cyan-500 p-8">
      <h2 className="text-3xl font-bold">
        Welcome Back, Akash 👋
      </h2>

      <p className="mt-4 max-w-2xl text-white/90">
        You're making great progress. Complete today's tasks to stay on track with your AI learning roadmap.
      </p>

      <button className="mt-8 flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-black">
        Continue Learning
        <ArrowRight size={18} />
      </button>
    </div>
  );
}

export default WelcomeCard;