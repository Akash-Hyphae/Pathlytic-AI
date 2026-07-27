import { useState } from "react";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreed, setAgreed] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    if (!agreed) {
      setError("Please agree to the Terms of Service.");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post("http://localhost:5000/api/auth/register", {
        name,
        email,
        password,
      });

      if (response.data.success) {
        // Save user details & token to local storage
        localStorage.setItem("userInfo", JSON.stringify(response.data.user));

        // Redirect to onboarding wizard
        navigate("/complete-profile");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl rounded-3xl border border-zinc-800/80 bg-[#11111A]/90 p-8 shadow-2xl backdrop-blur-xl sm:p-10">
      {/* Logo */}
      <h2 className="bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-center text-3xl font-extrabold tracking-tight text-transparent">
        Pathlytic AI
      </h2>

      {/* Heading */}
      <div className="mt-6 text-center">
        <h1 className="text-3xl font-bold text-white">Create Account</h1>
        <p className="mt-1 text-sm text-zinc-400">
          Start your personalized AI learning journey.
        </p>
      </div>

      {error && (
        <div className="mt-4 rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-center text-xs font-semibold text-red-400">
          {error}
        </div>
      )}

      {/* Form */}
      <form className="mt-8 space-y-5" onSubmit={handleRegister}>
        {/* Name & Email Row */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {/* Name */}
          <div>
            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-zinc-400">
              Full Name
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Akash Singh"
              className="w-full rounded-xl border border-zinc-800 bg-[#09090F] px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none transition duration-200 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
            />
          </div>

          {/* Email */}
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
        </div>

        {/* Password & Confirm Password Row */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {/* Password */}
          <div>
            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-zinc-400">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Min 6 characters"
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

          {/* Confirm Password */}
          <div>
            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-zinc-400">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Re-enter password"
                className="w-full rounded-xl border border-zinc-800 bg-[#09090F] px-4 py-3 pr-10 text-sm text-white placeholder-zinc-500 outline-none transition duration-200 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 transition hover:text-cyan-400"
              >
                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>
        </div>

        {/* Terms Checkbox */}
        <div className="flex items-center gap-2.5 pt-1">
          <input
            type="checkbox"
            id="terms"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="h-4 w-4 rounded border-zinc-700 bg-[#09090F] text-cyan-500 accent-cyan-500 focus:ring-0 cursor-pointer"
          />
          <label htmlFor="terms" className="text-xs text-zinc-400 cursor-pointer select-none">
            I agree to the <span className="text-cyan-400 hover:underline">Terms of Service</span> and <span className="text-cyan-400 hover:underline">Privacy Policy</span>
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition-all duration-200 hover:opacity-95 hover:shadow-cyan-500/25 active:scale-[0.99] disabled:opacity-50"
        >
          {loading ? (
            <>
              <Loader2 size={18} className="animate-spin" /> Creating Account...
            </>
          ) : (
            "Create Account"
          )}
        </button>
      </form>

      {/* Footer */}
      <p className="mt-6 text-center text-xs text-zinc-400">
        Already have an account?{" "}
        <Link
          to="/login"
          className="font-semibold text-cyan-400 transition hover:text-cyan-300 hover:underline"
        >
          Login
        </Link>
      </p>
    </div>
  );
}

export default RegisterForm;