import React from "react";
import "./instructions.css";
import picture1 from '../../../assets/stokes-rys1.png'
import picture2 from '../../../assets/stokes-rys2.png'

const Instructions: React.FC = () => {
  return (
    <div className='instructions-container'>
      <div className="article">
        <div className="section">
          <h2>Instrukcja - tok postępowania:</h2>
          <ol>
            <li>
              Zmierzyć średnicę 10 kulek za pomocą śruby mikrometrycznej.
              Obliczyć promień <span className="italic">r</span> kulki oraz
              średni promień <span className="italic">r̅</span> 10 kulek.
            </li>
            <li>
              Wyznaczyć masę{" "}
              <span className="italic">
                m<sub>10</sub>
              </span>{" "}
              10 kulek. Obliczyć średnią masę <span className="italic">m̅</span>{" "}
              jednej kulki.
            </li>
            <li>
              Wyznaczyć wysokość słupa cieczy <span className="italic">h</span>{" "}
              w cylindrze, na której opadanie kulki odbywa się ruchem
              jednostajnym (zwrócić uwagę na rysunek).
            </li>
            <li>
              Zmierzyć, za pomocą stopera, czas przebycia wysokości{" "}
              <span className="italic">h</span> dla każdej z 10 kulek.
            </li>
            <li>
              Obliczyć średni czas <span className="italic">t</span> przebycia
              wysokości <span className="italic">h</span>.
            </li>
            <li>
              Odczytać temperaturę pomiaru, gęstość cieczy{" "}
              <span className="italic">
                ρ<sub>p</sub>
              </span>{" "}
              i średnicę cylindra <span className="italic">R</span>.
            </li>
            <li>Obliczyć współczynnik lepkości wykorzystując wzór:
              <br />
              <img src={picture2} width={300}/>
            </li>
            <li>
              Pomiary wykonać dla cieczy i kulek wskazanych przez prowadzącego.
            </li>
            <li>
              Przeprowadzić rachunek niepewności pomiarowych i dyskusję
              otrzymanych wyników.
            </li>
          </ol>
        </div>
      </div>
      <img src={picture1} width={150}/>
    </div>
  );
};

export default Instructions;
