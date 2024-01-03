import './theory.css';

const Theory: React.FC = () => {
  return (
    <div className="article">
      <div className="section">
        <h2>Lepkość cieczy</h2>
        <p>
          Lepkość to własność fizyczna cieczy, która określa, jak bardzo ciecz
          stawia opór przepływowi. Jest to wielkość bezwymiarowa, wyrażana w
          Pa·s (paskalach na sekundę). Lepkość jest wynikiem sił przyciągania
          między cząsteczkami cieczy. Cząsteczki cieczy są nieustannie w ruchu,
          zderzając się ze sobą i z powierzchnią naczyń, w których się znajdują.
          Im większe są siły przyciągania między cząsteczkami, tym większa jest
          lepkość cieczy.
        </p>
      </div>
      <div className="section">
        <h2>Prawo Stokesa</h2>
        <p>
          Prawo Stokesa polega na pomiarze siły oporu działającej na kulkę
          poruszającą się w cieczy. W tym celu kulkę zawiesza się na wadze i
          mierzy się jej prędkość opadania. Następnie, korzystając z prawa
          Stokesa, oblicza się lepkość cieczy.
        </p>
        <p>
          Prawo Stokesa zostało odkryte w roku 1851 przez George’a Stokesa.
          Prawo wyraża się wzorem:
        </p>
        <pre>
          {`
        F = −6πηrv
        gdzie:
        F - siła oporu,
        η - lepkość dynamiczna płynu,
        r - promień kuli,
        v - prędkość kuli.
        `}
        </pre>
        <p>
          Prawo Stokesa jest spełnione dla małych prędkości ciała, ściślej: w
          przypadku małych liczb Reynoldsa (Re) charakteryzujących przepływ (Re
          ¡ 1).
        </p>
      </div>
      <div className="section">
        <h2>Aplikacja webowa do wyznaczania lepkości cieczy</h2>
        <p>
          Aplikacja webowa do wyznaczania lepkości cieczy (za pomocą prawa
          Stokesa) wykorzystuje ten właśnie wzór. Do wyznaczania lepkości cieczy
          aplikacja wymaga od użytkownika podania następujących danych:
        </p>
        <ul>
          <li>promień kuli</li>
          <li>prędkość kuli</li>
          <li>czas, przez jaki kula porusza się w cieczy</li>
        </ul>
        <p>
          Na podstawie wprowadzonych danych aplikacja oblicza lepkość cieczy.
          Aplikacja może być wykorzystywana do wyznaczania lepkości cieczy w
          różnych dziedzinach, takich jak:
        </p>
        <ul>
          <li>inżynieria chemiczna</li>
          <li>inżynieria materiałowa</li>
          <li>fizyka</li>
          <li>biologia</li>
        </ul>
        <p>
          Aplikacja może być również wykorzystywana przez uczniów i studentów do
          nauki o właściwościach fizycznych cieczy.
        </p>
      </div>
    </div>
  );
};

export default Theory;
