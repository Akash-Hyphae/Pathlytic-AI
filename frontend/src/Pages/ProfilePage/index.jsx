import { useState } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";
import TopNavbar from "../../components/dashboard/topNavBar";
import {
  User,
  GraduationCap,
  Briefcase,
  Code2,
  Star,
  Building2,
  Calendar,
  Clock,
  Edit3,
  CheckCircle2,
} from "lucide-react";

// Mock user data (This can be replaced with API or Context state later)
const initialUserData = {
  name: "Akash Singh",
  email: "akash@gmail.com",
  avatar: "https://ui-avatars.com/api/?name=Akash+Singh&background=7c3aed&color=fff",
  college: "JECRC University",
  degree: "B.Tech - Computer Science",
  currentYear: "3rd Year",
  targetRole: "Full Stack Developer",
  timeline: "6 Months",
  dailyHours: "3 Hours / Day",
  targetCompanies: ["Google", "Microsoft", "Amazon", "Adobe"],
  selectedSkills: [
    { name: "JavaScript", rating: 4 },
    { name: "React", rating: 3 },
    { name: "Node.js", rating: 3 },
    { name: "HTML & CSS", rating: 5 },
    { name: "MongoDB", rating: 3 },
    { name: "SQL", rating: 4 },
    { name: "DSA", rating: 2 },
  ],
};

function Profile() {
  const [user] = useState(initialUserData);

  return (
    <DashboardLayout>
      <TopNavbar />

      <div className="mt-8 space-y-8">
        {/* Profile Banner / Header Card */}
        <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-[#11111A] p-8 shadow-2xl">
          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-violet-600/15 blur-3xl" />
          <div className="absolute -left-20 -bottom-20 h-60 w-60 rounded-full bg-cyan-500/15 blur-3xl" />

          <div className="relative z-10 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div className="flex items-center gap-6">
              <img
                src={user.avatar}
                alt={user.name}
                className="h-24 w-24 rounded-2xl border-2 border-violet-500/40 p-1 shadow-lg"
              />
              <div>
                <div className="flex items-center gap-3">
                  <h1 className="text-3xl font-extrabold text-white">
                    {user.name}
                  </h1>
                  <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400 border border-emerald-500/20">
                    Active Learner
                  </span>
                </div>
                <p className="mt-1 text-sm text-zinc-400">{user.email}</p>
                <p className="mt-2 text-xs font-medium text-cyan-400">
                  Target Role: <span className="text-white font-semibold">{user.targetRole}</span>
                </p>
              </div>
            </div>

            <button className="flex items-center gap-2 rounded-xl border border-zinc-700 bg-[#09090F] px-5 py-2.5 text-sm font-semibold text-zinc-300 transition hover:border-cyan-400 hover:text-white">
              <Edit3 size={16} /> Edit Profile
            </button>
          </div>
        </div>

        {/* 2-Column Grid */}
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Left Column: Academic & Career Details */}
          <div className="space-y-8 lg:col-span-1">
            {/* Academic Information */}
            <div className="rounded-3xl border border-zinc-800 bg-[#11111A] p-6 shadow-xl">
              <div className="flex items-center gap-3 border-b border-zinc-800/80 pb-4">
                <div className="rounded-xl bg-violet-500/10 p-2.5 text-violet-400">
                  <GraduationCap size={22} />
                </div>
                <h2 className="text-lg font-bold text-white">Academic Details</h2>
              </div>

              <div className="mt-5 space-y-4">
                <div>
                  <p className="text-xs text-zinc-500">College / University</p>
                  <p className="mt-1 text-sm font-semibold text-zinc-200">
                    {user.college}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-zinc-500">Degree</p>
                  <p className="mt-1 text-sm font-semibold text-zinc-200">
                    {user.degree}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-zinc-500">Current Year</p>
                  <span className="mt-1 inline-block rounded-lg bg-zinc-800 px-3 py-1 text-xs font-medium text-cyan-400">
                    {user.currentYear}
                  </span>
                </div>
              </div>
            </div>

            {/* Learning Goals */}
            <div className="rounded-3xl border border-zinc-800 bg-[#11111A] p-6 shadow-xl">
              <div className="flex items-center gap-3 border-b border-zinc-800/80 pb-4">
                <div className="rounded-xl bg-cyan-500/10 p-2.5 text-cyan-400">
                  <Briefcase size={22} />
                </div>
                <h2 className="text-lg font-bold text-white">Learning Commitment</h2>
              </div>

              <div className="mt-5 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-zinc-400">
                    <Calendar size={14} className="text-violet-400" /> Timeline Goal
                  </div>
                  <span className="text-sm font-bold text-white">
                    {user.timeline}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-zinc-400">
                    <Clock size={14} className="text-cyan-400" /> Daily Target
                  </div>
                  <span className="text-sm font-bold text-white">
                    {user.dailyHours}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Companies & Skills Matrix */}
          <div className="space-y-8 lg:col-span-2">
            {/* Target Companies */}
            <div className="rounded-3xl border border-zinc-800 bg-[#11111A] p-6 shadow-xl">
              <div className="flex items-center gap-3 border-b border-zinc-800/80 pb-4">
                <div className="rounded-xl bg-amber-500/10 p-2.5 text-amber-400">
                  <Building2 size={22} />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white">Target Companies</h2>
                  <p className="text-xs text-zinc-400">
                    Dream companies selected for roadmap customization
                  </p>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                {user.targetCompanies.map((company) => (
                  <div
                    key={company}
                    className="flex items-center gap-2 rounded-2xl border border-zinc-800 bg-[#09090F] px-4 py-2.5 text-sm font-semibold text-zinc-200 transition hover:border-violet-500/50"
                  >
                    <CheckCircle2 size={16} className="text-cyan-400" />
                    {company}
                  </div>
                ))}
              </div>
            </div>

            {/* Selected Skills & Confidence Ratings */}
            <div className="rounded-3xl border border-zinc-800 bg-[#11111A] p-6 shadow-xl">
              <div className="flex items-center justify-between border-b border-zinc-800/80 pb-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-violet-500/10 p-2.5 text-violet-400">
                    <Code2 size={22} />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-white">Selected Technologies</h2>
                    <p className="text-xs text-zinc-400">
                      Your self-assessed initial confidence rating
                    </p>
                  </div>
                </div>

                <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-bold text-cyan-400">
                  {user.selectedSkills.length} Skills Selected
                </span>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {user.selectedSkills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between rounded-2xl border border-zinc-800/80 bg-[#09090F] p-4"
                  >
                    <span className="text-sm font-bold text-zinc-200">
                      {skill.name}
                    </span>

                    {/* Star Confidence Ratings */}
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          size={16}
                          fill={star <= skill.rating ? "#22D3EE" : "transparent"}
                          className={
                            star <= skill.rating
                              ? "text-cyan-400"
                              : "text-zinc-700"
                          }
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Profile;