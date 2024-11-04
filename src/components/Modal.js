import React from 'react';
import './Modal.css';

function Modal({ show, content, onClose }) {
  if (!show) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>&times;</button>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default Modal;
