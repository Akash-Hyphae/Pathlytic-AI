function Card({ children }) {
  return (
    <div
      className="
        w-full
        max-w-md
        rounded-3xl
        border
        border-zinc-800
        bg-white/5
        backdrop-blur-xl
        p-10
        shadow-2xl
      "
    >
      {children}
    </div>
  );
}

export default Card;