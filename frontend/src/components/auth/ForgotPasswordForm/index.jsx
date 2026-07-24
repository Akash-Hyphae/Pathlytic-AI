import { Link } from "react-router-dom";

function ForgotPasswordForm() {
  return (
    <div className="w-full max-w-lg rounded-3xl border border-zinc-800/80 bg-[#11111A]/90 p-8 shadow-2xl backdrop-blur-xl sm:p-10">

      {/* Logo */}
      <h2 className="bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-center text-3xl font-extrabold tracking-tight text-transparent">
        Pathlytic AI
      </h2>

      {/* Heading */}
      <div className="mt-6 text-center">
        <h1 className="text-3xl font-bold text-white">
          Forgot Password
        </h1>

        <p className="mt-2 text-sm text-zinc-400">
          Enter your registered email address and we'll send you a verification code.
        </p>
      </div>

      {/* Form */}
      <form className="mt-8 space-y-5">

        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-zinc-400">
            Email
          </label>

          <input
            type="email"
            placeholder="akash@gmail.com"
            className="w-full rounded-xl border border-zinc-800 bg-[#09090F] px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none transition duration-200 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition-all duration-200 hover:opacity-95 hover:shadow-cyan-500/25 active:scale-[0.99]"
        >
          Send Verification Code
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

export default ForgotPasswordForm;