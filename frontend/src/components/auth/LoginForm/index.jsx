import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      if (response.data.success) {
        // Save user & token in LocalStorage
        localStorage.setItem("userInfo", JSON.stringify(response.data.user));
        
        // Redirect to Dashboard or Complete Profile
        navigate("/dashboard");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl rounded-3xl border border-zinc-800/80 bg-[#11111A]/90 p-8 shadow-2xl backdrop-blur-xl sm:p-10">
      <h2 className="bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-center text-3xl font-extrabold tracking-tight text-transparent">
        Pathlytic AI
      </h2>

      <div className="mt-6 text-center">
        <h1 className="text-3xl font-bold text-white">Welcome Back</h1>
        <p className="mt-1 text-sm text-zinc-400">
          Sign in to continue your AI learning journey.
        </p>
      </div>

      {error && (
        <div className="mt-4 rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-center text-xs font-semibold text-red-400">
          {error}
        </div>
      )}

      <form className="mt-8 space-y-5" onSubmit={handleLogin}>
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-zinc-400">
            Email
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="akash@gmail.com"
            className="w-full rounded-xl border border-zinc-800 bg-[#09090F] px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none transition duration-200 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
          />
        </div>

        <div>
          <div className="mb-1.5 flex items-center justify-between">
            <label className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
              Password
            </label>
            <Link
              to="/forgot-password"
              className="text-xs font-medium text-cyan-400 transition hover:text-cyan-300 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full rounded-xl border border-zinc-800 bg-[#09090F] px-4 py-3 pr-10 text-sm text-white placeholder-zinc-500 outline-none transition duration-200 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 transition hover:text-cyan-400"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="mt-2 w-full rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition-all duration-200 hover:opacity-95 hover:shadow-cyan-500/25 active:scale-[0.99] disabled:opacity-50"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

      <p className="mt-6 text-center text-xs text-zinc-400">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="font-semibold text-cyan-400 transition hover:text-cyan-300 hover:underline"
        >
          Create Account
        </Link>
      </p>
    </div>
  );
}

export default LoginForm;