import React, { useState } from 'react';
import '../../App.css';
import '../css/AboutMeStyle.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTimes } from 'react-icons/fa';
import img1 from '../../images/1port.png';
import img2 from '../../images/2port.png';

export default function AboutMe() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState(null);

  const handleImgClick = (img) => {
    setCurrentImg(img);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setCurrentImg(null);
  };

  const nextImage = () => {
    setCurrentImg(currentImg === img1 ? img2 : img1);
  };

  return (
    <section id='aboutme' className='aboutme'>
      <h1 className='aboutme__title'>O mnie</h1>
      <div className='aboutme__card'>
        <div className="aboutme__images">
          <img src={img1} alt="Port 1" onClick={() => handleImgClick(img1)} />
          <img src={img2} alt="Port 2" onClick={() => handleImgClick(img2)} />
        </div>
        <div className='aboutme__links'>
          <strong>Linki:</strong>
          <p><FaGithub className='icon' /> <a href="https://github.com/Mirac00?tab=repositories" target="_blank" rel="noopener noreferrer">GitHub</a></p>
          <p><FaLinkedin className='icon' /> <a href="https://www.linkedin.com/in/s%C5%82awomir-zajac-69ba94259/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
        </div>
      </div>
      {isOpen && (
        <div className="popup">
          <img src={currentImg} alt="Fullscreen" className="popup__img" />
          <div className="popup__controls">
            <button onClick={nextImage}>Następne zdjęcie</button>
            <button className="popup__close" onClick={handleClose}><FaTimes /></button>
          </div>
        </div>
      )}
    </section>
  );
}
