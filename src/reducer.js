const initialState = {
  question: {},
  category: 'any'
}

export default (state = initialState, { type, payload }) => {
  console.log(type, payload, state)
  switch (type) {

  case 'SET_QUESTION':
    return { ...state, question: payload }
  case 'SET_CATEGORY':
    return { ...state, category: payload }

  default:
    return state
  }
}
