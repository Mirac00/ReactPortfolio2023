import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './css/Navbar.css';
import Dropdown from './Dropdown';
import { HashLink as Links } from 'react-router-hash-link';
import { Link as ScrollLink } from 'react-scroll';
import logo123 from '../images/logo123.png';
import LanguageSwitcher from './LangueSwitcher';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(false);
  const history = useHistory();
  const { t } = useTranslation();

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth >= 960) {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth >= 960) {
      setDropdown(false);
    }
  };

  const toggleMobileDropdown = () => {
    setMobileDropdown(!mobileDropdown);
  };

  useEffect(() => {
    history.listen(() => {
      setDropdown(false);
      setMobileDropdown(false);
    });

    const link = document.querySelector('.navbar-logo');
    if (link) {
      link.style.textDecoration = 'none';
    }
  }, [history]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToAboutMe = () => {
    if (window.location.pathname !== '/') {
      history.push('/');
      setTimeout(() => {
        const section = document.getElementById('aboutme');
        if (section) {
          window.scrollTo({
            top: section.offsetTop - 20,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      const section = document.getElementById('aboutme');
      if (section) {
        window.scrollTo({
          top: section.offsetTop - 20,
          behavior: 'smooth'
        });
      }
    }
  };

  const handleDesktopClick = () => {
    if (window.innerWidth >= 960) {
      setDropdown(prev => !prev);
      if (window.location.pathname === '/services') {
        scrollToTop();
      }
    }
  };

  const handleMobileClick = () => {
    if (window.innerWidth < 960) {
      toggleMobileDropdown();
    }
  };

  const handleServicesLinkClick = () => {
    if (window.location.pathname === '/services') {
      scrollToTop();
    }
    closeMobileMenu();
  };

  return (
    <nav className='navbar'>
      <div className='navbar-box'>
        <Link to='/' className='navbar-logo' onClick={scrollToTop}>
          <div className="logo-container">
            <img src={logo123} alt="logo" className="logo-img" />
            <span className="navbar-logo-text">{t('navbar.name')}</span>
          </div>
        </Link>
        <LanguageSwitcher />
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className={`nav-link ${click ? 'nav-link-mobile' : ''}`} onClick={() => { closeMobileMenu(); scrollToTop(); }}>
              {t('navbar.start')}
            </Link>
          </li>
          <li className='nav-item'>
            <div 
              className={`nav-link ${click ? 'nav-link-mobile' : ''}`}
              onClick={() => { closeMobileMenu(); scrollToAboutMe(); }}
            >
              {t('navbar.aboutMe')}
            </div>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <div 
              className={`nav-link ${click ? 'drop-nav-link-mobile nav-link-mobile' : ''}`}
              onClick={handleDesktopClick}
            ><Link to='/Services' className={`nav-link ${click ? 'nav-link-mobile' : ''}`} onClick={() => { closeMobileMenu(); scrollToTop(); }}>
              {t('navbar.services')}
              {window.innerWidth >= 960 && (
                <i className='fas fa-caret-down' onClick={handleMobileClick} />
              )}
              </Link>
            </div>
            {window.innerWidth < 960 && (
              <i className='fas fa-caret-down' onClick={handleMobileClick} />
            )}
            <AnimatePresence>
              {(dropdown || (click && mobileDropdown)) && (
                <Dropdown 
                  isOpen={true}
                  closeMobileMenu={closeMobileMenu}
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                />
              )}
            </AnimatePresence>
          </li>
          <li className='nav-item'>
            <Link to='/Documents' className={`nav-link ${click ? 'nav-link-mobile' : ''}`} onClick={() => { closeMobileMenu(); scrollToTop(); }}>
              {t('navbar.certificates')}
            </Link>
          </li>
          <li className='nav-item'>
            <ScrollLink
              to='contact'
              spy={true}
              smooth={true}
              duration={500}
              className={`nav-link ${click ? 'nav-link-mobile' : ''}`}
              onClick={closeMobileMenu}
            >
              {t('navbar.contact')}
            </ScrollLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;