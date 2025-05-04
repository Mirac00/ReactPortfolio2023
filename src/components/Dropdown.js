import React from 'react';
import { MenuItems } from './MenuItems';
import './css/Dropdown.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

function Dropdown({ isOpen, closeMobileMenu }) {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleServiceClick = (path) => {
    const sectionId = path.split('#')[1];
    if (sectionId) {
      sessionStorage.setItem('scrollToSection', sectionId);
    }
    closeMobileMenu();
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
        >
          {MenuItems.map((item, index) => (
            <li key={index}>
              <Link
                className="dropdown-link"
                to={item.path}
                onClick={() => {
                  if (item.path.includes('services#')) {
                    handleServiceClick(item.path);
                  } else {
                    closeMobileMenu();
                    scrollToTop();
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
