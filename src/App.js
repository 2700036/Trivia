import React from 'react';
import Question from './components/Question';

import ResultModal from './components/ResultModal';
import Scoreboard from './components/Scoreboard';
import './App.css';
import useTrivia from './useTrivia';
import CategoryModal from './components/CategoryModal';

export default function App() {
  const {isAnswerCorrect, nextQuestion, category} = useTrivia();

  return (
    <div className="app">
      <h1>Trivia</h1>
      {isAnswerCorrect !== null && <ResultModal nextQuestion={nextQuestion} />}
      {category == null && <CategoryModal />}
        <Scoreboard />      
      <div className="question-main">
        <Question />
      </div>
      <div className="question-footer">
        <button>Go to next question 👉</button>
      </div>
    </div>
  );
}
