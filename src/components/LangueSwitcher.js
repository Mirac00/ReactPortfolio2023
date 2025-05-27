import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import plFlag from '../images/plflag.png';
import enFlag from '../images/enflag.jpg';
import '../css/componentsCSS/LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  useEffect(() => {
    // Aktualizuj stan przy zmianie języka
    const handleLanguageChange = (lng) => {
      setCurrentLanguage(lng);
    };

    i18n.on('languageChanged', handleLanguageChange);
    
    // Ustaw początkowy język jeśli nie został wykryty
    if (!currentLanguage) {
      const detectedLanguage = i18n.language || 'en';
      setCurrentLanguage(detectedLanguage);
    }

    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n, currentLanguage]);

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === 'pl' ? 'en' : 'pl';
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
          className={`language-flag pl ${currentLanguage === 'pl' ? 'active' : 'inactive'}`} 
        />
        <img 
          src={enFlag} 
          alt="English flag" 
          className={`language-flag en ${currentLanguage === 'en' ? 'active' : 'inactive'}`} 
        />
      </div>
    </div>
  );
};

export default LanguageSwitcher;