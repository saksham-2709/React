import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// ✅ Import Hotjar
import { init } from '@hotjar/browser';

// ✅ Initialize Hotjar in production only
if (process.env.NODE_ENV === 'production') {
  const siteId = 6434277;          // 🔁 Use your real site ID from Hotjar
  const hotjarVersion = 6;
  init(siteId, hotjarVersion);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
