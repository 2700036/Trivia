import {
  SET_QUESTION,
  RESET_QUESTION,
  SET_DIFFICULTY,
  RESET_DIFFICULTY,
  SET_CATEGORY,
  RESET_CATEGORY,
  SET_ANSWER_STATUS,
  TriviaActionTypes,
  Difficulty,
  Category,
  Question,
} from './types';

type TriviaState = {
  question: Question | undefined,
  category: Category,
  isAnswerCorrect: boolean | undefined,
  correctScores: number,
  wrongScores: number,
  difficulty: Difficulty,
}

const initialState: TriviaState = {
  question: undefined,
  category: {
    id: 'any',
    name: 'Any Category',
  },
  isAnswerCorrect: undefined,
  correctScores: 0,
  wrongScores: 0,
  difficulty: 'medium',
};

const isQuestion = (question: Question | undefined): question is Question => {
  return (question as Question).correct_answer ? true : false;
}

export default (state = initialState, action: TriviaActionTypes): TriviaState => {
  switch (action.type) {
    case SET_QUESTION:
      return { ...state, isAnswerCorrect: undefined, question: action.payload };
    case RESET_QUESTION:
      return { ...state, question: undefined };
    case SET_DIFFICULTY:
      return { ...state, difficulty: action.payload };
    case RESET_DIFFICULTY:
      return { ...state, difficulty: undefined };
    case SET_CATEGORY:
      return { ...state, category: action.payload };
    case RESET_CATEGORY:
      return { ...state, category: undefined };
    case SET_ANSWER_STATUS:
      if(!isQuestion(state.question))return state;
      const isAnswerCorrect = state.question.correct_answer === action.payload;
      return isAnswerCorrect
        ? { ...state, isAnswerCorrect, correctScores: ++state.correctScores }
        : { ...state, isAnswerCorrect, wrongScores: ++state.wrongScores };

    default:
      const x:never = action;
    }
    return state;
};
