// components/Popup.js
import React from 'react';
import ReactDOM from 'react-dom';
import { FaTimes, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './css/Popup.css';

export default function Popup({ isOpen, onClose, children, onNext, onPrev, showNavigation }) {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="popup-close" onClick={onClose}>
          <FaTimes />
        </button>
        {children}
        {showNavigation && (
          <div className="popup-navigation">
            <button className="popup-nav-btn" onClick={onPrev}>
              <FaArrowLeft />
            </button>
            <button className="popup-nav-btn" onClick={onNext}>
              <FaArrowRight />
            </button>
          </div>
        )}
      </div>
    </div>,
    document.getElementById('popup-root')
  );
}