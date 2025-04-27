import React from 'react';
import '../../App.css';
import '../css/HomeStyle.css';
import { Link } from 'react-router-dom';
import AboutMe from './aboutme';
import Interview from './interview';
import MovingComponent from 'react-moving-text';
import Slider from '../slider';
import image4 from '../../images/img1.png';
import image5 from '../../images/111.png';
import image6 from '../../images/222.png';
import image7 from '../../images/dataimg.png';
import image8 from '../../images/netsec.png';
import profileImage from '../../images/profilowe.png'; 
import { useTranslation } from 'react-i18next';
import GitHubButton from '../GitHubButton';

export default function Home() {
  const { t } = useTranslation();

  const scrollToAboutMe = () => {
    const aboutMeSection = document.getElementById('aboutme');
    if (aboutMeSection) {
      aboutMeSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServiceSection = (sectionId) => {
    // This function will be called after navigation to services page
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleServiceClick = (sectionId) => {
    // Store the section ID in session storage before navigation
    sessionStorage.setItem('scrollToSection', sectionId);
  };

  const imagesProject4 = [image7, image8]; // Tylko dla certyfikatów

  return (
    <div>
      <div className='home'>
        <div className='AboutMeShort'>
          <MovingComponent
            type='slideInFromBottom'
            duration='1000ms'
            delay='1s'
            direction='normal'
            timing='ease'
            iteration={1}
            fillMode='none'
          >
            <h2>
              C#
              .NET
              MSSQL
              <i className='fas fa-database'></i>
              Javascript
              <i className='fab fa-js'></i>
              React
              <i className='fab fa-react'></i>
              CSS
              <i className='fab fa-css3-alt'></i>
              SCSS
              <i className='fab fa-sass'></i>
              Entity Framework <i className='fas fa-project-diagram'></i> {t('i wiele więcej...')}
            </h2>
          </MovingComponent>
        </div>
        <div className='Interview'>
          <Interview 
            profileImage={profileImage}
            scrollToAboutMe={scrollToAboutMe}
          />
        </div>
        <div className='container'>
          <h2>Moje Najlepsze Realizacje</h2>
          
          <div className='article'>
            <div className='article-content'>
              <div className='article-image'>
                <img src={image6} alt='Strona Portfolio' className='article-main-image' />
              </div>
              <div className='article-text'>
                <h1>{t('Profesjonalne Strony Internetowe')}</h1>
                <p>{t('Specjalizuję się w tworzeniu nowoczesnych, responsywnych stron internetowych. Moje projekty łączą estetykę z funkcjonalnością, zapewniając doskonałe doświadczenia użytkownika. Oferuję kompleksowe rozwiązania dostosowane do indywidualnych potrzeb każdego klienta.')}</p>
                <div className="button-group">
                  <GitHubButton link="https://github.com/Mirac00/ReactPortfolio2023.git" />
                  <Link 
                    to='/services#websites' 
                    onClick={() => handleServiceClick('websites')}
                  >
                    <button className='see-more-button'>{t('Zobacz usługi')}</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className='article'>
            <div className='article-content'>
              <div className='article-image'>
                <img src={image5} alt='System CMS' className='article-main-image' />
              </div>
              <div className='article-text'>
                <h1>{t('Systemy CMS i E-commerce')}</h1>
                <p>{t('Tworzę zaawansowane systemy zarządzania treścią oraz sklepy internetowe oparte o najnowsze technologie. Moje rozwiązania charakteryzują się wysoką wydajnością, bezpieczeństwem i łatwością obsługi. Zapewniam pełną integrację z systemami płatności i narzędziami marketingowymi.')}</p>
                <div className="button-group">
                  <GitHubButton link="https://github.com/Mirac00/Notes.API.git" />
                  <Link 
                    to='/services#cms' 
                    onClick={() => handleServiceClick('cms')}
                  >
                    <button className='see-more-button'>{t('Zobacz usługi')}</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className='article'>
            <div className='article-content'>
              <div className='article-image'>
                <img src={image4} alt='SM Trend' className='article-main-image' />
              </div>
              <div className='article-text'>
                <h1>{t('Kompleksowe Rozwiązania Fullstack')}</h1>
                <p>{t('SM Trend to przykład zaawansowanego systemu fullstack demonstrującego moje umiejętności techniczne i marketingowe. Projekt obejmuje autorski system uwierzytelniania, zaawansowane filtry treści i narzędzia analityczne. To kompleksowe rozwiązanie łączące technologię z efektywnym targetowaniem odbiorców.')}</p>
                <div className="button-group">
                  <div className="github-button-container">
                    <h3>FrontEnd</h3>
                    <GitHubButton link="https://github.com/Mirac00/SM-Trend-Frontend.git" />
                  </div>
                  <div className="github-button-container">
                    <h3>BackEnd</h3>
                    <GitHubButton link="https://github.com/Mirac00/SM-Trend-Backend.git" />
                  </div>
                  <Link 
                    to='/services#fullstack' 
                    onClick={() => handleServiceClick('fullstack')}
                  >
                    <button className='see-more-button'>{t('Zobacz usługi')}</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className='article'>
            <div className='article-content'>
              <div className='article-slider'>
                <Slider images={imagesProject4} />
              </div>
              <div className='article-text'>
                <h1>{t('Certyfikaty i Kwalifikacje')}</h1>
                <p>{t('Moje kompetencje potwierdzone certyfikatami w zakresie baz danych i bezpieczeństwa sieciowego. Ciągle rozwijam swoje umiejętności, aby zapewnić najwyższą jakość usług. W mojej pracy łączę wiedzę techniczną z praktycznym podejściem do rozwiązywania problemów biznesowych.')}</p>
                <div className="button-group">
                  <GitHubButton link="https://github.com/your-username/your-repo" />
                  <Link to='/Documents'>
                    <button className='see-more-button'>{t('Zobacz certyfikaty')}</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AboutMe />
    </div>
  );
}