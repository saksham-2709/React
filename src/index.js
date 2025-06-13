import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// Correct: Import named export hotjar
import { hotjar } from '@hotjar/browser';

// Initialize Hotjar only in production (or wherever you want)
if (process.env.NODE_ENV === 'production') {
  const siteId = 6434277;      // your Hotjar site ID
  const hotjarVersion = 6;     // usually snippet version
  hotjar.initialize(siteId, hotjarVersion);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
