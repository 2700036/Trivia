import React from 'react';
import Question from './components/Question';

import ResultModal from './components/ResultModal';
import Scoreboard from './components/Scoreboard';
import './App.css';
import useTrivia from './useTrivia';
import CategoryModal from './components/CategoryModal';
import { motion } from 'framer-motion';

export default function App() {
  const {isAnswerCorrect, nextQuestion, category, question} = useTrivia();
  
  return (
    <div className="app">
      <h1>Trivia</h1>
      {isAnswerCorrect !== null && question && <ResultModal nextQuestion={nextQuestion} />}
      {category == null && <CategoryModal />}
      <Scoreboard />      
      {question && <motion.div 
      className="question-main"
      initial={{scale: 0}}
      animate={{scale: 1}}
      >
        <Question />
      </motion.div>}
      <div className="question-footer">
      {question && <button>Go to next question 👉</button>}
      </div>
    </div>
  );
}
