const initialState = {
  question: {},
  category: {
    id: 'any',
    name: 'Any Category',
  },
  isAnswerCorrect: null,
  correctScores: 0,
  wrongScores: 0
}

export default (state = initialState, { type, payload }) => {
  
  switch (type) {
  case 'SET_QUESTION':
    return { ...state, isAnswerCorrect: null, question: payload }
  case 'RESET_QUESTION':
    return { ...state, question: null }
  case 'SET_CATEGORY':
    return { ...state, category: payload }
  case 'RESET_CATEGORY':
    return { ...state, category: null }
  case 'SET_ANSWER_STATUS':
    const isAnswerCorrect = state.question.correct_answer === payload;    
    return isAnswerCorrect 
    ? { ...state, isAnswerCorrect, correctScores: ++state.correctScores  }
    : { ...state, isAnswerCorrect, wrongScores: ++state.wrongScores }    

  default:
    return state
  }
}
