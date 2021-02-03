import React from 'react'
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { Category, Difficulty } from '../constants';
import { Question, RESET_CATEGORY, RESET_DIFFICULTY, RESET_QUESTION, SET_ANSWER_STATUS, SET_CATEGORY, SET_DIFFICULTY, SET_QUESTION, TriviaActionTypes } from '../reducers/types';

export function useActions() {
  const dispatch = useDispatch<Dispatch<TriviaActionTypes>>();
  const setQuestion = (payload: Question) => dispatch({
    type: SET_QUESTION,
    payload
  });
  const resetQuestion = (): TriviaActionTypes => dispatch({
    type: RESET_QUESTION,  
  });
  const setCategory = (payload: Category):TriviaActionTypes => dispatch({
    type: SET_CATEGORY,
    payload
  });
  const setAnswerStatus = (payload: string): TriviaActionTypes => dispatch({
    type: SET_ANSWER_STATUS,
    payload
  });
  const setDifficulty = (payload: {name: Difficulty}): TriviaActionTypes => dispatch({
    type: SET_DIFFICULTY,
    payload: payload.name
  });
  const resetCategory = (): TriviaActionTypes => dispatch({
    type: RESET_CATEGORY  
  });
  const resetDifficulty = (): TriviaActionTypes => dispatch({
    type: RESET_DIFFICULTY  
  }); 

  return {
    setQuestion, 
    resetQuestion, 
    setCategory, 
    setAnswerStatus, 
    resetCategory,
    setDifficulty,
    resetDifficulty,
  }  
}


 