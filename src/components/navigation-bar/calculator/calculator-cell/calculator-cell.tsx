import React from 'react';
import './calculator-cell.css';

type CalculatorCellProps = {
  name: string;
  label: string;
  value: number;
  onChange: (cellName: string, newValue: number) => void;
};

const CalculatorCell: React.FC<CalculatorCellProps> = ({ name, label, value, onChange }) => {
  // Use a state to manage the input value as a string
  const [inputValue, setInputValue] = React.useState(value.toString());

  React.useEffect(() => {
    setInputValue(value.toString());
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue); // Update the input value as a string
    const numberValue = newValue === '' ? 0 : parseFloat(newValue);
    onChange(name, numberValue); // Parse it to number and send it to the parent
  };

  return (
    <div className="calculator-cell">
      <p className="calculator-cell-label">{label}</p>
      <input
        className="calculator-cell-input"
        type="text" // Changed to text to handle the decimal input correctly
        value={inputValue}
        onChange={handleChange}
      />
    </div>
  );
}

export default CalculatorCell;