import Instructions from '../instructions/instructions';
import Theory from '../theory/theory';
import Animation from '../animation/animation'
import Bibliography from '../bibliography/bibliography';
import Calculator from '../calculator/calculator';
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
        return <div><Instructions /></div>;
      case 'Animacja':
        return <div><Animation /></div>;
      case 'Kalkulator':
        return <div><Calculator /></div>;
      case 'Bibliografia':
        return <div><Bibliography /></div>;
      default:
        return <div><Theory /></div>;
    }
  };

  return (
    (<div id="main-content">{renderContent()}</div>)
  );
};

export default MainContent;