import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { HashLink as Link } from 'react-router-hash-link';
import { Link as ScrollLink } from 'react-scroll';
import '../css/ServicesStyle.css';
import GitHubButton from '../GitHubButton';
import Slider from '../slider';
import image1 from '../../images/imgwebpages.jpg';
import image2 from '../../images/imgportfolio.png';
import image3 from '../../images/imgmobileportfolio.png';
import image4 from '../../images/imgCMS.jpg';
import image5 from '../../images/imgcmssklep.jpg';
import image6 from '../../images/imgcmsinterfejs.png';
import image7 from '../../images/imgfrontbackdatabase.png';
import image8 from '../../images/imgdopasowanie.png';
import image9 from '../../images/imgcustom.jpg';
import AnimatedSection from '../AnimatedSection';

const servicesImages = {
  websites: [image1, image2, image3],
  cms: [image4, image5, image6],
  fullstack: [image7, image8, image9]
};

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    window.scrollTo({
      top: section.offsetTop - 20,
      behavior: 'smooth'
    });
  }
};

export default function Services() {
  const { t } = useTranslation();

  useEffect(() => {
    const sectionId = sessionStorage.getItem('scrollToSection');
    if (sectionId) {
      scrollToSection(sectionId);
      sessionStorage.removeItem('scrollToSection');
    }
  }, []);

  return (
    <div className='Services'>
      <AnimatedSection>
      <h1 className='ServiceSection-title'>{t('servicesPage.title')}</h1>
      </AnimatedSection>
      <AnimatedSection delay={0.2}>
      <div className='ServiceSection' id='websites'>
        <div className='ServiceSection-content'>
          <div className='ServiceSection-text'>
            <h2>{t('servicesPage.professionalWebsites.title')}</h2>
            <div className='ServiceSection-description'>
              <p>{t('servicesPage.professionalWebsites.description')}</p>
              <ul>
                {t('servicesPage.professionalWebsites.features', { returnObjects: true }).map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            <div className="button-group">
              <GitHubButton link="https://github.com/Mirac00/ReactPortfolio2023.git" />
            </div>
          </div>
          <div className='service-slider-container'>
            <Slider images={servicesImages.websites} />
          </div>
        </div>
      </div>
      </AnimatedSection> 
      <AnimatedSection delay={0.3}>         
      <div className='ServiceSection' id='cms'>
        <div className='ServiceSection-content'>
          <div className='ServiceSection-text'>
            <h2>{t('servicesPage.cmsSystems.title')}</h2>
            <div className='ServiceSection-description'>
              <p>{t('servicesPage.cmsSystems.description')}</p>
              <ul>
                {t('servicesPage.cmsSystems.features', { returnObjects: true }).map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            <div className="button-group">
              <GitHubButton link="https://github.com/Mirac00/Notes.API.git" />
            </div>
          </div>
          <div className='service-slider-container'>
            <Slider images={servicesImages.cms} />
          </div>
        </div>
      </div>
      </AnimatedSection>    
      <AnimatedSection delay={0.4}>           
      <div className='ServiceSection' id='fullstack'>
        <div className='ServiceSection-content'>
          <div className='ServiceSection-text'>
            <h2>{t('servicesPage.fullstackSolutions.title')}</h2>
            <div className='ServiceSection-description'>
              <p>{t('servicesPage.fullstackSolutions.description')}</p>
              <ul>
                {t('servicesPage.fullstackSolutions.features', { returnObjects: true }).map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
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
          <div className='service-slider-container'>
            <Slider images={servicesImages.fullstack} />
          </div>
        </div>
      </div>
      </AnimatedSection>      
               
      <div className='ServiceNavigation'>
      
        <button onClick={() => scrollToSection('websites')}>
          {t('servicesPage.navigation.websites')}
        </button>
        <button onClick={() => scrollToSection('cms')}>
          {t('servicesPage.navigation.cms')}
        </button>
        <button onClick={() => scrollToSection('fullstack')}>
          {t('servicesPage.navigation.fullstack')}
        </button>
        
        <ScrollLink
          to='contact'
          spy={true}
          smooth={true}
          duration={500}
          className='contact-nav-button'
        >
          <span className='contact-text'>{t('servicesPage.navigation.contactText')}</span>
          <span className='contact-label'>{t('servicesPage.navigation.contactLabel')}</span>
        </ScrollLink>
      </div>
      
    </div>
  );
}