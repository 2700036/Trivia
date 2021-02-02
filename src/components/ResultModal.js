import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from "framer-motion"

export default function ResultModal({nextQuestion}) {
  const {question, isAnswerCorrect} = useSelector(state=>state.trivia);
  console.log(isAnswerCorrect)
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

        {!isAnswerCorrect && (
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
