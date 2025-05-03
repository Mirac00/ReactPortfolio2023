import './css/Popup.css';
import React from 'react';
import { FaTimes, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export default function Popup({ isOpen, onClose, children, onNext, onPrev, showNavigation }) {
  if (!isOpen) return null;

  return (
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
    </div>
  );
}