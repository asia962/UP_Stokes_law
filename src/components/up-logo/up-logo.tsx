import React from 'react';
import './up-logo.css';
import upLogo from '../../assets/up_logo.png'

const UpLogo: React.FC = () => {

  return (
    <div id="up-logo">
      <div>
        <img src={upLogo} alt="Logo UP" width={150}/>
      </div>
      
      <div style={{}}>
        <div className="bold-font">
          UNIWERSYTET
          <br />
          PEDAGOGICZNY
          <br />
        </div>
        <div className="normal-font">
          IM. KOMISJI EDUKACJI
          <br />
          NARODOWEJ W KRAKOWIE
        </div>
      </div>

      <div className="stokes-title">
        Wyznaczanie współczynnika lepkości metodą Stokesa
      </div>

    </div>
  );
};

export default UpLogo;