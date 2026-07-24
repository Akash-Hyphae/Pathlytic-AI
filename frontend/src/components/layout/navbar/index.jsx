import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-6 bg-[#09090F]/80 backdrop-blur-md border-b border-zinc-800">

      <Link
        to="/"
        className="text-3xl font-bold bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent"
      >
        Pathlytic AI
      </Link>

      <div className="flex items-center gap-8">

        <Link
          to="/login"
          className="text-gray-300 hover:text-cyan-400 transition"
        >
          Login
        </Link>

        <Link
          to="/register"
          className="px-5 py-2 rounded-lg bg-gradient-to-r from-violet-600 to-cyan-500 text-white hover:shadow-[0_0_20px_#7C3AED]"
        >
          Get Started
        </Link>

      </div>
    </nav>
  );
}

export default Navbar;