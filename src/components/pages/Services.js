import React, { useEffect } from 'react';
import '../css/ServicesStyle.css';
import { Link } from 'react-router-dom';
import GitHubButton from '../GitHubButton';
import Slider from '../slider';
import image1 from '../../images/N111.png';
import image2 from '../../images/p222.png';
import image3 from '../../images/s111.png';

const servicesImages = {
  websites: [image2, image3, image1],
  cms: [image1, image2, image3],
  fullstack: [image3, image2, image1]
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
  useEffect(() => {
    // Check if there's a section to scroll to after page load
    const sectionId = sessionStorage.getItem('scrollToSection');
    if (sectionId) {
      scrollToSection(sectionId);
      // Clear the stored section ID
      sessionStorage.removeItem('scrollToSection');
    }
  }, []);
  return (
    <div className='Services'>
      <h1 className='ServiceSection-title'>Moje Usługi</h1>

      <div className='ServiceSection' id='websites'>
        <div className='ServiceSection-content'>
          <div className='ServiceSection-text'>
            <h2>Profesjonalne Strony Internetowe</h2>
            <div className='ServiceSection-description'>
              <p>Specjalizuję się w projektowaniu i implementacji:</p>
              <ul>
                <li>Stron wizytówek i landing pages</li>
                <li>Portfolio dla profesjonalistów</li>
                <li>Stron firmowych i instytucjonalnych</li>
                <li>One-page applications</li>
              </ul>
            </div>
            <div className="button-group">
              <GitHubButton link="https://github.com/Mirac00/ReactPortfolio2023.git" />
              <Link to='/Fronttech' className='see-more-button'>Zobacz przykłady</Link>
            </div>
          </div>
          <div className='service-slider-container'>
            <Slider images={servicesImages.websites} />
          </div>
        </div>
      </div>

      <div className='ServiceSection' id='cms'>
        <div className='ServiceSection-content'>
          <div className='ServiceSection-text'>
            <h2>Systemy CMS i E-commerce</h2>
            <div className='ServiceSection-description'>
              <p>Oferuję kompleksowe systemy:</p>
              <ul>
                <li>Sklepy internetowe</li>
                <li>Systemy zarządzania treścią (CMS)</li>
                <li>Platformy sprzedażowe</li>
                <li>Systemy zarządzania produktami</li>
              </ul>
            </div>
            <div className="button-group">
              <GitHubButton link="https://github.com/Mirac00/Notes.API.git" />
              <Link to='/Netapi' className='see-more-button'>Zobacz możliwości</Link>
            </div>
          </div>
          <div className='service-slider-container'>
            <Slider images={servicesImages.cms} />
          </div>
        </div>
      </div>

      <div className='ServiceSection' id='fullstack'>
        <div className='ServiceSection-content'>
          <div className='ServiceSection-text'>
            <h2>Kompleksowe Systemy Fullstack</h2>
            <div className='ServiceSection-description'>
              <p>Tworzę dedykowane systemy łączące:</p>
              <ul>
                <li>Zaawansowane interfejsy użytkownika</li>
                <li>Wydajne API i logikę biznesową</li>
                <li>Integrację z bazami danych</li>
                <li>Rozwiązania marketingowe i analityczne</li>
              </ul>
            </div>
            <div className="button-group">
              <div className="github-button-container">
                <h3>FrontEnd</h3>
                <GitHubButton link="https://github.com/Mirac00/SM-Trend-Frontend.git" />
              </div>
              <div className="github-button-container">
                <h3>BackEnd</h3>
                <GitHubButton link="https://github.com/Mirac00/SM-Trend-Backend.git" />
              </div>
              <Link to='/SMTrend' className='see-more-button'>Zobacz case study</Link>
            </div>
          </div>
          <div className='service-slider-container'>
            <Slider images={servicesImages.fullstack} />
          </div>
        </div>
      </div>

      <div className='ServiceNavigation'>
        <button onClick={() => scrollToSection('websites')}>Strony WWW</button>
        <button onClick={() => scrollToSection('cms')}>Systemy CMS</button>
        <button onClick={() => scrollToSection('fullstack')}>Rozwiązania Fullstack</button>
        <Link to='/contact' className='contact-nav-button'>
          <span className='contact-text'>Jesteś zainteresowany?</span>
          <span className='contact-label'>KONTAKT</span>
        </Link>
      </div>
    </div>
  );
}