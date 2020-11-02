import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import categories from '../categories';
import { setCategory } from '../actions';

export default function CategorySelector() {
  const dispatch = useDispatch();
  const category = useSelector(({category})=>category);

  return (
    <div className="category-selector">
      <p>Select Category</p>
      <select 
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
      </select>
    </div>
  );
}
