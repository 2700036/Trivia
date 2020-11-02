import shuffle from "lodash.shuffle";

class TriviaApiService {
  getQuestion = () => {
    return fetch ('https://opentdb.com/api.php?amount=1')
    .then(res=> res.ok ? res.json() : new Promise.reject(`Ошибка: ${res.status}`))
    .then(({results: [q]}) => q)
    .then(q=>{
      q.answers = shuffle([...q.incorrect_answers, q.correct_answer])
      return q
    })
  }
}

const triviaApi = new TriviaApiService();
export default triviaApi;