import { useState, useEffect } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";
import TopNavbar from "../../components/dashboard/topNavBar";
import {
  Flame,
  Clock,
  Zap,
  BookOpen,
  Code2,
  Video,
  Loader2,
  CalendarDays,
} from "lucide-react";
import api from "../../services/api";

function DailyTasks() {
  const [activeWeekData, setActiveWeekData] = useState(null);
  const [selectedDay, setSelectedDay] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchActiveTasks();
  }, []);

  const fetchActiveTasks = async () => {
    try {
      const { data } = await api.get("/roadmap/me");

      if (data.success && data.data?.weeks?.length) {
        setActiveWeekData(data.data.weeks[0]);
      }
    } catch (err) {
      console.error("Fetch Daily Tasks Error:", err);
    } finally {
      setLoading(false);
    }
  };

  const toggleSubTask = async (subTaskId) => {
    try {
      // Optimistic state update
      setActiveWeekData((prev) => {
        if (!prev) return prev;
        const updatedTasks = prev.tasks.map((parentTask) => {
          if (!parentTask.subTasks) return parentTask;
          const updatedSubTasks = parentTask.subTasks.map((st) =>
            st.id === subTaskId ? { ...st, completed: !st.completed } : st
          );
          return { ...parentTask, subTasks: updatedSubTasks };
        });
        return { ...prev, tasks: updatedTasks };
      });

      await api.patch("/roadmap/task/toggle", {
        weekNumber: activeWeekData?.week || 1,
        subTaskId,
      });
    } catch (err) {
      console.error("Task Toggle Error:", err);
      fetchActiveTasks();
    }
  };

  // Collect all sub-tasks for the selected day across ALL weekly goals
  const getSubTasksForSelectedDay = () => {
    if (!activeWeekData || !activeWeekData.tasks) return [];

    const categoryIcons = [Code2, Video, Zap, BookOpen];
    const categoryColors = [
      "text-cyan-400",
      "text-red-400",
      "text-violet-400",
      "text-amber-400",
    ];
    const categories = [
      "Coding Practice",
      "Video Lesson",
      "Hands-on Task",
      "Revision",
    ];

    const subTasksList = [];

    activeWeekData.tasks.forEach((parentTask, parentIdx) => {
      if (parentTask.subTasks) {
        const matchingSub = parentTask.subTasks.find(
          (st) => st.day === selectedDay
        );
        if (matchingSub) {
          subTasksList.push({
            id: matchingSub.id,
            parentName: parentTask.name,
            title: matchingSub.name,
            completed: matchingSub.completed,
            time: matchingSub.time || "30 mins",
            xp: 50,
            icon: categoryIcons[parentIdx % categoryIcons.length],
            color: categoryColors[parentIdx % categoryColors.length],
            category: categories[parentIdx % categories.length],
          });
        }
      }
    });

    return subTasksList;
  };

  const todaysSubTasks = getSubTasksForSelectedDay();
  const completedCount = todaysSubTasks.filter((st) => st.completed).length;

  return (
    <DashboardLayout>
      <TopNavbar />

      <div className="mt-8 space-y-8">
        {/* Banner */}
        <div className="flex flex-col gap-6 rounded-3xl border border-zinc-800 bg-[#11111A] p-8 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="flex items-center gap-2 text-orange-400 font-semibold text-sm">
              <Flame size={18} /> Week {activeWeekData?.week || 1} Daily Tasks
            </div>
            <h1 className="mt-2 text-3xl font-extrabold text-white">
              Daily Goals: Day {selectedDay}
            </h1>
            <p className="mt-1 text-sm text-zinc-400">
              Each weekly goal is divided into 6 daily actionable sub-tasks.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <div className="text-center">
              <p className="text-xs text-zinc-400">Day {selectedDay} Progress</p>
              <p className="text-2xl font-bold text-cyan-400">
                {completedCount} / {todaysSubTasks.length}
              </p>
            </div>
          </div>
        </div>

        {/* Day Selector (Day 1 through Day 6) */}
        <div className="flex gap-2 overflow-x-auto rounded-2xl border border-zinc-800 bg-[#11111A] p-3 no-scrollbar">
          {[1, 2, 3, 4, 5, 6].map((dayNum) => {
            const isSelected = selectedDay === dayNum;

            return (
              <button
                key={dayNum}
                onClick={() => setSelectedDay(dayNum)}
                className={`flex-1 min-w-[100px] rounded-xl py-3 px-2 text-center text-xs font-semibold transition cursor-pointer ${
                  isSelected
                    ? "bg-gradient-to-r from-violet-600 to-cyan-500 text-white shadow-lg shadow-violet-600/20"
                    : "bg-[#09090F] text-zinc-400 hover:border-zinc-700 hover:text-white border border-zinc-800"
                }`}
              >
                <div>Day {dayNum}</div>
              </button>
            );
          })}
        </div>

        {/* Sub-Tasks Checklist for Selected Day */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <CalendarDays size={20} className="text-cyan-400" /> Actionable Sub-Tasks for Day {selectedDay}
          </h2>

          {loading ? (
            <div className="flex h-40 items-center justify-center space-x-2 text-zinc-400">
              <Loader2 className="animate-spin text-cyan-400" size={24} />
              <p className="text-sm">Loading daily sub-tasks...</p>
            </div>
          ) : todaysSubTasks.length === 0 ? (
            <div className="rounded-2xl border border-zinc-800 bg-[#11111A] p-8 text-center text-zinc-400">
              No sub-tasks found for Day {selectedDay}. Generate a new AI roadmap to update your tasks!
            </div>
          ) : (
            todaysSubTasks.map((st) => {
              const Icon = st.icon;

              return (
                <div
                  key={st.id}
                  onClick={() => toggleSubTask(st.id)}
                  className={`group flex cursor-pointer items-center justify-between rounded-2xl border p-5 transition duration-200 ${
                    st.completed
                      ? "border-zinc-800/60 bg-[#09090F]/50 opacity-70"
                      : "border-zinc-800 bg-[#11111A] hover:border-violet-500/50"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <input
                      type="checkbox"
                      checked={st.completed}
                      onChange={() => {}}
                      className="h-5 w-5 rounded border-zinc-700 bg-zinc-900 accent-cyan-500 cursor-pointer"
                    />

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#09090F]">
                      <Icon className={st.color} size={22} />
                    </div>

                    <div>
                      <h3
                        className={`font-semibold ${
                          st.completed ? "text-zinc-500 line-through" : "text-white"
                        }`}
                      >
                        {st.title}
                      </h3>
                      <p className="text-xs text-zinc-500 mt-0.5">
                        Parent Goal: <span className="text-zinc-400">{st.parentName}</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 text-xs text-zinc-500">
                      <Clock size={12} /> {st.time}
                    </span>
                    <span className="rounded-full bg-violet-500/10 px-3 py-1 text-xs font-semibold text-violet-400">
                      +{st.xp} XP
                    </span>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}

export default DailyTasks;