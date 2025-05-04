import React from 'react';
import { MenuItems } from './MenuItems';
import './css/Dropdown.css';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

function Dropdown({ isOpen, closeMobileMenu, onMouseEnter, onMouseLeave }) {
  const { t } = useTranslation();
  const history = useHistory();
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 20,
        behavior: 'smooth'
      });
    }
  };

  const handleServiceClick = (path) => {
    const sectionId = path.split('#')[1];

    if (location.pathname === '/services') {
      // Jeśli już jesteś na /services, przewiń bez przeładowania
      closeMobileMenu();
      if (sectionId) {
        setTimeout(() => {
          scrollToSection(sectionId);
        }, 100); // daj czas na zamknięcie menu
      }
    } else {
      // Ustaw sekcję do przewinięcia i przejdź do /services
      if (sectionId) {
        sessionStorage.setItem('scrollToSection', sectionId);
      }
      closeMobileMenu();
      history.push('/services');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.ul
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="dropdown-menu"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          {MenuItems.map((item, index) => (
            <li key={index}>
              <Link
                className="dropdown-link"
                to="#"
                onClick={(e) => {
                  e.preventDefault(); // zapobiega domyślnemu zachowaniu linku
                  if (item.path.includes('services#')) {
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