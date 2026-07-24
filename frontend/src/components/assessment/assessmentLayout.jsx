import useAssessment from "../../hooks/useAssessment";

import AssessmentHeader from "./AssessmentHeader";
import QuestionCard from "./QuestionCard";
import NavigationButtons from "./navigationButton";
import { useNavigate } from "react-router-dom";

function AssessmentLayout() {
  const {
    questions,
    question,
    currentQuestionIndex,
    answers,
    selectAnswer,
    nextQuestion,
    previousQuestion,
    calculateScore,
  } = useAssessment();

  const handleNext = () => {
    if (currentQuestionIndex === questions.length - 1) {
      navigate("/analysis");
      return;
    }

    nextQuestion();
  };

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#09090F] px-6 py-10">
      <div className="mx-auto max-w-4xl">
        <AssessmentHeader
          current={currentQuestionIndex + 1}
          total={questions.length}
        />

        <QuestionCard
          question={question}
          selectedOption={answers[question.id]}
          setSelectedOption={selectAnswer}
        />

        <NavigationButtons
          currentQuestion={currentQuestionIndex}
          totalQuestions={questions.length}
          onPrevious={previousQuestion}
          onNext={handleNext}
        />
      </div>
    </div>
  );
}

export default AssessmentLayout;