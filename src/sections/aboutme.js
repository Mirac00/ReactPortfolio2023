// components/pages/AboutMe.js
import React, { useState } from 'react';
import '../App.css';
import '../css/sectionsCSS/AboutMeStyle.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import Popup from '../components/Popup';
import AnimatedSection from '../components/AnimatedSection';

// Importuj wszystkie wersje językowe zdjęć
import pl1 from '../images/1PL.png';
import pl2 from '../images/2PL.png';
import en1 from '../images/1EN.png';
import en2 from '../images/2EN.png';

export default function AboutMe() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  
  // Wybierz odpowiednie zdjęcia w zależności od języka
  const images = i18n.language === 'pl' ? [pl1, pl2] : [en1, en2];

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
              <img 
                src={images[0]} 
                alt="Portfolio 1" 
                onClick={() => handleImgClick(0)} 
              />
              <img 
                src={images[1]} 
                alt="Portfolio 2" 
                onClick={() => handleImgClick(1)} 
              />
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