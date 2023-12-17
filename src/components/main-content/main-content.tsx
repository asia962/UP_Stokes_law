import Theory from '../theory/theory';
import './main-content.css';

interface MainContentProps {
  selectedMenuItem: string;
}

const MainContent: React.FC<MainContentProps> = ({ selectedMenuItem }) => {
  const renderContent = () => {
    switch (selectedMenuItem) {
      case 'Teoria':
        return <div><Theory /></div>;
      case 'Instrukcja':
        return <div>Instrukcja</div>;
      case 'Animacja':
        return <div>Animacja</div>;
      case 'Kalkulator':
        return <div>Kalkulator</div>;
      case 'Bibliografia':
        return <div>Bibliografia</div>;
      default:
        return <div>Teoria</div>;
    }
  };

  return <div id="main-content">{renderContent()}</div>;
};

export default MainContent;