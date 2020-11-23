import React, { useCallback, useEffect } from 'react';
import triviaApi from './services/triviaApiService';
import { useDispatch, useSelector } from 'react-redux';
import { useActions } from './actions';


export default function useTrivia() {
  
  const {setQuestion, resetCategory, resetQuestion} = useActions();
  const { category, isAnswerCorrect, question } = useSelector((state) => state);

  const nextQuestion = useCallback(() => {
    resetQuestion();
    triviaApi
      .getQuestion(category?.id)
      .then((data) => setQuestion(data))
      .catch((err) => console.log(err));
  }, [category]);

  useEffect(() => {
    nextQuestion();    
  }, [category, nextQuestion]);

  useEffect(() => {
    const reset = () => setTimeout(() => {
      console.log(123)
      resetCategory()
    }, 2000)
    reset()
    return () => {
      clearTimeout(reset)
    }
  }, [])

  return {isAnswerCorrect, nextQuestion, category, question}
}