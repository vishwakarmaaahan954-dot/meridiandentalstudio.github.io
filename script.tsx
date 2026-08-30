import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './react/App';

/**
 * ==============================================================================
 * MERIDIAN DENTAL STUDIO — REACT ENTRY POINT (script.tsx)
 * ==============================================================================
 * This is the root TypeScript/React entry file. If you are using a React bundler
 * (such as Vite or Next.js), this script mounts the App component into the #root DOM node.
 */

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.info(
    'Note: #root element not found in DOM. The website is currently running via the static ES module entry (js/main.js).'
  );
}
