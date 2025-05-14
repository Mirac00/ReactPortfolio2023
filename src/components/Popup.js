import React from 'react';
import ReactDOM from 'react-dom';
import { FaTimes } from 'react-icons/fa';
import PhotoSlider from './slider'; // Importujemy istniejący komponent slidera
import '../css/componentsCSS/Popup.css';

const Popup = ({ isOpen, onClose, images, currentImgIndex }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="popup-close" onClick={onClose}>
          <FaTimes />
        </button>
        
        <div className="popup-slider-container">
          <PhotoSlider images={images} initialSlide={currentImgIndex} />
        </div>
      </div>
    </div>,
    document.getElementById('popup-root')
  );
};

export default Popup;