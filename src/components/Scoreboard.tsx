import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../reducers/rootReducer';
import { TriviaState } from '../reducers/trivia';

export default function Scoreboard() {
  const {correctScores, wrongScores} = useSelector<RootState, TriviaState>(state => state.trivia);

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
