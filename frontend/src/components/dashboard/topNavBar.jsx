import { Bell, Search } from "lucide-react";

function TopNavbar() {
  return (
    <header className="flex items-center justify-between">
      <div>
        <h2 className="text-3xl font-bold text-white">
          Dashboard
        </h2>

        <p className="mt-1 text-zinc-400">
          Welcome back 👋
        </p>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center rounded-xl border border-zinc-700 bg-[#11111A] px-4 py-3">
          <Search size={18} className="text-zinc-500" />

          <input
            type="text"
            placeholder="Search..."
            className="ml-3 bg-transparent text-white outline-none placeholder:text-zinc-500"
          />
        </div>

        <button className="rounded-xl border border-zinc-700 bg-[#11111A] p-3">
          <Bell />
        </button>

        <img
          src="https://ui-avatars.com/api/?name=Akash&background=7c3aed&color=fff"
          alt="avatar"
          className="h-12 w-12 rounded-full"
        />
      </div>
    </header>
  );
}

export default TopNavbar;