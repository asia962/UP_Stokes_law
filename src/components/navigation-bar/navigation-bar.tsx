import React, { useState } from "react";
import "./navigation-bar.css";

const NavigationBar: React.FC<{ onSelect: (selectedItem: string) => void }> = ({
  onSelect: renderComponent,
}) => {
  const menuItems = [
    "Teoria",
    "Instrukcja",
    "Animacja",
    "Kalkulator",
    "Bibliografia",
  ];
  const [selectedItem, setSelectedItem] = useState<string>(menuItems[0]);

  const handleItemClick = (selectedComponent: string) => {
    setSelectedItem(selectedComponent);
    renderComponent(selectedComponent);
  };

  return (
    <div id="navigation-bar">
      {menuItems.map((item) => (
        <div
          key={item}
          className={`navigation-bar-cell ${item === selectedItem ? 'selected' : ''}`}
          onClick={() => handleItemClick(item)}
        >
          <p>{item}</p>
        </div>
      ))}
    </div>
  );
};

export default NavigationBar;
