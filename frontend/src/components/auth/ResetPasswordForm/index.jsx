import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

function ResetPasswordForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="w-full max-w-lg rounded-3xl border border-zinc-800/80 bg-[#11111A]/90 p-8 shadow-2xl backdrop-blur-xl sm:p-10">

      {/* Logo */}
      <h2 className="bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-center text-3xl font-extrabold tracking-tight text-transparent">
        Pathlytic AI
      </h2>

      {/* Heading */}
      <div className="mt-6 text-center">
        <h1 className="text-3xl font-bold text-white">
          Reset Password
        </h1>

        <p className="mt-2 text-sm text-zinc-400">
          Create a strong password for your account.
        </p>
      </div>

      <form className="mt-8 space-y-5">

        {/* New Password */}
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-zinc-400">
            New Password
          </label>

          <div className="relative">

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter new password"
              className="w-full rounded-xl border border-zinc-800 bg-[#09090F] px-4 py-3 pr-10 text-sm text-white placeholder-zinc-500 outline-none transition duration-200 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-cyan-400"
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
              placeholder="Confirm password"
              className="w-full rounded-xl border border-zinc-800 bg-[#09090F] px-4 py-3 pr-10 text-sm text-white placeholder-zinc-500 outline-none transition duration-200 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
            />

            <button
              type="button"
              onClick={() =>
                setShowConfirmPassword(!showConfirmPassword)
              }
              className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-cyan-400"
            >
              {showConfirmPassword ? (
                <EyeOff size={18} />
              ) : (
                <Eye size={18} />
              )}
            </button>

          </div>
        </div>

        <button
          type="submit"
          className="w-full rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:opacity-95 active:scale-[0.99]"
        >
          Reset Password
        </button>

      </form>

      <p className="mt-6 text-center text-xs text-zinc-400">
        Remember your password?{" "}
        <Link
          to="/login"
          className="font-semibold text-cyan-400 hover:text-cyan-300 hover:underline"
        >
          Login
        </Link>
      </p>

    </div>
  );
}

export default ResetPasswordForm;