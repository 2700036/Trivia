import React from 'react'
import { useDispatch } from 'react-redux'

export function useActions() {
  const dispatch = useDispatch();
  const setQuestion = (payload) => dispatch({
    type: 'SET_QUESTION',
    payload
  })
  const resetQuestion = () => dispatch({
    type: 'RESET_QUESTION',  
  })
  const setCategory = (payload) => dispatch({
    type: 'SET_CATEGORY',
    payload
  })
  const setAnswerStatus = (payload) => dispatch({
    type: 'SET_ANSWER_STATUS',
    payload
  })
  const resetCategory = () => dispatch({
    type: 'RESET_CATEGORY'  
  }) 


  return {
    setQuestion, 
    resetQuestion, 
    setCategory, 
    setAnswerStatus, 
    resetCategory,
  }
}
