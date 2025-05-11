import React from 'react';
import { MenuItems } from './MenuItems';
import './css/Dropdown.css';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

function Dropdown({ isOpen, closeMobileMenu, onMouseEnter, onMouseLeave, isClosing }) {
  const { t } = useTranslation();
  const history = useHistory();
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -160;
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    }
  };

  const handleServiceClick = (path) => {
    const sectionId = path.split('#')[1];
    closeMobileMenu();

    if (location.pathname === '/services') {
      if (sectionId) {
        setTimeout(() => {
          scrollToSection(sectionId);
        }, 100);
      }
    } else {
      if (sectionId) {
        sessionStorage.setItem('scrollToSection', sectionId);
      }
      history.push('/services');
    }
  };

  return (
    <AnimatePresence>
      {(isOpen || isClosing) && (
        <motion.ul
          initial={{ opacity: 0, maxHeight: 0 }}
          animate={isClosing ? { opacity: 0, maxHeight: 0 } : { opacity: 1, maxHeight: "1000px" }}
          exit={{ opacity: 0, maxHeight: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="dropdown-menu"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          {MenuItems.map((item, index) => (
            <li key={index}>
              <Link
                className="dropdown-link"
                to={item.path}
                onClick={(e) => {
                  e.preventDefault();
                  if (item.path.includes('/services#')) {
                    handleServiceClick(item.path);
                  } else {
                    closeMobileMenu();
                    scrollToTop();
                    history.push(item.path);
                  }
                }}
              >
                {t(item.titleKey)}
              </Link>
            </li>
          ))}
        </motion.ul>
      )}
    </AnimatePresence>
  );
}

export default Dropdown;