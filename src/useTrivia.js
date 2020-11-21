import React, { useCallback, useEffect } from 'react';
import triviaApi from './services/triviaApiService';
import { useDispatch, useSelector } from 'react-redux';
import { setQuestion, resetCategory, resetQuestion } from './actions';


export default function useTrivia() {
  const dispatch = useDispatch();
  const { category, isAnswerCorrect, question } = useSelector((state) => state);

  const nextQuestion = useCallback(() => {
    dispatch(resetQuestion())
    triviaApi
      .getQuestion(category?.id)
      .then((data) => dispatch(setQuestion(data)))
      .catch((err) => console.log(err));
  }, [category, dispatch]);

  useEffect(() => {
    nextQuestion();    
  }, [category, nextQuestion]);

  useEffect(() => {
    const reset = () => setTimeout(() => {
      console.log(123)
      dispatch(resetCategory())
    }, 2000)
    reset()
    return () => {
      clearTimeout(reset)
    }
  }, [])

  return {isAnswerCorrect, nextQuestion, category, question}
}