import React, { useState } from 'react';
import { MenuItems } from './MenuItems';
import './/css/Dropdown.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Dropdown({ closeMobileMenu }) {
  const [click, setClick] = useState(false);
  const { t } = useTranslation();

  const handleClick = () => setClick(!click);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleServiceClick = (path) => {
    const sectionId = path.split('#')[1];
    if (sectionId) {
      sessionStorage.setItem('scrollToSection', sectionId);
    }
    setClick(false);
    closeMobileMenu();
  };

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
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
                  setClick(false);
                  closeMobileMenu();
                  scrollToTop();
                }
              }}
            >
              {t(item.titleKey)}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Dropdown;