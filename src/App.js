import React from 'react';
import ReactDOM from 'react-dom';
import { PDFViewer } from '@react-pdf/renderer';
import MyDocument from './components/MyDocument';

const App = () => (
  <PDFViewer style={{ width: '100%', height: '100vh' }}>
    <MyDocument />
  </PDFViewer>
);

export default App;
