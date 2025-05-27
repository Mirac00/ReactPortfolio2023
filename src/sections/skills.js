import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import netImage from '.././images/ikony/net.png';
import aiImage from '.././images/ikony/ai.png';
import csharpImage from '.././images/ikony/c.png';
import cssImage from '.././images/ikony/css.png';
import entityImage from '.././images/ikony/entity.png';
import gitImage from '.././images/ikony/git.png';
import htmlImage from '.././images/ikony/html.png';
import jsImage from '.././images/ikony/js.png';
import mysqlImage from '.././images/ikony/mysql.png';
import psImage from '.././images/ikony/ps.png';
import reactImage from '.././images/ikony/react.png';
import tsImage from '.././images/ikony/ts.png';
import '../css/sectionsCSS/skillsstyle.css';

export default function Skills() {
  const { t } = useTranslation();
  const [visibleItems, setVisibleItems] = useState(new Set());
  const sectionRef = useRef(null);
  const itemRefs = useRef([]);

  const allSkills = [
    { img: htmlImage, name: 'HTML5', category: 'Frontend' },
    { img: cssImage, name: 'CSS3', category: 'Frontend' },
    { img: jsImage, name: 'JavaScript', category: 'Programming' },
    { img: tsImage, name: 'TypeScript', category: 'Programming' },
    { img: reactImage, name: 'React', category: 'Frontend' },
    { img: gitImage, name: 'Git', category: 'Tools' },
    { img: csharpImage, name: 'C#', category: 'Backend' },
    { img: netImage, name: '.NET', category: 'Backend' },
    { img: entityImage, name: 'Entity Framework', category: 'ORM' },
    { img: mysqlImage, name: 'MySQL', category: 'Database' },
    { img: psImage, name: 'Photoshop', category: 'Design' },
    { img: aiImage, name: 'Illustrator', category: 'Design' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.dataset.index);
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleItems(prev => new Set([...prev, index]));
            }, index * 100);
          }
        });
      },
      { threshold: 0.2, rootMargin: '-50px' }
    );

    itemRefs.current.forEach((ref) => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="skills-section" ref={sectionRef}>
      <div className="container">
        <div className="skills-header">
          <h2 className="skills-title">{t('skills.title')}</h2>
          <p className="skills-description">{t('skills.description')}</p>
          <div className="header-underline"></div>
        </div>

        <div className="skills-grid">
          {allSkills.map((skill, index) => (
            <div
              key={`skill-${index}`}
              ref={el => itemRefs.current[index] = el}
              data-index={index}
              className={`skill-item ${
                visibleItems.has(index) ? 'visible' : ''
              }`}
              style={{ transitionDelay: visibleItems.has(index) ? `${index * 100}ms` : '0ms' }}
            >
              <div className="skill-gradient-overlay"></div>
              <div className="category-badge">{skill.category}</div>
              
              <div className="skill-image-container">
                <img 
                  src={skill.img} 
                  alt={skill.name} 
                  className="skill-image"
                />
              </div>
              
              <h3 className="skill-name">{skill.name}</h3>
              
              <div className="progress-ring">
                <svg className="progress-circle">
                  <circle cx="24" cy="24" r="20" />
                </svg>
              </div>
              
              <div className="particles">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className={`particle particle-${i}`} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}