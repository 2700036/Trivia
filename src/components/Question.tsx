import React from 'react';
import { useSelector } from 'react-redux';
import { useActions } from '../hooks/useActions';
import { motion } from "framer-motion";
import { RootState } from '../reducers/rootReducer';
import { TriviaState } from '../reducers/trivia';


export default function Question() {
  const { resetCategory, setAnswerStatus, resetDifficulty } = useActions();
  const { question, category, difficulty } = useSelector<RootState, TriviaState>(state => state.trivia)

  return (
    <>
      {category && question && <motion.div
        className="question-main"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
      >
        <div className="question">
          <div className="question-header">
            <h2 className="category-button "
              dangerouslySetInnerHTML={{ __html: category?.name }}
              onClick={resetCategory}
            />
            {category?.id !== 'any' && difficulty && <h2
              className="category-button "
              dangerouslySetInnerHTML={{ __html: difficulty }}
              onClick={resetDifficulty}
            />}
          </div>          
            <h2 dangerouslySetInnerHTML={{ __html: question.question }} />
          {question.answers.map((answer, index) => (
            <button
              key={answer + index}
              dangerouslySetInnerHTML={{ __html: answer }}
              onClick={() => setAnswerStatus(answer)}
            />
          ))
          }
        </div>
      </motion.div>}
    </>
  );
}
