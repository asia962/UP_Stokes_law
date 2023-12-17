import React from 'react';
import './navigation-bar.css';

const NavigationBar: React.FC<{ onSelect: (selectedItem: string) => void }> = ({ onSelect }) => {
  const menuItems = ['Teoria', 'Instrukcja', 'Animacja', 'Kalkulator', 'Bibliografia'];
  
  const handleItemClick = (item: string) => {
    onSelect(item);
  };

  return (
    <div id="navigation-bar">
      <div className="navigation-bar-cell" onClick={() => handleItemClick(menuItems[0])}>Teoria</div>
      <div className="navigation-bar-cell" onClick={() => handleItemClick(menuItems[1])}>Instrukcja</div>
      <div className="navigation-bar-cell" onClick={() => handleItemClick(menuItems[2])}>Animacja</div>
      <div className="navigation-bar-cell" onClick={() => handleItemClick(menuItems[3])}>Kalkulator</div>
      <div className="navigation-bar-cell" onClick={() => handleItemClick(menuItems[4])}>Bibliografia</div>
    </div>
  );
};

export default NavigationBar;