// Documents.js
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../css/DocumentsStyle.css';
import image1 from '../../images/dataimg.png';
import image2 from '../../images/netsec.png';
import image3 from '../../images/adobe.png';
import Popup from '../Popup';
import AnimatedSection from '../AnimatedSection';

export default function Documents() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const images = [image1, image2, image3];

  const openPopup = (index) => {
    setCurrentImgIndex(index);
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  const nextImage = () => {
    setCurrentImgIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImgIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className="documents-box">
        <div className="documents-container">
        <AnimatedSection>
          <h1 className="documents-title">{t('certificatesPage.title')}</h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
          <div className="document-article">
            <div className="document-image" onClick={() => openPopup(0)}>
              <img src={image1} alt={t('certificatesPage.certificate1.title')} />
            </div>
            <div className="document-text">
              <h2>{t('certificatesPage.certificate1.title')}</h2>
              <p>{t('certificatesPage.certificate1.description')}</p>
            </div>
          </div>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
          <div className="document-article">
            <div className="document-image" onClick={() => openPopup(1)}>
              <img src={image2} alt={t('certificatesPage.certificate2.title')} />
            </div>
            <div className="document-text">
              <h2>{t('certificatesPage.certificate2.title')}</h2>
              <p>{t('certificatesPage.certificate2.description')}</p>
            </div>
          </div>
          </AnimatedSection>
          <AnimatedSection delay={0.4}>
          <div className="document-article">
            <div className="document-image" onClick={() => openPopup(2)}>
              <img src={image3} alt={t('certificatesPage.certificate3.title')} />
            </div>
            <div className="document-text">
              <h2>{t('certificatesPage.certificate3.title')}</h2>
              <p>{t('certificatesPage.certificate3.description')}</p>
            </div>
          </div>
          </AnimatedSection>
        </div>
      </div>

      <Popup 
        isOpen={isOpen} 
        onClose={closePopup}
        onNext={nextImage}
        onPrev={prevImage}
        showNavigation={true}
      >
        <img src={images[currentImgIndex]} alt="Certificate" className="popup-img" />
      </Popup>
    </>
  );
}