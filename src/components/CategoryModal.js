import React from 'react';
import categories from '../categories';

import { useActions } from '../actions';
import { motion } from "framer-motion"

export default function CategoryModal() {
  const {setCategory} = useActions();
  
  return (
    <div className="result-modal">
      <motion.div className="overlay" 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      />
      <motion.div className="result-modal-content"
      initial={{scale: 0}}
      animate={{scale: 1}}
      >
      <h2>Select Category:</h2>

{categories?.map((category, index) => (
  <button className="modal-button"
  key={category+index} 
  dangerouslySetInnerHTML={{__html: category.name}}
  onClick={()=>setCategory(category)}
  />
))}
      </motion.div>
    </div>
  );
}

