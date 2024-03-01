import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MuiThemeProvider from './context/MuiThemeProvider';
import LoadingBarProvider from './context/LoadingBarProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MuiThemeProvider>
      <LoadingBarProvider>
        <App />
      </LoadingBarProvider>
    </MuiThemeProvider>
  </React.StrictMode>,
);

reportWebVitals();
