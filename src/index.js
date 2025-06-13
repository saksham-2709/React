import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { init } from '@hotjar/browser';

if (process.env.NODE_ENV === 'production') {
  init(6434277, 6);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
