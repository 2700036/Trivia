export type Question = {
  category: string;
  type: string;
  difficulty: 'easy' | 'medium' | 'hard';
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
  answers: string[];
};
export type Category = {
  id: number | 'any';
  name: string;
} | undefined;
export type Difficulty = Question['difficulty'] | undefined

export const SET_QUESTION = 'SET_QUESTION';
type SetQuestionAction = {
  type: typeof SET_QUESTION;
  payload: Question;
};
export const RESET_QUESTION = 'RESET_QUESTION';
type ResetQuestionAction = {
  type: typeof RESET_QUESTION;
};
export const SET_DIFFICULTY = 'SET_DIFFICULTY';
type SetDifficultyAction = {
  type: typeof SET_DIFFICULTY;
  payload: Difficulty;
};
export const RESET_DIFFICULTY = 'RESET_DIFFICULTY';
type ResetDifficultyAction = {
  type: typeof RESET_DIFFICULTY;
};
export const SET_CATEGORY = 'SET_CATEGORY';
type SetCategoryAction = {
  type: typeof SET_CATEGORY;
  payload: Category;
};
export const RESET_CATEGORY = 'RESET_CATEGORY';
type ResetCategoryAction = {
  type: typeof RESET_CATEGORY;
};
export const SET_ANSWER_STATUS = 'SET_ANSWER_STATUS';
type SetAnswerStatusAction = {
  type: typeof SET_ANSWER_STATUS;
  payload: string;
};

export type TriviaActionTypes = 
| SetQuestionAction
| ResetQuestionAction
| SetDifficultyAction
| ResetDifficultyAction
| SetCategoryAction
| ResetCategoryAction
| SetAnswerStatusAction