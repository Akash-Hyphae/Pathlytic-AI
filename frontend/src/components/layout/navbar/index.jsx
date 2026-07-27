import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, LogOut, LayoutDashboard } from "lucide-react";

function Navbar() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    if (userInfo && userInfo.token) {
      setUser(userInfo);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    localStorage.removeItem("userRoadmap");
    setUser(null);
    navigate("/login");
  };

  return (
    <nav className="flex justify-between items-center px-10 py-6 bg-[#09090F]/80 backdrop-blur-md border-b border-zinc-800">
      <Link
        to="/"
        className="text-3xl font-bold bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent"
      >
        Pathlytic AI
      </Link>

      <div className="flex items-center gap-6">
        {user ? (
          <>
            <Link
              to="/dashboard"
              className="flex items-center gap-2 text-sm font-semibold text-zinc-200 hover:text-cyan-400 transition"
            >
              <LayoutDashboard size={18} /> Dashboard
            </Link>

            <div className="flex items-center gap-3 rounded-full border border-zinc-800 bg-[#11111A] px-4 py-1.5">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-violet-600 text-xs font-bold text-white">
                {user.name?.[0]?.toUpperCase() || "U"}
              </div>
              <span className="text-xs font-medium text-white">{user.name}</span>
            </div>

            <button
              onClick={handleLogout}
              className="p-2 text-zinc-400 hover:text-red-400 transition"
              title="Logout"
            >
              <LogOut size={18} />
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="text-gray-300 hover:text-cyan-400 transition text-sm font-medium"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 text-sm font-bold text-white transition hover:shadow-[0_0_20px_rgba(124,58,237,0.4)]"
            >
              Get Started
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;