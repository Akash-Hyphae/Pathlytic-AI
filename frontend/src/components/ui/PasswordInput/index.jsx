import { forwardRef, useState } from "react";
import { Eye, EyeOff, Lock } from "lucide-react";

const PasswordInput = forwardRef(
  (
    {
      label,
      error,
      placeholder = "",
      className = "",
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
      <div className="space-y-2">

        {/* Label */}
        <label className="block text-sm font-medium text-gray-300">
          {label}
        </label>

        {/* Input Container */}
        <div className="relative">

          {/* Lock Icon */}
          <Lock
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
          />

          {/* Input */}
          <input
            ref={ref}
            type={showPassword ? "text" : "password"}
            placeholder={placeholder}
            className={`
              w-full
              rounded-xl
              border
              border-zinc-700
              bg-[#09090F]
              py-4
              pl-12
              pr-12
              text-white
              placeholder:text-gray-500
              outline-none
              transition-all
              duration-300
              focus:border-cyan-400
              focus:ring-2
              focus:ring-cyan-500/20
              ${className}
            `}
            {...props}
          />

          {/* Eye Icon */}
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-cyan-400 transition"
          >
            {showPassword ? (
              <EyeOff size={20} />
            ) : (
              <Eye size={20} />
            )}
          </button>

        </div>

        {/* Error */}
        {error && (
          <p className="text-sm text-red-400">
            {error}
          </p>
        )}

      </div>
    );
  }
);

PasswordInput.displayName = "PasswordInput";

export default PasswordInput;