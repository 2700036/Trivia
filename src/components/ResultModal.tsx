import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from "framer-motion";
import { RootState } from '../reducers/rootReducer';
import { TriviaState } from '../reducers/trivia';

type ResultModalProps = {
  nextQuestion: () => void
}

export default function ResultModal({nextQuestion}: ResultModalProps) {
  const {question, isAnswerCorrect} = useSelector<RootState, TriviaState>(state=>state.trivia);
  
  return (
    <div className="result-modal">
      <motion.div className="overlay" 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      />
      <motion.div className="result-modal-content"
      initial={{scale: 0}}
      animate={{scale: 1}}
      >
        {isAnswerCorrect && <h3>
          👊
          <br />
          Correct!
        </h3>}

        {!isAnswerCorrect && question && (
          <>
        <h3>
          😢
          <br />
          Wrong...
        </h3>

        <div className="correct-answer">
          <small>The correct answer is:</small>
          <br />
        <strong dangerouslySetInnerHTML={{ __html: question?.correct_answer}}/>
        </div>
        </>
        )}

        <button onClick={nextQuestion}>Go to next question 👉</button>
      </motion.div>
    </div>
  );
}
