// Navbar.js
import React, { useState, useEffect, useRef } from 'react';
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
  const [isClosing, setIsClosing] = useState(false);
  const dropdownTimeoutRef = useRef(null);
  const history = useHistory();
  const { t } = useTranslation();

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth >= 960) {
      clearTimeout(dropdownTimeoutRef.current);
      setIsClosing(false);
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth >= 960) {
      setIsClosing(true);
      dropdownTimeoutRef.current = setTimeout(() => {
        setDropdown(false);
        setIsClosing(false);
      }, 300); // Dopasuj do czasu trwania animacji
    }
  };

  const toggleMobileDropdown = () => {
    if (mobileDropdown) {
      setIsClosing(true);
      setTimeout(() => {
        setMobileDropdown(false);
        setIsClosing(false);
      }, 300);
    } else {
      setMobileDropdown(true);
    }
  };

  useEffect(() => {
    history.listen(() => {
      setIsClosing(true);
      setTimeout(() => {
        setDropdown(false);
        setMobileDropdown(false);
        setIsClosing(false);
      }, 300);
    });

    const link = document.querySelector('.navbar-logo');
    if (link) {
      link.style.textDecoration = 'none';
    }

    return () => {
      clearTimeout(dropdownTimeoutRef.current);
    };
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
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const section = document.getElementById('aboutme');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
    closeMobileMenu();
  };

  const handleDesktopClick = () => {
    if (window.innerWidth >= 960) {
      if (dropdown) {
        setIsClosing(true);
        setTimeout(() => {
          setDropdown(false);
          setIsClosing(false);
        }, 300);
      } else {
        setDropdown(true);
      }
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
              onClick={scrollToAboutMe}
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
            >
              <Link to='/Services' className={`nav-link-service ${click ? 'nav-link-mobile-service' : ''}`} onClick={() => { closeMobileMenu(); scrollToTop(); }}>
                {t('navbar.services')}
                {window.innerWidth >= 960 && (
                  <i className='fas fa-caret-down' onClick={handleMobileClick} />
                )}
              </Link>
            </div>
            {window.innerWidth < 960 && (
              <i className='fas fa-caret-down' onClick={handleMobileClick} />
            )}
          </li>
          <AnimatePresence>
            {(dropdown || mobileDropdown) && (
              <Dropdown 
                isOpen={true}
                isClosing={isClosing}
                closeMobileMenu={closeMobileMenu}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
              />
            )}
          </AnimatePresence>
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