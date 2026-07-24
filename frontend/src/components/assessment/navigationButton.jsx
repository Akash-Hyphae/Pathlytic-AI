function NavigationButtons({
  currentQuestion,
  totalQuestions,
  onPrevious,
  onNext,
}) {
  return (
    <div className="mt-8 flex justify-between">

      <button
        onClick={onPrevious}
        disabled={currentQuestion === 0}
        className="rounded-xl border border-zinc-700 px-6 py-3 text-zinc-300 transition disabled:cursor-not-allowed disabled:opacity-40"
      >
        Previous
      </button>

      <button
        onClick={onNext}
        className="rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 px-8 py-3 font-semibold text-white transition hover:opacity-90"
      >
        {currentQuestion === totalQuestions - 1
          ? "Finish Assessment"
          : "Next"}
      </button>

    </div>
  );
}

export default NavigationButtons;