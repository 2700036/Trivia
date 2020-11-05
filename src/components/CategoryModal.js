import React from 'react';
import categories from '../categories';
import { useDispatch } from 'react-redux';
import { setCategory } from '../actions';

export default function CategoryModal() {
  const dispatch = useDispatch();
  
  return (
    <div className="result-modal">
      <div className="overlay" />
      <div className="result-modal-content">
      <h2>Select Category:</h2>

{categories?.map((category, index) => (
  <button className="modal-button"
  key={category+index} 
  dangerouslySetInnerHTML={{__html: category.name}}
  onClick={()=>dispatch(setCategory(category))}
  />
))}
      </div>
    </div>
  );
}

{/* <select 
      value={category}
      onChange={e=>dispatch(setCategory(e.target.value))}
      >
        {categories.map((category, index) => (
          <option 
          key={index} 
          value={category.id}
          dangerouslySetInnerHTML={{__html: category.name}}
          />
            
          
        ))}
      </select> */}