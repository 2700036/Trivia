import React from "react";
import { motion } from "framer-motion";

import { TriviaActionTypes } from "../reducers/types";
import { useActions } from "../hooks/useActions";

type ModalProps = {
  items: ReadonlyArray<{
    id: string | number;
    name: string;
}>, 
  modalTitle: string, 
  callback: any 
}

export default function Modal({ items, modalTitle, callback }: ModalProps) {
  console.log(items)
  return (
    <div className="result-modal">
      <motion.div
        className="overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />
      <motion.div
        className="result-modal-content"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
      >
        <h2>{`Select ${modalTitle}:`}</h2>
        {items.map((item, index) => (
          <button
            className="modal-button"
            key={index}
            dangerouslySetInnerHTML={{ __html: item.name }}
            onClick={() => callback(item)}
          />
        ))}
      </motion.div>
    </div>
  );
}
