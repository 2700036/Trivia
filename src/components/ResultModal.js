import React from 'react';
import { useSelector } from 'react-redux';


export default function ResultModal({nextQuestion}) {
  const {question, isAnswerCorrect} = useSelector(state=>state)
  return (
    <div className="result-modal">
      <div className="overlay" />
      <div className="result-modal-content">
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
        <strong dangerouslySetInnerHTML={{ __html: question.correct_answer}}/>
        </div>
        </>
        )}

        <button onClick={nextQuestion}>Go to next question 👉</button>
      </div>
    </div>
  );
}
