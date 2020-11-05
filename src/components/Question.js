import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAnswerStatus, resetCategory } from '../actions';



export default function Question() {
  const dispatch = useDispatch();
  const {question: {answers, question}, category} = useSelector(state => state)
  
  return (
    <div className="question">
        <h2 className="category-button "
        dangerouslySetInnerHTML={{__html: category?.name}}
        onClick={()=>dispatch(resetCategory())}
        />    
      <h2 dangerouslySetInnerHTML={{__html: question}}/>

      {answers?.map((answer, index) => (
        <button 
        key={answer+index} 
        dangerouslySetInnerHTML={{__html: answer}}
        onClick={()=>dispatch(setAnswerStatus(answer))}
        />
      ))}
    </div>
  );
}
