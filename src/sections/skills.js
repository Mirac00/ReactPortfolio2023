import React from 'react';
import { useTranslation } from 'react-i18next';
import AnimatedSection from '../components/AnimatedSection';
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

  const allSkills = [
    { img: htmlImage, name: 'HTML5' },
    { img: cssImage, name: 'CSS3' },
    { img: jsImage, name: 'JavaScript' },
    { img: tsImage, name: 'TypeScript' },
    { img: reactImage, name: 'React' },
    { img: gitImage, name: 'Git' },
    { img: csharpImage, name: 'C#' },
    { img: netImage, name: '.NET' },
    { img: entityImage, name: 'Entity Framework' },
    { img: mysqlImage, name: 'MySQL' },
    { img: psImage, name: 'Photoshop' },
    { img: aiImage, name: 'Illustrator' }
  ];

  return (
    <div className="skills-section">
      <div className="container">
        <AnimatedSection>
          <h2 className="skills-title">{t('skills.title')}</h2>
        </AnimatedSection>

        <div className="skills-grid">
          {allSkills.map((skill, index) => (
            <AnimatedSection 
              key={`skill-${index}`}
              delay={0.2 + (index * 0.3)}
              yOffset={30}
              className="skill-item-wrapper"
            >
              {/* Kontener obrazka z efektami wizualnymi */}
              <div className="skill-image-container">
                <img 
                  src={skill.img} 
                  alt={skill.name} 
                  className="skill-image"
                />
              </div>
              {/* Podpis technologii */}
              <span className="skill-name">{skill.name}</span>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}