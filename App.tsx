import { PDFViewer } from '@react-pdf/renderer';
import * as React from 'react';
import Document from './Document';
import './style.css';

export default function App() {
  return (
    <div>
      <PDFViewer width="800" height="800">
        <Document />
      </PDFViewer>
    </div>
  );
}
