import React, { useEffect } from 'react';
import '../../App.css';
import '../css/HomeStyle.css';
import '../css/global.css';
import { Link } from 'react-router-dom';
import AboutMe from './aboutme';
import Interview from './interview';
import MovingComponent from 'react-moving-text';
import Slider from '../slider';
import image4 from '../../images/img1.png';
import image5 from '../../images/imgCMS.jpg';
import image6 from '../../images/imgwebpages.jpg';
import image7 from '../../images/dataimg.png';
import image8 from '../../images/netsec.png';
import profileImage from '../../images/profilowe.png'; 
import { useTranslation } from 'react-i18next';
import GitHubButton from '../GitHubButton';
import AnimatedSection from '../AnimatedSection';

export default function Home() {
  const { t } = useTranslation();

  useEffect(() => {
    const sectionId = sessionStorage.getItem('scrollToSection');
    if (sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
      sessionStorage.removeItem('scrollToSection');
    }
  }, []);

  const scrollToAboutMe = () => {
    const aboutMeSection = document.getElementById('aboutme');
    if (aboutMeSection) {
      aboutMeSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleServiceClick = (sectionId) => {
    sessionStorage.setItem('scrollToSection', sectionId);
  };

  const imagesProject4 = [image7, image8];

  return (
    <div className='home'>
      <Interview profileImage={profileImage} scrollToAboutMe={scrollToAboutMe} />
      
      <div className='home__projects'>
        <div className='container'>
          <AnimatedSection>
            <h2 className='home__projects-title'>{t('home.myBestProjects')}</h2>
          </AnimatedSection>
          
          {/* Project 1 */}
          <article className='article-section'>
            <AnimatedSection delay={0.2}>
              <div className='article-section__content'>
                <div className='article-section__header'>
                  <h1>{t('services.professionalWebsites')}</h1>
                  <p>{t('services.professionalWebsitesDesc')}</p>
                </div>
                <div className='article-section__media'>
                  <img src={image6} alt='Strona portfolio' className='article-section__image' />
                </div>
                <div className='article-section__buttons'>
                  <div className="button-group">
                    <GitHubButton link="https://github.com/Mirac00/ReactPortfolio2023.git" />
                    <Link to='/services#websites' onClick={() => handleServiceClick('websites')}>
                      <button className='button'>{t('services.seeServices')}</button>
                    </Link>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </article>
          
          {/* Project 2 */}
          <article className='article-section'>
            <AnimatedSection delay={0.3}>
              <div className='article-section__content'>
                <div className='article-section__header'>
                  <h1>{t('services.cmsSystems')}</h1>
                  <p>{t('services.cmsSystemsDesc')}</p>
                </div>
                <div className='article-section__media'>
                  <img src={image5} alt='System CMS' className='article-section__image' />
                </div>
                <div className='article-section__buttons'>
                  <div className="button-group">
                    <GitHubButton link="https://github.com/Mirac00/Notes.API.git" />
                    <Link to='/services#cms' onClick={() => handleServiceClick('cms')}>
                      <button className='button'>{t('services.seeServices')}</button>
                    </Link>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </article>
          
          {/* Project 3 */}
          <article className='article-section'>
            <AnimatedSection delay={0.4}>
              <div className='article-section__content'>
                <div className='article-section__header'>
                  <h1>{t('services.fullstackSolutions')}</h1>
                  <p>{t('services.fullstackSolutionsDesc')}</p>
                </div>
                <div className='article-section__media'>
                  <img src={image4} alt='SM Trend aplikacja' className='article-section__image' />
                </div>
                <div className='article-section__buttons'>
                  <div className="button-group">
                    <div className="github-button-container">
                      <h3>FrontEnd</h3>
                      <GitHubButton link="https://github.com/Mirac00/SM-Trend-Frontend.git" />
                    </div>
                    <div className="github-button-container">
                      <h3>BackEnd</h3>
                      <GitHubButton link="https://github.com/Mirac00/SM-Trend-Backend.git" />
                    </div>
                    <Link to='/services#fullstack' onClick={() => handleServiceClick('fullstack')}>
                      <button className='button'>{t('services.seeServices')}</button>
                    </Link>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </article>
          
          {/* Project 4 - Certificates */}
          <article className='article-section'>
            <AnimatedSection delay={0.5}>
              <div className='article-section__content'>
                <div className='article-section__header'>
                  <h1>{t('certificates.title')}</h1>
                  <p>{t('certificates.description')}</p>
                </div>
                <div className='article-section__media'>
                  <Slider images={imagesProject4} />
                </div>
                <div className='article-section__buttons'>
                  <div className="button-group">
                    <Link to='/Documents'>
                      <button className='button'>{t('certificates.seeCertificates')}</button>
                    </Link>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </article>
        </div>
      </div>
      
      <AboutMe />
    </div>
  );
}