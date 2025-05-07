import React from 'react';
import { useTranslation } from 'react-i18next';
import './css/HomeIndustries.css';

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
      </div>
    </section>
  );
};

export default HomeIndustries;