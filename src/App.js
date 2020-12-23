import React from "react";
import Question from "./components/Question";
import categories from "./categories";
import ResultModal from "./components/ResultModal";
import Scoreboard from "./components/Scoreboard";
import "./App.css";
import useTrivia from "./useTrivia";
import Modal from "./components/Modal";
import { motion } from "framer-motion";
import { useActions } from "./actions";
import difficulties from "./difficulties";

export default function App() {
  const {
    isAnswerCorrect,
    nextQuestion,
    category,
    difficulty,
    question
  } = useTrivia();
  const { setCategory, setDifficulty } = useActions();
  
  return (
    <div className="app">
      <h1>Trivia</h1>
      {isAnswerCorrect !== null && question && (
        <ResultModal nextQuestion={nextQuestion} />
      )}
      {category == null && (
        <Modal
          items={categories}
          modalTitle="Category"
          callback={setCategory}
        />
      )}
      {difficulty == null && (
        <Modal
          items={difficulties}
          modalTitle="Difficulty"
          callback={setDifficulty}
        />
      )}
      <Scoreboard />
      {question && (
        <motion.div
          className="question-main"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
        >
          <Question />
        </motion.div>
      )}
      <div className="question-footer">
        {question && <button>Go to next question 👉</button>}
      </div>
    </div>
  );
}
