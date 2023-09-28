import React from 'react';
import '../css/ProjectsStyle.css';

export default function Projects() {
  return (
    <div className='Projects'>
      <h1 className='Projects-title'>Projects</h1>

      <div className='ArticleSection' id='article1'>
        <h2 className='ArticleSection-title'><span>Article 1</span></h2>
        <p className='ArticleSection-description'><span>Opis artykułu 1.</span></p>
        <img src='zdjecie1.jpg' alt='Zdjęcie 1' className='ArticleSection-image' />
      </div>

      <div className='ArticleSection' id='article2'>
        <h2 className='ArticleSection-title'><span>Article 2</span></h2>
        <p className='ArticleSection-description'><span>Opis artykułu 2.</span></p>
        <img src='zdjecie2.jpg' alt='Zdjęcie 2' className='ArticleSection-image' />
      </div>

      <div className='ArticleSection' id='article3'>
        <h2 className='ArticleSection-title'><span>Article 3</span></h2>
        <p className='ArticleSection-description'><span>Opis artykułu 3.</span></p>
        <img src='zdjecie3.jpg' alt='Zdjęcie 3' className='ArticleSection-image' />
      </div>

      <div className='ArticleSection' id='article4'>
        <h2 className='ArticleSection-title'><span>Article 4</span></h2>
        <p className='ArticleSection-description'><span>Opis artykułu 4.</span></p>
        <img src='zdjecie4.jpg' alt='Zdjęcie 4' className='ArticleSection-image' />
      </div>

      <div className='NavigationButtons'>
        <button onClick={() => scrollToSection('article1')}>Artykuł 1</button>
        <button onClick={() => scrollToSection('article2')}>Artykuł 2</button>
        <button onClick={() => scrollToSection('article3')}>Artykuł 3</button>
        <button onClick={() => scrollToSection('article4')}>Artykuł 4</button>
      </div>
    </div>
  );
}

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth',
    });
  }
}
