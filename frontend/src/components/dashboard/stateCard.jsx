import {
  Flame,
  BookOpen,
  Target,
  Trophy,
} from "lucide-react";

const stats = [
  {
    title: "Study Streak",
    value: "12 Days",
    icon: Flame,
  },
  {
    title: "Tasks Completed",
    value: "34",
    icon: BookOpen,
  },
  {
    title: "Roadmap Progress",
    value: "48%",
    icon: Target,
  },
  {
    title: "Assessments",
    value: "5",
    icon: Trophy,
  },
];

function StatsCards() {
  return (
    <div className="grid grid-cols-4 gap-6">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="rounded-2xl border border-zinc-800 bg-[#11111A] p-6"
          >
            <Icon className="mb-4 text-violet-400" size={30} />

            <h3 className="text-3xl font-bold">
              {item.value}
            </h3>

            <p className="mt-2 text-zinc-400">
              {item.title}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default StatsCards;