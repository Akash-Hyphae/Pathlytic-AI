import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Map,
  CheckSquare,
  BookOpen,
  TrendingUp,
  User,
  Settings,
  LogOut,
} from "lucide-react";

const navItems = [
  { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
  { name: "AI Roadmap", path: "/roadmap", icon: Map },
  { name: "Daily Tasks", path: "/tasks", icon: CheckSquare },
  { name: "Resources", path: "/resources", icon: BookOpen },
  { name: "Progress", path: "/progress", icon: TrendingUp },
  { name: "Profile", path: "/profile", icon: User },
  { name: "Settings", path: "/settings", icon: Settings },
];

function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    sessionStorage.clear();
    navigate("/login", { replace: true });
  };

  return (
    <aside className="w-64 min-h-screen bg-[#0E0E17] border-r border-zinc-800/80 flex flex-col justify-between p-6 shrink-0">
      <div>
        {/* Brand Logo */}
        <div className="flex items-center gap-2 mb-10 px-2">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-violet-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
            Pathlytic AI
          </h1>
        </div>

        {/* Navigation Links */}
        <nav className="space-y-1.5">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-500/20"
                      : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50"
                  }`
                }
              >
                <Icon size={20} />
                <span>{item.name}</span>
              </NavLink>
            );
          })}
        </nav>
      </div>

      {/* Logout Action */}
      <div className="pt-6 border-t border-zinc-800/80">
        <button
          onClick={handleLogout}
          type="button"
          className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-sm font-medium text-red-400/90 hover:text-red-300 hover:bg-red-500/10 border border-transparent hover:border-red-500/20 transition-all duration-200 cursor-pointer"
        >
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;