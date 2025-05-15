import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../css/pagesCSS/DocumentsStyle.css';
import image1 from '../images/dataimg.png';
import image2 from '../images/netsec.png';
import image3 from '../images/adobe.png';
import Popup from '../components/Popup';
import AnimatedSection from '../components/AnimatedSection';

export default function Documents() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const images = [image1, image2, image3];

  const openPopup = (index) => {
    setCurrentImgIndex(index);
    setIsOpen(true);
  };

  const closePopup = () => setIsOpen(false);

  return (
    <>
      <div className="documents">
        <div className="container">
          <AnimatedSection>
            <h1 className="documents__title">{t('certificatesPage.title')}</h1>
            <p>{t('certificatesPage.titleDesc')}</p>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <div className="documents__article">
              <div className="documents__text">
                <h2>{t('certificatesPage.certificate1.title')}</h2>
                <p>{t('certificatesPage.certificate1.description')}</p>
              </div>
              <div className="documents__image" onClick={() => openPopup(0)}>
                <img src={image1} alt={t('certificatesPage.certificate1.title')} className="documents__certificate" />
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={0.3}>
            <div className="documents__article">
              <div className="documents__text">
                <h2>{t('certificatesPage.certificate2.title')}</h2>
                <p>{t('certificatesPage.certificate2.description')}</p>
              </div>
              <div className="documents__image" onClick={() => openPopup(1)}>
                <img src={image2} alt={t('certificatesPage.certificate2.title')} className="documents__certificate" />
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={0.4}>
            <div className="documents__article">
              <div className="documents__text">
                <h2>{t('certificatesPage.certificate3.title')}</h2>
                <p>{t('certificatesPage.certificate3.description')}</p>
              </div>
              <div className="documents__image" onClick={() => openPopup(2)}>
                <img src={image3} alt={t('certificatesPage.certificate3.title')} className="documents__certificate" />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      <Popup 
        isOpen={isOpen}
        onClose={closePopup}
        images={images}
        currentImgIndex={currentImgIndex}
      />
    </>
  );
}