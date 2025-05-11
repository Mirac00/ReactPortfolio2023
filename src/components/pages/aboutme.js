// components/pages/AboutMe.js
import React, { useState } from 'react';
import '../../App.css';
import '../css/AboutMeStyle.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import img1 from '../../images/1port.jpg';
import img2 from '../../images/2port.jpg';
import Popup from '../Popup';
import AnimatedSection from '../AnimatedSection';

export default function AboutMe() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const images = [img1, img2];

  const handleImgClick = (index) => {
    setCurrentImgIndex(index);
    setIsOpen(true);
  };

  const handleClose = () => setIsOpen(false);

  return (
    <>
      <AnimatedSection>
        <section id='aboutme' className='aboutme'>
          <h1 className='aboutme__title'>{t('aboutme.title')}</h1>
          <div className='aboutme__card'>
            <div className="aboutme__images">
              <img src={img1} alt="Port 1" onClick={() => handleImgClick(0)} />
              <img src={img2} alt="Port 2" onClick={() => handleImgClick(1)} />
            </div>
            <div className='aboutme__links'>
              <strong>{t('aboutme.links')}</strong>
              <p><FaGithub className='icon' /> 
                <a href="https://github.com/Mirac00?tab=repositories" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </p>
              <p><FaLinkedin className='icon' /> 
                <a href="https://www.linkedin.com/in/s%C5%82awomir-zajac-69ba94259/" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>
      
      <Popup 
        isOpen={isOpen}
        onClose={handleClose}
        images={images}
        currentImgIndex={currentImgIndex}
      />
    </>
  );
}