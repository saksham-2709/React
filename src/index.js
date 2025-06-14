import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// ✅ Correct import for Hotjar
import * as hotjar from '@hotjar/browser';

// ✅ Call only in production
if (process.env.NODE_ENV === 'production') {
  hotjar.init(6434277, 6);  // Replace with your real Site ID and Version
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
