import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useActions } from '../actions';



export default function Question() {
  const {resetCategory, setAnswerStatus} = useActions();
  const {question: {answers, question}, category} = useSelector(state => state)
  
  return (
    <div className="question">
        <h2 className="category-button "
        dangerouslySetInnerHTML={{__html: category?.name}}
        onClick={resetCategory}
        />    
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
