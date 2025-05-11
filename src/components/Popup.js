// Popup.js
import React from 'react';
import ReactDOM from 'react-dom';
import { FaTimes } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './css/Popup.css';

const Popup = ({ isOpen, onClose, images, currentImgIndex, onNext, onPrev }) => {
  if (!isOpen) return null;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: currentImgIndex,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true
        }
      }
    ]
  };

  return ReactDOM.createPortal(
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="popup-close" onClick={onClose}>
          <FaTimes />
        </button>
        
        <div className="popup-slider-container">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Popup ${index}`} className="popup-slider-image" />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>,
    document.getElementById('popup-root')
  );
};

const NextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} popup-arrow popup-next-arrow`}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} popup-arrow popup-prev-arrow`}
      onClick={onClick}
    />
  );
};

export default Popup;