import { useState, useEffect } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";
import TopNavbar from "../../components/dashboard/topNavBar";
import { BookOpen, ExternalLink, Loader2 } from "lucide-react";
import axios from "axios";

function Resources() {
  const [materials, setMaterials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchResources();
  }, []);

  const fetchResources = async () => {
    try {
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));
      if (!userInfo?.token) return;

      const config = { headers: { Authorization: `Bearer ${userInfo.token}` } };
      const { data } = await axios.get("http://localhost:5000/api/roadmap/me", config);

      if (data.success && data.data?.weeks) {
        const allMaterials = [];
        data.data.weeks.forEach((w) => {
          w.materials?.forEach((m) => {
            allMaterials.push({ ...m, week: w.week });
          });
        });
        setMaterials(allMaterials);
      }
    } catch (err) {
      console.error("Resources Fetch Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <TopNavbar />

      <div className="mt-8 space-y-6">
        <div>
          <h1 className="text-3xl font-extrabold text-white">AI Curated Resources</h1>
          <p className="mt-1 text-sm text-zinc-400">
            Recommended docs, videos, and sandboxes gathered across your AI roadmap.
          </p>
        </div>

        {loading ? (
          <div className="flex h-64 w-full items-center justify-center text-zinc-400">
            <Loader2 className="animate-spin text-cyan-400" size={28} />
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {materials.map((mat, idx) => (
              <a
                key={idx}
                href={mat.link || "#"}
                target="_blank"
                rel="noreferrer"
                className="block rounded-2xl border border-zinc-800 bg-[#11111A] p-5 transition hover:border-violet-500/50"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded bg-violet-500/10 px-2.5 py-0.5 text-[10px] font-bold text-violet-400 uppercase">
                    Week {mat.week} • {mat.type}
                  </span>
                  <ExternalLink size={14} className="text-zinc-500" />
                </div>
                <h3 className="mt-3 text-base font-bold text-white">{mat.title}</h3>
              </a>
            ))}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}

export default Resources;