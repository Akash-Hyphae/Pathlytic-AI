function Button({
  children,
  type = "button",
  className = "",
  ...props
}) {
  return (
    <button
      type={type}
      className={`
        w-full
        rounded-xl
        bg-gradient-to-r
        from-violet-600
        to-cyan-500
        py-4
        font-semibold
        text-white
        transition-all
        duration-300
        hover:scale-[1.02]
        hover:shadow-[0_0_25px_rgba(124,58,237,0.45)]
        active:scale-95
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;