import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { init } from '@hotjar/browser';

if (process.env.NODE_ENV === 'production') {
  const siteId = 6434277;
  const hotjarVersion = 6;
  init(siteId, hotjarVersion);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
