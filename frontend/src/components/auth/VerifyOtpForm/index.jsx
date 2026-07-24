import { Link } from "react-router-dom";

function VerifyOTPForm() {
  return (
    <div className="w-full max-w-lg rounded-3xl border border-zinc-800/80 bg-[#11111A]/90 p-8 shadow-2xl backdrop-blur-xl sm:p-10">

      {/* Logo */}
      <h2 className="bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-center text-3xl font-extrabold tracking-tight text-transparent">
        Pathlytic AI
      </h2>

      {/* Heading */}
      <div className="mt-6 text-center">
        <h1 className="text-3xl font-bold text-white">
          Verify OTP
        </h1>

        <p className="mt-2 text-sm text-zinc-400">
          Enter the 6-digit verification code sent to your email.
        </p>
      </div>

      <form className="mt-8">

        <div className="flex justify-between gap-3">

          {[...Array(6)].map((_, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              className="h-14 w-14 rounded-xl border border-zinc-800 bg-[#09090F] text-center text-xl font-semibold text-white outline-none transition duration-200 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
            />
          ))}

        </div>

        <button
          type="submit"
          className="mt-8 w-full rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition-all duration-200 hover:opacity-95 hover:shadow-cyan-500/25 active:scale-[0.99]"
        >
          Verify OTP
        </button>

      </form>

      <div className="mt-6 flex items-center justify-between text-xs">

        <button
          type="button"
          className="text-cyan-400 hover:underline"
        >
          Resend OTP
        </button>

        <Link
          to="/login"
          className="text-cyan-400 hover:underline"
        >
          Back to Login
        </Link>

      </div>

    </div>
  );
}

export default VerifyOTPForm;