import React from 'react';
import { useSelector } from 'react-redux';

export default function Scoreboard() {
  const {correctScores, wrongScores} = useSelector(state => state.trivia)

  return (
    <div className="scoreboard">
      <div className="wrong">
        <strong>{wrongScores}</strong>
        
      </div>
      <div>-</div>
      <div className="correct">
  <strong>{correctScores}</strong>
        
      </div>
    </div>
  );
}
