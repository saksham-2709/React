import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import hotjar from '@hotjar/browser';

if (process.env.NODE_ENV === 'production') {
  hotjar.initialize(6434277, 6); // Replace with your Hotjar site ID and version
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
