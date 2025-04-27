import React from 'react';
import '../../App.css';
import '../css/InterviewStyle.css';


export default function Interview({ profileImage, scrollToAboutMe }) {
  return (
    <div className="interview-container">
      <div className="profile-image-container">
        <img
          src={profileImage}
          alt="Profil"
          className="profile-image"
        />
      </div>
      <div className="interview-text-container">
        <p className="interview-text">
        <h1 className="display-5 fw-bold mb-2">Autorskie strony internetowe<br/>
E-Commerce CMS<br/>
Indywidualne projekty dostosowane w 100%</h1>
<h2 className="h4 text-secondary mb-4">Inż. Sławomir Zając</h2>
<p className="mb-4">
  Jestem programistą z branży e-commerce i marketingu, tworzę przyjazne użytkownikowi środowiska – od tego portfolio, przez autorskie systemy CMS, aż po responsywne aplikacje webowe, mobilne i sklepy internetowe.
</p>
<p className="mb-4">
  Sprawdź przykłady moich prac poniżej i przekonaj się, jak mogę pomóc w realizacji Twoich projektów!
</p>
          <button 
            onClick={scrollToAboutMe} 
            className="interview-button"
          >
            Dowiedz się o mnie więcej
          </button>
        </p>
      </div>
    </div>
  );
}
