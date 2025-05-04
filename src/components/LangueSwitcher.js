import React from 'react';
import { useTranslation } from 'react-i18next';
import i18n from './utilities/i18n';
import plFlag from '../images/plflag.png'; // Zaimportuj odpowiednie flagi
import enFlag from '../images/enflag.jpg';
import '../components/css/LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const getFlag = () => {
    switch(i18n.language) {
      case 'pl': return plFlag;
      case 'en': 
      default: return enFlag;
    }
  };

  return (
    <div className="language-switcher">
      <button 
        onClick={() => changeLanguage(i18n.language === 'pl' ? 'en' : 'pl')}
        className="language-button"
        aria-label="Change language"
      >
        <img 
          src={getFlag()} 
          alt={i18n.language === 'pl' ? 'Polish flag' : 'English flag'} 
          className="language-flag" 
        />
      </button>
    </div>
  );
};

export default LanguageSwitcher;