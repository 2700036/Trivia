import React, { useEffect } from 'react';
import Question from './components/Question';
import CategorySelector from './components/CategorySelector';
import ResultModal from './components/ResultModal';
import Scoreboard from './components/Scoreboard';
import './App.css';
import triviaApi from './services/triviaApiService';
import { useDispatch, useSelector } from 'react-redux';
import { setQuestion } from './actions';


export default function App() {
  const dispatch = useDispatch();
  const category = useSelector(({category})=>category);  

  useEffect(() => {
    triviaApi.getQuestion(category)
    .then(data=> dispatch(setQuestion(data)))
    .catch(err => console.log(err))    
  }, [category])



  return (
    <div className="app">
      {/* show the result modal ----------------------- */}
      {/* <ResultModal /> */}

      {/* question header ----------------------- */}
      <div className="question-header">
        <CategorySelector />
        <Scoreboard />
      </div>

      {/* the question itself ----------------------- */}
      <div className="question-main">
        <Question />
      </div>

      {/* question footer ----------------------- */}
      <div className="question-footer">
        <button>Go to next question 👉</button>
      </div>
    </div>
  );
}
