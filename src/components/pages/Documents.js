import React, { useState } from 'react';
import '../css/DocumentsStyle.css';
import image1 from '../../images/dataimg.png';
import image2 from '../../images/netsec.png';
import image3 from '../../images/adobe.png';

export default function Documents() {
  const [popupImage, setPopupImage] = useState(null);

  const openPopup = (image) => {
    setPopupImage(image);
  };

  const closePopup = () => {
    setPopupImage(null);
  };

  return (
    <>
      <div className="Documents">
        <h1 className="Documents">Certyfikaty</h1>

        {/* Certyfikat 1 */}
        <div className="imageContainer">
          <p>
            Certyfikat 98-364: MTA Database Fundamentals - Ten certyfikat
            potwierdza podstawową wiedzę i umiejętności związane z bazami danych,
            w tym z relacyjnymi bazami danych, takimi jak Microsoft SQL Server.
            Certyfikat ten potwierdza znajomość podstawowych koncepcji bazy
            danych, manipulowania danymi oraz administrowania bazą danych.
          </p>
          <img
            src={image1}
            alt="Certyfikat 98-364: MTA Database fundamentals"
            onClick={() => openPopup(image1)}
          />
        </div>

        {/* Certyfikat 2 */}
        <div className="imageContainer">
          <p>
            Certiport Network Security - Ten certyfikat wykazuje podstawową
            wiedzę i umiejętności z zakresu bezpieczeństwa, w tym zrozumienie
            zasad bezpieczeństwa, bezpieczeństwa systemów operacyjnych, sieci i
            urządzeń. Posiadacz tego certyfikatu wykazuje zaangażowanie w ochronę
            danych i rozwój w dziedzinie bezpieczeństwa IT.
          </p>
          <img
            src={image2}
            alt="Certyfikat Certiport Network Security"
            onClick={() => openPopup(image2)}
          />
        </div>

        {/* Certyfikat 3 */}
        <div className="imageContainer">
          <p>
            Certyfikat Adobe Illustrator - Potwierdza ukończenie kursu grafiki
            komputerowej w programie Adobe Illustrator, obejmującego projektowanie
            graficzne, edycję grafiki komputerowej oraz przygotowanie do druku.
            Ten certyfikat potwierdza umiejętności niezbędne do pracy w zakresie
            projektowania graficznego i obróbki wizualnej.
          </p>
          <img
            src={image3}
            alt="Certyfikat Adobe Illustrator"
            onClick={() => openPopup(image3)}
          />
        </div>
      </div>

      {/* Popup */}
      {popupImage && (
        <div className="popup" onClick={closePopup}>
          <button className="popup__close" onClick={closePopup}>
            ×
          </button>
          <img className="popup__img" src={popupImage} alt="Powiększony certyfikat" />
        </div>
      )}
    </>
  );
}
