import React, { useState } from 'react';
import { MenuItems } from './MenuItems';
import './/css/Dropdown.css';
import { Link } from 'react-router-dom';

function Dropdown({ closeMobileMenu }) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleServiceClick = (path) => {
    // Store the section ID in session storage before navigation
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
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Dropdown;