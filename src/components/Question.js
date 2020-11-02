import React from 'react';
import { useSelector } from 'react-redux';

export default function Question() {
  const {answers, question} = useSelector(({question}) => question)

  return (
    <div className="question">
      <h2 dangerouslySetInnerHTML={{__html: question}}/>

      {answers?.map((answer, index) => (
        <button key={answer+index} dangerouslySetInnerHTML={{__html: answer}}/>
      ))}
    </div>
  );
}
