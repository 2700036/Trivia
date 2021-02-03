import shuffle from "lodash.shuffle";
import { CategoryId, Difficulty } from "../constants";
import { Question } from "../reducers/types";

type GetQuestion = (category: CategoryId, difficulty?: Difficulty | undefined) => Promise<Question>
interface TriviaApiServiceInterface {
  getQuestion: GetQuestion
}

class TriviaApiService implements TriviaApiServiceInterface {
  getQuestion: GetQuestion = (category, difficulty = 'medium') => {
    return fetch (`https://opentdb.com/api.php?amount=1${category !== 'any' ? `&category=${category}` : ''}${category !== 'any' ? `&difficulty=${difficulty}` : ''}
    `)
    .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
    .then(({results: [q]}) => q)
    .then(q=>{
      console.log(category)
      q.answers = shuffle([...q.incorrect_answers, q.correct_answer])
      return q
    })
    .catch(err => {
      console.log(err);
      throw err;
    })
  }
}

const triviaApi = new TriviaApiService();
export default triviaApi;

