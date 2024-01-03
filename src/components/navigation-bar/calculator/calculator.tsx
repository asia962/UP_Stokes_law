import React, { useState } from 'react';
import { Page, Text, View, Document, StyleSheet, PDFViewer, PDFDownloadLink, pdf } from '@react-pdf/renderer';
import "./calculator.css";
import CalculatorCell from "./calculator-cell/calculator-cell";
import ReactPDF from '@react-pdf/renderer';
import ReactDOM from 'react-dom';

type CalculatorValues = {
  m1: number;
  m2: number;
  R: number;
  h: number;
  Pp: number;
  r1: number;
  r2: number;
  r3: number;
  r4: number;
  r5: number;
  r6: number;
  r7: number;
  r8: number;
  r9: number;
  r10: number;
  t1: number;
  t2: number;
  t3: number;
  t4: number;
  t5: number;
  t6: number;
  t7: number;
  t8: number;
  t9: number;
  t10: number;
};

const Calculator: React.FC = () => {
  const [result, setResult] = useState<number | null>(null);
  const [values, setValues] = useState<CalculatorValues>({
    // m1: 0,
    // m2: 0,
    // R: 0,
    // h: 0,
    // Pp: 0,
    // r1: 0,
    // r2: 0,
    // r3: 0,
    // r4: 0,
    // r5: 0,
    // r6: 0,
    // r7: 0,
    // r8: 0,
    // r9: 0,
    // r10: 0,
    // t1: 0,
    // t2: 0,
    // t3: 0,
    // t4: 0,
    // t5: 0,
    // t6: 0,
    // t7: 0,
    // t8: 0,
    // t9: 0,
    // t10: 0
    m1: 0.00026,
    m2: 0.001252,
    R: 0.0232,
    h: 0.266,
    Pp: 1230,
    r1: 0.00173,
    r2: 0.001655,
    r3: 0.001235,
    r4: 0.001725,
    r5: 0.00152,
    r6: 0.001245,
    r7: 0.00173,
    r8: 0.001525,
    r9: 0.00173,
    r10: 0.001225,
    t1: 12.84,
    t2: 12.57,
    t3: 12.42,
    t4: 12.42,
    t5: 12.74,
    t6: 18.26,
    t7: 17.53,
    t8: 11.89,
    t9: 17.71,
    t10: 12.51
  });

  function handleCellChange(cellName: string, newValue: number): void {
    setValues((prevValues) => ({
      ...prevValues,
      [cellName]: newValue,
    }));
  }

  function calculate(): void {
    if (anyValueIsEmpty()) {
      alert("Aby obliczyć wynik wypełnij wszystkie pola");
      return;
    }

    const avgM: number = (values.m2 - values.m1) / 10;
    const avgR: number = calculateAverageByKeyPrefix('r');
    const avgT: number = calculateAverageByKeyPrefix('t');
    const g: number = 9.81;

    const result = ((avgM - 4/3 * Math.PI * Math.pow(avgR, 3) * values.Pp) * g * avgT) / (6 * Math.PI * avgR * values.h * (1 + 2.4 * (avgR/0.0251)))
    setResult(parseFloat(result.toFixed(3)));
  }

  function calculateAverageByKeyPrefix(keyPrefix: string): number {
    const keys = Object.keys(values).filter(key => key.startsWith(keyPrefix));
    const sum = keys.reduce((acc, key) => acc + values[key as keyof typeof values], 0);
    return keys.length > 0 ? sum / keys.length : 0;
  }

  const pdfStyles = StyleSheet.create({
    page: {
      flexDirection: 'column',
      backgroundColor: '#E4E4E4',
      padding: 10,
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
    },
    title: {
      fontSize: 24,
      fontWeight: 500,
      textAlign: 'center',
      marginBottom: 20,
    },
    text: {
      fontSize: 13,
      marginBottom: 10,
      marginLeft: 10
    },
    subtitle: {
      fontSize: 18,
      margin: 10,
    },
    break: {
      margin: 5,
    },
  });

  const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: '#E4E4E4'
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1
    }
  });

  type MyDocumentProps = {
    values: CalculatorValues;
    result: number | null;
    conclusions: string;
  };

  const MyDocument: React.FC<MyDocumentProps> = ({ values, result, conclusions }) => (
    <Document>
      <Page size="A4" style={pdfStyles.page}>
        <View style={pdfStyles.section}>
          <Text style={pdfStyles.title}>Pomiaru lepkosci cieczy metoda Stokesa</Text>
  
          {/* Tytuł "Dane ogólne" */}
          <Text style={pdfStyles.subtitle}>Dane ogólne:</Text>
          <Text style={pdfStyles.text}>Masa naczynia bez kulek m1 [kg]: {values.m1} kg</Text>
          <Text style={pdfStyles.text}>Masa naczynia bez kulek m2 [kg]: {values.m2} kg</Text>
          <Text style={pdfStyles.text}>Srednica cylindra R [m]: {values.R} m</Text>
          <Text style={pdfStyles.text}>Zakres pomiaru opadania kulki h [m]: {values.h} m</Text>
          <Text style={pdfStyles.text}>Gestosc badanej cieczy Pp [kg/m3]: {values.Pp} kg/m³</Text>
  
          {/* Przerwa */}
          <Text style={pdfStyles.break}></Text>
  
          {/* Tytuł "Pomiary promienia" */}
          <Text style={pdfStyles.subtitle}>Pomiary promienia:</Text>
          <Text style={pdfStyles.text}>Promien kulki r1: {values.r1}</Text>
          <Text style={pdfStyles.text}>Promien kulki r2: {values.r2}</Text>
          <Text style={pdfStyles.text}>Promien kulki r3: {values.r3}</Text>
          <Text style={pdfStyles.text}>Promien kulki r4: {values.r4}</Text>
          <Text style={pdfStyles.text}>Promien kulki r5: {values.r5}</Text>
          <Text style={pdfStyles.text}>Promien kulki r6: {values.r6}</Text>
          <Text style={pdfStyles.text}>Promien kulki r7: {values.r7}</Text>
          <Text style={pdfStyles.text}>Promien kulki r8: {values.r8}</Text>
          <Text style={pdfStyles.text}>Promien kulki r9: {values.r9}</Text>
          <Text style={pdfStyles.text}>Promien kulki r10: {values.r10}</Text>
          {/* ... Reszta pomiarów promieni kulki r3 do r10 ... */}
  
          {/* Przerwa */}
          <Text style={pdfStyles.break}></Text>
  
          {/* Tytuł "Pomiary czasu" */}
          <Text style={pdfStyles.subtitle}>Pomiary czasu:</Text>
          <Text style={pdfStyles.text}>Czas opadania kulki t1: {values.t1}</Text>
          <Text style={pdfStyles.text}>Czas opadania kulki t2: {values.t2}</Text>
          <Text style={pdfStyles.text}>Czas opadania kulki t3: {values.t3}</Text>
          <Text style={pdfStyles.text}>Czas opadania kulki t4: {values.t4}</Text>
          <Text style={pdfStyles.text}>Czas opadania kulki t5: {values.t5}</Text>
          <Text style={pdfStyles.text}>Czas opadania kulki t6: {values.t6}</Text>
          <Text style={pdfStyles.text}>Czas opadania kulki t7: {values.t7}</Text>
          <Text style={pdfStyles.text}>Czas opadania kulki t8: {values.t8}</Text>
          <Text style={pdfStyles.text}>Czas opadania kulki t9: {values.t9}</Text>
          <Text style={pdfStyles.text}>Czas opadania kulki t10: {values.t10}</Text>
  
          {/* Przerwa */}
          <Text style={pdfStyles.break}></Text>
  
          {/* Tytuł "Wyniki" */}
          <Text style={pdfStyles.subtitle}>Wyniki:</Text>
          <Text style={pdfStyles.text}>Uzyskana lepkosc cieczy wynosi {result !== null ? result.toFixed(3) : 'N/A'} m²/s</Text>
          <Text style={pdfStyles.text}>Wnioski: {conclusions}</Text>
        </View>
      </Page>
    </Document>
  );

  const generatePdf = async () => {
    const conclusions = (document.querySelector('.conclusions') as HTMLInputElement).value;
    const doc = (
      <MyDocument values={values} result={result} conclusions={conclusions} />
    );
  
    const asBlob = await pdf(doc).toBlob();
    const url = URL.createObjectURL(asBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'sample.pdf';
    link.click();
    URL.revokeObjectURL(url);
  };

  function anyValueIsEmpty(): boolean {
    return values.m1 === 0 ||
         values.m2 === 0 ||
         values.R === 0 ||
         values.h === 0 ||
         values.Pp === 0 ||
         values.r1 === 0 ||
         values.r2 === 0 ||
         values.r3 === 0 ||
         values.r4 === 0 ||
         values.r5 === 0 ||
         values.r6 === 0 ||
         values.r7 === 0 ||
         values.r8 === 0 ||
         values.r9 === 0 ||
         values.r10 === 0 ||
         values.t1 === 0 ||
         values.t2 === 0 ||
         values.t3 === 0 ||
         values.t4 === 0 ||
         values.t5 === 0 ||
         values.t6 === 0 ||
         values.t7 === 0 ||
         values.t8 === 0 ||
         values.t9 === 0 ||
         values.t10 === 0;
  }

  function resultsAreVisible(): boolean {
    return result != null;
  }

  return (
    <div className='calculator-container'>
      <div className="calculator-cell-title"><p>Dane ogólne</p></div>
      <div className="calculator-cell-container">
        <CalculatorCell name="m1" label="m1 [kg]" value={values.m1} onChange={handleCellChange} />
        <CalculatorCell name="m2" label="m2 [kg]" value={values.m2} onChange={handleCellChange} />
        <CalculatorCell name="R" label="R [m]" value={values.R} onChange={handleCellChange} />
        <CalculatorCell name="h" label="h [m]" value={values.h} onChange={handleCellChange} />
        <CalculatorCell name="Pp" label="ρp [kg/m3]" value={values.Pp} onChange={handleCellChange} />
      </div>
      
      <div className="calculator-cell-title"><p>Pomiary promienia kulek</p></div>
      <div className="calculator-cell-container">
        <CalculatorCell name="r1" label="r1 [m]" value={values.r1} onChange={handleCellChange} />
        <CalculatorCell name="r2" label="r2 [m]" value={values.r2} onChange={handleCellChange} />
        <CalculatorCell name="r3" label="r3 [m]" value={values.r3} onChange={handleCellChange} />
        <CalculatorCell name="r4" label="r4 [m]" value={values.r4} onChange={handleCellChange} />
        <CalculatorCell name="r5" label="r5 [m]" value={values.r5} onChange={handleCellChange} />
        <CalculatorCell name="r6" label="r6 [m]" value={values.r6} onChange={handleCellChange} />
        <CalculatorCell name="r7" label="r7 [m]" value={values.r7} onChange={handleCellChange} />
        <CalculatorCell name="r8" label="r8 [m]" value={values.r8} onChange={handleCellChange} />
        <CalculatorCell name="r9" label="r9 [m]" value={values.r9} onChange={handleCellChange} />
        <CalculatorCell name="r10" label="r10 [m]" value={values.r10} onChange={handleCellChange} />
      </div>

      <div className="calculator-cell-title"><p>Pomiary czasu opadania kulek</p></div>
      <div className="calculator-cell-container">
        <CalculatorCell name="t1" label="t1 [s]" value={values.t1} onChange={handleCellChange} />
        <CalculatorCell name="t2" label="t2 [s]" value={values.t2} onChange={handleCellChange} />
        <CalculatorCell name="t3" label="t3 [s]" value={values.t3} onChange={handleCellChange} />
        <CalculatorCell name="t4" label="t4 [s]" value={values.t4} onChange={handleCellChange} />
        <CalculatorCell name="t5" label="t5 [s]" value={values.t5} onChange={handleCellChange} />
        <CalculatorCell name="t6" label="t6 [s]" value={values.t6} onChange={handleCellChange} />
        <CalculatorCell name="t7" label="t7 [s]" value={values.t7} onChange={handleCellChange} />
        <CalculatorCell name="t8" label="t8 [s]" value={values.t8} onChange={handleCellChange} />
        <CalculatorCell name="t9" label="t9 [s]" value={values.t9} onChange={handleCellChange} />
        <CalculatorCell name="t10" label="t10 [s]" value={values.t10} onChange={handleCellChange} />
      </div>
      
      <div className="legend">
        <p>Legenda:</p>
        <ul>
          <li>m<sub>1</sub> - masa pustego cylindra</li>
          <li>m<sub>2</sub> - masa cylindra z kulkami</li>
          <li>R - średnica cylindra</li>
          <li>h - zakres pomiaru opadania kulki</li>
          <li>ρ<sub>ρ</sub> - gęstość badanej cieczy</li>
          <li>r<sub>x</sub> - promień kulki <sub>x</sub></li>
          <li>t<sub>x</sub> - czas opadania kulki <sub>x</sub></li>
        </ul>
      </div>
      
      <div className="button-container">
        <button type="submit" onClick={calculate}>Oblicz</button>
      </div>

      {resultsAreVisible() && <div className='result-area'>
        <div className="result-container">
          <div className="calculator-cell-title"><p>Wynik</p></div>
          <p className="result">Uzyskana lepkość cieczy wynosi &#x2248; <b>{result} [m<sup>2</sup>/s]</b></p>
          <div className='conclusions-container'>
            <p>Wnioski:</p>
            <textarea className='conclusions' />
          </div>

        <div className="button-container">
          <button type="submit" onClick={generatePdf}>Wygeneruj plik PDF</button>
        </div>
      </div>
      </div>}

    </div>
  );
};

export default Calculator;
