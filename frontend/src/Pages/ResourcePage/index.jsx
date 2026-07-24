import { useState } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";
import TopNavbar from "../../components/dashboard/topNavBar";
import {
  BookOpen,
  Video,
  Code2,
  FileText,
  Search,
  ExternalLink,
  Sparkles,
  Bookmark,
} from "lucide-react";

const allResources = [
  {
    id: 1,
    title: "React Hooks Deep Dive & Patterns",
    provider: "Official React Docs",
    type: "Documentation",
    duration: "25 mins",
    tag: "High Priority",
    link: "https://react.dev",
  },
  {
    id: 2,
    title: "Full Stack System Design Primer",
    provider: "GitHub Repository",
    type: "Guide",
    duration: "2 hours",
    tag: "Essential",
    link: "#",
  },
  {
    id: 3,
    title: "Mastering Node.js Event Loop & Streams",
    provider: "YouTube",
    type: "Video",
    duration: "45 mins",
    tag: "Recommended",
    link: "#",
  },
  {
    id: 4,
    title: "75 LeetCode Blind Questions Set",
    provider: "LeetCode",
    type: "Practice",
    duration: "Interactive",
    tag: "High Priority",
    link: "https://leetcode.com",
  },
];

function Resources() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("All");

  const filtered = allResources.filter((r) => {
    const matchesSearch = r.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === "All" || r.type === filterType;
    return matchesSearch && matchesFilter;
  });

  return (
    <DashboardLayout>
      <TopNavbar />

      <div className="mt-8 space-y-8">
        {/* Header */}
        <div className="rounded-3xl border border-zinc-800 bg-[#11111A] p-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-violet-400 uppercase tracking-wider">
            <Sparkles size={16} /> AI Curated Library
          </div>
          <h1 className="mt-2 text-3xl font-extrabold text-white">
            Smart Learning Resources
          </h1>
          <p className="mt-1 text-sm text-zinc-400">
            Handpicked materials filtered specifically for your target role and current skill level.
          </p>

          {/* Search & Filters */}
          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center rounded-xl border border-zinc-800 bg-[#09090F] px-4 py-2.5 sm:w-80">
              <Search size={18} className="text-zinc-500" />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="ml-3 w-full bg-transparent text-sm text-white outline-none placeholder:text-zinc-500"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {["All", "Documentation", "Video", "Practice", "Guide"].map((type) => (
                <button
                  key={type}
                  onClick={() => setFilterType(type)}
                  className={`rounded-xl px-4 py-2 text-xs font-semibold transition ${
                    filterType === type
                      ? "bg-violet-600 text-white"
                      : "border border-zinc-800 bg-[#09090F] text-zinc-400 hover:text-white"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-between rounded-2xl border border-zinc-800 bg-[#11111A] p-6 transition hover:border-zinc-700"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-md bg-violet-500/10 px-2.5 py-1 text-[10px] font-semibold text-violet-400">
                    {item.tag}
                  </span>
                  <Bookmark size={18} className="cursor-pointer text-zinc-500 hover:text-cyan-400" />
                </div>

                <h3 className="mt-4 text-lg font-bold text-white">{item.title}</h3>
                <p className="mt-1 text-xs text-zinc-400">{item.provider}</p>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-zinc-800/80 pt-4">
                <span className="text-xs text-zinc-500">{item.duration}</span>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-xs font-semibold text-cyan-400 hover:underline"
                >
                  Open Resource <ExternalLink size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Resources;