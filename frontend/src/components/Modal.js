import React from "react";
import "../styles/Modal.css"; 

const Modal = ({ content, onClose }) => {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        <p>{content}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
