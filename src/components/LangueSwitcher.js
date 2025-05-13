import React from 'react';
import { useTranslation } from 'react-i18next';
import plFlag from '../images/plflag.png';
import enFlag from '../images/enflag.jpg';
import '../components/css/LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'pl' ? 'en' : 'pl';
    i18n.changeLanguage(newLanguage);
  };

  return (
    <div 
      className="language-switcher" 
      onClick={toggleLanguage}
      aria-label="Change language"
      role="button"
      tabIndex={0}
    >
      <div className="language-flags-container">
        <img 
          src={plFlag} 
          alt="Polish flag" 
          className={`language-flag pl ${i18n.language === 'pl' ? 'active' : 'inactive'}`} 
        />
        <img 
          src={enFlag} 
          alt="English flag" 
          className={`language-flag en ${i18n.language === 'en' ? 'active' : 'inactive'}`} 
        />
      </div>
    </div>
  );
};

export default LanguageSwitcher;