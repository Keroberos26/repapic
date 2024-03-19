import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import MuiProvider from './contexts/MuiProvider';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <MuiProvider>
      <App />
    </MuiProvider>
  </React.StrictMode>,
);
