import './theory.css';
import picture1 from '../../../assets/stokes-rys3.png'
import picture2 from '../../../assets/wzor1.png'
import picture3 from '../../../assets/stokes-rys2.png'
import picture4 from '../../../assets/sruba-mikrometryczna.png'
import picture5 from '../../../assets/rys4.png'
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
        Prawo Stokesa to zasada fizyczna opisująca siłę oporu, jaką płyn stawia poruszającemu się ciału w swoim wnętrzu. Nazwa prawo Stokesa pochodzi od nazwiska irlandzkiego matematyka i fizyka George'a Stokesa, który je sformułował w XIX wieku.
        </p>
        <p>
        Zasada ta szczególnie dotyczy małych ciał poruszających się w cieczach
        (gazach bądź płynach) przy niskich prędkościach, gdzie opór lepkości
        dominuje nad innymi siłam
        i. Prawo Stokesa ma zastosowanie, gdy liczba
        Reynoldsa (Re) (charakteryzująca przepływ) jest mała, co oznacza, że
        opór lepkości dominuje nad oporem dynamicznym.
      </p>
        <p>
          Prawo Stokesa wyraża się wzorem:
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
      </div>
      <div className="section">
      <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ flex: 1 }}>
    <h2>Opis sił działających na kulkę</h2>
    <p>
      Kulka poruszająca się w płynie doświadcza różnych sił, które wpływają
      na jej ruch. Główne siły to:
    </p>
    <ol>
      <li>
        <strong>Siła Ciężkości (F<sub>g</sub>):</strong> Ta siła wynika z
        przyciągania kulki do środka Ziemi. Jest proporcjonalna do masy
        kulki (m) i przyspieszenia ziemskiego (g). Wzór:
        (F<sub>g</sub>)= m * g
      </li>
      <li>
        <strong>Siła Wyporu (F<sub>w</sub>):</strong> Gdy kulka znajduje się w
        płynie, doświadcza siły wyporu, która jest skierowana ku górze. Wzór:
        (F<sub>w</sub>)= π * ρ * g * r<sup>3</sup>, gdzie ρ to gęstość płynu, g to przyspieszenie ziemskie, a r to promień kulki.
      </li>
      <li>
        <strong>Siła Oporu Lepkości (F<sub>η</sub>):</strong> Kulka
        poruszająca się w płynie doświadcza oporu lepkości płynu.
        <br></br> Wzór:
        F<sub>η</sub> = 6π * η * r * v, gdzie η to współczynnik lepkości płynu, r to promień kulki, a v to prędkość kulki.
      </li>
    </ol>
    <p>
      Zależności między tymi siłami decydują o ruchu kulki w płynie. Na
      początku dominuje siła ciężkości, a w miarę zwiększania prędkości
      kulki, siła oporu lepkości i siła wyporu równoważą siłę ciężkości,
      prowadząc do ustalonej prędkości ruchu. 
      Od tego momentu dalszy spadek kuli odbywa się ruchem jednostajnym. Z warunku równowagi sił, a zarazem warunku ruchu jednostajnego wynika że:
      F<sub>g</sub> = F<sub>η</sub> + F<sub>w</sub>
    </p>
    </div>
    
    <div style={{ marginLeft: '20px' }}>
    <img src={picture5} width={150} alt="Kulka" />
  </div>
  </div>
    
    <p>
    A stąd już można wyprowadzić wzór na współczynnik lepkości η:
      </p>
      <img src={picture2} width={300}/>
      <p>Równanie to jest słuszne jedynie w zastosowaniu do cieczy nieskończenie rozciągłych, tzn. 
znajdujących się w bardzo szerokich naczyniach. Jeżeli kulka spada w rurze cylindrycznej o 
promieniu R, występujące wówczas wpływy ścianek zmniejszają prędkość spadania i należy 
wprowadzić czynnik korekcyjny zależny od stosunku r/R.
Otrzymujemy wówczas skorygowany wzór:</p>
<img src={picture3} width={300}/>
  </div>
      
      <div className="section">
        <h2>Aplikacja webowa do wyznaczania lepkości cieczy</h2>
        <p>
          Aplikacja webowa do wyznaczania lepkości cieczy (za pomocą prawa
          Stokesa) wykorzystuje ten właśnie wzór. Do wyznaczania lepkości cieczy
          aplikacja wymaga od użytkownika podania następujących danych:
        </p>
        <ul>
          <li>średnica kulek</li>
          <li>masa kulek</li>
          <li>czas, przez jaki kula porusza się w cieczy</li>
          <li>długość przebytej drogi</li>
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
      <div>
      <h2>Instrukcja korzystania ze śruby mikrometrycznej</h2>
      <p>
        Śruba mikrometryczna jest narzędziem służącym do precyzyjnego pomiaru odległości.
        Poniżej znajdziesz instrukcję korzystania z tego narzędzia.
      </p>
      <ol>
        <li>
          <strong>Umieść przedmiot pod śrubą:</strong> Postaw przedmiot, którego chcesz dokładnie zmierzyć, pod śrubą mikrometryczną.
        </li>
        <li>
          <strong>Obróć rączkę śruby:</strong> Obracaj delikatnie rączkę śruby mikrometrycznej tak, aby jej nóżki delikatnie dotykały mierzonej powierzchni.
        </li>
        <li>
          <strong>Odczytaj pomiar:</strong> Korzystając z podziałki na śrubie mikrometrycznej oraz dodatkowej skali, dokładnie odczytaj wartość pomiaru.
        </li>
      </ol>
      <p>
        Pamiętaj, aby być precyzyjnym i dokładnym podczas dokręcania śruby. Unikaj nadmiernego nacisku, aby nie zniekształcić pomiaru.
      </p>
      <img src={picture4} />
    </div>
    </div>
  
  );
};

export default Theory;
