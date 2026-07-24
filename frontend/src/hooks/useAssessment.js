import { useState } from "react";
import questions from "../data/question";

function useAssessment() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});

  const question = questions[currentQuestionIndex];

  const selectAnswer = (answer) => {
    setAnswers((prev) => ({
      ...prev,
      [question.id]: answer,
    }));
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const previousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const calculateScore = () => {
    let score = 0;

    questions.forEach((q) => {
      if (answers[q.id] === q.answer) {
        score++;
      }
    });

    return score;
  };

  return {
    questions,
    question,
    currentQuestionIndex,
    answers,
    selectAnswer,
    nextQuestion,
    previousQuestion,
    calculateScore,
  };
}

export default useAssessment;