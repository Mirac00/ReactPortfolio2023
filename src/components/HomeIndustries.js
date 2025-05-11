import React from 'react';
import { useTranslation } from 'react-i18next';
import './css/HomeIndustries.css';
import TerminalText from './TerminalText';

const HomeIndustries = () => {
  const { t } = useTranslation();

  return (
    <section className='home__industries'>
      <div className='home__industries-container'>
        <div className='home__industries-item item-1'>
          <i className='fas fa-code'></i>
          <span>{t('home.industries.coding')}</span>
        </div>
        <div className='home__industries-item item-2'>
          <i className='fas fa-shopping-cart'></i>
          <span>{t('home.industries.ecommerce')}</span>
        </div>
        <div className='home__industries-item item-3'>
          <i className='fas fa-bullhorn'></i>
          <span>{t('home.industries.marketing')}</span>
        </div>
              <TerminalText 
              part1={t('interview.greeting.part1')} // "Hello, I'm"
              part2={t('interview.greeting.part2')} // "Sławek Zając"
              animate={true}
            />
      </div>
    </section>
  );
};

export default HomeIndustries;