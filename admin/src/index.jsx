import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MuiThemeProvider from './context/MuiThemeProvider';
import LoadingBarProvider from './context/LoadingBarProvider';
import AuthProvider from './context/AuthProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MuiThemeProvider>
      <AuthProvider>
        <LoadingBarProvider>
          <App />
        </LoadingBarProvider>
      </AuthProvider>
    </MuiThemeProvider>
  </React.StrictMode>,
);

reportWebVitals();
