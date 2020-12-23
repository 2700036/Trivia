import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useActions } from '../actions';



export default function Question() {
  const {resetCategory, setAnswerStatus, resetDifficulty} = useActions();
  const {question: {answers, question}, category, difficulty} = useSelector(state => state)
  
  return (
    <div className="question">
      <div className="question-header">
       <h2 className="category-button "
         dangerouslySetInnerHTML={{__html: category?.name}}
         onClick={resetCategory}
       />    
       {category?.id !== 'any' && <h2
       className="category-button "
       dangerouslySetInnerHTML={{__html: difficulty}}
       onClick={resetDifficulty}
       />}
      </div>
      <h2 dangerouslySetInnerHTML={{__html: question}}/>

      {answers?.map((answer, index) => (
        <button 
        key={answer+index} 
        dangerouslySetInnerHTML={{__html: answer}}
        onClick={()=>setAnswerStatus(answer)}
        />
      ))}
    </div>
  );
}
