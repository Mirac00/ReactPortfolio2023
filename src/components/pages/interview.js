import React from 'react';
import '../../App.css';
import '../css/InterviewStyle.css';
import { useTranslation } from 'react-i18next';
import HomeIndustries from '../HomeIndustries';

export default function Interview({ profileImage, scrollToAboutMe }) {
  const { t } = useTranslation();
  
  return (
    <div className="Interview">
      <HomeIndustries />
      <div className="interview-container">

        <div className="interview-text-container">
          <h1 className="display-5 fw-bold mb-2">
            {t('interview.titleLine1')}<br/>
            {t('interview.titleLine2')}<br/>
            {t('interview.titleLine3')}
          </h1>
          
          <p className="mb-4">
            {t('interview.description1')}
          </p>
          <p className="mb-4">
            {t('interview.description2')}
          </p>
          <button 
            onClick={scrollToAboutMe} 
            className="interview-button"
          >
            {t('interview.buttonText')}
          </button>
        </div>
      </div>
    </div>
  );
}