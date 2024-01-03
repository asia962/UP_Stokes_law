import React from "react";
import './bibliography.css';

const Bibliography: React.FC = () => {
  return (
    <div className="article">
      <div className="section">
        <h2>Literatura:</h2>
        <ol>
          <li>
            J. Bednarz, M. Borowski, J. Dąbrowski, Fizyka, podręcznik dla szkół średnich, Wydawnictwo Nowa Era, Warszawa 2019.
          </li>
          <li>
            K. Sacha, J. Szmidt, Fizyka. Podręcznik akademicki, tom 2, Wydawnictwo
            Naukowe PWN, Warszawa 2017.
          </li>
          <li>
            M. Janik, A. Skrzypek, Badanie lepkości cieczy metodą Stokesa, Wiadomości Chemiczne, 2015, nr 2, s. 123-127.
          </li>
          <li>
            A. Magiera(red), Pracownia fizyczna, IF UJ, Kraków 2006.
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Bibliography;