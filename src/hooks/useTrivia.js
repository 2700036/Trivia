import React, { useCallback, useEffect } from 'react';

import { useSelector } from 'react-redux';
import triviaApi from '../services/triviaApiService';
import { useActions } from './useActions';

export default function useTrivia() {
  
  const {setQuestion, resetCategory, resetQuestion} = useActions();
  const { category, isAnswerCorrect, question, difficulty } = useSelector((state) => state.trivia);

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
    const reset = () => setTimeout(() => {      
      resetCategory()
    }, 2000)
    reset()
    return () => {
      clearTimeout(reset)
    }
  }, [])

  return {isAnswerCorrect, nextQuestion, category, difficulty, question}
}