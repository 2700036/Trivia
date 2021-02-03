import React, { useCallback, useEffect } from 'react';

import { useSelector } from 'react-redux';
import { RootState } from '../reducers/rootReducer';
import { TriviaState } from '../reducers/trivia';
import triviaApi from '../services/triviaApiService';
import { useActions } from './useActions';

export default function useTrivia() {
  
  const {setQuestion, resetCategory, resetQuestion} = useActions();
  const { category, isAnswerCorrect, question, difficulty } = useSelector<RootState, TriviaState>((state) => state.trivia);

  const nextQuestion = useCallback(() => {    
    resetQuestion();
    triviaApi
      .getQuestion(category?.id, difficulty)
      .then((data) => setQuestion(data))
      .catch((err) => console.log(err));
  }, [category, difficulty]);

  useEffect(() => {
    if (!category || !difficulty) return;
    nextQuestion();    
  }, [category, nextQuestion]);

  useEffect(() => {
    const reset: ReturnType<typeof setTimeout> = setTimeout(() => {      
      resetCategory()
    }, 2000);   
    return () => {
      clearTimeout(reset)
    }
  }, [])

  return {isAnswerCorrect, nextQuestion, category, difficulty, question}
}