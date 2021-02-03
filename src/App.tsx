import React from "react";
import Question from "./components/Question";
import {categories, difficulties} from "./constants";
import ResultModal from "./components/ResultModal";
import Scoreboard from "./components/Scoreboard";
import Modal from "./components/Modal";
import { useActions } from "./hooks/useActions";
import useTrivia from "./hooks/useTrivia";
import "./App.css";

export default function App(): JSX.Element {
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
      <div className='app__title'>
        <h1>Trivia</h1>
        </div>
      {isAnswerCorrect !== undefined && question && (
        <ResultModal nextQuestion={nextQuestion} />
      )}
      {!category && (
        <Modal
          items={categories}
          modalTitle="Category"
          callback={setCategory}
        />
      )}
      {!difficulty && (
        <Modal
          items={difficulties}
          modalTitle="Difficulty"
          callback={setDifficulty}
        />
      )}
      <Scoreboard />
      {question && <Question />}
      <div className="question-footer">
        {question && <button onClick={nextQuestion}>Go to next question 👉</button>}
      </div>
    </div>
  );
}
