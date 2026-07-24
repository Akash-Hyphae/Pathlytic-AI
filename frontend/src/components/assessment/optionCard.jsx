function OptionCard({
  option,
  selected,
  onSelect,
}) {
  return (
    <button
      type="button"
      onClick={() => onSelect(option)}
      className={`w-full rounded-2xl border p-5 text-left transition-all duration-200

      ${
        selected
          ? "border-cyan-400 bg-cyan-400/10 text-cyan-400"
          : "border-zinc-800 bg-[#11111A] text-zinc-300 hover:border-zinc-600 hover:bg-zinc-900"
      }
      `}
    >
      {option}
    </button>
  );
}

export default OptionCard;