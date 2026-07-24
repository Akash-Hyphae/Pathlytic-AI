import { forwardRef } from "react";

const Input = forwardRef(
  (
    {
      label,
      error,
      type = "text",
      placeholder = "",
      className = "",
      ...props
    },
    ref
  ) => {
    return (
      <div className="space-y-2">

        <label className="block text-sm font-medium text-gray-300">
          {label}
        </label>

        <input
          ref={ref}
          type={type}
          placeholder={placeholder}
          className={`
            w-full
            rounded-xl
            border
            border-zinc-700
            bg-[#09090F]
            px-5
            py-4
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

        {error && (
          <p className="text-sm text-red-400">
            {error}
          </p>
        )}

      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;