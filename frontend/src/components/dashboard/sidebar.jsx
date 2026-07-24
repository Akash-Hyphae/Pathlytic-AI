import {
  LayoutDashboard,
  Map,
  CheckSquare,
  BookOpen,
  BarChart3,
  User,
  Settings,
  LogOut,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const menuItems = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
  },
  {
    name: "AI Roadmap",
    icon: Map,
    path: "/roadmap",
  },
  {
    name: "Daily Tasks",
    icon: CheckSquare,
    path: "/tasks",
  },
  {
    name: "Resources",
    icon: BookOpen,
    path: "/resources",
  },
  {
    name: "Progress",
    icon: BarChart3,
    path: "/progress",
  },
  {
    name: "Profile",
    icon: User,
    path: "/profile",
  },
  {
    name: "Settings",
    icon: Settings,
    path: "/settings",
  },
];

function Sidebar() {
  return (
    <aside className="w-72 border-r border-zinc-800 bg-[#11111A] p-6 flex flex-col">
      <h1 className="mb-10 text-3xl font-bold bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">
        Pathlytic AI
      </h1>

      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-4 py-3 transition-all ${
                  isActive
                    ? "bg-violet-600 text-white"
                    : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
                }`
              }
            >
              <Icon size={20} />
              <span>{item.name}</span>
            </NavLink>
          );
        })}
      </nav>

      <button className="mt-6 flex items-center gap-3 rounded-xl border border-red-500/30 px-4 py-3 text-red-400 transition hover:bg-red-500/10">
        <LogOut size={20} />
        Logout
      </button>
    </aside>
  );
}

export default Sidebar;