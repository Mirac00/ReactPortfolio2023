import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../css/pagesCSS/ServicesStyle.css';
import GitHubButton from '../components/GitHubButton';
import Slider from '../components/slider';
import image1 from '../images/imgwebpages.jpg';
import image2 from '../images/imgportfolio.png';
import image3 from '../images/imgmobileportfolio.png';
import image4 from '../images/imgCMS.jpg';
import image5 from '../images/imgcmssklep.jpg';
import image6 from '../images/imgcmsinterfejs.png';
import image7 from '../images/imgfrontbackdatabase.png';
import image8 from '../images/imgdopasowanie.png';
import image9 from '../images/imgcustom.jpg';
import AnimatedSection from '../components/AnimatedSection';
import '../css/global.css';
import '../App.css';

const servicesImages = {
  websites: [image1, image2, image3],
  cms: [image4, image5, image6],
  fullstack: [image7, image8, image9]
};

const scrollToSection = (sectionId, offset = -20) => {
  const section = document.getElementById(sectionId);
  if (section) {
    const elementPosition = section.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset + offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

export default function Services() {
  const { t } = useTranslation();

  useEffect(() => {
    const sectionIdFromStorage = sessionStorage.getItem('scrollToSection');
    const hashSectionId = window.location.hash.substring(1);
    const sectionId = sectionIdFromStorage || hashSectionId;

    if (sectionId) {
      const timer = setTimeout(() => {
        scrollToSection(sectionId);
        sessionStorage.removeItem('scrollToSection');
        window.history.replaceState(null, null, ' ');
      }, 300);

      return () => clearTimeout(timer);
    }
  }, []);
  
  return (
    <div className='services'>
      <div className='container'>
        <AnimatedSection>
          <h1 className='services__title'>{t('servicesPage.title')}</h1>
        </AnimatedSection>
        
        <AnimatedSection delay={0.2}>
          <div className='article-section' id='websites'>
            <div className='article-section__header'>
              <h2>{t('servicesPage.professionalWebsites.title')}</h2>
              <div className='article-section__description'>
                <p>{t('servicesPage.professionalWebsites.description')}</p>
              </div>
            </div>
            <div className='article-section__content'>
              <div className='article-section__text'>
                <ul className='article-section__list'>
                  {t('servicesPage.professionalWebsites.features', { returnObjects: true }).map((feature, index) => (
                    <li className='article-section__item' key={index}>{feature}</li>
                  ))}
                </ul>
                <div className="button-group">
                  <GitHubButton link="https://github.com/Mirac00/ReactPortfolio2023.git" />
                </div>
              </div>
              <div className='article-section__media'>
                <Slider images={servicesImages.websites} />
              </div>
            </div>
          </div>
        </AnimatedSection> 
        
        <AnimatedSection delay={0.3}>         
          <div className='article-section' id='cms'>
            <div className='article-section__header'>
              <h2>{t('servicesPage.cmsSystems.title')}</h2>
              <div className='article-section__description'>
                <p>{t('servicesPage.cmsSystems.description')}</p>
              </div>
            </div>
            <div className='article-section__content'>
              <div className='article-section__text'>
                <ul className='article-section__list'>
                  {t('servicesPage.cmsSystems.features', { returnObjects: true }).map((feature, index) => (
                    <li className='article-section__item' key={index}>{feature}</li>
                  ))}
                </ul>
                <div className="button-group">
                  <GitHubButton link="https://github.com/Mirac00/Notes.API.git" />
                </div>
              </div>
              <div className='article-section__media'>
                <Slider images={servicesImages.cms} />
              </div>
            </div>
          </div>
        </AnimatedSection>    
        
        <AnimatedSection delay={0.4}>           
          <div className='article-section' id='fullstack'>
            <div className='article-section__header'>
              <h2>{t('servicesPage.fullstackSolutions.title')}</h2>
              <div className='article-section__description'>
                <p>{t('servicesPage.fullstackSolutions.description')}</p>
              </div>
            </div>
            <div className='article-section__content'>
              <div className='article-section__text'>
                <ul className='article-section__list'>
                  {t('servicesPage.fullstackSolutions.features', { returnObjects: true }).map((feature, index) => (
                    <li className='article-section__item' key={index}>{feature}</li>
                  ))}
                </ul>
                <div className="button-group">
                  <div className="github-button-container">
                    <h3>{t('servicesPage.professionalWebsites.githubButton')}</h3>
                    <GitHubButton link="https://github.com/Mirac00/SM-Trend-Frontend.git" />
                  </div>
                  <div className="github-button-container">
                    <h3>{t('servicesPage.professionalWebsites.githubButton2')}</h3>
                    <GitHubButton link="https://github.com/Mirac00/SM-Trend-Backend.git" />
                  </div>
                </div>
              </div>
              <div className='article-section__media'>
                <Slider images={servicesImages.fullstack} />
              </div>
            </div>
          </div>
        </AnimatedSection>      
      </div>
    </div>
  );
}