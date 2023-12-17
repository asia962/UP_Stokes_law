import { useState } from 'react';
import './App.css';
import NavigationBar from './components/navigation-bar/navigation-bar';
import UpLogo from './components/up-logo/up-logo';
import MainContent from './components/main-content/main-content';
import Footer from './components/footer/footer';

function App() {
  const [selectedMenuItem, setSelectedMenuItem] = useState<string>('Home');

  const handleMenuItemSelect = (selectedItem: string) => {
    setSelectedMenuItem(selectedItem);
  };

  return (
    <div className="App">
      <UpLogo />
      <NavigationBar onSelect={handleMenuItemSelect} />
      <MainContent selectedMenuItem={selectedMenuItem} />
      <Footer />
    </div>
  );
}

export default App;
