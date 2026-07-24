import OptionCard from "./OptionCard";

function QuestionCard({
  question,
  selectedOption,
  setSelectedOption,
}) {
  return (
    <div className="rounded-3xl border border-zinc-800 bg-[#11111A] p-8">

      {/* Category */}

      <span className="rounded-full bg-violet-500/10 px-4 py-1 text-sm font-medium text-violet-400">
        {question.category}
      </span>

      {/* Difficulty */}

      <span className="ml-3 rounded-full bg-cyan-500/10 px-4 py-1 text-sm font-medium text-cyan-400">
        {question.difficulty}
      </span>

      {/* Question */}

      <h2 className="mt-8 text-2xl font-bold leading-relaxed text-white">
        {question.question}
      </h2>

      {/* Options */}

      <div className="mt-8 space-y-4">

        {question.options.map((option) => (
          <OptionCard
            key={option}
            option={option}
            selected={selectedOption === option}
            onSelect={setSelectedOption}
          />
        ))}

      </div>

    </div>
  );
}

export default QuestionCard;