import { useState, useEffect } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";
import TopNavbar from "../../components/dashboard/topNavBar";
import { User, GraduationCap, Target, Building2, Clock, Loader2 } from "lucide-react";
import axios from "axios";

function ProfilePage() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));
      if (!userInfo?.token) return;

      const config = { headers: { Authorization: `Bearer ${userInfo.token}` } };
      const { data } = await axios.get("http://localhost:5000/api/profile/me", config);

      if (data.success) {
        setProfile(data.data);
      }
    } catch (err) {
      console.error("Profile Fetch Error:", err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <DashboardLayout>
        <TopNavbar />
        <div className="flex h-96 w-full items-center justify-center text-zinc-400">
          <Loader2 className="animate-spin text-cyan-400" size={28} />
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <TopNavbar />

      <div className="mt-8 space-y-8">
        {/* Profile Card */}
        <div className="rounded-3xl border border-zinc-800 bg-[#11111A] p-8">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-tr from-violet-600 to-cyan-400 text-2xl font-bold text-white">
              {profile?.user?.name?.[0] || "U"}
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">{profile?.user?.name}</h1>
              <p className="text-sm text-zinc-400">{profile?.user?.email}</p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-zinc-800 bg-[#09090F] p-5">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase text-cyan-400">
                <GraduationCap size={16} /> Academic Background
              </div>
              <p className="mt-2 text-sm font-semibold text-white">{profile?.college}</p>
              <p className="text-xs text-zinc-400">{profile?.degree} • {profile?.currentYear}</p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-[#09090F] p-5">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase text-violet-400">
                <Target size={16} /> Career Goal
              </div>
              <p className="mt-2 text-sm font-semibold text-white">{profile?.targetRole}</p>
              <p className="text-xs text-zinc-400">Timeline: {profile?.timeline} ({profile?.dailyHours}/day)</p>
            </div>
          </div>

          {/* Target Companies */}
          {profile?.targetCompanies?.length > 0 && (
            <div className="mt-6">
              <h3 className="text-xs font-semibold uppercase text-zinc-400 flex items-center gap-1.5 mb-3">
                <Building2 size={14} /> Target Companies
              </h3>
              <div className="flex flex-wrap gap-2">
                {profile.targetCompanies.map((comp, idx) => (
                  <span key={idx} className="rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs text-zinc-200">
                    {comp}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}

export default ProfilePage;