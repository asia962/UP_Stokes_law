import React from 'react';
import './up-logo.css';
import upLogo from '../../assets/up_logo.png'

const UpLogo: React.FC = () => {

  return (
    <div id="up-logo">
      <div>
        <img src={upLogo} alt="Logo UP" width={150}/>
      </div>

      <div className="stokes-title">
        Wyznaczanie współczynnika lepkości metodą Stokesa
      </div>

    </div>
  );
};

export default UpLogo;