const initialState = {
  question: {}
}

export default (state = initialState, { type, payload }) => {
  console.log(type, payload)
  switch (type) {

  case 'SET_QUESTION':
    return { ...state, question: payload }

  default:
    return state
  }
}
